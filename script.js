/*
  PROJETO ONLY PRIME
  Edite quase tudo pelo CONFIG abaixo.
*/

const CONFIG = {
  miniAppTitle: "𝗢𝗡𝗟𝗬𝗣𝗥𝗜𝗠𝗘 𝗩𝗜𝗣 🔥",
  groupName: "𝗢𝗡𝗟𝗬𝗣𝗥𝗜𝗠𝗘 𝗩𝗜𝗣 🔥",
  adminName: "ADM 👑",
  avatarUrl: "./assets/photo_4981285353620704197_y.jpg",

  members: "67.483",
  online: "2.014",

  postCaption: "Conteúdos atualizados diariamente. As mídias completas ficam disponíveis dentro do grupo.",
  postReactions: ["🔥 8", "👀 2"],

  initialTheme: "light",

  adminUpdate: {
    enabled: true,
    delayMs: 6500,
    author: "ADM 👑",
    text: "Hoje tem atualização no grupo: +237 mídias serão enviadas hoje.",
    reactions: ["🔥 12", "👀 6"]
  },

  adminAlbum: {
    enabled: true,
    delayMs: 1700,
    author: "ADM 👑",
    text: "Mais 6 mídias enviadas agora.",
    title: "ONLYPRIME VIP",
    footer: "Atualização",
    views: "392",
    reactions: ["🔥 18", "👀 9"],
    images: [
      "./assets/photo_4981285353620704201_y.jpg",
      "./assets/photo_4981285353620704202_y.jpg",
      "./assets/photo_4981285353620704203_y.jpg",
      "./assets/photo_4981285353620704204_y.jpg",
      "./assets/photo_4981285353620704205_x.jpg",
      "./assets/photo_4981285353620704206_y.jpg"
    ]
  },

  medias: [
    {
      type: "visible-photo",
      src: "./assets/foto-normal.jpg",
      fallbackSrc: "./assets/placeholder-photo.svg",
      label: "FOTO",
      size: "",
      time: "",
      download: ""
    },
    {
      type: "download-photo",
      src: "./assets/foto-download.jpg",
      fallbackSrc: "./assets/placeholder-blur.svg",
      label: "FOTO",
      size: "4.8 MB",
      time: "",
      download: "./assets/foto-download.jpg"
    },
    {
      type: "download-video",
      src: "./assets/video-10s.mp4",
      poster: "",
      fallbackPoster: "./assets/placeholder-blur.svg",
      label: "VÍDEO",
      size: "5.6 MB",
      time: "0:10",
      download: "./assets/video-10s.mp4"
    },
    {
      type: "blurred-photo",
      src: "./assets/thumb-video-bloqueado.jpg",
      fallbackSrc: "./assets/placeholder-blur.svg",
      label: "",
      size: "",
      time: "",
      download: ""
    }
  ],

  typingNames: ["Maikon D.", "Gabriel R.", "André L.", "Rogério L.", "Pedro A."],

  messages: [
    { author: "João P.", text: "mano esse de hoje... sem palavras", reactions: ["🔥 1"] },
    { author: "Lucas K.", text: "esse grupo é absurdo 🔥", reactions: ["🔥 3", "👀 2"] },
    { author: "Pedro L.", text: "isso aqui tá muito bom kkkkk", reactions: ["😂 5"] },
    { author: "Rogério L.", text: "tem muita coisa completa aqui?", reactions: ["👀 1"] },
    { author: "Maikon D.", text: "ADM posta mais uma mídia aí", reactions: ["👀 4"] },
    { author: "Carlos R.", text: "entrei ontem e valeu muito", reactions: ["🔥 2"] }
  ],

  messageDelayMs: 1350
};

const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
}

