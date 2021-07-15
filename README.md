# VISXA

## Run project
Run storybook
```npm run storybook```

Run application
```npm start``` or ```docker-compose up --build```

## Git

### Don't push in main and production branches!

Install node_modules in root folder of the repository, it will install **husky**.

This package will run ESLint and Stylelint before each commit and can show you some errors that you need to fix.

### Branching and pushing
Create a separate branch for each feature or fix, when the feature will be completed open PR to **main** branch and assign **Evgenii Cherkes** as a reviewer.
Don't forget to add a **to review** label, it means that PR is ready for review.

If everything is fine PR will receive label **approved** and will be merged, else PR will receive label **changes requested** with comments describing what need to change.
Continue working in this branch and when comments will be fixed add label **to review** again.

**Branch format** ```{nickname}/{feature}```

Example: ```Oigen43/user-page```

## [Code Style](https://learn.javascript.ru/coding-style)

## Case Style
Use camelCaseFor inside your code (.js, .jsx, .scss, ...)

Use kebab-case for directories and files names. React Components it's exception, their name must start with a capital letter

[Description](https://techrocks.ru/2018/08/09/most-common-programming-case-types/)

## Styles order
It's not essential but try to stick to this order in the files with styles.

1. Properties that are responsible for the dimensions of the element (width, height, margin, padding, border, ...)
2. Positioning properties (display, position, top, left, right, bottom, flex-xxx, ...)
3. Properties that are responsible for fonts (font, line-height, color, letter-spacing, ...)
4. All the rest

Example
```
.button {
  padding: 10px 15px;
  border: 0;
  border-radius: 4px;

  position: relative;
  display: inline-block;

  color: #fff;

  cursor: pointer;
  transition: background 0.5s;

  &.success {
    background: var(--green);
  }

  &.danger {
    background: var(--red);
  }
}
```
## Imports order
Separate imports by type. At the top there are always third-party libraries, further your files by resource type

Example
```
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from 'resources/user/user.slice';
import store from 'resources/store';

import PageConfig from './PageConfig';

import 'styles/globals.scss';
```
