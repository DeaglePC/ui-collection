/* Card previews pass ?fit=1. Hide the native scrollbar and scale the page into the iframe. */
(function () {
  var fit = new URLSearchParams(location.search).get("fit") === "1";
  var css = document.createElement("style");
  css.textContent = [
    "html{color-scheme:dark;background:#0e0d0b}",
    fit
      ? "html,body{margin:0;height:100%;overflow:hidden!important;scrollbar-width:none!important;-ms-overflow-style:none!important}"
      : "html,body{scrollbar-width:thin;scrollbar-color:#3a342c transparent}",
    fit
      ? "html::-webkit-scrollbar,body::-webkit-scrollbar{width:0!important;height:0!important;display:none!important}"
      : "html::-webkit-scrollbar,body::-webkit-scrollbar{width:8px;height:8px}html::-webkit-scrollbar-thumb,body::-webkit-scrollbar-thumb{background:#3a342c;border-radius:99px}html::-webkit-scrollbar-track,body::-webkit-scrollbar-track{background:transparent}",
  ].join("");
  document.documentElement.appendChild(css);
  if (!fit) return;

  function apply() {
    var body = document.body;
    if (!body) return;
    body.style.zoom = "1";
    var vw = window.innerWidth || 1;
    var vh = window.innerHeight || 1;
    var sw = Math.max(body.scrollWidth, body.offsetWidth, 1);
    var sh = Math.max(body.scrollHeight, body.offsetHeight, 1);
    var scale = Math.min(1, vw / sw, vh / sh);
    if (scale < 0.992) body.style.zoom = String(Math.max(scale, 0.35));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
  window.addEventListener("resize", apply);
})();
