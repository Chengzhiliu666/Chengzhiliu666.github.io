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


## October 2026 interaction refinement

Research interests are Agentic AI, Multimodal AI, and Trustworthy AI. Updates and Publications use native `details`/`summary` and are closed by default on page load. Expanded content uses bounded, keyboard-focusable scroll regions. All 13 papers remain in the HTML, and native disclosures work without JavaScript. Printing temporarily opens the sections and restores their state afterward.

Official affiliation marks are stored locally, extracted from the institutions’ public homepage assets: `https://www.ucsb.edu/` (header wordmark), `https://www.liverpool.ac.uk/` (header logo), and `https://research.google/gr/static/assets/icons/glue-icons.svg` (`google-color-logo`). Marks indicate the existing education/research affiliations only. The three research diagrams, social line icons, and animated background paths are original SVGs. The pause control applies to all continuous decorative animations; device reduced-motion preferences disable all motion.


The imported homepage was refined with a research-focused hero lead, three system diagrams in the Research cards, and a bounded News archive. The News region supports touch, wheel, and keyboard scrolling and expands for printing. News items bypass scroll-reveal effects so older entries remain readable inside the nested scroll region.


## Text-only publications and service update (2026-10-13)

Publications now use a single text column, with all 13 thumbnails and their figure lightbox removed. Research diagrams are unchanged. Academic Services uses category bullets and a blue rule, with invited talks kept separately.

Service sources: the supplied CV supports NeurIPS, ICML, CVPR, ICLR, AAAI, and AAAI-AIA (2026). The signed-in Chengzhi Liu OpenReview account's Active Consoles additionally confirmed AAAI 2027 Program Committee, ICLR 2027 Reviewers, MICCAI 2026 SAFER Reviewers, and COLM 2026 WAB Reviewers, alongside ICML/NeurIPS 2026. Role membership is not a claim that future-cycle reviews are completed. Author consoles were not treated as reviewer roles. No manuscript identifiers, review contents, or account credentials are stored here.


## Publication preview (2026-10-13)

Publications initially show the first three papers. Show all/Show fewer toggles the full list with aria-expanded and aria-controls. Search and topic filters show every match regardless of preview state; clearing them returns to the chosen preview state. Without JavaScript and when printing, all papers remain available.


## Compact academic layout (2026-10-13)

Sections use full-width headings and blue rules instead of a reserved heading column. The content container is 1200px, the hero photo is 230px, and research diagrams sit beside their text. Tighter spacing preserves the complete biography, all papers, News scrolling, publication expansion, and light/dark modes. At a 1280px viewport with three papers visible, page height decreased from 3670px to 2445px; hero height decreased from 959px to 522px. Mobile and tablet layouts were checked for horizontal overflow.


## Visual identity and current Google role (2026-10-13)

Removed the motion toggle and legacy paused-state lookup. A time-based canvas orbital braid now animates continuously while visible, with blue/cyan light packets, pointer response, and quieter rendering behind biography text. System reduced-motion remains respected; background tabs and offscreen canvas rendering suspend to save resources. Affiliation logos no longer use grayscale. Publication titles use blue semibold type and Chengzhi Liu uses bold underlined author styling. Per user correction, the Google Cloud AI role is June 2026–present throughout the biography, affiliation strip, News, and Experience.


## Page frame and News timeline (2026-10-13)

Main content and footer sit in a bordered page frame over a blue-tinted outer background, with matching dark-mode colors and narrower mobile margins. Removed the redundant identity badge above the name. News uses a date column, continuous vertical line and event nodes within the existing scroll region. Contact copy includes recursive self-improvement.


## Visual system refinement (2026-10-13)

Replaced the heavy rounded outer frame with a subtle paper-like surface and blue top edge. Section headings use fine trailing rules; Research uses open columns with separators rather than nested card borders. Affiliation strips, navigation, contact buttons, filters, photo framing, and publication links share consistent alignment and restrained corner radii. All academic content is unchanged. Verified at 320px, 390px, 768px, and 1280px, including dark mode, publication expansion/filtering, and scrollable News.


