# Contributing

This repository is a controlled design comparison. Contributions should preserve the ability to compare the baseline and redesigned versions fairly.

## Principles

- Do not silently modernize the baseline; it exists as the reference condition.
- Keep experimental changes isolated to the redesigned surface unless the change fixes shared infrastructure.
- Do not add customer data, private conversations, credentials, payment information, or unpublished business information.
- Avoid claims of improved conversion unless supported by a documented measurement method.
- Review the rights and production suitability of any added image, logo, font, or brand asset.

## Development

```bash
npm install
npm run dev
```

Before opening a pull request:

```bash
npm run lint
npm run build
```

## Pull request expectations

Include:

1. the design or product problem;
2. the version affected: baseline, redesign, index, or shared infrastructure;
3. screenshots at relevant mobile and desktop sizes;
4. validation results;
5. accessibility, asset-rights, privacy, and business-claim impacts;
6. whether the evaluation framework needs to change.

Do not include real customer messages or sensitive business data in screenshots or test fixtures.
