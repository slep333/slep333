// Fills the taskbar clock: <span id="clock"></span>
function tick() {
  var el = document.getElementById("clock");
  if (!el) return;
  el.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}
tick();
setInterval(tick, 15000);
