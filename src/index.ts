import "./styles.scss";
import { Channel, channels } from "./utils/channels";
import { Message, messages } from "./utils/messages";
import arrowIcon from "./assets/icons/arrow.svg";
import emojiFingerIcon from "./assets/icons/emoji-finger.svg";
import emojiIcon from "./assets/icons/emoji.svg";


const channelsList = document.getElementById("channels-list");
const channelsHeader = document.getElementById("channels-header");
const rollupIcon = document.querySelector<HTMLImageElement>(".rollup-icon");

// Рендеринг списка каналов
function renderChannelsList(): void {
  if (channelsList) {
    channelsList.innerHTML = channels
      .map((channel: Channel) => {
        const iconSVG = channel.type === "public" ? `
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 2.25L4.5 15.75" stroke="#464446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.5 2.25L10.5 15.75" stroke="#464446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H15.75" stroke="#464446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.25 12H15" stroke="#464446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        ` : `
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.25 7.5H3.75C2.92157 7.5 2.25 8.17157 2.25 9V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9C15.75 8.17157 15.0784 7.5 14.25 7.5Z" stroke="#464446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.5 4.5C4.5 3.90326 4.73705 3.33097 5.15901 2.90901C5.58097 2.48705 6.15326 2.25 6.75 2.25H11.25C11.8467 2.25 12.419 2.48705 12.841 2.90901C13.2629 3.33097 13.5 3.90326 13.5 4.5V7.5H4.5V4.5Z" stroke="#464446" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
        return `
          <button>
            ${iconSVG}
            <p>${channel.name}</p>
          </button>
        `;
      })
      .join("");
  }
}

// Функциональность раскрывающегося списка каналов
function setupDropdownFunctionality(): void {
  if (channelsHeader && channelsList && rollupIcon) {
    channelsHeader.addEventListener("click", () => {
      channelsList.classList.toggle("hidden");
      rollupIcon.classList.toggle("rotated");
    });
  }
}

// Рендеринг списка сообщений
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
        <img src="${message.avatar}" alt="Аватар ${message.author}" width="48" height="auto"/>
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
                    <span>1</span>
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

// Функция для настройки редактирования текста
function setupTextEditing(): void {
  const toolbarButtons = document.querySelectorAll('.toolbar .btn');
  const content = document.querySelector('.content');

  if (content) {
    // Добавляем обработчики событий для кнопок на панели инструментов
    toolbarButtons.forEach(button => {
      button.addEventListener('click', () => {
        const role = button.getAttribute('data-role');
        if (role) {
          document.execCommand(role, false, undefined);
        }
      });
    });

    // Добавляем обработчик события для вставки ссылки
    const linkButton = document.getElementById('link');
    if (linkButton) {
      linkButton.addEventListener('click', () => {
        const url = prompt('Введите URL ссылки:');
        if (url) {
          document.execCommand('createLink', false, url);
        }
      });
    }
  }
}

renderChannelsList();
setupDropdownFunctionality();
renderMessages(messages);
setupLikeButton();
setupTextEditing();