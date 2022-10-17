## Linters Inclusion:

#### Linter files and configurations are included in the `linters-inclusion` branch

### To set them up

The linters included in the `.github` workflow follow these commands:

```
npm install --save-dev eslint@7.x eslint-config-airbnb@18.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x @babel/eslint-parser@7.x @babel/core@7.x  @babel/plugin-syntax-jsx@7.x @babel/preset-env@7.x  @babel/preset-react@7.x
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x

```

It also includes:
```
npm i prop-types
```

#### Copy the contents from the `linters` folder into you parent repository folder

### To automatically fix linters:

ESLint :
`npx eslint . --fix`

CSS Styling:
`npx stylelint "**/*.{css,scss}" --fix`

### Copy-paste fix all:
```
npx eslint . --fix
npx stylelint "**/*.{css,scss}" --fix

```
