# Academic homepage maintenance

The homepage remains on GitHub Pages with the existing Jekyll deployment from `main`. No new package installation, external font requests, analytics, or JavaScript framework is needed.

- `_pages/about.html`: complete semantic homepage, with Jekyll front matter (`layout: null`, permalink `/`). `/about/` and `/about.html` remain redirects. All publications are present in the initial HTML, including without JavaScript.
- `assets/academic/site.css`: light blue and midnight blue themes, responsive layout, and the decorative wave animation.
- `assets/academic/site.js`: theme preference, motion preference, publication filters/search, active navigation.
- `files/Chengzhi_CV.pdf`: supplied CV, linked directly from the homepage.
- `images/person.jpg`: existing portrait, unchanged.

To add a paper, duplicate an `article.publication` in the HTML. Set `data-category` to `agents`, `safety`, or `health`, update the year, venue, title, authors, description, and verified links, and adjust the filter counts. Use `Preprint` for work not listed as accepted. Workshop distinctions must explicitly name the workshop. Emphasize Chengzhi Liu and preserve equal-contribution marks. Update the footer date after a substantive content change.

Content was synchronized with the supplied CV in October 2026. Advisor information and existing project/code links were retained from the previous website. Publication titles, authors, contribution marks, and venues follow the CV. The CV still says `Expected 2025` for the undergraduate degree; the homepage deliberately omits that unconfirmed graduation date. Both talks point to the same YouTube URL in the CV, so recording links are omitted pending clarification. StreamMind and the R1 safety paper have no link in the CV; no URL is invented.

Theme follows the device preference until the visitor makes a choice. Motion can be paused independently and is disabled by the device's reduced-motion preference. Storage failures do not break the page. Search/filter controls are revealed only after JavaScript initializes.

Preview through Jekyll (`bundle exec jekyll serve`) when the Ruby dependencies are installed. For a lightweight static preview, strip only the leading YAML front matter from `_pages/about.html` into an ignored temporary `index.html`, and serve it together with `assets/`, `images/`, and `files/`. Keep preview output out of version control. The production build and redirect generation are performed by GitHub Pages.

The previous homepage is recoverable from Git history, immediately before the redesign commit. Never add GitHub tokens or credentials to this repository.
