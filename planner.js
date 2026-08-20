const SKILLS=[{"id":"rapid","name":"Rapid Production","lv":1,"max":5,"tier":"A","videoRec":3,"branch":"main","prereq":null,"icon":"images/icons/rapid_production.png","detail":"images/details/rapid_production.jpeg","note":""},{"id":"outstanding","name":"Outstanding Contribution","lv":1,"max":1,"tier":"S","videoRec":1,"branch":"main","prereq":null,"icon":"images/icons/outstanding_contribution.png","detail":"images/details/outstanding_contribution.jpeg","note":""},{"id":"combat","name":"Combat Experience","lv":1,"max":3,"tier":"S+","videoRec":3,"branch":"season","prereq":null,"icon":"images/icons/combat_experience.png","detail":"images/details/combat_experience.jpeg","note":""},{"id":"meal","name":"Extra Meal","lv":5,"max":1,"tier":"A","videoRec":1,"branch":"main","prereq":null,"icon":"images/icons/extra_meal.png","detail":"images/details/extra_meal.jpeg","note":""},{"id":"siege_mastery","name":"Siege Mastery","lv":5,"max":5,"tier":"A","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/siege_mastery.png","detail":"images/details/siege_mastery.jpeg","note":""},{"id":"buildfree","name":"Build for Free","lv":10,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/build_for_free.png","detail":"images/details/build_for_free.jpeg","note":""},{"id":"researchfree","name":"Research for Free","lv":10,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/research_for_free.png","detail":"images/details/research_for_free.jpeg","note":""},{"id":"building_insp","name":"Building Inspiration I","lv":10,"max":3,"tier":"S+","videoRec":3,"branch":"season","prereq":"combat","icon":"images/icons/building_inspiration_i.png","detail":"images/details/building_inspiration_i.jpeg","note":""},{"id":"buildnow","name":"Build Now","lv":15,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/build_now.png","detail":"images/details/build_now.jpeg","note":""},{"id":"researchnow","name":"Research Now","lv":15,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/research_now.png","detail":"images/details/research_now.jpeg","note":""},{"id":"winter","name":"Winter Wonderland","lv":15,"max":1,"tier":"B","videoRec":0,"branch":"season","prereq":"building_insp","icon":"images/icons/winter_wonderland.png","detail":"images/details/winter_wonderland.jpeg","note":""},{"id":"rally","name":"Rally Rush","lv":20,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/rally_rush.png","detail":"images/details/rally_rush.jpeg","note":""},{"id":"banner","name":"Siege Banner","lv":20,"max":1,"tier":"A","videoRec":1,"branch":"main","prereq":null,"icon":"images/icons/siege_banner.png","detail":"images/details/siege_banner.jpeg","note":""},{"id":"siege_insp","name":"Siege Inspiration","lv":25,"max":3,"tier":"NEW","videoRec":null,"branch":"main","prereq":null,"icon":"images/icons/siege_inspiration.png","detail":"images/details/siege_inspiration.jpeg","note":"This current-game skill was not present in the supplied video tier-list screenshots, so it is intentionally marked NEW / unranked."},{"id":"friendly","name":"Friendly Aid","lv":25,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/friendly_aid.png","detail":"images/details/friendly_aid.jpeg","note":""},{"id":"double","name":"Double Exchange","lv":25,"max":3,"tier":"B","videoRec":0,"branch":"season","prereq":"winter","icon":"images/icons/double_exchange.png","detail":"images/details/double_exchange.jpeg","note":""},{"id":"coopbuild","name":"Cooperative Construction","lv":30,"max":2,"tier":"S","videoRec":2,"branch":"main","prereq":null,"icon":"images/icons/cooperative_construction.png","detail":"images/details/cooperative_construction.jpeg","note":""},{"id":"coopresearch","name":"Cooperative Research","lv":30,"max":2,"tier":"S","videoRec":2,"branch":"main","prereq":null,"icon":"images/icons/cooperative_research.png","detail":"images/details/cooperative_research.jpeg","note":""},{"id":"saving","name":"Resource-Saving","lv":35,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/resource_saving.png","detail":"images/details/resource_saving.jpeg","note":""},{"id":"recycling","name":"Recycling","lv":35,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/recycling.png","detail":"images/details/recycling.jpeg","note":""},{"id":"prof","name":"Professional Insights","lv":35,"max":5,"tier":"S+","videoRec":5,"branch":"season","prereq":"firebomb","icon":"images/icons/professional_insights.png","detail":"images/details/professional_insights.jpeg","note":""},{"id":"medical","name":"Medical Aid","lv":40,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/medical_aid.png","detail":"images/details/medical_aid.jpeg","note":""},{"id":"buddy","name":"Buddy Shield","lv":40,"max":3,"tier":"A","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/buddy_shield.png","detail":"images/details/buddy_shield.jpeg","note":""},{"id":"overdrive","name":"Intense Overdrive","lv":40,"max":3,"tier":"S","videoRec":2,"branch":"season","prereq":"prof","icon":"images/icons/intense_overdrive.png","detail":"images/details/intense_overdrive.jpeg","note":""},{"id":"drone","name":"Drone Supply","lv":45,"max":5,"tier":"B*","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/drone_supply.png","detail":"images/details/drone_supply.jpeg","note":"Video tier list shows this Lv.45 slot as \u2018Component Gains\u2019 (B / skip). The current game skill is Drone Supply with a different effect, so the old rating may not apply."},{"id":"fearless","name":"Fearless Defense","lv":45,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/fearless_defense.png","detail":"images/details/fearless_defense.jpeg","note":""},{"id":"warmth","name":"Gather for Warmth","lv":45,"max":1,"tier":"B","videoRec":0,"branch":"season","prereq":"overdrive","icon":"images/icons/gather_for_warmth.png","detail":"images/details/gather_for_warmth.jpeg","note":""},{"id":"visitors","name":"Random Visitors","lv":50,"max":1,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/random_visitors.png","detail":"images/details/random_visitors.jpeg","note":""},{"id":"mine","name":"Durability Mine","lv":50,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/durability_mine.png","detail":"images/details/durability_mine.jpeg","note":""},{"id":"firebomb","name":"Firebomb","lv":30,"max":3,"tier":"A","videoRec":3,"branch":"season","prereq":"double","icon":"images/icons/firebomb.png","detail":"images/details/firebomb.jpeg","note":""},{"id":"onemore","name":"One More","lv":55,"max":5,"tier":"S+","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/one_more.png","detail":"images/details/one_more.jpeg","note":""},{"id":"support","name":"Support Boost","lv":55,"max":5,"tier":"S+","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/support_boost.png","detail":"images/details/support_boost.jpeg","note":""},{"id":"frostbomb","name":"Frostbomb","lv":55,"max":3,"tier":"B","videoRec":0,"branch":"season","prereq":"firebomb","icon":"images/icons/frostbomb.png","detail":"images/details/frostbomb.jpeg","note":""},{"id":"gather","name":"Efficient Gathering","lv":60,"max":5,"tier":"A","videoRec":3,"branch":"main","prereq":null,"icon":"images/icons/efficient_gathering.png","detail":"images/details/efficient_gathering.jpeg","note":""},{"id":"firstaid","name":"First Aid Expert","lv":60,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/first_aid_expert.png","detail":"images/details/first_aid_expert.jpeg","note":""},{"id":"frostmine","name":"Frost Mine","lv":60,"max":3,"tier":"B","videoRec":0,"branch":"season","prereq":"frostbomb","icon":"images/icons/frost_mine.png","detail":"images/details/frost_mine.jpeg","note":""},{"id":"cleanup","name":"Battlefield Cleanup","lv":65,"max":5,"tier":"S","videoRec":3,"branch":"main","prereq":null,"icon":"images/icons/battlefield_cleanup.png","detail":"images/details/battlefield_cleanup.jpeg","note":""},{"id":"master","name":"Master Builder","lv":65,"max":5,"tier":"S+","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/master_builder.png","detail":"images/details/master_builder.jpeg","note":""},{"id":"instant","name":"Instant Gathering","lv":70,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/instant_gathering.png","detail":"images/details/instant_gathering.jpeg","note":""},{"id":"monster","name":"Monster Tracking","lv":70,"max":5,"tier":"A","videoRec":2,"branch":"main","prereq":null,"icon":"images/icons/monster_tracking.png","detail":"images/details/monster_tracking.jpeg","note":""}];
// Recommendation strategy:
// 1) Follow the video targets for the high-value skills.
// 2) Automatically buy the required 1-point green-branch prerequisites.
// 3) Add current-game Drone Supply as a priority.
// 4) Use common utility flex picks (1 Siege Mastery + 1 Buddy Shield) before lower-value filler.
// 5) If the player has additional points, spend them in a deterministic flex order so the
//    recommendation uses every available point (up to the total unlocked skill capacity).
const RECOMMEND_PLAN=[
  ['combat',3],['outstanding',1],['rapid',3],['meal',1],
  ['buildfree',5],['researchfree',5],['building_insp',3],
  ['buildnow',5],['researchnow',5],['banner',1],
  ['coopbuild',2],['coopresearch',2],
  ['prof',5],['overdrive',2],['firebomb',3],
  ['drone',5],['onemore',5],['support',5],
  ['gather',3],['cleanup',3],['master',5],['instant',5],['monster',2]
];