const miniTitle = document.getElementById("miniTitle");
const groupName = document.getElementById("groupName");
const adminName = document.getElementById("adminName");
const groupAvatar = document.getElementById("groupAvatar");
const memberCount = document.getElementById("memberCount");
const onlineCount = document.getElementById("onlineCount");
const postCaption = document.getElementById("postCaption");
const postReactions = document.getElementById("postReactions");
const postTime = document.getElementById("postTime");
const mediaList = document.getElementById("mediaList");
const messagesEl = document.getElementById("messages");
const chat = document.getElementById("chat");
const typingLine = document.getElementById("typingLine");
const typingName = document.getElementById("typingName");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");
const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");

let messageIndex = 0;
let updateWasShown = false;
let albumWasShown = false;
let shouldStickToBottom = true;
let touchStartY = 0;
let onlineNumber = parseInt(String(CONFIG.online).replace(/\D/g, ""), 10) || 2014;

function applyConfig() {
  document.title = CONFIG.groupName;
  miniTitle.textContent = CONFIG.miniAppTitle;
  groupName.textContent = CONFIG.groupName;
  adminName.textContent = CONFIG.adminName;
  groupAvatar.src = CONFIG.avatarUrl;
  memberCount.textContent = CONFIG.members;
  onlineCount.textContent = CONFIG.online;
  postCaption.textContent = CONFIG.postCaption;
  postTime.textContent = nowTime();

  postReactions.innerHTML = CONFIG.postReactions
    .map(item => `<span>${item}</span>`)
    .join("");

  applyTheme(localStorage.getItem("onlyPrimeTheme") || CONFIG.initialTheme);
  renderMedias();
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("onlyPrimeTheme", isDark ? "dark" : "light");
}

function toggleTheme() {
  applyTheme(document.body.classList.contains("dark") ? "light" : "dark");
}

function renderMedias() {
  mediaList.innerHTML = "";

  CONFIG.medias.forEach((media) => {
    const isVideo = media.type.includes("video");
    const shouldBlur = media.type === "download-photo" || media.type === "download-video" || media.type === "blurred-photo";

    const card = document.createElement("div");
    card.className = [
      "media-card",
      isVideo ? "video" : "photo",
      shouldBlur ? "blurred" : "",
      media.type
    ].join(" ");

    if (media.type === "playable-video") {
      card.appendChild(createPlayableVideo(media));
    } else if (media.type === "download-video") {
      card.appendChild(createVideoPreview(media));
    } else {
      card.appendChild(createImage(media.src, media.fallbackSrc, media.label || "mídia"));
    }

    if (media.label) card.insertAdjacentHTML("beforeend", `<span class="media-badge">${media.label}</span>`);
    if (media.size) card.insertAdjacentHTML("beforeend", `<span class="media-size">${media.size}</span>`);
    if (media.time) card.insertAdjacentHTML("beforeend", `<span class="media-time">${media.time}</span>`);

    if (media.type === "visible-photo") {
      const btn = document.createElement("button");
      btn.className = "media-center-btn";
      btn.type = "button";
      btn.textContent = "⌕";
      btn.style.fontSize = "24px";
      btn.setAttribute("aria-label", "Abrir foto");
      btn.addEventListener("click", () => openImage(media.src, media.fallbackSrc));
      card.appendChild(btn);

      card.addEventListener("click", (event) => {
        if (event.target === card || event.target.tagName === "IMG") openImage(media.src, media.fallbackSrc);
      });
    }

    if (media.type === "download-photo") {
      card.addEventListener("click", (event) => {
        if (event.target === card || event.target.tagName === "IMG") openImage(media.src, media.fallbackSrc);
      });
    }

    if (media.type === "download-video") {
      card.addEventListener("click", (event) => {
        if (event.target === card || event.target.tagName === "VIDEO") openVideo(media.src, media.poster || "");
      });
    }

    if (media.type === "download-photo" || media.type === "download-video") {
      const link = document.createElement("a");
      link.className = "media-center-btn";
      link.href = media.download || media.src;
      link.download = "";
      link.textContent = "↓";
      link.setAttribute("aria-label", media.type === "download-video" ? "Baixar vídeo" : "Baixar foto");
      card.appendChild(link);
    }

    mediaList.appendChild(card);
  });
}

