"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.scss");
var channels_1 = require("./utils/channels");
var messages_1 = require("./utils/messages");
var hash_svg_1 = __importDefault(require("./assets/icons/hash.svg"));
var lock_svg_1 = __importDefault(require("./assets/icons/lock.svg"));
var arrow_svg_1 = __importDefault(require("./assets/icons/arrow.svg"));
var emoji_finger_svg_1 = __importDefault(require("./assets/icons/emoji-finger.svg"));
var emoji_svg_1 = __importDefault(require("./assets/icons/emoji.svg"));
// Получаем элементы DOM
var channelsList = document.getElementById("channels-list");
var channelsHeader = document.getElementById("channels-header");
var rollupIcon = document.querySelector(".rollup-icon");
// Функция для рендеринга списка каналов
function renderChannelsList() {
    if (channelsList) {
        channelsList.innerHTML = channels_1.channels
            .map(function (channel) {
            var iconSrc = channel.type === "public" ? hash_svg_1.default : lock_svg_1.default;
            return "\n          <button>\n            <img src=\"".concat(iconSrc, "\" alt=\"").concat(channel.type, " icon\"/>\n            <p>").concat(channel.name, "</p>\n          </button>\n        ");
        })
            .join("");
    }
}
// Функциональность раскрывающегося списка
function setupDropdownFunctionality() {
    if (channelsHeader && channelsList && rollupIcon) {
        channelsHeader.addEventListener("click", function () {
            channelsList.classList.toggle("hidden");
            rollupIcon.classList.toggle("rotated");
        });
    }
}
function renderMessages(messages, elementId) {
    if (elementId === void 0) { elementId = "chat-list"; }
    var today = new Date().toISOString().split("T")[0];
    var todaySeparatorAdded = false;
    var messageList = messages
        .map(function (message, index, arr) {
        var html = "";
        if (message.date === today && !todaySeparatorAdded) {
            html += "\n        <div class=\"hr\">\n          <div class=\"hr-line\"></div>\n          <div class=\"hr-content\">\n            <p>Today</p>\n            <img src=\"".concat(arrow_svg_1.default, "\" alt=\"\u0418\u043A\u043E\u043D\u043A\u0430\"/>\n          </div>\n          <div class=\"hr-line\"></div>\n        </div>\n        ");
            todaySeparatorAdded = true;
        }
        html += "\n      <li class=\"message\">\n        <img src=\"".concat(message.avatar, "\" alt=\"\u0410\u0432\u0430\u0442\u0430\u0440 ").concat(message.author, "\" />\n        <div class=\"message-container\">\n          <div class=\"message-info\">\n            <p class=\"message-author\">").concat(message.author, "</p>\n            <p class=\"message-time\">").concat(message.time, "</p>\n          </div>\n          <p>").concat(message.content, "</p>\n          ");
        if (index === arr.length - 1) {
            html += "\n                <div class=\"message-emoji\">\n                  <button class=\"emoji-btn-count\">\n                    <img src=\"".concat(emoji_finger_svg_1.default, "\" alt=\"\u0418\u043A\u043E\u043D\u043A\u0430 \u043F\u0430\u043B\u0435\u0446 \u0432\u0432\u0435\u0440\u0445\"/>\n                    <span>0</span>\n                  </button>\n                  <button class=\"emoji-btn-add\">\n                    <img src=\"").concat(emoji_svg_1.default, "\" alt=\"\u0418\u043A\u043E\u043D\u043A\u0430 \u0441\u043C\u0430\u0439\u043B\u0438\u043A\u0430\"/>                 \n                  </button>\n                </div>\n            ");
        }
        html += "\n          </div>\n        </li>\n      ";
        return html;
    })
        .join("");
    var chatElement = document.getElementById(elementId);
    if (chatElement) {
        chatElement.innerHTML = messageList;
    }
}
// Счетчик лайков
function setupLikeButton() {
    var _this = this;
    document.addEventListener("click", function (event) { return __awaiter(_this, void 0, void 0, function () {
        var target, emojiBtnCount, emojiCountSpan, currentCount, newCount, response, errorText, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    target = event.target;
                    if (!target.closest(".emoji-btn-count")) return [3 /*break*/, 7];
                    emojiBtnCount = target.closest(".emoji-btn-count");
                    emojiCountSpan = emojiBtnCount.querySelector("span");
                    if (!(emojiBtnCount && emojiCountSpan)) return [3 /*break*/, 7];
                    currentCount = parseInt(emojiCountSpan.textContent || "0", 10);
                    newCount = currentCount + 1;
                    emojiCountSpan.textContent = newCount.toString();
                    // Добавляем активный класс кнопке
                    emojiBtnCount.classList.add("active");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("https://stworka.com", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ count: newCount }),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    console.log("Hello, world");
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.text()];
                case 4:
                    errorText = _a.sent();
                    console.error("Error ".concat(response.status, ": ").concat(errorText));
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error("Request failed", error_1);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); });
}
renderChannelsList();
setupDropdownFunctionality();
renderMessages(messages_1.messages);
setupLikeButton();
