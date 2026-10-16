'use strict';
let items = [], active = 'All';
const cards = document.querySelector('#cards'), count = document.querySelector('#count'), search = document.querySelector('#search');
function element(tag, cls, text) { const node = document.createElement(tag); if (cls) node.className = cls; if (text) node.textContent = text; return node; }
function render() {
  const query = search.value.trim().toLowerCase();
  const results = items.filter(item => (active === 'All' || item.type === active) && [item.title,item.description,item.label,item.type,item.date].join(' ').toLowerCase().includes(query));
  cards.replaceChildren(); count.textContent = `${results.length} ${results.length === 1 ? 'resource' : 'resources'}${active !== 'All' ? ' · ' + active : ''}`;
  if (!results.length) { cards.append(element('p','empty','No matches yet. Try another search or choose All content.')); return; }
  for (const item of results) {
    const card = element('article','card'), thumb = element('div','thumb');
    if (item.image) { const img = element('img'); img.src = item.image; img.alt = item.title + ' preview'; img.loading = 'lazy'; thumb.append(img); }
    else { thumb.classList.add('stream-thumb'); thumb.append(element('div','',item.thumbnailTitle || item.title),element('span','','MARKET MOVES · REPLAY')); }
    const body = element('div','card-body'), meta = element('div','meta'); meta.append(element('span','',item.label));
    if (item.date) { const date = element('time','',new Date(item.date+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})); date.dateTime = item.date; meta.append(date); }
    body.append(meta,element('h3','',item.title),element('p','',item.description),element('p','note',item.note));
    const links = element('div','card-links');
    for (const [label,url] of item.links) { const a = element('a','',label + ' ↗'); a.href = url; if(url.startsWith('https://')) { a.target='_blank'; a.rel='noopener noreferrer'; } links.append(a); }
    body.append(links); card.append(thumb,body); cards.append(card);
  }
}
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click',() => { active = button.dataset.filter; document.querySelectorAll('[data-filter]').forEach(b => {b.classList.toggle('active', b === button); b.setAttribute('aria-pressed',String(b === button));}); render(); }));
search.addEventListener('input',render);
fetch('content.json').then(response => {if(!response.ok) throw new Error('Content unavailable'); return response.json();}).then(data => {items = data; render();}).catch(() => {count.textContent = 'The library could not load. Please refresh the page.'; cards.append(element('p','empty','You can still watch the featured stream above.'));});
