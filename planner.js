const SKILLS=[
  {"id":"rapid","name":"Rapid Production","lv":1,"max":5,"tier":"A","videoRec":3,"branch":"main","prereq":null,"icon":"images/icons/rapid_production.png","detail":"images/details/rapid_production.jpeg","note":""},
  {"id":"outstanding","name":"Outstanding Contribution","lv":1,"max":1,"tier":"S","videoRec":1,"branch":"main","prereq":null,"icon":"images/icons/outstanding_contribution.png","detail":"images/details/outstanding_contribution.jpeg","note":""},
  {"id":"combat","name":"Combat Experience","lv":1,"max":3,"tier":"S+","videoRec":3,"branch":"season","prereq":null,"icon":"images/icons/combat_experience.png","detail":"images/details/combat_experience.jpeg","note":""},
  {"id":"meal","name":"Extra Meal","lv":5,"max":1,"tier":"A","videoRec":1,"branch":"main","prereq":null,"icon":"images/icons/extra_meal.png","detail":"images/details/extra_meal.jpeg","note":""},
  {"id":"siege_mastery","name":"Siege Mastery","lv":5,"max":5,"tier":"A","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/siege_mastery.png","detail":"images/details/siege_mastery.jpeg","note":""},
  {"id":"buildfree","name":"Build for Free","lv":10,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/build_for_free.png","detail":"images/details/build_for_free.jpeg","note":""},
  {"id":"researchfree","name":"Research for Free","lv":10,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/research_for_free.png","detail":"images/details/research_for_free.jpeg","note":""},
  {"id":"building_insp","name":"Building Inspiration I","lv":10,"max":3,"tier":"S+","videoRec":3,"branch":"season","prereq":"combat","icon":"images/icons/building_inspiration_i.png","detail":"images/details/building_inspiration_i.jpeg","note":""},
  {"id":"buildnow","name":"Build Now","lv":15,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/build_now.png","detail":"images/details/build_now.jpeg","note":""},
  {"id":"researchnow","name":"Research Now","lv":15,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/research_now.png","detail":"images/details/research_now.jpeg","note":""},
  {"id":"winter","name":"Winter Wonderland","lv":15,"max":1,"tier":"B","videoRec":0,"branch":"season","prereq":"building_insp","icon":"images/icons/winter_wonderland.png","detail":"images/details/winter_wonderland.jpeg","note":""},
  {"id":"rally","name":"Rally Rush","lv":20,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/rally_rush.png","detail":"images/details/rally_rush.jpeg","note":""},
  {"id":"banner","name":"Siege Banner","lv":20,"max":1,"tier":"A","videoRec":1,"branch":"main","prereq":null,"icon":"images/icons/siege_banner.png","detail":"images/details/siege_banner.jpeg","note":""},
  {"id":"siege_insp","name":"Siege Inspiration","lv":25,"max":3,"tier":"S","videoRec":3,"branch":"main","prereq":null,"icon":"images/icons/siege_inspiration.png","detail":"images/details/siege_inspiration.jpeg","note":""},
  {"id":"friendly","name":"Friendly Aid","lv":25,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/friendly_aid.png","detail":"images/details/friendly_aid.jpeg","note":""},
  {"id":"double","name":"Double Exchange","lv":25,"max":3,"tier":"B","videoRec":0,"branch":"season","prereq":"winter","icon":"images/icons/double_exchange.png","detail":"images/details/double_exchange.jpeg","note":""},
  {"id":"coopbuild","name":"Cooperative Construction","lv":30,"max":2,"tier":"S","videoRec":2,"branch":"main","prereq":null,"icon":"images/icons/cooperative_construction.png","detail":"images/details/cooperative_construction.jpeg","note":""},
  {"id":"coopresearch","name":"Cooperative Research","lv":30,"max":2,"tier":"S","videoRec":2,"branch":"main","prereq":null,"icon":"images/icons/cooperative_research.png","detail":"images/details/cooperative_research.jpeg","note":""},
  {"id":"firebomb","name":"Firebomb","lv":30,"max":3,"tier":"A","videoRec":3,"branch":"season","prereq":"double","icon":"images/icons/firebomb.png","detail":"images/details/firebomb.jpeg","note":""},
  {"id":"saving","name":"Resource-Saving","lv":35,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/resource_saving.png","detail":"images/details/resource_saving.jpeg","note":""},
  {"id":"recycling","name":"Recycling","lv":35,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/recycling.png","detail":"images/details/recycling.jpeg","note":""},
  {"id":"prof","name":"Professional Insights","lv":35,"max":5,"tier":"S+","videoRec":5,"branch":"season","prereq":"firebomb","icon":"images/icons/professional_insights.png","detail":"images/details/professional_insights.jpeg","note":""},
  {"id":"medical","name":"Medical Aid","lv":40,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/medical_aid.png","detail":"images/details/medical_aid.jpeg","note":""},
  {"id":"buddy","name":"Buddy Shield","lv":40,"max":3,"tier":"A","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/buddy_shield.png","detail":"images/details/buddy_shield.jpeg","note":""},
  {"id":"overdrive","name":"Intense Overdrive","lv":40,"max":3,"tier":"S","videoRec":2,"branch":"season","prereq":"prof","icon":"images/icons/intense_overdrive.png","detail":"images/details/intense_overdrive.jpeg","note":""},
  {"id":"drone","name":"Drone Supply","lv":45,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/drone_supply.png","detail":"images/details/drone_supply.jpeg","note":""},
  {"id":"fearless","name":"Fearless Defense","lv":45,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/fearless_defense.png","detail":"images/details/fearless_defense.jpeg","note":""},
  {"id":"warmth","name":"Gather for Warmth","lv":45,"max":1,"tier":"B","videoRec":0,"branch":"season","prereq":"overdrive","icon":"images/icons/gather_for_warmth.png","detail":"images/details/gather_for_warmth.jpeg","note":""},
  {"id":"visitors","name":"Random Visitors","lv":50,"max":1,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/random_visitors.png","detail":"images/details/random_visitors.jpeg","note":""},
  {"id":"mine","name":"Durability Mine","lv":50,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/durability_mine.png","detail":"images/details/durability_mine.jpeg","note":""},
  {"id":"onemore","name":"One More","lv":55,"max":5,"tier":"S+","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/one_more.png","detail":"images/details/one_more.jpeg","note":""},
  {"id":"support","name":"Support Boost","lv":55,"max":5,"tier":"S+","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/support_boost.png","detail":"images/details/support_boost.jpeg","note":""},
  {"id":"frostbomb","name":"Frostbomb","lv":55,"max":3,"tier":"B","videoRec":0,"branch":"season","prereq":"warmth","icon":"images/icons/frostbomb.png","detail":"images/details/frostbomb.jpeg","note":""},
  {"id":"gather","name":"Efficient Gathering","lv":60,"max":5,"tier":"A","videoRec":3,"branch":"main","prereq":null,"icon":"images/icons/efficient_gathering.png","detail":"images/details/efficient_gathering.jpeg","note":""},
  {"id":"firstaid","name":"First Aid Expert","lv":60,"max":5,"tier":"B","videoRec":0,"branch":"main","prereq":null,"icon":"images/icons/first_aid_expert.png","detail":"images/details/first_aid_expert.jpeg","note":""},
  {"id":"frostmine","name":"Frost Mine","lv":60,"max":3,"tier":"B","videoRec":0,"branch":"season","prereq":"frostbomb","icon":"images/icons/frost_mine.png","detail":"images/details/frost_mine.jpeg","note":""},
  {"id":"cleanup","name":"Battlefield Cleanup","lv":65,"max":5,"tier":"S","videoRec":3,"branch":"main","prereq":null,"icon":"images/icons/battlefield_cleanup.png","detail":"images/details/battlefield_cleanup.jpeg","note":""},
  {"id":"master","name":"Master Builder","lv":65,"max":5,"tier":"S+","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/master_builder.png","detail":"images/details/master_builder.jpeg","note":""},
  {"id":"instant","name":"Instant Gathering","lv":70,"max":5,"tier":"S","videoRec":5,"branch":"main","prereq":null,"icon":"images/icons/instant_gathering.png","detail":"images/details/instant_gathering.jpeg","note":""},
  {"id":"monster","name":"Monster Tracking","lv":70,"max":5,"tier":"A","videoRec":2,"branch":"main","prereq":null,"icon":"images/icons/monster_tracking.png","detail":"images/details/monster_tracking.jpeg","note":""}
];

const SPEND_ORDER = [
  // Seasonal progression / profession EXP
  'combat',
  'building_insp',
  'winter',
  'double',
  'firebomb',

  'prof','prof','prof','prof','prof',

  'combat',
  'building_insp',
  'combat',
  'building_insp',

  // High-value progression
  'onemore','onemore','onemore','onemore','onemore',

  'siege_insp','siege_insp','siege_insp',

  'outstanding',

  'rapid','rapid','rapid','rapid','rapid',

  'meal',

  // Build / research pairs alternate
  'buildfree',
  'researchfree',
  'buildnow',
  'researchnow',

  'siege_mastery',

  // Cooperative pair alternates
  'coopbuild',
  'coopresearch',
  'coopbuild',
  'coopresearch',

  'buddy',

  // Economy staging:
  // Recycling 2 -> Siege Banner -> Resource-Saving 2 -> alternate
  'recycling',
  'recycling',

  'banner',

  'saving',
  'saving',

  'recycling',
  'saving',
  'recycling',
  'saving',
  'recycling',
  'saving',

  // Support Boost
  'support','support','support','support','support',

  // Finish Build for Free / Research for Free and Build Now / Research Now
  'buildfree','researchfree','buildnow','researchnow',
  'buildfree','researchfree','buildnow','researchnow',
  'buildfree','researchfree','buildnow','researchnow',
  'buildfree','researchfree','buildnow','researchnow',

  // Later priorities
  'master','master','master','master','master',

  'instant','instant','instant','instant','instant',

  'cleanup','cleanup','cleanup','cleanup','cleanup'
];

const $ = selector => document.querySelector(selector);
const level = $('#level');
const points = $('#points');
const byId = Object.fromEntries(SKILLS.map(skill => [skill.id, skill]));

function blankBuild(){
  return Object.fromEntries(SKILLS.map(skill => [skill.id, 0]));
}

function inputsReady(){
  return level.value !== '' && points.value !== '';
}

function targetBuild(){
  if(!inputsReady()) return blankBuild();

  const professionLevel = +level.value;
  const budget = Math.max(0, +points.value || 0);
  const out = blankBuild();
  let spent = 0;

  for(const id of SPEND_ORDER){
    if(spent >= budget) break;

    const skill = byId[id];
    if(!skill) continue;
    if(skill.lv > professionLevel) continue;
    if(out[id] >= skill.max) continue;

    if(
      skill.branch === 'season' &&
      skill.prereq &&
      (out[skill.prereq] || 0) < 1
    ){
      continue;
    }

    out[id]++;
    spent++;
  }

  return out;
}

function used(values){
  return Object.values(values).reduce((sum, value) => sum + (+value || 0), 0);
}

function tierClass(tier){
  return tier === 'S+' ? 'sp'
    : tier === 'S' ? 's'
    : tier === 'A' ? 'a'
    : tier === 'B' ? 'b'
    : 'unranked';
}

function prereqMet(skill, values){
  if(skill.branch !== 'season' || !skill.prereq) return true;
  return (values[skill.prereq] || 0) > 0;
}

function hasActiveSeasonChild(id, values){
  return SKILLS.some(skill =>
    skill.branch === 'season' &&
    skill.prereq === id &&
    (values[skill.id] || 0) > 0
  );
}

// Starts blank. Once both inputs are entered, recommendation auto-fills.
let customBuild = blankBuild();
let isCustom = false;
let openDetailId = null;

function currentBuild(){
  if(!inputsReady()) return blankBuild();
  return isCustom ? customBuild : targetBuild();
}

function card(skill, values){
  const current = values[skill.id] || 0;
  const lockedByLevel = !inputsReady() || skill.lv > +level.value;
  const lockedBySeason = skill.branch === 'season' && !prereqMet(skill, values);
  const locked = lockedByLevel || lockedBySeason;

  const canMinus =
    !locked &&
    current > 0 &&
    !(skill.branch === 'season' && current === 1 && hasActiveSeasonChild(skill.id, values));

  const canPlus =
    !locked &&
    current < skill.max &&
    used(values) < (+points.value || 0);

  return `
    <article class="skill ${locked ? 'locked' : ''} ${skill.branch === 'season' ? 'season-skill' : ''}" data-id="${skill.id}">
      <button class="iconBtn" data-detail="${skill.id}" type="button" title="View ${skill.name}">
        <img src="${skill.icon}" alt="${skill.name}">
      </button>

      <div class="skillbody">
        <div class="name">${skill.name}</div>

        <div class="meta">
          ${skill.branch === 'season' ? '<span class="branch">SEASON</span>' : ''}
        </div>

        ${skill.tier ? `<span class="tier cardTier ${tierClass(skill.tier)}">${skill.tier}</span>` : ''}

        <div class="controls">
          <button data-adjust="${skill.id}" data-d="-1" type="button" ${canMinus ? '' : 'disabled'}>−</button>
          <strong>${current}/${skill.max}</strong>
          <button data-adjust="${skill.id}" data-d="1" type="button" ${canPlus ? '' : 'disabled'}>+</button>
        </div>
      </div>
    </article>
  `;
}

function adjust(id, change){
  if(!inputsReady()) return;

  if(!isCustom){
    customBuild = {...targetBuild()};
    isCustom = true;
  }

  const skill = byId[id];
  if(!skill) return;

  const current = customBuild[id] || 0;

  if(change > 0){
    if(used(customBuild) >= +points.value) return;
    if(current >= skill.max) return;
    if(skill.lv > +level.value) return;

    if(
      skill.branch === 'season' &&
      skill.prereq &&
      (customBuild[skill.prereq] || 0) < 1
    ){
      return;
    }

    customBuild[id] = current + 1;
  }

  if(change < 0){
    if(current <= 0) return;

    if(
      skill.branch === 'season' &&
      current === 1 &&
      hasActiveSeasonChild(id, customBuild)
    ){
      return;
    }

    customBuild[id] = current - 1;
  }

  hideCompare();
  render();
}

function hideCompare(){
  const box = $('#compareBox');
  if(box) box.classList.add('hidden');
}

function resetToRecommended(){
  if(!inputsReady()) return;
  isCustom = false;
  customBuild = blankBuild();
  hideCompare();
  render();
}

function clearBuild(){
  customBuild = blankBuild();
  isCustom = true;
  hideCompare();
  render();
}

function compareBuild(){
  if(!inputsReady()) return;

  const recommended = targetBuild();
  const yours = currentBuild();
  const rows = [];

  for(const skill of SKILLS){
    if(skill.lv > +level.value) continue;

    const rec = recommended[skill.id] || 0;
    const actual = yours[skill.id] || 0;

    if(actual === rec) continue;

    const direction = actual > rec ? 'add' : 'remove';
    const delta = Math.abs(actual - rec);
    const sign = actual > rec ? '+' : '−';

    rows.push(`
      <div class="change ${direction}">
        <strong>${skill.name}</strong>
        <span class="compareValues">${rec}/${skill.max} → ${actual}/${skill.max}</span>
        <span class="compareDifference">${sign}${delta}</span>
      </div>
    `);
  }

  const summary = `
    <div class="compareSummary">
      <span>Salt: <strong>${used(recommended)}</strong></span>
      <span>Yours: <strong>${used(yours)}</strong></span>
      <span>Available: <strong>${points.value}</strong></span>
      <span>Left: <strong>${+points.value - used(yours)}</strong></span>
    </div>
  `;

  if(rows.length === 0){
    rows.push('<div class="change match">No changes from HungrySalt Build.</div>');
  }

  $('#compareText').innerHTML = summary + rows.join('');
  $('#compareBox').classList.remove('hidden');
  $('#compareBox').scrollIntoView({behavior:'smooth', block:'nearest'});
}

function updateDetailControls(){
  if(!openDetailId) return;

  const skill = byId[openDetailId];
  if(!skill) return;

  const values = currentBuild();
  const current = values[openDetailId] || 0;

  const lockedByLevel =
    !inputsReady() ||
    skill.lv > +level.value;

  const lockedBySeason =
    skill.branch === 'season' &&
    !prereqMet(skill, values);

  const locked =
    lockedByLevel || lockedBySeason;

  const canMinus =
    !locked &&
    current > 0 &&
    !(
      skill.branch === 'season' &&
      current === 1 &&
      hasActiveSeasonChild(skill.id, values)
    );

  const canPlus =
    !locked &&
    current < skill.max &&
    used(values) < (+points.value || 0);

  $('#detailPoints').textContent =
    `${current}/${skill.max}`;

  $('#detailMinus').disabled =
    !canMinus;

  $('#detailPlus').disabled =
    !canPlus;
}

function showDetail(id){
  const skill = byId[id];

  if(!skill) return;

  openDetailId = id;

  $('#detailTitle').textContent =
    skill.name;

  const tier =
    $('#detailTier');

  if(skill.tier){
    tier.textContent =
      skill.tier;

    tier.className =
      'tier ' +
      tierClass(skill.tier);

    tier.style.display =
      'inline-flex';
  }else{
    tier.textContent = '';
    tier.style.display = 'none';
  }

  $('#detailImg').src =
    skill.detail;

  $('#detailNote').textContent =
    skill.note ||
    'Exact current-game description from your screenshot.';

  updateDetailControls();

  $('#detailModal').showModal();
}

function render(){
  const values = currentBuild();
  const levels = [70,65,60,55,50,45,40,35,30,25,20,15,10,5,1];

  $('#tree').innerHTML = levels.map(rowLevel => {
    const mains = SKILLS.filter(skill => skill.lv === rowLevel && skill.branch === 'main');
    const seasons = SKILLS.filter(skill => skill.lv === rowLevel && skill.branch === 'season');

    return `
      <section class="level-row">
        <div class="lvl">${rowLevel}</div>
        <div class="mainpair">${mains.map(skill => card(skill, values)).join('')}</div>
        <div class="seasoncol">${seasons.map(skill => card(skill, values)).join('')}</div>
      </section>
    `;
  }).join('');

  const meter = $('.meter');
  const subtitle = $('#subtitle');
  const modeTitle = $('#modeTitle');

  if(!inputsReady()){
    $('#used').textContent = '—';
    $('#available').textContent = '—';
    $('#remaining').textContent = '—';
    subtitle.textContent = 'Enter profession level and available points';
    modeTitle.textContent = 'Build';
    meter.classList.remove('over');
  } else {
    const totalUsed = used(values);
    $('#used').textContent = totalUsed;
    $('#available').textContent = points.value;
    $('#remaining').textContent = (+points.value - totalUsed);
    subtitle.textContent = `Lv.${level.value} · ${points.value} available${isCustom ? ' · CUSTOM' : ''}`;
    modeTitle.textContent = isCustom ? 'Custom Build' : 'HungrySalt Build';
    meter.classList.toggle('over', totalUsed > +points.value);
  }

  document.querySelectorAll('[data-adjust]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      adjust(button.dataset.adjust, +button.dataset.d);
    });
  });

  document.querySelectorAll('[data-detail]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      showDetail(button.dataset.detail);
    });
  });
}

$('#detailMinus').addEventListener('click', () => {
  if(!openDetailId) return;

  adjust(openDetailId, -1);
  updateDetailControls();
});

$('#detailPlus').addEventListener('click', () => {
  if(!openDetailId) return;

  adjust(openDetailId, 1);
  updateDetailControls();
});

function onInputsChanged(){
  hideCompare();

  if(inputsReady()){
    isCustom = false;
    customBuild = blankBuild();
  } else {
    isCustom = true;
    customBuild = blankBuild();
  }

  render();
}

level.addEventListener('input', onInputsChanged);
points.addEventListener('input', onInputsChanged);

$('#resetBtn').addEventListener('click', resetToRecommended);
$('#clearBtn').addEventListener('click', clearBuild);
$('#compareBtn').addEventListener('click', compareBuild);
$('#closeDetail').addEventListener('click', () => {
  openDetailId = null;
  $('#detailModal').close();
});

render();