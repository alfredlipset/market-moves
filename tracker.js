'use strict';
(() => {
  function revealTracker() {
    const id=location.hash.slice(1);
    if(!['open-trades','chaikin'].includes(id))return;
    const section=document.getElementById(id);
    section.querySelector('details').open=true;
  }
  window.addEventListener('hashchange',revealTracker);
  document.querySelectorAll('a[href="#open-trades"],a[href="#chaikin"]').forEach(a=>a.addEventListener('click',()=>{
    document.querySelector(a.getAttribute('href')+' details').open=true;
  }));
  revealTracker();
  const node = (tag, text, cls) => {const n = document.createElement(tag); if(text) n.textContent = text; if(cls) n.className = cls; return n;};
  const link = (label, url) => {const a=node('a',label); a.href=url; if(url.startsWith('https://')) {a.target='_blank';a.rel='noopener noreferrer';} return a;};
  const cell = (row, ...children) => {const td=node('td'); td.append(...children); row.append(td);};
  function empty(body, columns) {const tr=node('tr'), td=node('td','No matches. Try another search or filter.');td.colSpan=columns;tr.append(td);body.append(tr);}
  fetch('tracker.json').then(r=>{if(!r.ok)throw Error('Unavailable');return r.json();}).then(data=>{
    const tradeSearch=document.querySelector('#trade-search'), filter=document.querySelector('#trade-filter'), scanSearch=document.querySelector('#chaikin-search');
    function trades() {
      const q=tradeSearch.value.trim().toLowerCase(), body=document.querySelector('#trades-table tbody'); body.replaceChildren();
      const rows=data.trades.filter(r=>(filter.value==='all'||(filter.value==='review')===(r.status==='Needs confirmation'))&&JSON.stringify(r).toLowerCase().includes(q));
      document.querySelector('#trade-count').textContent=`${rows.length} tracked position records · ${rows.filter(r=>r.status==='Needs confirmation').length} need confirmation`;
      for(const r of rows) {
        const tr=node('tr');
        cell(tr,node('strong',r.ticker),node('span',r.strategy,'cell-detail'));
        cell(tr,node('span',r.quantity)); cell(tr,node('span',r.entry));
        cell(tr,node('span',r.status,r.status==='Needs confirmation'?'status-pill review':'status-pill'),node('time',r.date,'cell-detail'));
        const details=node('div',r.note); if(r.source)details.append(link('Stream notes ↗',r.source));
        for(const [label,url] of r.links)details.append(link(label+' ↗',url));
        cell(tr,details);body.append(tr);
      }
      if(!rows.length)empty(body,5);
    }
    function scan() {
      const q=scanSearch.value.trim().toLowerCase(),body=document.querySelector('#chaikin-table tbody'); body.replaceChildren();
      const rows=data.chaikin.rows.filter(r=>JSON.stringify(r).toLowerCase().includes(q));
      document.querySelector('#chaikin-count').textContent=`${rows.length} exact matches · scan October 12, 2026`;
      for(const r of rows) {
        const tr=node('tr');cell(tr,link(r.symbol+' ↗',r.url));cell(tr,node('strong',r.rating),node('span',r.entry,'cell-detail'));cell(tr,node('span',r.strength+'/3'));cell(tr,node('span',r.timing+'/3'));cell(tr,node('span',r.trend+' trend'),node('span',r.flow+' flow','cell-detail'));cell(tr,node('span',r.marketCap));
        const gaps=[['relative','relative strength'],['industryStrength','industry'],['trend','trend'],['flow','money flow']].filter(([key])=>r[key]!=='Strong').map(([key,label])=>r[key]+' '+label);
        cell(tr,node('span',gaps.length?gaps.join('; '):'None in captured checklist'));body.append(tr);
      }
      if(!rows.length)empty(body,7);
    }
    tradeSearch.addEventListener('input',trades);filter.addEventListener('change',trades);scanSearch.addEventListener('input',scan);trades();scan();
  }).catch(()=>{for(const id of ['trade-count','chaikin-count'])document.getElementById(id).textContent='Tables could not load. Please refresh to retry.';});
})();
