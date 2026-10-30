// Between the Boxes: small enhancements. The site works without JavaScript.

// Open an offer or project when someone lands on its link, e.g. index.html#offer-tuneup
function openFromHash() {
  const id = location.hash.slice(1);
  if (!id) return;
  const el = document.getElementById(id);
  if (el && el.tagName === 'DETAILS') el.open = true;
}
window.addEventListener('hashchange', openFromHash);
openFromHash();

// Ticker: repeat the items so the loop is seamless, and wire up the pause button
document.querySelectorAll('.ticker').forEach((ticker) => {
  const track = ticker.querySelector('.ticker__track');
  const items = track.innerHTML;
  track.innerHTML = items.repeat(6);
  track.querySelectorAll('.ticker__item').forEach((item, i) => {
    if (i >= track.children.length / 6) item.setAttribute('aria-hidden', 'true');
  });
  const button = ticker.querySelector('.ticker__toggle');
  if (!button) return;
  button.addEventListener('click', () => {
    const paused = ticker.classList.toggle('is-paused');
    button.textContent = paused ? 'Play' : 'Pause';
    button.setAttribute('aria-pressed', String(paused));
  });
});
