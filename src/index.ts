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
