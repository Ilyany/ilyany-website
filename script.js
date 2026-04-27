const btn = document.getElementById('theme-button');

// 2. Слушаем клик
btn.addEventListener('click', function() {
  // 3. Метод toggle: если класса нет — добавит, если есть — удалит
  document.body.classList.toggle('dark-theme');
  
  // Опционально: меняем текст кнопки
  if (document.body.classList.contains('dark-theme')) {
    btn.textContent = 'Светлая тема';
  } else {
    btn.textContent = 'Тёмная тема';
  }
});