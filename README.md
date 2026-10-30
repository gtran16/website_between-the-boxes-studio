# betweentheboxes.com

The website for **Between the Boxes**, a strategy & learning studio by Giselle Tran.
Plain HTML and CSS. No build step, no framework: open any file in a browser to preview it.

## Pages

| File | Page |
|---|---|
| `index.html` | Homepage |
| `ai-transformation.html` | Case study 1: AI transformation as a culture shift |
| `workshop.html` | Case study 2: Ten experts, one roadmap, four days |
| `ai-help-search.html` | Case study 3: Help that answers in the customer's own words |
| `localization.html` | Case study 4: 8 locales, one program |
| `projects.html` | More projects |

## Editing content

- All text lives right in each HTML file. Search for the sentence you want to change and edit it in place.
- Each case study follows the same shape: case file band (title, lede, Role/When/Where/Read, Results), the "my role, in between" note, then one section per question (`id="q1"` to `q6`), "How I used AI," the "If this sounds like your team" block, and the next case study link.
- If you rename a question, change it in two places: the sidebar list (`<aside class="toc">`) and the section heading (`<h2 class="qtitle">`).
- Case study order (and the "Next case study" links): 1 → 2 → 3 → 4 → back to 1, matching Big wins on the homepage.
- **How people reach me (keep these paths intact):**
  - Every general "Let's talk" button goes to the yellow contact section: `index.html#contact`.
  - Each offer has its own address: `#offer-kickstart`, `#offer-tuneup`, `#offer-workshop`, `#offer-learning`. Linking to one opens it automatically.
  - Inside each open offer, "Let's talk about…" starts an email with the offer name in the subject.
  - "Not sure which fits?" under the offers goes to `#contact`.
  - Each case study's "If this sounds like your team" block links to its matching offer, plus a "Let's talk" email.
  - The email address appears in `mailto:` links. Search and replace `giselle@betweentheboxes.com` if it changes.

## Design rules (from the brand guide)

- Colors: cream `#F3EEE4` page, paper `#FBF8F2` tiles, violet deep `#5E2E8F`, yellow `#FCF434`, night `#22132F`, ink `#1E1328`.
- Fonts: Fraunces (headlines), Instrument Sans (body), Courier Prime (small uppercase labels), Special Elite (typewriter strips only).
- Minimum sizes: body 18px, supporting text 17px, labels 15px.
- One yellow typewriter strip per case study ("my role, in between"). Use Fraunces italic for emphasis everywhere else.
- In my voice: say what I believe; skip "not X, but Y" framing. Honest numbers only.

## Deploying

Push to `main`. Netlify publishes the repo root to betweentheboxes.com automatically.
