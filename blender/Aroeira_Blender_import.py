"""Importar a maqueta aproximada da Aroeira e guardar uma copia .blend.
Executar dentro do Blender, depois de extrair TODO o ZIP do repositorio.
O OBJ original nao e alterado. Ver README.md para limitacoes e alteracoes.
"""
from pathlib import Path

import bpy
import bmesh
from mathutils import Vector


def project_root():
    """Resolver caminhos a partir do script aberto, nao da pasta de trabalho."""
    filename = globals().get("__file__")
    if not filename:
        text = getattr(bpy.context.space_data, "text", None)
        filename = getattr(text, "filepath", None)
    if not filename:
        raise RuntimeError("Abra blender/Aroeira_Blender_import.py a partir do disco.")
    root = Path(bpy.path.abspath(filename)).resolve().parent.parent
    for name in ("Aroeira_approx_model.obj", "Aroeira_approx_model.mtl"):
        if not (root / "model" / name).is_file():
            raise FileNotFoundError(f"Falta model/{name}. Extraia o ZIP completo: {root}")
    return root


def obj_importer(filepath):
    """Selecionar o importador existente e manter os eixos Y-frente/Z-cima."""
    try:
        operator = bpy.ops.wm.obj_import
        properties = operator.get_rna_type().properties.keys()
        options = dict(filepath=str(filepath), forward_axis="Y", up_axis="Z",
                       use_split_objects=False, use_split_groups=True)
    except (AttributeError, RuntimeError):
        operator = bpy.ops.import_scene.obj
        try:
            properties = operator.get_rna_type().properties.keys()
        except (AttributeError, RuntimeError) as exc:
            raise RuntimeError("O importador OBJ nao esta disponivel neste Blender.") from exc
        options = dict(filepath=str(filepath), axis_forward="Y", axis_up="Z",
                       use_split_objects=False, use_split_groups=True, split_mode="ON")
    return operator, {key: value for key, value in options.items() if key in properties}


def look_at(obj, target):
    obj.rotation_euler = (Vector(target) - obj.location).to_track_quat("-Z", "Y").to_euler()


def new_output_path(folder):
    folder.mkdir(parents=True, exist_ok=True)
    path = folder / "Aroeira_Blender.blend"
    index = 1
    while path.exists():
        path = folder / f"Aroeira_Blender_{index:03d}.blend"
        index += 1
    return path


def main():
    root = project_root()
    operator, options = obj_importer(root / "model" / "Aroeira_approx_model.obj")
    # Criar uma cena nova em vez de apagar os objetos da cena existente.
    bpy.ops.scene.new(type="NEW")
    scene = bpy.context.scene
    scene.name = "Aroeira - maqueta aproximada"
    result = operator(**options)
    if "FINISHED" not in result:
        raise RuntimeError(f"A importacao OBJ nao terminou: {result}")
    meshes = [obj for obj in scene.objects if obj.type == "MESH"]
    if not meshes:
        raise RuntimeError("O OBJ nao produziu objetos de malha.")
    for obj in meshes:
        # Corrigir apenas a orientacao das faces importadas, sem mover vertices.
        mesh = bmesh.new()
        try:
            mesh.from_mesh(obj.data)
            bmesh.ops.recalc_face_normals(mesh, faces=list(mesh.faces))
            mesh.to_mesh(obj.data)
        finally:
            mesh.free()
        obj.data.update()
        for face in obj.data.polygons:
            face.use_smooth = False
    scene.unit_settings.system = "METRIC"
    scene.unit_settings.scale_length = 1.0
    scene.unit_settings.length_unit = "METERS"

    bpy.ops.object.camera_add(location=(28, -28, 18))
    camera = bpy.context.object
    camera.name = "Camera_Aerial"
    camera.data.lens = 45
    look_at(camera, (6, -1, 2.5))
    scene.camera = camera

    bpy.ops.object.light_add(type="SUN", location=(0, 0, 20))
    sun = bpy.context.object
    sun.name = "Sun"
    sun.rotation_euler = (0.75, -0.35, -0.6)
    sun.data.energy = 3.0
    sun.data.angle = 0.08

    bpy.ops.object.light_add(type="AREA", location=(6, -8, 10))
    area = bpy.context.object
    area.name = "Area_Fill"
    area.data.energy = 900
    area.data.shape = "DISK"
    area.data.size = 8.0
    look_at(area, (6, -1, 2.0))

    scene.world = bpy.data.worlds.new("Aroeira_World")
    scene.world.use_nodes = True
    scene.world.node_tree.nodes.get("Background").inputs["Strength"].default_value = 0.35
    # O identificador EEVEE varia entre versoes: experimentar valores validos.
    for engine in ("BLENDER_EEVEE_NEXT", "BLENDER_EEVEE"):
        try:
            scene.render.engine = engine
            break
        except (TypeError, ValueError):
            continue
    scene.render.resolution_x = 1920
    scene.render.resolution_y = 1080
    scene.render.resolution_percentage = 100
    scene["Limitacao"] = "Maqueta volumetrica aproximada; nao e um levantamento metrico."
    output = new_output_path(root / "output")
    # Guardar uma copia; nao substituir ficheiros existentes nem o trabalho aberto.
    bpy.ops.wm.save_as_mainfile(filepath=str(output), check_existing=False, copy=True)
    print(f"Aroeira: {len(meshes)} malhas importadas. Copia guardada em {output}")


if __name__ == "__main__":
    main()