## Photo album and explorer identity (2026-10-13)

The supplied canyon photo is stored unchanged as images/chengzhi-canyon.jpg. Clicking the portrait stack opens a native modal dialog with a two-photo unfolding animation. Escape, the close button, and a backdrop click close it and restore focus to the portrait. A custom CL compass monogram is shared by the header and favicon. An original SVG scholar with mortarboard, backpack, and map advances down the page margin with scroll progress; walking limbs respond to scrolling, and gentle idle motion remains active. Motion respects the system reduced-motion preference.

Publications are grouped by first/co-first authorship (10 papers) before collaborative work (3 papers), preserving existing author credits. Reasoning Within the Mind is third, following StreamMind and WorldMemArena. Search, filters, and the default three-paper preview also hide empty group headings. News is now 140px tall on desktop and 165px on mobile. Desktop checks covered album opening/Escape/focus restoration, the three-paper preview, full 13-paper list, authorship ordering, search/group visibility, and scroll-linked explorer position.


## News browsing and pointer effects (2026-10-13)

News is capped at 920px wide, centered within its section, and 290px tall (310px on mobile). The timeline retains native wheel/touch/keyboard scrolling; up/down buttons advance by 80% of its viewport and disable at the corresponding edge. Scroll chaining resumes at the archive boundaries.

Fine mouse pointers get an offset blue glow and a brief custom graduation-cap effect on primary clicks. The native cursor is preserved, the effect layer cannot intercept input, and form editing is excluded. Click effects are bounded to six instances and removed after animation. Effects are disabled for reduced-motion and coarse/touch pointers. Desktop checks verified arrow/keyboard scrolling and edge states, cap rendering/cleanup, and non-intercepting overlays; a 390px local iframe verified mobile dimensions and no horizontal overflow.


## Three-photo album and latent landscape (2026-10-13)

Added the user-supplied open-sky photo unchanged as images/chengzhi-open-sky.jpg. The portrait now hints at three stacked photos; the expanded desktop album presents three cards. At mobile widths it becomes a native horizontal scroll-snap gallery with a visible swipe hint, retaining the full photographs. Verified all three images load, Escape restores the page, and the third image is reachable in the 390px preview without page overflow.

Replaced the orbital-braid backdrop with a custom projected, evolving parametric surface: translucent facets, depth-dependent geometry, blue/cyan wire contours, travelling signals, and smooth pointer/scroll parallax. A second canvas carries flowing contours through the outer page margins. Removed the old dotted portrait orbit. The text column is masked to preserve readability. Rendering is capped near 30fps (24fps mobile), uses capped pixel density and lower mobile geometry resolution, suspends in hidden tabs, skips the offscreen hero, and uses a static composition for reduced-motion users. Narrow screens omit the outer contour layer. Verified light/dark views and no browser console errors.


## Clean photo presentation and visible edge motion (2026-10-13)

Removed the portrait overlay phrase, location caption, album headline/eyebrow, photo captions, and swipe copy. The album retains an accessible name, image descriptions, native scrolling, and its close button. The portrait uses only a small album icon.

Replaced mostly clipped edge contours with three interwoven ribbons on each side, moving blue/cyan illumination, and bright signals travelling in opposite vertical directions. Their paths are anchored inside the actual visible gutters. Desktop margins are 60px minimum while the page remains capped at 1200px; tablet/mobile widths are unchanged. The hero signals also move faster. Two same-position screenshots confirmed changing pixels in both outer gutters, and light/dark views and album keyboard closing were checked.


## Simplified outer background (2026-10-13)

Per follow-up feedback, removed the interwoven outer ribbons and all edge signal particles. The gutters now contain only two low-opacity blue/cyan light gradients that drift slowly. The hero surface, clean three-photo album, and existing page interactions are unchanged.
