// Iridescent text animation for the "NEW BOOK (BAD BAD NOVEL)" link.
// Colors cycle through hot pinks, magentas, and corals —
// the same tonal family as the original #fa029f, with a shimmer wave
// rippling left-to-right across all characters.

(function () {
  "use strict";

  // Base color #fa029f is roughly HSL(322°, 98%, 49%) — hot pink/magenta.
  var HUE_CENTER = 322;
  var HUE_RANGE  = 40;    // ± → ~282°–362° (magenta to coral-pink)

  var SAT_CENTER = 95;
  var SAT_RANGE  = 5;

  var LIT_CENTER = 52;
  var LIT_RANGE  = 10;

  var WAVE_SPEED = 0.0012;
  var WAVE_FREQ  = 0.22;

  var spans = [];
  var startTime = null;

  function wrapChars(el) {
    var text = el.textContent;
    el.textContent = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === " " || ch === "\n") {
        el.appendChild(document.createTextNode(ch));
      } else {
        var sp = document.createElement("span");
        sp.textContent = ch;
        sp.style.display = "inline";
        el.appendChild(sp);
        spans.push(sp);
      }
    }
  }

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed = timestamp - startTime;
    var t = elapsed * WAVE_SPEED;

    for (var i = 0; i < spans.length; i++) {
      var phase = t - i * WAVE_FREQ;
      var hue = HUE_CENTER + HUE_RANGE  * Math.sin(phase);
      var sat = SAT_CENTER + SAT_RANGE  * Math.sin(phase * 1.3 + 1.0);
      var lit = LIT_CENTER + LIT_RANGE  * Math.sin(phase * 0.7 + 2.1);

      sat = Math.max(0, Math.min(100, sat));
      lit = Math.max(0, Math.min(100, lit));

      spans[i].style.color =
        "hsl(" + hue.toFixed(1) + "," + sat.toFixed(1) + "%," + lit.toFixed(1) + "%)";
    }

    requestAnimationFrame(animate);
  }

  function init() {
    // Target the book link inside #LITTLEPINKBOOK
    var bookDiv = document.getElementById("criticism");
    if (!bookDiv) return;

    // The second <a> tag is the text link (first is the image link)
    var links = bookDiv.querySelectorAll("a");
    var textLink = null;
    links.forEach(function (a) {
      if (a.textContent.trim().length > 5) textLink = a;
    });
    if (!textLink) return;

    wrapChars(textLink);
    if (spans.length > 0) requestAnimationFrame(animate);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
