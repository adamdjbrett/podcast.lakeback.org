const deadline = Date.parse(document.querySelector("time").dateTime);
const clock = document.querySelector(".clock");
const digits = clock.querySelectorAll("[data-digit]");

function tick() {
  const remaining = deadline - Date.now();
  if (remaining <= 0) {
    clock.hidden = true;
    document.querySelector(".arrived").hidden = false;
    document.querySelector(".signal").hidden = true;
    return;
  }
  const seconds = Math.ceil(remaining / 1000);
  const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
  digits.forEach((digit, i) => { digit.textContent = String(values[i]).padStart(2, "0"); });
  clock.hidden = false;
  setTimeout(tick, remaining % 1000 || 1000);
}

tick();
