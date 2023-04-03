# Loop24Meeting config panel

## TechStack

- Frontend:
  - React
  - TypeScript
  - Redux
- Build:
  - [Vite]('https://vitejs.dev/')
- Test:
  - [Cypress]("https://www.cypress.io/")
- Style:
  - [styled-components]("https://styled-components.com/")

_As an alternative [Refine.dev]("https://refine.dev/") might be considered_

## Preliminary technical solutions for some components

UI:
_ [AntDesign]("https://ant.design/");
_ [storybook]("https://storybook.js.org/")

- [Material-UI (MUI)]("https://mui.com/")

- Forms
  - [React-Hook-Form]('https://react-hook-form.com/"),
  - [Formik]("https://formik.org/"),
  - [React-Final-Form]("https://final-form.org/react")

[Artical]("https://javascript.plainenglish.io/3-best-react-form-libraries-every-react-developer-should-know-43888f8a969d") with short description of above libs.

- Tables
  - [Ag-grid]("https://www.ag-grid.com/")
  - [TanStack]("https://tanstack.com/table/v8")
  - [Tabulator]("https://tabulator.info/")

Alternative:
[1]("https://www.libhunt.com/l/typescript/topic/table")
[2]("https://reactscript.com/best-data-table/")

- Drag&Drop
  - [React-dnd]("https://react-dnd.github.io/react-dnd/about")
  - [dnd kit]("https://github.com/clauderic/dnd-kit")
  - [react beautiful dnd]("https://github.com/atlassian/react-beautiful-dnd/")
  - Table Drag & Drop [ag-grid]("https://www.ag-grid.com/javascript-data-grid/row-dragging/#dragging--row-grouping") solution
  - Upload file [ant-design]("https://ant.design/components/upload#components-upload-demo-drag") solution


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
import { useState } from 'react';

import { Canvas, Meta, Story } from '@storybook/addon-docs';

import { Button } from './Button';

<Meta title="Example/Button" component={Button} />

# Button

<Canvas>
  <Story name="buttons">
    <Button label="Button" primary={true}/>
    <Button label="Button" />
    <Button label="Button" size='large' />
    <Button label="Button" size='small' />
  </Story>
</Canvas>
```

### `yarn run build`

Builds the app for production.

### `yarn run cypress`

Runs the Cypress app.