// These are deliberately separate from the video's tier recommendation. They are useful,
// popular utility choices and are used only when there are points left after the core plan.
const FLEX_PLAN=[
  ['siege_mastery',1],['buddy',1],['siege_insp',3],['rapid',5],
  ['saving',5],['recycling',5],['medical',5],['friendly',5],['fearless',5],
  ['visitors',1],['mine',5],['rally',5],['double',3],['winter',1],
  ['warmth',1],['frostbomb',3],['firstaid',5],['frostmine',3]
];

let mode='recommended';
let mine=JSON.parse(localStorage.getItem('lwEngineerMineV3')||'{}');
const $=s=>document.querySelector(s);
const level=$('#level'), points=$('#points');
const byId=Object.fromEntries(SKILLS.map(s=>[s.id,s]));
function targetBuild(){
 const lv=+level.value, budget=Math.max(0,+points.value||0);
 const out={}; let spent=0;

 function canUse(s){ return !!s && s.lv<=lv; }
 function addPoint(id){
   const s=byId[id];
   if(!canUse(s) || spent>=budget || (out[id]||0)>=s.max) return false;
   // Green branch is sequential: at least 1 point in every previous green node is required.
   if(s.branch==='season' && s.prereq && (out[s.prereq]||0)<1){
     if(!ensureAtLeast(s.prereq,1)) return false;
   }
   out[id]=(out[id]||0)+1; spent++; return true;
 }
 function ensureAtLeast(id,target){
   const s=byId[id];
   if(!canUse(s)) return false;
   target=Math.min(target,s.max);
   while((out[id]||0)<target && spent<budget){ if(!addPoint(id)) break; }
   return (out[id]||0)>=target;
 }

 // Core recommendation targets.
 for(const [id,target] of RECOMMEND_PLAN){
   if(spent>=budget) break;
   ensureAtLeast(id,target);
 }
 // Common utility / flex targets.
 for(const [id,target] of FLEX_PLAN){
   if(spent>=budget) break;
   ensureAtLeast(id,target);
 }
 // Final exact-spend fallback: fill any remaining unlocked capacity while preserving green prerequisites.
 // This only matters at unusually high point totals; it prevents mysterious 1-point leftovers.
 if(spent<budget){
   const fallback=SKILLS.filter(canUse).sort((a,b)=>{
     const score=t=>t==='S+'?5:t==='S'?4:t==='A'?3:t.startsWith('B')?1:2;
     return score(b.tier)-score(a.tier) || a.lv-b.lv;
   });
   let progressed=true;
   while(spent<budget && progressed){
     progressed=false;
     for(const s of fallback){
       if(spent>=budget) break;
       if(addPoint(s.id)) progressed=true;
     }
   }
 }
 return out;
}
function used(vals){return Object.values(vals).reduce((a,b)=>a+(+b||0),0)}
function tierClass(t){return t==='S+'?'sp':t==='S'?'s':t==='A'?'a':t.startsWith('B')?'b':'new'}
function prereqMet(s,vals){if(s.branch!=='season'||!s.prereq)return true;return (vals[s.prereq]||0)>0}
function hasActiveSeasonChild(id,vals){return SKILLS.some(x=>x.branch==='season'&&x.prereq===id&&(vals[x.id]||0)>0)}
function card(s,vals){
 const n=vals[s.id]||0, locked=s.lv>+level.value, rec=targetBuild()[s.id]||0;
 const seasonLocked=s.branch==='season' && !prereqMet(s,vals) && mode==='mine';
 const disabled=locked||seasonLocked;
 return `<article class="skill ${disabled?'locked':''} ${s.branch==='season'?'season-skill':''}" data-id="${s.id}">
  <button
  class="iconBtn"
  data-detail="${s.id}"
  title="View ${s.name}"
>
  <img
    src="${s.icon}"
    alt="${s.name}"
  >

  <span class="mobilePoints">
    ${n}/${s.max}
  </span>
</button>
   <div class="skillbody"><div class="name">${s.name}</div><div class="meta">${s.branch==='season'?'<span class="branch">SEASON</span>':''}</div><span class="tier cardTier ${tierClass(s.tier)}">${s.tier}</span>
   <div class="controls"><button data-id="${s.id}" data-d="-1" ${mode!=='mine'||disabled||n<=0||(n===1&&hasActiveSeasonChild(s.id,vals))?'disabled':''}>−</button><strong>${n}/${s.max}</strong><button data-id="${s.id}" data-d="1" ${mode!=='mine'||disabled||n>=s.max?'disabled':''}>+</button></div></div>
   ${mode==='mine'?`<span class="rec">REC ${rec}/${s.max}</span>`:''}
 </article>`;
}
function render(){
 const vals=mode==='recommended'?targetBuild():mine;
 const levels=[70,65,60,55,50,45,40,35,30,25,20,15,10,5,1];
 let html='';
 for(const lv of levels){
  const mains=SKILLS.filter(s=>s.lv===lv&&s.branch==='main');
  const seasons=SKILLS.filter(s=>s.lv===lv&&s.branch==='season');
  html+=`<section class="level-row"><div class="lvl">${lv}</div><div class="mainpair">${mains.map(s=>card(s,vals)).join('')}</div><div class="seasoncol">${seasons.map(s=>card(s,vals)).join('')}</div></section>`;
 }
 $('#tree').innerHTML=html;
 const u=used(vals); $('#used').textContent=u; $('#available').textContent=points.value; $('#remaining').textContent=(+points.value-u);
 $('.meter').classList.toggle('over',u>+points.value); $('#subtitle').textContent=`Lv.${level.value} · ${points.value} available`;
 $('#modeTitle').textContent=mode==='recommended'?'Recommended Build':'My Build';
 document.querySelectorAll('.controls button').forEach(b=>b.onclick=e=>{e.stopPropagation();adjust(b.dataset.id,+b.dataset.d)});
 document.querySelectorAll('[data-detail]').forEach(b=>b.onclick=e=>{e.stopPropagation();showDetail(b.dataset.detail)});
}
function adjust(id,d){
 const s=byId[id];
 const cur=mine[id]||0;
 if(d>0){
   if(used(mine)>=+points.value || cur>=s.max) return;
   if(s.branch==='season' && s.prereq && (mine[s.prereq]||0)<1) return;
   mine[id]=cur+1;
 }else{
   if(cur<=0) return;
   if(cur===1 && hasActiveSeasonChild(id,mine)) return; // don't break the green chain
   mine[id]=cur-1;
 }
 localStorage.setItem('lwEngineerMineV3',JSON.stringify(mine)); render();
}
function compare(){const rec=targetBuild();let rows=[];for(const s of SKILLS.filter(s=>s.lv<=+level.value)){const a=mine[s.id]||0,b=rec[s.id]||0;if(a<b)rows.push(`<div class="change add">+${b-a} ${s.name} → ${b}/${s.max}</div>`);else if(a>b)rows.push(`<div class="change remove">−${a-b} ${s.name} → ${b}/${s.max}</div>`)}const rem=+points.value-used(rec);if(rem>0)rows.push(`<div class="change save">${rem} point${rem===1?'':'s'} intentionally unspent / available for later levels.</div>`);$('#compareText').innerHTML=rows.length?rows.join(''):'<div class="change match">Your build matches the recommendation.</div>';$('#compare').classList.remove('hidden');$('#compare').scrollIntoView({behavior:'smooth'})}
function showDetail(id){const s=byId[id];$('#detailTitle').textContent=s.name;const t=$('#detailTier');t.textContent=s.tier;t.className='tier '+tierClass(s.tier);$('#detailImg').src=s.detail;$('#detailNote').textContent=s.note||'Exact current-game description from your screenshot.';$('#detailModal').showModal()}
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));$('#compare').classList.add('hidden');render()});
level.oninput=points.oninput=render;$('#compareBtn').onclick=compare;$('#closeDetail').onclick=()=>$('#detailModal').close();render();
