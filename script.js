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

  postCaption: "ATUALIZAÇÃO DE HOJE +830 MÍDIAS ENVIADAS HOJE",
  postReactions: ["🔥 8", "👀 2"],

  initialTheme: "light",

  adminUpdate: {
    enabled: true,
    afterMessageIndex: 0,
    gapMs: 1400,
    author: "ADM 👑",
    text: "Hoje tem atualização no grupo: +237 mídias serão enviadas hoje.",
    reactions: ["🔥 12", "👀 6"]
  },

  adminAlbums: [
    {
      enabled: true,
      afterMessageIndex: 1,
      gapMs: 1700,
      author: "ADM 👑",
      text: "Mais conteúdo da Bruna Vieira 🔥",
      title: "BRUNA VIEIRA",
      footer: "Atualização +60 mídias",
      views: "392",
      reactions: ["🔥 18", "👀 9"],
      moreCount: 56,
      items: [
        { type: "video", src: "./assets/novas-midias/bruna-vieira/privacy-brunavip-36.mp4", locked: true },
        { type: "video", src: "./assets/novas-midias/bruna-vieira/privacy-brunavip-55.mp4", locked: true },
        { type: "video", src: "./assets/novas-midias/bruna-vieira/privacy-brunavip-59.mp4", locked: true },
        { type: "video", src: "./assets/novas-midias/bruna-vieira/privacy-brunavip-55.mp4", locked: true }
      ]
    },
    {
      enabled: true,
      afterMessageIndex: 2,
      gapMs: 1800,
      author: "ADM 👑",
      text: "Mais mídias da Kerolay Chaves 🔥",
      title: "KEROLAY CHAVES",
      footer: "Atualização +45 mídias",
      views: "301",
      reactions: ["🔥 14", "👀 7"],
      moreCount: 41,
      items: [
        { type: "photo", src: "./assets/novas-midias/kerolay-chaves/5031048902001495243.jpg", locked: false },
        { type: "photo", src: "./assets/novas-midias/kerolay-chaves/5031048902001495244.jpg", locked: true },
        { type: "photo", src: "./assets/novas-midias/kerolay-chaves/5031048902001495245.jpg", locked: false },
        { type: "photo", src: "./assets/novas-midias/kerolay-chaves/5031048902001495246.jpg", locked: true }
      ]
    },
    {
      enabled: true,
      afterMessageIndex: 2,
      gapMs: 2000,
      author: "ADM 👑",
      text: "Fechando o dia com Martina Oliveira 🔥",
      title: "MARTINA OLIVEIRA",
      footer: "Atualização +52 mídias",
      views: "275",
      reactions: ["🔥 16", "👀 8"],
      moreCount: 48,
      items: [
        { type: "photo", src: "./assets/novas-midias/martina-oliveira/5031048902001495239.jpg", locked: false },
        { type: "video", src: "./assets/novas-midias/martina-oliveira/video-2025-09-09-23-49-32-3.mp4", locked: false, blurred: true },
        { type: "photo", src: "./assets/novas-midias/martina-oliveira/5031048902001495240.jpg", locked: true },
        { type: "photo", src: "./assets/novas-midias/martina-oliveira/5031048902001495241.jpg", locked: false }
      ]
    }
  ],

  medias: [
    {
      type: "visible-photo",
      src: "./assets/novas-midias/martina-oliveira/5031048902001495236.jpg",
      fallbackSrc: "./assets/placeholder-photo.svg",
      label: "FOTO",
      size: "",
      time: "",
      download: ""
    },
    {
      type: "download-photo",
      src: "./assets/novas-midias/martina-oliveira/5031048902001495237.jpg",
      fallbackSrc: "./assets/placeholder-blur.svg",
      label: "FOTO",
      size: "",
      time: "",
      download: "./assets/novas-midias/martina-oliveira/5031048902001495237.jpg"
    },
    {
      type: "playable-video",
      src: "./assets/video-10s.mp4",
      poster: "",
      fallbackPoster: "./assets/placeholder-blur.svg",
      label: "VÍDEO PRINCIPAL",
      size: "",
      time: "",
      download: ""
    },
    {
      type: "blurred-photo",
      src: "./assets/novas-midias/martina-oliveira/5031048902001495238.jpg",
      fallbackSrc: "./assets/placeholder-blur.svg",
      label: "",
      size: "",
      time: "",
      download: ""
    }
  ],

  typingNames: ["Maikon D.", "Gabriel R.", "André L.", "Rogério L.", "Pedro A."],

  messages: [
    { author: "Lucas K.", text: "esse grupo é absurdo 🔥", reactions: ["🔥 3", "👀 2"] },
    { author: "Carlos R.", text: "Ainda bem que encontrei esse grupo, não aguentava mais ficar procurando pelos conteúdos 🔥", reactions: ["🔥 2"] }
  ],

  messageDelay: {
    baseMs: 900,
    incrementMs: 350,
    maxMs: 3200,
    jitterMs: 600
  }
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
const typingVerb = document.getElementById("typingVerb");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");
const toast = document.getElementById("toast");
const themeToggle = document.getElementById("themeToggle");

