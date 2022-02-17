# Turborepo Next.js + Storybook Design System starter

Turborepo starter Template with: Storybook Design System + Next.js app

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `site`: A placeholder documentation site powered by [Next.js](https://nextjs.org)
- `design-system`: core React components
- `utils`: shared React utilities
- `tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `eslint-preset`: ESLint preset

Each package and app is 100% [Typescript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [Typescript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

We do not have a starter yet in `create-turbo` for this quite yet. If you want to use this in the interim, you run the following command:

```sh
npx degit vercel/turborepo/examples/design-system design-system
cd design-system
yarn install
git init . && git add . && git commit -m "Init"
```

### Publishing packages

#### NPM

If you want to publish package to the public NPM registry and make them publicly available, this is already setup for you.

To publish packages to a private NPM organization scope, **remove** the following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

#### GitHub Package Registry

See [Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
