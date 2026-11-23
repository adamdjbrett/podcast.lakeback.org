// Inlined on every page, with the theme switch.

// Control+K / Command+K opens search from anywhere.
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (location.pathname === '/search/') document.querySelector('#search input')?.focus();
    else location.href = '/search/';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Copy buttons: <button data-copy="id-of-source" data-copied="Copied" hidden>. Shown only if the clipboard API exists.
  if (navigator.clipboard) {
    document.querySelectorAll('[data-copy]').forEach(button => {
      const label = button.textContent;
      button.hidden = false;
      button.addEventListener('click', async () => {
        const source = document.getElementById(button.dataset.copy);
        const status = document.getElementById('copy-status');
        status.textContent = '';
        button.textContent = label;
        try {
          await navigator.clipboard.writeText(source.value ?? source.textContent.trim());
          status.classList.add('visually-hidden');
          status.textContent = button.dataset.copied;
          button.textContent = button.dataset.copied;
          setTimeout(() => (button.textContent = label), 2000);
        } catch {
          status.classList.remove('visually-hidden');
          status.textContent = status.dataset.error;
        }
      });
    });
  }
});

// Start offline caching after the page finishes loading, so it does not compete with the cover image.
if ('serviceWorker' in navigator && location.hostname !== 'localhost') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(error => console.warn('Offline support unavailable:', error));
  }, {once: true});
}
