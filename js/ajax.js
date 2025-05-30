function loadRecipeSection(filename) {
  fetch(`recipes/${filename}.html`)
    .then(response => response.text())
    .then(html => {
      // Створюємо тимчасовий елемент для парсингу
      const temp = document.createElement('div');
      temp.innerHTML = html;

      // Знаходимо тільки потрібний блок
      const newContent = temp.querySelector('.col-lg-8.mb-4');
      if (newContent) {
        document.getElementById('mainContent').innerHTML = newContent.innerHTML;
      } else {
        document.getElementById('mainContent').innerHTML = '<div class="text-danger">Не знайдено вміст рецепта.</div>';
      }
    })
    .catch(() => {
      document.getElementById('mainContent').innerHTML = '<div class="text-danger">Не вдалося завантажити рецепт.</div>';
    });
}


document.getElementById('loadUsersBtn').addEventListener('click', () => {
  // Вказуємо кількість записів, наприклад 1 (або до 5)
  const count = 1;

  fetch(`data.php?count=${count}`)
    .then(response => {
      if (!response.ok) throw new Error('Помилка мережі');
      return response.json();
    })
    .then(data => {
      const tbody = document.querySelector('#userTable tbody');
      tbody.innerHTML = ''; // очистити таблицю

      if (data.count > 0 && Array.isArray(data.data)) {
        data.data.forEach(user => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.date}</td>
          `;
          tbody.appendChild(tr);
        });
      } else {
        tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:red;">Користувачі не знайдені</td></tr>`;
      }
    })
    .catch(error => {
      const tbody = document.querySelector('#userTable tbody');
      tbody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:red;">Помилка завантаження: ${error.message}</td></tr>`;
    });
});
