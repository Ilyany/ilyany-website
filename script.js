const btn = document.getElementById('theme-button');

btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    btn.textContent = 'Светлая тема';
  } else {
    btn.textContent = 'Тёмная тема';
  }
});
