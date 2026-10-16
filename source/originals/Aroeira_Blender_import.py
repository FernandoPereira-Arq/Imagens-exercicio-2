
import bpy
from pathlib import Path

# --- paths ---
base = Path(__file__).resolve().parent
obj_path = base / "Aroeira_approx_model.obj"

# --- reset scene ---
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# --- import OBJ ---
# Blender 4.x
try:
    bpy.ops.wm.obj_import(filepath=str(obj_path))
except Exception:
    # Blender 3.x fallback
    bpy.ops.import_scene.obj(filepath=str(obj_path))

# --- organize imported objects ---
for obj in bpy.context.scene.objects:
    if obj.type == 'MESH':
        obj.select_set(True)

# smooth only where sensible
for obj in bpy.context.selected_objects:
    if obj.type == 'MESH':
        for p in obj.data.polygons:
            p.use_smooth = False

# --- world / units ---
scene = bpy.context.scene
scene.unit_settings.system = 'METRIC'
scene.unit_settings.length_unit = 'METERS'

# --- ground material tweak if available ---
for mat in bpy.data.materials:
    mat.use_nodes = True

# --- camera ---
bpy.ops.object.camera_add(location=(28, -28, 18))
cam = bpy.context.object
cam.name = "Camera_Aerial"
scene.camera = cam

def look_at(obj, target):
    import mathutils
    direction = mathutils.Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()

look_at(cam, (6, -1, 2.5))
cam.data.lens = 45

# --- sun ---
bpy.ops.object.light_add(type='SUN', location=(0,0,20))
sun = bpy.context.object
sun.name = "Sun"
sun.rotation_euler = (0.75, -0.35, -0.6)
sun.data.energy = 3.0
sun.data.angle = 0.08

# --- area fill light ---
bpy.ops.object.light_add(type='AREA', location=(6, -8, 10))
area = bpy.context.object
area.name = "Area_Fill"
area.data.energy = 900
area.data.shape = 'DISK'
area.data.size = 8.0
look_at(area, (6, -1, 2.0))

# --- render defaults ---
scene.render.engine = 'BLENDER_EEVEE_NEXT' if hasattr(bpy.types, "BLENDER_EEVEE_NEXT") else 'BLENDER_EEVEE'
scene.render.resolution_x = 1920
scene.render.resolution_y = 1080
scene.render.resolution_percentage = 100

# save blend
blend_path = base / "Aroeira_Blender.blend"
bpy.ops.wm.save_as_mainfile(filepath=str(blend_path))
print(f"Saved Blender file to: {blend_path}")
