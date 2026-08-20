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
  {"id":"overdrive","name":"Intense Overdrive","lv":40,"max":3,"tier":"B","videoRec":2,"branch":"season","prereq":"prof","icon":"images/icons/intense_overdrive.png","detail":"images/details/intense_overdrive.jpeg","note":""},
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


/*
  HUNGRYSALT SPEND ORDER

  Each entry represents ONE point.

  This means you can control exactly where each successive
  profession point gets allocated.
*/

const SPEND_ORDER = [

  // Green progression first
  'combat',
  'building_insp',
  'winter',
  'double',
  'firebomb',

  // Professional Insights 5/5
  'prof',
  'prof',
  'prof',
  'prof',
  'prof',

  // Finish Combat Experience / Building Inspiration
  'combat',
  'building_insp',
  'combat',
  'building_insp',

  // One More 5/5
  'onemore',
  'onemore',
  'onemore',
  'onemore',
  'onemore',

  // Siege Inspiration 3/3
  'siege_insp',
  'siege_insp',
  'siege_insp',

  'outstanding',

  // Rapid Production 5/5
  'rapid',
  'rapid',
  'rapid',
  'rapid',
  'rapid',

  'meal',

  // First round of Build/Research
  'buildfree',
  'researchfree',
  'buildnow',
  'researchnow',

  'siege_mastery',

  // Cooperative pair alternates
  'coopbuild',
  'coopresearch',

  // Buddy Shield baseline
  'buddy',

  // Economy starts alternating
  'recycling',
  'saving',
  'recycling',
  'saving',
  'recycling',
  'saving',

  // First 3 Support Boost
  'support',
  'support',
  'support',

  // Finish economy pair
  'recycling',
  'saving',
  'recycling',
  'saving',

  // Continue alternating build/research skills
  'buildfree',
  'researchfree',
  'buildnow',
  'researchnow',

  'buildfree',
  'researchfree',
  'buildnow',
  'researchnow',

  'buildfree',
  'researchfree',
  'buildnow',
  'researchnow',

  'buildfree',
  'researchfree',
  'buildnow',
  'researchnow',

  // Finish Support Boost
  'support',
  'support',

  // Level 65 priorities
  'master',
  'master',
  'master',
  'master',
  'master',

  // Level 70 priority
  'instant',
  'instant',
  'instant',
  'instant',
  'instant',

  // Battlefield Cleanup 5/5
  'cleanup',
  'cleanup',
  'cleanup',
  'cleanup',
  'cleanup'
];


const $ = s => document.querySelector(s);

const level = $('#level');
const points = $('#points');

const byId = Object.fromEntries(
  SKILLS.map(s => [s.id, s])
);


/*
  BUILD HUNGRYSALT'S RECOMMENDATION
*/

function targetBuild(){

  const lv = +level.value;
  const budget = +points.value;

  const out = {};

  for(const s of SKILLS){
    out[s.id] = 0;
  }

  let spent = 0;

  for(const id of SPEND_ORDER){

    if(spent >= budget) break;

    const s = byId[id];

    if(!s) continue;

    // Skill isn't unlocked yet
    if(s.lv > lv) continue;

    // Already maxed
    if(out[id] >= s.max) continue;

    // Green branch prerequisite
    if(
      s.branch === 'season' &&
      s.prereq &&
      (out[s.prereq] || 0) < 1
    ){
      continue;
    }

    out[id]++;
    spent++;
  }

  return out;
}


function used(vals){
  return Object.values(vals)
    .reduce((a,b) => a + (+b || 0), 0);
}


function tierClass(t){

  return t === 'S+'
    ? 'sp'
    : t === 'S'
    ? 's'
    : t === 'A'
    ? 'a'
    : (t && t.startsWith('B'))
    ? 'b'
    : 'unranked';
}


function prereqMet(s, vals){

  if(
    s.branch !== 'season' ||
    !s.prereq
  ){
    return true;
  }

  return (vals[s.prereq] || 0) > 0;
}


/*
  CUSTOM BUILD

  null = user is currently looking at HungrySalt recommendation.
  Once +/- is clicked, a copy is created and becomes their build.
*/

let customBuild = {};

function currentBuild(){

  const lv = +level.value;
  const pts = +points.value;

  // Keep everything blank until both fields are entered
  if(!lv || !pts){
    const blank = {};

    for(const s of SKILLS){
      blank[s.id] = 0;
    }

    return blank;
  }

  // If the user hasn't customized anything yet,
  // show HungrySalt's recommendation
  if(customBuild === null){
    return targetBuild();
  }

  return customBuild;
}

/*
  Prevent removing the last prerequisite point if a later
  green skill currently has points in it.
*/

function hasActiveSeasonChild(id, vals){

  return SKILLS.some(s =>
    s.branch === 'season' &&
    s.prereq === id &&
    (vals[s.id] || 0) > 0
  );
}


/*
  SKILL CARD
*/

