/* JCP Advocacia — interacoes da landing */
(function () {
  'use strict';

  /* ---------- Autodiagnostico ---------- */
  var quiz = document.getElementById('quiz');
  var out = document.getElementById('quiz-count');
  var msg = document.getElementById('quiz-msg');

  if (quiz && out && msg) {
    var boxes = quiz.querySelectorAll('input[type="checkbox"]');

    var MESSAGES = {
      zero: 'Que bom. Mas se surgir qualquer dúvida, pode chamar do mesmo jeito.',
      one: '<strong>Já vale a pena olhar.</strong> Um item só pode dar um caso inteiro.',
      many: '<strong>Manda seu caso pra gente.</strong> Com 2 ou mais, quase sempre tem coisa pra buscar.'
    };

    var update = function () {
      var n = 0;
      for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) n++;
      }
      out.textContent = String(n);
      msg.innerHTML = n === 0 ? MESSAGES.zero : (n === 1 ? MESSAGES.one : MESSAGES.many);
    };

    quiz.addEventListener('change', update);
    quiz.addEventListener('submit', function (e) { e.preventDefault(); });
    update();
  }

  /* ---------- Abre o bloco do caso que a pessoa escolheu ---------- */
  var abrirAlvo = function () {
    var hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    var alvo;
    try { alvo = document.querySelector(hash); } catch (e) { return; }
    if (!alvo) return;
    var det = alvo.querySelector('details.mais');
    if (det) det.open = true;
  };

  window.addEventListener('hashchange', abrirAlvo);
  abrirAlvo();

  /* cliques no seletor de caso: o hash pode nao mudar, entao abre na mao */
  var cards = document.querySelectorAll('.case-card[href^="#"]');
  for (var c = 0; c < cards.length; c++) {
    cards[c].addEventListener('click', function () {
      var alvo = document.querySelector(this.getAttribute('href'));
      if (!alvo) return;
      var det = alvo.querySelector('details.mais');
      if (det) det.open = true;
    });
  }

  /* ---------- FAQ: so um aberto por vez ---------- */
  var faq = document.querySelectorAll('.faq details');
  for (var j = 0; j < faq.length; j++) {
    faq[j].addEventListener('toggle', function () {
      if (!this.open) return;
      for (var k = 0; k < faq.length; k++) {
        if (faq[k] !== this) faq[k].open = false;
      }
    });
  }
})();
