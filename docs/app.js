/* Página estática: nenhuma chamada a serviços externos. */
(() => {
  'use strict';
  const data = window.IAAA_CASES || [];
  const media = window.IAAA_MEDIA || {};
  const $ = id => document.getElementById(id);
  let current = data[0], filter = 'Todos', mode = 'split', toastTimer, dragging = false;
  const missing = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#e8e6dd"/><text x="400" y="290" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#58665f">Imagem no ficheiro media.js</text></svg>');
  const imageURL = key => media[key] || missing;
  const text = (id, value) => { $(id).textContent = value; };
  function notice(message) {
    text('status', message); $('status').classList.add('visible');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => $('status').classList.remove('visible'), 3300);
  }
  function image(element, key, alt) {
    element.src = imageURL(key); element.alt = alt;
  }
  function visibleCases() { return data.filter(c => filter === 'Todos' || c.group === filter); }
  function syncFilter() {
    document.querySelectorAll('[data-filter]').forEach(b => {
      const active = b.dataset.filter === filter;
      b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active));
    });
  }
  function rail() {
    $('case-rail').replaceChildren();
    visibleCases().forEach(c => {
      const button = document.createElement('button'); button.className = 'case-card';
      button.dataset.case = c.id; button.setAttribute('aria-label', `${c.number}. ${c.title}`);
      const img = document.createElement('img'); img.loading = 'lazy'; image(img, c.after, `Output IA — ${c.title}`);
      const label = document.createElement('span'); label.className = 'card-label'; label.textContent = `${c.number} / ${c.group.toUpperCase()}`;
      const title = document.createElement('strong'); title.textContent = c.title;
      button.append(img, label, title); button.addEventListener('click', () => select(c.id));
      $('case-rail').append(button);
    });
  }
  function setMode(value) {
    mode = value; $('split-view').hidden = mode !== 'split'; $('overlay-view').hidden = mode !== 'overlay';
    document.querySelectorAll('[data-mode]').forEach(b => {
      const active = b.dataset.mode === mode;
      b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active));
    });
  }
  function setRange(value) {
    value = Math.round(Math.max(0, Math.min(100, value)));
    $('compare-range').value = value; $('compare-stage').style.setProperty('--split', `${value}%`);
    text('range-value', `${value}%`);
  }
  function zoom(key, title) {
    image($('lightbox-image'), key, title); text('lightbox-title', title);
    $('lightbox').showModal();
  }
  function select(id, updateHash = true) {
    const c = data.find(item => item.id === id); if (!c) return;
    current = c;
    if (filter !== 'Todos' && filter !== c.group) { filter = c.group; syncFilter(); rail(); }
    text('case-kicker', `ETAPA ${c.number} · ${c.group.toUpperCase()} · ${c.date.toUpperCase()}`);
    text('case-title', c.title); text('case-subtitle', c.subtitle); text('case-type', c.type);
    text('before-label', c.beforeLabel); text('after-label', c.afterLabel);
    image($('before-image'), c.before, c.beforeLabel + ' — ' + c.title);
    image($('after-image'), c.after, c.afterLabel + ' — ' + c.title);
    image($('overlay-before'), c.before, c.beforeLabel); image($('overlay-after'), c.after, c.afterLabel);
    ['intent', 'observed', 'caution'].forEach(key => text(key, c[key]));
    text('prompt-text', c.prompt); text('prompt-date', c.date); text('source-text', c.source); text('output-file', c.output);
    $('specs').replaceChildren();
    c.specs.forEach(([key, value]) => {
      const row = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd');
      dt.textContent = key; dd.textContent = value; row.append(dt, dd); $('specs').append(row);
    });
    $('refs-block').hidden = !c.refs.length; $('reference-grid').replaceChildren();
    c.refs.forEach(([key, label]) => {
      const b = document.createElement('button'), img = document.createElement('img'), caption = document.createElement('span');
      b.setAttribute('aria-label', `Ampliar ${label}`); image(img, key, label + ' — documento de referência da Aroeira');
      caption.textContent = label + ' ↗'; b.append(img, caption); b.addEventListener('click', () => zoom(key, label + ' · CSF Arquitectos Associados · Setembro de 2003'));
      $('reference-grid').append(b);
    });
    document.querySelectorAll('.case-card').forEach(b => {
      const active = b.dataset.case === c.id; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active));
    });
    const list = visibleCases(), position = list.indexOf(c);
    text('case-count', `${c.number} / 09`); $('previous').disabled = position <= 0; $('next').disabled = position >= list.length - 1;
    setRange(50);
    if (updateHash) { try { history.replaceState(null, '', '#' + c.id); } catch (_) {} }
    $('case-detail').classList.remove('refresh'); void $('case-detail').offsetWidth; $('case-detail').classList.add('refresh');
  }
  document.querySelectorAll('[data-media]').forEach(img => image(img, img.dataset.media, img.alt));
  $('media-warning').hidden = !!Object.keys(media).length;
  if (!data.length) { notice('Não foi possível carregar content.js.'); return; }
  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
    filter = b.dataset.filter; syncFilter(); rail();
    select(visibleCases().some(c => c.id === current.id) ? current.id : visibleCases()[0].id);
  }));
  document.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
  ['previous', 'next'].forEach((id, index) => $(id).addEventListener('click', () => {
    const list = visibleCases(), c = list[list.indexOf(current) + (index ? 1 : -1)];
    if (c) { select(c.id); const button = document.querySelector(`[data-case="${c.id}"]`); if (button) $('case-rail').scrollTo({left:button.offsetLeft - $('case-rail').offsetLeft - 12,behavior:'smooth'}); }
  }));
  $('compare-range').addEventListener('input', e => setRange(e.target.value));
  const stage = $('compare-stage');
  const drag = e => { const rect = stage.getBoundingClientRect(); setRange((e.clientX - rect.left) * 100 / rect.width); };
  stage.addEventListener('pointerdown', e => { dragging = true; stage.setPointerCapture(e.pointerId); drag(e); });
  stage.addEventListener('pointermove', e => { if (dragging) drag(e); });
  stage.addEventListener('pointerup', () => dragging = false); stage.addEventListener('pointercancel', () => dragging = false);
  document.querySelectorAll('[data-zoom]').forEach(b => b.addEventListener('click', () => {
    const before = b.dataset.zoom === 'before'; zoom(before ? current.before : current.after, `${current.number} · ${before ? current.beforeLabel : current.afterLabel}`);
  }));
  $('close-lightbox').addEventListener('click', () => $('lightbox').close());
  $('lightbox').addEventListener('click', e => { if (e.target === $('lightbox')) $('lightbox').close(); });
  $('copy-prompt').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(current.prompt); notice('Prompt original copiado.'); }
    catch (_) {
      const field = document.createElement('textarea'); field.value = current.prompt; field.style.position = 'fixed'; field.style.top = '-9999px';
      document.body.append(field); field.select(); const ok = document.execCommand('copy'); field.remove();
      notice(ok ? 'Prompt original copiado.' : 'Seleciona o texto do prompt para o copiar.');
    }
  });
  $('download-prompts').addEventListener('click', () => {
    const body = 'IAAA — EXERCÍCIO 02\nDO TRAÇO À IMAGEM\n\nPrompts transcritos da conversa, sem correção da ortografia.\n\n' + data.map(c => `${c.number} — ${c.title}\n${c.date} | ${c.subtitle}\n\nFONTE\n${c.source}\n\nPROMPT ORIGINAL\n${c.prompt}\n\nOUTPUT\n${c.output}\n\nLEITURA DO PEDIDO\n${c.intent}\n\nO QUE SE OBSERVA\n${c.observed}\n\nA VALIDAR\n${c.caution}`).join('\n\n' + '—'.repeat(55) + '\n\n');
    const url = URL.createObjectURL(new Blob(['\uFEFF', body], {type:'text/plain;charset=utf-8'}));
    const a = document.createElement('a'); a.href = url; a.download = 'IAAA_prompts_e_fontes.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  });
  function fromHash(scroll) {
    const id = location.hash.slice(1); if (!data.some(c => c.id === id)) return false;
    select(id, false); if (scroll) $('comparar').scrollIntoView({behavior:'smooth'}); return true;
  }
  window.addEventListener('hashchange', () => fromHash(true));
  rail(); if (!fromHash(false)) select(data[0].id, false); setMode('split');
})();
