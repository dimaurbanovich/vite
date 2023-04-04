import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { ModalProvider } from 'styled-react-modal';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Story />
      </ModalProvider>
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
