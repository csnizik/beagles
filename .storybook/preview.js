/** @type { import('@storybook/server').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    server: {
      url: 'https://newpods.ddev.site',
    },
  },
  globals: {
    drupalTheme: 'fpacds',
    supportedDrupalThemes: {
      fpacds: { title: 'FPAC Design System'},
      claro: { title: 'Claro' },
      olivero: { title: 'Olivero' },
      stark: { title: 'Stark' },
    },
  },
}

export default preview;
