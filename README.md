# ONLY PRIME - Telegram Mini App Base v2

Projeto estático para simular o grupo VIP dentro do Telegram.

## Mudanças desta versão

- Removida a ideia de “prévia” nos textos visíveis.
- Agora é tratado como representação do VIP.
- Adicionado botão para alternar modo claro e escuro.
- Mantida a mensagem automática do ADM:
  “Hoje tem atualização no grupo: +237 mídias serão enviadas hoje.”

## Escopo

- HTML, CSS e JavaScript puro
- Sem backend
- Sem banco de dados
- Sem pagamento automático
- Sem painel admin

## Como editar o tema inicial

No `script.js`:

```js
initialTheme: "light"
```

Troque para:

```js
initialTheme: "dark"
```

## Onde trocar as mídias

No `script.js`, dentro de `CONFIG.medias`.

### Foto normal

```js
{
  type: "visible-photo",
  src: "./assets/foto-normal.jpg"
}
```

### Foto borrada com download

```js
{
  type: "download-photo",
  src: "./assets/foto-borrada.jpg",
  download: "./assets/foto-borrada.jpg"
}
```

### Vídeo de 10s liberado

```js
{
  type: "playable-video",
  src: "./assets/video-10s.mp4",
  poster: "./assets/thumb-video-10s.jpg"
}
```

### Vídeo VIP bloqueado

Use apenas thumbnail, não coloque o vídeo real:

```js
{
  type: "locked-video",
  src: "./assets/thumb-bloqueada.jpg"
}
```
