import "./styles.scss";
import { Channel, channels } from "./utils/channels";
import { Message, messages } from "./utils/messages";
import hashIcon from "./assets/icons/hash.svg";
import lockIcon from "./assets/icons/lock.svg";
import arrowIcon from "./assets/icons/arrow.svg";
import emojiFingerIcon from "./assets/icons/emoji-finger.svg";
import emojiIcon from "./assets/icons/emoji.svg";

// Получаем элементы DOM
const channelsList = document.getElementById("channels-list");
const channelsHeader = document.getElementById("channels-header");
const rollupIcon = document.querySelector<HTMLImageElement>(".rollup-icon");

// Функция для рендеринга списка каналов
function renderChannelsList(): void {
  if (channelsList) {
    channelsList.innerHTML = channels
      .map((channel: Channel) => {
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
}

// Функциональность раскрывающегося списка
function setupDropdownFunctionality(): void {
  if (channelsHeader && channelsList && rollupIcon) {
    channelsHeader.addEventListener("click", () => {
      channelsList.classList.toggle("hidden");
      rollupIcon.classList.toggle("rotated");
    });
  }
}

function renderMessages(
  messages: Message[],
  elementId: string = "chat-list"
): void {
  const today = new Date().toISOString().split("T")[0];
  let todaySeparatorAdded = false;

  const messageList = messages
    .map((message, index, arr) => {
      let html = "";

      if (message.date === today && !todaySeparatorAdded) {
        html += `
        <div class="hr">
          <div class="hr-line"></div>
          <div class="hr-content">
            <p>Today</p>
            <img src="${arrowIcon}" alt="Иконка"/>
          </div>
          <div class="hr-line"></div>
        </div>
        `;
        todaySeparatorAdded = true;
      }

      html += `
      <li class="message">
        <img src="${message.avatar}" alt="Аватар ${message.author}" />
        <div class="message-container">
          <div class="message-info">
            <p class="message-author">${message.author}</p>
            <p class="message-time">${message.time}</p>
          </div>
          <p>${message.content}</p>
          `;

      if (index === arr.length - 1) {
        html += `
                <div class="message-emoji">
                  <button class="emoji-btn-count">
                    <img src="${emojiFingerIcon}" alt="Иконка палец вверх"/>
                    <span>0</span>
                  </button>
                  <button class="emoji-btn-add">
                    <img src="${emojiIcon}" alt="Иконка смайлика"/>                 
                  </button>
                </div>
            `;
      }
      html += `
          </div>
        </li>
      `;
      return html;
    })
    .join("");

  const chatElement = document.getElementById(elementId);
  if (chatElement) {
    chatElement.innerHTML = messageList;
  }
}

// Счетчик лайков
function setupLikeButton(): void {
  document.addEventListener("click", async (event) => {
    const target = event.target as HTMLElement;

    // Проверяем, была ли нажата кнопка лайка
    if (target.closest(".emoji-btn-count")) {
      const emojiBtnCount = target.closest(".emoji-btn-count") as HTMLButtonElement;
      const emojiCountSpan = emojiBtnCount.querySelector<HTMLSpanElement>("span");

      if (emojiBtnCount && emojiCountSpan) {
        // Увеличиваем значение счетчика
        const currentCount = parseInt(emojiCountSpan.textContent || "0", 10);
        const newCount = currentCount + 1;
        emojiCountSpan.textContent = newCount.toString();

        // Добавляем активный класс кнопке
        emojiBtnCount.classList.add("active");

        try {
          // Отправляем POST-запрос
          const response = await fetch("https://stworka.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ count: newCount }),
          });

          // Обработка ответа
          if (response.ok) {
            console.log("Hello, world");
          } else {
            const errorText = await response.text();
            console.error(`Error ${response.status}: ${errorText}`);
          }
        } catch (error) {
          console.error("Request failed", error);
        }
      }
    }
  });
}

renderChannelsList();
setupDropdownFunctionality();
renderMessages(messages);
setupLikeButton();