function createImage(src, fallbackSrc, alt) {
  const image = document.createElement("img");
  image.src = src || fallbackSrc || "./assets/placeholder-blur.svg";
  image.alt = alt;

  if (fallbackSrc) {
    image.addEventListener("error", () => {
      if (image.src.includes(fallbackSrc)) return;
      image.src = fallbackSrc;
    });
  }

  return image;
}

function createVideoPreview(media) {
  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.poster = media.poster || "";
  video.setAttribute("aria-label", media.label || "mídia");

  video.addEventListener("loadedmetadata", () => {
    if (Number.isFinite(video.duration) && video.duration > 0) {
      video.currentTime = Math.min(0.2, video.duration / 2);
    }
  });

  video.addEventListener("error", () => {
    if (!media.fallbackPoster) return;
    const image = createImage(media.fallbackPoster, "", media.label || "mídia");
    video.replaceWith(image);
  });

  const source = document.createElement("source");
  source.src = media.src;
  source.type = "video/mp4";
  video.appendChild(source);

  return video;
}

function createPlayableVideo(media) {
  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.poster = media.poster || media.fallbackPoster || "";

  if (media.fallbackPoster) {
    video.addEventListener("error", () => {
      if (!video.poster.includes(media.fallbackPoster)) video.poster = media.fallbackPoster;
    });
  }

  const source = document.createElement("source");
  source.src = media.src;
  source.type = "video/mp4";
  video.appendChild(source);

  return video;
}

function createMessage(item, extraClass = "") {
  const article = document.createElement("article");
  article.className = [
    "message",
    isAdminAuthor(item.author) ? "admin-message" : "",
    extraClass
  ].filter(Boolean).join(" ");

  const reactions = (item.reactions || [])
    .map(reaction => `<span>${reaction}</span>`)
    .join("");

  article.innerHTML = `
    <span class="msg-author">${item.author}</span>
    <div class="msg-text">${item.text}</div>
    ${reactions ? `<div class="msg-reactions">${reactions}</div>` : ""}
    <div class="msg-meta">${nowTime()}</div>
  `;

  messagesEl.appendChild(article);
  maybeScrollToBottom();
}

function createAdminAlbum() {
  if (!CONFIG.adminAlbum?.enabled || albumWasShown) return;
  albumWasShown = true;

  const article = document.createElement("article");
  article.className = "message admin-message album-message";

  const album = document.createElement("div");
  album.className = "album-card";

  const title = document.createElement("div");
  title.className = "album-title";
  title.textContent = CONFIG.adminAlbum.title;
  album.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "album-grid";

  CONFIG.adminAlbum.images.forEach((src) => {
    const tile = document.createElement("div");
    tile.className = "album-tile";
    tile.appendChild(createImage(src, "./assets/placeholder-blur.svg", "mídia"));
    grid.appendChild(tile);
  });

  album.appendChild(grid);

  const footer = document.createElement("div");
  footer.className = "album-footer";
  footer.innerHTML = `
    <span>${CONFIG.adminAlbum.footer}</span>
    <span>👁 ${CONFIG.adminAlbum.views} ${nowTime()}</span>
  `;
  album.appendChild(footer);

  const reactions = (CONFIG.adminAlbum.reactions || [])
    .map(reaction => `<span>${reaction}</span>`)
    .join("");

  article.innerHTML = `
    <span class="msg-author">${CONFIG.adminAlbum.author}</span>
    <div class="msg-text">${CONFIG.adminAlbum.text}</div>
  `;
  article.appendChild(album);
  if (reactions) article.insertAdjacentHTML("beforeend", `<div class="msg-reactions">${reactions}</div>`);
  article.insertAdjacentHTML("beforeend", `<div class="msg-meta">${nowTime()}</div>`);

  messagesEl.appendChild(article);
  updateOnlineCounter();
  maybeScrollToBottom();
}

