# betweentheboxes.com

The website for **Between the Boxes**, a strategy & learning studio by Giselle Tran.

Plain HTML, CSS, and a little JavaScript. No build step and no framework, so you can open any `.html` file in a browser to preview it.

## How it's organized

```
index.html                     Homepage
projects.html                  More projects
case-studies/
  ai-transformation.html       Case study 1
  workshop.html                Case study 2
  ai-help-search.html          Case study 3
  localization.html            Case study 4
assets/
  css/
    tokens.css                 Colors, fonts, sizes. Change the brand here.
    base.css                   Page defaults, type, buttons, strips, scribbles
    layout.css                 Containers, sections, color bands, dividers
    components.css             Header, footer, ticker, tiles, diagrams
    home.css                   Homepage sections, in page order
    case-study.css             Case study pages and More projects
  js/
    main.js                    Opens an offer from its link; ticker pause button
  img/                         Logo marks, favicon, hero art, scribbles (SVG)
```

Every page loads `tokens.css`, `base.css`, `layout.css`, and `components.css`, plus its own page file (`home.css` or `case-study.css`).

## Editing content

All the words live in the HTML files. Find the sentence and change it in place. Each section starts with a comment like `<!-- ===== Offers ===== -->`, so it's easy to find your way around.

**Homepage sections, in order:** Header, Hero, Ticker, The pattern, Offers, How I work, Approach (experience, backed by science), Big wins, Testimonial, About, Thoughts, Contact, Footer.

**Case studies** all share one structure:

1. Breadcrumb ("Case study 2 of 4")
2. Case file: title, lede, facts (Role / When / Where / Read), Results
3. The story: a question list on the left, then the "my role, in between" note
4. One `<section class="question">` per question. The dark one uses `question--dark`.
5. How I used AI
6. "If this sounds like your team," linking to the matching offer
7. Next case study

The question list builds its own numbers. If you rename a question, change it in two places: the list in `story__toc` and the matching `<h2>`.

**Case study order:** 1 → 2 → 3 → 4 → back to 1, matching Big wins on the homepage.

**To add the portrait:** put `portrait.jpg` in `assets/img/`, then replace the placeholder comment in the About section with `<img src="assets/img/portrait.jpg" alt="Giselle Tran">`.

**To replace the testimonial:** edit the `<figure class="testimonial">` on the homepage.

**Bar charts** (AI help search) set their length with `style="--value:98%"`. That's the only inline style on the site, because it's data.

## How people reach me (keep these paths intact)

- Every general "Let's talk" button goes to the yellow contact section: `index.html#contact`.
- Each offer has its own address: `#offer-kickstart`, `#offer-tuneup`, `#offer-workshop`, `#offer-learning`. A link to one opens it automatically, through `main.js`.
- Inside each open offer, "Let's talk about…" starts an email with the offer name in the subject.
- "Not sure which fits?" under the offers goes to `#contact`.
- Each case study's "If this sounds like your team" block links to its matching offer, plus a "Let's talk" email.
- The address appears in `mailto:` links. If it changes, search and replace `giselle@betweentheboxes.com`.

## Design rules

The full brand guide is in Notion. The short version:

- **Colors** live in `tokens.css`: cream page, paper tiles, violet deep, yellow, night, ink.
- **Fonts:** Fraunces (headlines), Instrument Sans (body), Courier Prime (small uppercase labels), Special Elite (typewriter strips only).
- **Minimum sizes:** body 18px, supporting text 17px, labels 15px.
- **One yellow typewriter strip** per case study ("my role, in between"). Elsewhere, use Fraunces italic for emphasis.
- **Writing:** say what I believe, and skip "not X, but Y" framing. Use honest numbers only.
- **Reusable classes:** `.label`, `.label--brand`, `.muted`, `.btn`, `.btn--solid`, `.strip`, `.strip--yellow`, `.scribble`, `.pull`, `.tile`, `.link-card`. Reach for these before writing new CSS.

## Deploying

Push to `main`. Netlify publishes the repo root to betweentheboxes.com automatically. There's no build command, and the publish directory is `/`.