let messageIndex = 0;
let updateWasShown = false;
const albumShownFlags = CONFIG.adminAlbums.map(() => false);
let shouldStickToBottom = true;
let touchStartY = 0;
let onlineNumber = parseInt(String(CONFIG.online).replace(/\D/g, ""), 10) || 2014;

function applyConfig() {
  document.title = CONFIG.groupName;
  miniTitle.textContent = CONFIG.miniAppTitle;
  groupName.textContent = CONFIG.groupName;
  adminName.textContent = CONFIG.adminName;
  groupAvatar.src = encodePath(CONFIG.avatarUrl);
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

function encodePath(path) {
  return path ? encodeURI(path) : path;
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
      link.href = encodePath(media.download || media.src);
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
  image.src = encodePath(src) || fallbackSrc || "./assets/placeholder-blur.svg";
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
  video.poster = encodePath(media.poster) || "";
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
  source.src = encodePath(media.src);
  source.type = "video/mp4";
  video.appendChild(source);

  return video;
}

function createPlayableVideo(media) {
  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.poster = encodePath(media.poster || media.fallbackPoster) || "";

  if (media.fallbackPoster) {
    video.addEventListener("error", () => {
      if (!video.poster.includes(media.fallbackPoster)) video.poster = encodePath(media.fallbackPoster);
    });
  }

  const source = document.createElement("source");
  source.src = encodePath(media.src);
  source.type = "video/mp4";
  video.appendChild(source);

  return video;
}

function createAlbumTile(item) {
  const tile = document.createElement("div");
  const locked = item.locked !== false;
  const blurredPreview = !locked && item.blurred === true;
  tile.className = ["album-tile", locked ? "" : "unlocked", blurredPreview ? "blurred-preview" : ""].filter(Boolean).join(" ");

  if (item.type === "video") {
    const video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", "mídia");

    video.addEventListener("loadedmetadata", () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        video.currentTime = Math.min(0.2, video.duration / 2);
      }
    });

    const source = document.createElement("source");
    source.src = encodePath(item.src);
    source.type = "video/mp4";
    video.appendChild(source);

    tile.appendChild(video);

    if (locked) {
      tile.insertAdjacentHTML("beforeend", `<span class="album-tile-lock">🔒</span>`);
    } else {
      tile.insertAdjacentHTML("beforeend", `<span class="album-tile-play">▶</span>`);
      tile.addEventListener("click", () => openVideo(item.src, ""));
    }
  } else {
    tile.appendChild(createImage(item.src, "./assets/placeholder-blur.svg", "mídia"));

    if (locked) {
      tile.insertAdjacentHTML("beforeend", `<span class="album-tile-lock">🔒</span>`);
    } else {
      tile.addEventListener("click", () => openImage(item.src, "./assets/placeholder-blur.svg"));
    }
  }

  return tile;
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

function createAlbumGrid(album) {
  const article = document.createElement("article");
  article.className = "message admin-message album-message";

  const card = document.createElement("div");
  card.className = "album-card";

  const title = document.createElement("div");
  title.className = "album-title";
  title.textContent = album.title;
  card.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "album-grid";
  grid.dataset.count = String(album.items.length);

  album.items.forEach((item) => grid.appendChild(createAlbumTile(item)));

  if (album.moreCount) {
    grid.lastElementChild.insertAdjacentHTML("beforeend", `<span class="album-tile-more">+${album.moreCount}</span>`);
  }

  card.appendChild(grid);

  const footer = document.createElement("div");
  footer.className = "album-footer";
  footer.innerHTML = `
    <span>${album.footer}</span>
    <span>👁 ${album.views} ${nowTime()}</span>
  `;
  card.appendChild(footer);

  const reactions = (album.reactions || [])
    .map(reaction => `<span>${reaction}</span>`)
    .join("");

  article.innerHTML = `
    <span class="msg-author">${album.author}</span>
    <div class="msg-text">${album.text}</div>
  `;
  article.appendChild(card);
  if (reactions) article.insertAdjacentHTML("beforeend", `<div class="msg-reactions">${reactions}</div>`);
  article.insertAdjacentHTML("beforeend", `<div class="msg-meta">${nowTime()}</div>`);

  messagesEl.appendChild(article);
  maybeScrollToBottom();
}

