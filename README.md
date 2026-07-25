# Florería Paola AR — Design Taste Lab

**A controlled before-and-after design experiment for a real local-business landing page.**

[Open the live comparison](https://floreria-paola-taste-lab.vercel.app) · [Jovan Franco](https://www.jovanfranco.com)

> **Portfolio classification:** public design laboratory. This repository compares two front-end executions of the same business content. It is not the production website and does not process orders, payments, accounts, or customer data.

## Executive overview

Small-business websites often fail not because information is missing, but because hierarchy, trust, navigation, mobile behavior, and calls to action are poorly resolved.

This project keeps the underlying Florería Paola AR business proposition broadly consistent while exposing two versions side by side:

| Route | Version | Purpose |
| --- | --- | --- |
| `#/baseline` | Baseline | Preserve the original visual structure and provide a comparison reference |
| `#/taste` | Redesign | Test stronger hierarchy, trust cues, responsive navigation, visual rhythm, and WhatsApp conversion paths |

The root route acts as a neutral selector so the versions can be evaluated independently.

## Business question

> Can the same local-business content feel more credible, easier to navigate, and more conversion-oriented through design execution alone?

The redesign focuses on:

- immediate identification of the business and location;
- one primary action: request a quote through WhatsApp;
- clearer service and occasion groupings;
- stronger trust language and contact visibility;
- responsive navigation and mobile-first interaction;
- more deliberate typography, spacing, imagery, and visual hierarchy.

## What this project demonstrates

| Capability | Evidence |
| --- | --- |
| Product/design diagnosis | Baseline and redesigned experiences remain directly comparable |
| Conversion-oriented UX | Repeated, contextual WhatsApp calls to action |
| Information architecture | Services, gallery, occasions, events, and ordering flow |
| Responsive front-end delivery | Desktop and mobile navigation patterns |
| Design-system execution | Reusable layout, button, card, typography, spacing, and section treatments |
| Responsible portfolio framing | Explicit separation between an experiment and a production business system |

## Evaluation framework

The comparison is intended to be reviewed against observable criteria rather than preference alone:

1. **Clarity** — Can a first-time visitor understand the offer quickly?
2. **Hierarchy** — Are the most important message and action visually dominant?
3. **Trust** — Does the page feel like a credible local business?
4. **Conversion** — Are quote and contact actions visible at the right moments?
5. **Mobile usability** — Can the experience be navigated comfortably on a small screen?
6. **Accessibility** — Are headings, labels, links, image alternatives, and interactive controls understandable?
7. **Maintainability** — Can sections and content be changed without rebuilding the whole interface?

See [`docs/DESIGN_EVALUATION.md`](docs/DESIGN_EVALUATION.md) for the detailed review checklist.

## Technical implementation

```text
src/
├── baseline/       Original comparison surface
├── pages/          Neutral experiment index
├── taste/          Redesigned experience
├── App.jsx         Hash-based route selection
└── main.jsx
```

### Stack

- React 19
- Vite 8
- JavaScript and CSS
- Oxlint
- Vercel deployment

The experiment intentionally uses a minimal architecture. Hash routes allow the two versions to coexist without a router dependency or backend.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` and choose a version.

### Validation

```bash
npm run lint
npm run build
npm run preview
```

## Data, assets, and limitations

- The project has no authentication, database, analytics pipeline, payment system, or order-management backend.
- It does not collect customer information.
- WhatsApp actions open external contact links; they are not evidence of completed transactions.
- The redesigned page uses externally hosted Unsplash images for demonstration. Image licensing and production suitability must be reviewed before reuse.
- The experiment does not claim statistically significant conversion improvement because no controlled traffic or analytics study is included.
- Business copy, contact details, brand assets, and commercial rights must be validated before any production publication or reuse.

## Portfolio context

This repository demonstrates the ability to translate a small-business objective into a controlled visual experiment, maintain a comparison baseline, and communicate the difference between design evidence and business-outcome evidence.

It should be evaluated as a **design and product-thinking artifact**, not as a claim that the redesigned version is already operating as the business's production commerce platform.

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Security

See [`SECURITY.md`](SECURITY.md). Do not include sensitive customer, business, or vulnerability details in public issues.

## License

No open-source license is currently included. Public repository visibility does not grant permission to reuse the source, branding, content, images, or business contact information.
