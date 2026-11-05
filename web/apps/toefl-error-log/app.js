/* TOEFL Error Log: every TOEFL question missed in any app of the suite, to retry and annotate. */
(function () {
  'use strict';
  const byApp = (mistakes) => { const c = {}; for (const m of mistakes) c[m.title] = (c[m.title] || 0) + 1; return Object.entries(c).sort((a, b) => b[1] - a[1]); };
  const App = {
    about: 'Every TOEFL question you miss in any app of this suite, from Complete the Words to Build a Sentence, is logged here with the question itself. Retry them, write a note on why you missed each, and see which tasks cause the most trouble.',
    how: ['Practise in any TOEFL app; misses appear in **Mistakes**.', 'Add a short note: misheard, did not know the word, ran out of time.', 'Retry them as a set, and see **By app** for where to focus.'],
    tabs: [
      { id: 'log', label: 'Mistakes', render(el) { SK.mistakesView(el, 'TOEFL'); } },
      { id: 'apps', label: 'By app', render(el) { const t = byApp(SK.store.get('suite.mistakes', []).filter((m) => m.exam === 'TOEFL')); el.appendChild(SK.card('Mistakes by app', t.length ? SK.table(['App', 'Mistakes'], t) : SK.h('p', { class: 'sk-muted', text: 'No TOEFL mistakes logged yet.' }))); } },
    ],
    byApp,
    checks: { 'mistakes are counted by app': (data, assert) => { assert.deepEqual(byApp([{ title: 'A' }, { title: 'B' }, { title: 'A' }]), [['A', 2], ['B', 1]]); } },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