function scheduleFinalAdminAlbum() {
  if (!CONFIG.adminAlbum?.enabled || albumWasShown) return;
  setTimeout(createAdminAlbum, CONFIG.adminAlbum.delayMs);
}

function scheduleAdminUpdate() {
  if (!CONFIG.adminUpdate?.enabled) return;

  setTimeout(() => {
    if (updateWasShown) return;
    updateWasShown = true;

    createMessage({
      author: CONFIG.adminUpdate.author,
      text: CONFIG.adminUpdate.text,
      reactions: CONFIG.adminUpdate.reactions
    }, "update-admin");

    updateOnlineCounter();
  }, CONFIG.adminUpdate.delayMs);
}

function loopMessages() {
  if (messageIndex >= CONFIG.messages.length) {
    hideTyping();
    scheduleFinalAdminAlbum();
    return;
  }

  showTyping();

  setTimeout(() => {
    hideTyping();
    createMessage(CONFIG.messages[messageIndex]);
    messageIndex += 1;
    updateOnlineCounter();
    setTimeout(loopMessages, CONFIG.messageDelayMs);
  }, 850 + Math.random() * 500);
}

function showTyping() {
  typingName.textContent = randomItem(CONFIG.typingNames);
  typingLine.classList.remove("hidden");
  maybeScrollToBottom();
}

function hideTyping() {
  typingLine.classList.add("hidden");
}

function updateOnlineCounter() {
  onlineNumber += Math.random() > 0.5 ? 1 : -1;
  onlineNumber = Math.max(900, onlineNumber);
  onlineCount.textContent = onlineNumber.toLocaleString("pt-BR");
}

function openImage(src, fallbackSrc) {
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.classList.add("hidden");
  modalImage.classList.remove("hidden");
  modalImage.src = src || fallbackSrc || "";
  modalImage.onerror = () => {
    if (fallbackSrc && !modalImage.src.includes(fallbackSrc)) modalImage.src = fallbackSrc;
  };
  imageModal.classList.remove("hidden");
}

function openVideo(src, poster) {
  modalImage.src = "";
  modalImage.classList.add("hidden");
  modalVideo.classList.remove("hidden");
  modalVideo.poster = poster || "";
  modalVideo.src = src;
  modalVideo.load();
  imageModal.classList.remove("hidden");
}

function closeMedia() {
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  modalImage.src = "";
  modalImage.classList.remove("hidden");
  modalVideo.classList.add("hidden");
  imageModal.classList.add("hidden");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2600);
}

function nowTime() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function isAdminAuthor(author) {
  return String(author || "").toUpperCase().includes("ADM");
}

function isNearBottom() {
  return chat.scrollHeight - chat.scrollTop - chat.clientHeight < 80;
}

function maybeScrollToBottom() {
  if (shouldStickToBottom) scrollToBottom();
}

function scrollToBottom() {
  chat.scrollTop = chat.scrollHeight;
}

function handleChatScroll() {
  shouldStickToBottom = isNearBottom();
}

function handleChatWheel(event) {
  if (event.deltaY < 0) shouldStickToBottom = false;
}

function handleTouchStart(event) {
  touchStartY = event.touches[0]?.clientY || 0;
}

function handleTouchMove(event) {
  const currentY = event.touches[0]?.clientY || 0;
  if (currentY - touchStartY > 6) shouldStickToBottom = false;
}

closeModal.addEventListener("click", closeMedia);
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) closeMedia();
});
themeToggle.addEventListener("click", toggleTheme);
chat.addEventListener("scroll", handleChatScroll, { passive: true });
chat.addEventListener("wheel", handleChatWheel, { passive: true });
chat.addEventListener("touchstart", handleTouchStart, { passive: true });
chat.addEventListener("touchmove", handleTouchMove, { passive: true });

applyConfig();
setTimeout(loopMessages, 700);
scheduleAdminUpdate();
