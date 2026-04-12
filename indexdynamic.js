// Iridescent text animation for .highlights / .bookhighlight block
// Colors cycle through pale lavenders, pinks, mauves, and lilacs —
// the same tonal family as the original #f9e8fc, with a shimmer wave
// rippling left-to-right across all characters.

(function () {
  "use strict";

  // How far the hue shifts from center (degrees). Keep narrow to stay
  // within the lavender-pink-mauve family.
  var HUE_CENTER = 295;   // near #f9e8fc
  var HUE_RANGE  = 50;    // ± from center → 245°–345° (blue-violet to pink)

  // Saturation and lightness also pulse gently for the "iridescent" sheen.
  var SAT_CENTER = 82;    // %
  var SAT_RANGE  = 15;    // %
  var LIT_CENTER = 88;    // %
  var LIT_RANGE  = 8;     // %

  // Animation speed controls
  var WAVE_SPEED = 0.0012;   // radians per ms — overall cycle speed
  var WAVE_FREQ  = 0.22;     // spatial frequency — tighter = more ripples

  var spans = [];
  var startTime = null;

  function wrapChars(container) {
    // Walk all text nodes inside .highlights links and wrap each non-space
    // character in a <span> for individual coloring.
    var links = container.querySelectorAll("a.highlights, a.bookhighlight");
    links.forEach(function (link) {
      var text = link.textContent;
      link.textContent = "";
      for (var i = 0; i < text.length; i++) {
        var ch = text[i];
        if (ch === " " || ch === "\n") {
          link.appendChild(document.createTextNode(ch));
        } else {
          var sp = document.createElement("span");
          sp.textContent = ch;
          sp.style.display = "inline";
          link.appendChild(sp);
          spans.push(sp);
        }
      }
    });
  }

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed = timestamp - startTime;

    var t = elapsed * WAVE_SPEED;

    for (var i = 0; i < spans.length; i++) {
      // Each character gets a phase offset based on its position in the list,
      // creating a left-to-right shimmer wave.
      var phase = t - i * WAVE_FREQ;

      var hue = HUE_CENTER + HUE_RANGE  * Math.sin(phase);
      var sat = SAT_CENTER + SAT_RANGE  * Math.sin(phase * 1.3 + 1.0);
      var lit = LIT_CENTER + LIT_RANGE  * Math.sin(phase * 0.7 + 2.1);

      // Clamp to valid CSS ranges
      sat = Math.max(0, Math.min(100, sat));
      lit = Math.max(0, Math.min(100, lit));

      spans[i].style.color =
        "hsl(" + hue.toFixed(1) + "," + sat.toFixed(1) + "%," + lit.toFixed(1) + "%)";
    }

    requestAnimationFrame(animate);
  }

  function init() {
    var container = document.querySelector(".highlights");
    if (!container) return;
    wrapChars(container);
    if (spans.length > 0) {
      requestAnimationFrame(animate);
    }
  }

  // Run after DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
