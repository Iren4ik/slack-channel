import './styles.scss';
import { channels } from "./utils/channels";
import hashIcon from './assets/icons/hash.svg';
import lockIcon from './assets/icons/lock.svg';

const channelsList = document.getElementById("channels-list");
const channelsHeader = document.getElementById("channels-header");
const rollupIcon = document.querySelector(".rollup-icon");

// Рендеринг списка каналов
if (channelsList) {
  channelsList.innerHTML = channels
    .map((channel) => {
      const iconSrc = channel.type === "public" ? hashIcon : lockIcon;
      return `
        <button>
          <img src="${iconSrc}" alt="${channel.type} icon"/>
          <p>${channel.name}</p>
        </button>
      `;
    })
    .join("");
}

// Добавляем функциональность раскрывающегося списка
if (channelsHeader && channelsList && rollupIcon) {
  channelsHeader.addEventListener('click', () => {
    channelsList.classList.toggle('hidden');
    rollupIcon.classList.toggle('rotated');
  });
}

// Счетчик лайков
document.addEventListener('DOMContentLoaded', () => {
  const emojiBtnCount = document.querySelector('.emoji-btn-count') as HTMLButtonElement;
  const emojiCountSpan = emojiBtnCount?.querySelector('span');

  if (emojiBtnCount && emojiCountSpan) {
    emojiBtnCount.addEventListener('click', async () => {
      try {
        // Увеличиваем значение счетчика
        const currentCount = parseInt(emojiCountSpan.textContent || '0', 10);
        const newCount = currentCount + 1;
        emojiCountSpan.textContent = newCount.toString();
        
        // Добавляем активный класс кнопке
        emojiBtnCount.classList.add('active');
        console.log('Sending POST request with count:', newCount);

        // Отправляем POST-запрос
        const response = await fetch('https://stworka.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ count: newCount }),
        });

        // Обработка ответа
        if (response.ok) {
          console.log('Hello, world');
        } else {
          const errorText = await response.text();
          console.error(`Error ${response.status}: ${errorText}`);
        }
      } catch (error) {
        console.error('Request failed', error);
      }
    });
  } else {
    console.error('emojiBtnCount or emojiCountSpan not found');
  }
});