function card(s, vals){

  const n = vals[s.id] || 0;

  const locked =
    s.lv > +level.value;

  const seasonLocked =
    s.branch === 'season' &&
    !prereqMet(s, vals);

  const disabled =
    locked || seasonLocked;

  const canMinus =
    !disabled &&
    n > 0 &&
    !(
      s.branch === 'season' &&
      n === 1 &&
      hasActiveSeasonChild(s.id, vals)
    );

  const canPlus =
    !disabled &&
    n < s.max &&
    used(vals) < +points.value;

  return `
    <article
      class="skill
        ${disabled ? 'locked' : ''}
        ${s.branch === 'season' ? 'season-skill' : ''}"
      data-id="${s.id}"
    >

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

      <div class="skillbody">

        <div class="name">
          ${s.name}
        </div>

        <div class="meta">
          ${
            s.branch === 'season'
              ? '<span class="branch">SEASON</span>'
              : ''
          }
        </div>

        ${
          s.tier
            ? `<span class="tier cardTier ${tierClass(s.tier)}">${s.tier}</span>`
            : ''
        }

        <div class="controls">

          <button
            data-adjust="${s.id}"
            data-d="-1"
            ${canMinus ? '' : 'disabled'}
          >
            −
          </button>

          <strong>
            ${n}/${s.max}
          </strong>

          <button
            data-adjust="${s.id}"
            data-d="1"
            ${canPlus ? '' : 'disabled'}
          >
            +
          </button>

        </div>

      </div>

    </article>
  `;
}


/*
  MANUAL +/- ADJUSTMENT
*/

function adjust(id, change){

  /*
    First manual edit creates a copy of the
    HungrySalt recommendation.
  */

  if(!customBuild){
    customBuild = {
      ...targetBuild()
    };
  }

  const s = byId[id];

  if(!s) return;

  const current =
    customBuild[id] || 0;


  /*
    ADD POINT
  */

  if(change > 0){

    // Can't spend more points than available
    if(
      used(customBuild) >=
      +points.value
    ){
      return;
    }

    // Skill already maxed
    if(current >= s.max){
      return;
    }

    // Skill level not unlocked
    if(s.lv > +level.value){
      return;
    }

    // Green prerequisite
    if(
      s.branch === 'season' &&
      s.prereq &&
      (customBuild[s.prereq] || 0) < 1
    ){
      return;
    }

    customBuild[id] =
      current + 1;
  }


  /*
    REMOVE POINT
  */

  if(change < 0){

    if(current <= 0){
      return;
    }

    /*
      Don't allow someone to remove the
      final prerequisite point while a later
      green skill is active.
    */

    if(
      s.branch === 'season' &&
      current === 1 &&
      hasActiveSeasonChild(
        id,
        customBuild
      )
    ){
      return;
    }

    customBuild[id] =
      current - 1;
  }


  /*
    The old comparison is stale after an edit.
  */

  const compareBox =
    $('#compareBox');

  if(compareBox){
    compareBox.classList.add('hidden');
  }

  render();
}


/*
  RESET
*/

function resetToRecommended(){

  customBuild = null;

  const compareBox =
    $('#compareBox');

  if(compareBox){
    compareBox.classList.add('hidden');
  }

  render();
}


/*
  RENDER TREE
*/

function render(){

  const vals =
    currentBuild();

  const levels = [
    70,
    65,
    60,
    55,
    50,
    45,
    40,
    35,
    30,
    25,
    20,
    15,
    10,
    5,
    1
  ];

  let html = '';

  for(const lv of levels){

    const mains =
      SKILLS.filter(
        s =>
          s.lv === lv &&
          s.branch === 'main'
      );

    const seasons =
      SKILLS.filter(
        s =>
          s.lv === lv &&
          s.branch === 'season'
      );

    html += `
      <section class="level-row">

        <div class="lvl">
          ${lv}
        </div>

        <div class="mainpair">
          ${
            mains
              .map(s => card(s, vals))
              .join('')
          }
        </div>

        <div class="seasoncol">
          ${
            seasons
              .map(s => card(s, vals))
              .join('')
          }
        </div>

      </section>
    `;
  }


  $('#tree').innerHTML =
    html;


  /*
    POINT COUNTER
  */

const u = used(vals);

const lv = +level.value;
const pts = +points.value;

if(!lv || !pts){

  $('#used').textContent = '—';
  $('#available').textContent = '—';
  $('#remaining').textContent = '—';

}else{

  $('#used').textContent = u;
  $('#available').textContent = pts;
  $('#remaining').textContent = pts - u;

}


  const meter =
    $('.meter');

  if(meter){

    meter.classList.toggle(
      'over',
      u > +points.value
    );

  }


  /*
    SUBTITLE
  */

const subtitle = $('#subtitle');

if(subtitle){

  if(!level.value || !points.value){

    subtitle.textContent =
      'Enter profession level and available points';

  }else{

    subtitle.textContent =
      `Lv.${level.value} · ${points.value} available${
        customBuild !== null
          ? ' · CUSTOM'
          : ''
      }`;

  }

}


  /*
    DESCRIPTION POPUPS
  */

  document
    .querySelectorAll('[data-detail]')
    .forEach(button => {

      button.onclick = e => {

        e.stopPropagation();

        showDetail(
          button.dataset.detail
        );

      };

    });


  /*
    +/- BUTTONS
  */

  document
    .querySelectorAll('[data-adjust]')
    .forEach(button => {

      button.onclick = e => {

        e.stopPropagation();

        adjust(
          button.dataset.adjust,
          +button.dataset.d
        );

      };

    });

}


