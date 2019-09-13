# Example for custom Webpack config with TS, React

Put or import your custom webpack config in [.storybook folder](.storybook/webpack.config.js);

# Install and run demo

```
git clone https://github.com/Luchanso/storybook-typescript-problem
cd storybook-typescript-problem
npm install # or: yarn
npm run storybook # or: yarn storybook
```

# Info
For example I added simple packages for working React, Typescript and react-docgen-typescript-loader:
```
    "@babel/preset-react": "^7.0.0",
    "@babel/preset-typescript": "^7.6.0",
    "react-docgen-typescript-loader": "3.2.0"
```

All webpack configuration you can find in `.storybook/webpack.config.js` file
If you have existed webpack, just concat/copy+past config in .storybook/webpack.config.js
For help you can open issue in this repo, [open issue](https://github.com/Luchanso/storybook-typescript-problem/issues/new)