function getEventsAt(checkpoint) {
  const events = [];

  if (CONFIG.adminUpdate?.enabled && !updateWasShown && CONFIG.adminUpdate.afterMessageIndex === checkpoint) {
    events.push({ kind: "adminText" });
  }

  CONFIG.adminAlbums.forEach((album, i) => {
    if (album.enabled && !albumShownFlags[i] && album.afterMessageIndex === checkpoint) {
      events.push({ kind: "grid", album, i });
    }
  });

  return events;
}

function processEvents(events, done) {
  if (!events.length) {
    done();
    return;
  }

  const [event, ...rest] = events;
  const baseGap = event.kind === "adminText" ? CONFIG.adminUpdate.gapMs : event.album.gapMs;
  const gap = (baseGap ?? 1200) + Math.random() * 500;
  const author = event.kind === "adminText" ? CONFIG.adminUpdate.author : event.album.author;

  showTyping(author, event.kind === "grid" ? "está enviando mídia..." : "está digitando...");

  setTimeout(() => {
    hideTyping();

    if (event.kind === "adminText") {
      updateWasShown = true;
      createMessage({
        author: CONFIG.adminUpdate.author,
        text: CONFIG.adminUpdate.text,
        reactions: CONFIG.adminUpdate.reactions
      }, "update-admin");
    } else {
      albumShownFlags[event.i] = true;
      createAlbumGrid(event.album);
    }

    updateOnlineCounter();
    setTimeout(() => processEvents(rest, done), 400);
  }, gap);
}

function loopMessages() {
  if (messageIndex >= CONFIG.messages.length) {
    hideTyping();
    processEvents(getEventsAt(CONFIG.messages.length), () => {});
    return;
  }

  const item = CONFIG.messages[messageIndex];
  showTyping();

  setTimeout(() => {
    hideTyping();
    createMessage(item);
    const currentIndex = messageIndex;
    messageIndex += 1;
    updateOnlineCounter();

    processEvents(getEventsAt(currentIndex), () => {
      setTimeout(loopMessages, getMessageDelay(currentIndex));
    });
  }, getTypingDuration(item.text));
}

function getMessageDelay(index) {
  const cfg = CONFIG.messageDelay;
  const base = Math.min(cfg.baseMs + index * cfg.incrementMs, cfg.maxMs);
  return base + Math.random() * cfg.jitterMs;
}

function getTypingDuration(text) {
  const length = (text || "").length;
  return Math.min(550 + length * 16, 2600) + Math.random() * 400;
}

function showTyping(name, verb) {
  typingName.textContent = name || randomItem(CONFIG.typingNames);
  typingVerb.textContent = verb || "está digitando...";
  typingLine.classList.remove("hidden");
  maybeScrollToBottom();
}

function hideTyping() {
  typingLine.classList.add("hidden");
}

function updateOnlineCounter() {
  const delta = Math.floor(Math.random() * 7) - 2;
  onlineNumber += delta;
  onlineNumber = Math.max(900, onlineNumber);
  onlineCount.textContent = onlineNumber.toLocaleString("pt-BR");
}

function openImage(src, fallbackSrc) {
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.classList.add("hidden");
  modalImage.classList.remove("hidden");
  modalImage.src = encodePath(src) || fallbackSrc || "";
  modalImage.onerror = () => {
    if (fallbackSrc && !modalImage.src.includes(fallbackSrc)) modalImage.src = fallbackSrc;
  };
  imageModal.classList.remove("hidden");
}

function openVideo(src, poster) {
  modalImage.src = "";
  modalImage.classList.add("hidden");
  modalVideo.classList.remove("hidden");
  modalVideo.poster = encodePath(poster) || "";
  modalVideo.src = encodePath(src);
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
