# alexainsworth.com

Personal site and blog, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Write a post

1. Add a Markdown file to `src/content/blog/`, for example `src/content/blog/my-new-post.md`. The file name becomes the URL: `/writing/my-new-post/`.
2. Start it with:

   ```md
   ---
   title: My new post
   description: One sentence that shows up in the post list and link previews.
   date: 2026-11-30
   draft: false
   ---
   ```

3. Write the post below in Markdown. Set `draft: true` to keep it off the site while you work on it.
4. Commit and push to `main`. GitHub builds and publishes the site in about a minute.

## Run it locally

```sh
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

- `src/pages/` holds Home, Writing and About.
- `src/layouts/Base.astro` holds the header and footer.
- `src/components/Photo.astro` is a plain photo and `src/components/PhoneShot.astro` a phone-framed screenshot. Put images in `public/` and pass `src` via `u()`.
- `src/styles/global.css` holds colours and type.

## Connecting alexainsworth.com

The site currently serves from https://ai-a13x.github.io/alexainsworth.com/. To move it to the domain:

1. In GoDaddy DNS, point `@` at GitHub Pages with four A records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and add a CNAME for `www` pointing to `ai-a13x.github.io`.
2. Add `public/CNAME` containing `alexainsworth.com`.
3. Delete the `env` block in `.github/workflows/deploy.yml`.
4. Push, then set the custom domain and tick Enforce HTTPS under Settings > Pages.
