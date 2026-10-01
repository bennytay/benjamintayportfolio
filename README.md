# Benjamin Tay

Source for Benjamin Tay's deliberately small personal site.

## Stack

Plain HTML, CSS, and a small progressive-enhancement script, deployed with Cloudflare Workers Static Assets.

## Develop locally

```sh
npx wrangler dev
```

## Deploy

```sh
npx wrangler deploy
```

The site has no build step or runtime dependencies. Keep changes accessible and lightweight: semantic HTML, responsive CSS, and JavaScript only where it improves an interaction.
