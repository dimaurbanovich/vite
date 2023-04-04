# Loop24Meeting config panel

## TechStack

- Frontend:
  - React
  - TypeScript
  - Redux
- Build:
  - [Vite](https://vitejs.dev/)
- Test:
  - [Cypress](https://www.cypress.io/)
- Style:
  - [styled-components](https://styled-components.com/)

## Preliminary technical solutions for some components

- UI

  - [storybook](https://storybook.js.org/)

- Forms
  - [React-Hook-Form](https://react-hook-form.com/),

## Local development

Clone the repository.\
Run `yarn install` to install the dependencies.

### Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run storybook`

Runs Storybook.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

**Storybook** comes setup with Storybook MDX.

## MDX Template

```mdx
import { useState } from "react";

import { Canvas, Meta, Story } from "@storybook/addon-docs";

import { Button } from "./Button";

<Meta title="Example/Button" component={Button} />

# Button

<Canvas>
  <Story name="buttons">
    <Button label="Button" primary={true} />
    <Button label="Button" />
    <Button label="Button" size="large" />
    <Button label="Button" size="small" />
  </Story>
</Canvas>
```

### `yarn run build`

Builds the app for production.

### `yarn run cypress`

Runs the Cypress app.
