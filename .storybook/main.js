module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/web-components"
  ],
  "framework": "@storybook/web-components",
  "core": {
    "builder": "storybook-builder-vite"
  }
}