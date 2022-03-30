import { ThemeProvider } from "styled-components";
import { GllobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Claro',
    values: [
      { name: 'Escuro', value: theme.colors.primaryColor },
      { name: 'Claro', value: theme.colors.secondaryColor },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GllobalStyles />
    </ThemeProvider>
  )
]