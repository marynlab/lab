window.onload = function () {
  // Зміна кольору заголовка
  document.querySelector('.site-name').style.color = '#e74c3c';

  // Показати поточну дату у футері
  const yearSpan = document.createElement('span');
  yearSpan.innerText = ` (${new Date().toLocaleDateString()})`;
  document.querySelector('footer p').appendChild(yearSpan);

  // Зміна тексту про паску
  const changeTextBtn = document.getElementById('changeTextBtn');
  if (changeTextBtn) {
    changeTextBtn.addEventListener('click', function () {
      const cardText = document.querySelector('.card-text');
      if (cardText) {
        cardText.innerHTML = 'Оновлений опис рецепта паски. Спробуй ще сьогодні!';
      }
    });
  }

  // Canvas: текстове привітання
  const canvas = document.getElementById('holidayCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'gold';
    ctx.font = '20px Arial';
    ctx.fillText('Смачних свят!', 20, 60);
  }

  // Геолокація
  const geoBtn = document.getElementById('geoBtn');
  if (geoBtn) {
    geoBtn.addEventListener('click', function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
          document.getElementById('geoResult').innerText =
            `Ваше місцезнаходження: широта ${pos.coords.latitude.toFixed(2)}, довгота ${pos.coords.longitude.toFixed(2)}`;
        });
      } else {
        alert('Геолокацію не підтримується вашим браузером');
      }
    });
  }

  // Таймер-нагадування через 10 секунд
  setTimeout(() => {
    alert('Не забудьте перевірити рецепт паски!');
  }, 10000);
};
