/* Card previews pass ?fit=1. Hide the scrollbar without shrinking the demo into a speck. */
(function () {
  var fit = new URLSearchParams(location.search).get("fit") === "1";
  var css = document.createElement("style");
  css.textContent = fit
    ? "html{color-scheme:dark;background:#0e0d0b}html,body{margin:0;height:100%;overflow:hidden!important;scrollbar-width:none!important;-ms-overflow-style:none!important}html::-webkit-scrollbar,body::-webkit-scrollbar{width:0!important;height:0!important;display:none!important}"
    : "html{color-scheme:dark}html,body{scrollbar-width:thin;scrollbar-color:#3a342c transparent}html::-webkit-scrollbar,body::-webkit-scrollbar{width:8px;height:8px}html::-webkit-scrollbar-thumb,body::-webkit-scrollbar-thumb{background:#3a342c;border-radius:99px}html::-webkit-scrollbar-track,body::-webkit-scrollbar-track{background:transparent}";
  document.documentElement.appendChild(css);
  if (!fit) return;

  var MIN_ZOOM = 0.68;

  function focusNode() {
    return (
      document.querySelector("[data-f44], canvas, .scene, .hero, .btn-3d") ||
      document.body.firstElementChild
    );
  }

  function apply() {
    var doc = document.documentElement;
    var body = document.body;
    if (!body) return;
    body.style.zoom = "1";
    doc.style.overflow = "visible";
    body.style.overflow = "visible";
    var vw = window.innerWidth || 1;
    var vh = window.innerHeight || 1;
    var sw = Math.max(body.scrollWidth, doc.scrollWidth, 1);
    var sh = Math.max(body.scrollHeight, doc.scrollHeight, 1);
    var scale = Math.min(1, vw / sw, vh / sh);
    doc.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scale >= MIN_ZOOM) {
      body.style.zoom = String(scale);
      doc.scrollTop = 0;
      body.scrollTop = 0;
      return;
    }
    body.style.zoom = "1";
    var node = focusNode();
    if (!node) return;
    var top = 0;
    var el = node;
    while (el && el !== body) {
      top += el.offsetTop || 0;
      el = el.offsetParent;
    }
    var target = Math.max(0, top - Math.max(0, vh - (node.offsetHeight || 0)) / 2);
    doc.scrollTop = target;
    body.scrollTop = target;
  }

  function kick() {
    apply();
    requestAnimationFrame(apply);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kick);
  else kick();
  window.addEventListener("load", kick);
  window.addEventListener("resize", apply);
})();