/*
  DETAIL POPUP
*/

function showDetail(id){

  const s =
    byId[id];

  if(!s) return;


  $('#detailTitle').textContent =
    s.name;


  const t =
    $('#detailTier');


  if(s.tier){

    t.textContent =
      s.tier;

    t.className =
      'tier ' +
      tierClass(s.tier);

    t.style.display =
      'inline-flex';

  }else{

    t.textContent =
      '';

    t.style.display =
      'none';

  }


  $('#detailImg').src =
    s.detail;

  $('#detailModal')
    .showModal();

}


/*
  CHANGING LEVEL OR AVAILABLE POINTS

  Reset manual changes and rebuild the
  HungrySalt recommendation.
*/

level.oninput = () => {

  const lv = +level.value;
  const pts = +points.value;

  if(lv && pts){
    customBuild = null;
  }else{
    customBuild = {};
  }

  const compareBox = $('#compareBox');

  if(compareBox){
    compareBox.classList.add('hidden');
  }

  render();
};


points.oninput = () => {

  const lv = +level.value;
  const pts = +points.value;

  if(lv && pts){
    customBuild = null;
  }else{
    customBuild = {};
  }

  const compareBox = $('#compareBox');

  if(compareBox){
    compareBox.classList.add('hidden');
  }

  render();
};


/*
  COMPARE CURRENT BUILD TO HUNGRYSALT BUILD
*/

function compareBuild(){

  const recommended =
    targetBuild();

  const yours =
    currentBuild();

  const rows = [];


  for(const s of SKILLS){

    /*
      Don't compare skills the user
      hasn't unlocked yet.
    */

    if(s.lv > +level.value){
      continue;
    }


    const rec =
      recommended[s.id] || 0;

    const actual =
      yours[s.id] || 0;


    /*
      Same allocation = nothing to show.
    */

    if(actual === rec){
      continue;
    }


    /*
      User added points.
    */

    if(actual > rec){

      rows.push(`
        <div class="change add">

          <strong>
            ${s.name}
          </strong>

          <span class="compareValues">
            ${rec}/${s.max}
            →
            ${actual}/${s.max}
          </span>

          <span class="compareDifference">
            +${actual - rec}
          </span>

        </div>
      `);

    }


    /*
      User removed points.
    */

    else{

      rows.push(`
        <div class="change remove">

          <strong>
            ${s.name}
          </strong>

          <span class="compareValues">
            ${rec}/${s.max}
            →
            ${actual}/${s.max}
          </span>

          <span class="compareDifference">
            −${rec - actual}
          </span>

        </div>
      `);

    }

  }


  const recommendedUsed =
    used(recommended);

  const yourUsed =
    used(yours);

  const available =
    +points.value;

  const yourRemaining =
    available - yourUsed;


  /*
    Summary
  */

  let summary = `
    <div class="compareSummary">

      <div>
        HungrySalt Build:
        <strong>
          ${recommendedUsed}
        </strong>
        allocated
      </div>

      <div>
        Your Build:
        <strong>
          ${yourUsed}
        </strong>
        allocated
      </div>

      <div>
        Available:
        <strong>
          ${available}
        </strong>
      </div>

      <div>
        Unspent:
        <strong>
          ${yourRemaining}
        </strong>
      </div>

    </div>
  `;


  /*
    Nothing changed
  */

  if(rows.length === 0){

    rows.push(`
      <div class="change match">
        No changes from HungrySalt Build.
      </div>
    `);

  }


  $('#compareText').innerHTML =
    summary +
    rows.join('');


  $('#compareBox')
    .classList.remove('hidden');

}

/*
  CLEAR BUILD

  Starts a completely blank custom build.
*/

function clearBuild(){

  customBuild = {};

  for(const s of SKILLS){
    customBuild[s.id] = 0;
  }

  const compareBox =
    $('#compareBox');

  if(compareBox){
    compareBox.classList.add('hidden');
  }

  render();
}


/*
  BUTTONS

  Existing blue Recommended button becomes Reset.
  Existing gray Export button becomes Clear.
  Existing orange Compare button stays Compare.
*/

$('#resetBtn').onclick = resetToRecommended;
$('#clearBtn').onclick = clearBuild;
$('#compareBtn').onclick = compareBuild;

/*
  CLOSE DESCRIPTION
*/

$('#closeDetail').onclick = () => {

  $('#detailModal')
    .close();

};


/*
  INITIAL LOAD
*/

render();