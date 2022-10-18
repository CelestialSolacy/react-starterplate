# React Starterplate Template

## Info

> A react application used for starting Apps in a modular way, featuring a Redux template

## Start App:

To start a new React/Redux application, follow these steps:

1. Create a github repo with the name of the `REPO_NAME`

2. Clone it locally

3. Run `npx create-react-app REPO_NAME --template redux` in the parent folder where it was cloned.

4. Run the `npm i` commands to install starter packages:
```
npm i react-router-dom
```

5. Copy the contents of the `src` and `public` folders of this repo into your new one.

## Auto set with git bash:

### Automatic run:

> Note! These commands asume you have already cloned your new repository and run the commands in its parent folder (so one step up from your new repository's folder)

> Important Note!!! change after the `=` in the first line, where it says `your-repo-name` to your new github's repository name

```
NAME_REPO=your-repo-name

git clone https://github.com/CelestialSolacy/react-starterplate.git

sed -i "s/your-repo-name/$NEW_REPO/" $PWD/react-starterplate/REPO_NAME.txt

sh $PWD/react-starterplate/setupdev.sh

```

### Semi-automatic run:

> Note! Change `REPO_NAME` of the first command line to the name of your Github repository
> This also assumes you have cloned your new repository and run these commands in the folder containing your new repository folder.

```
REPO_NAME=repo_name

git clone https://github.com/CelestialSolacy/react-starterplate.git

npx create-react-app $REPO_NAME --template redux

rm -rv $PWD/$REPO_NAME/src

rm -rv $PWD/$REPO_NAME/public

cp -rv $PWD/react-starterplate/src $PWD/$REPO_NAME/

cp -rv $PWD/react-starterplate/public $PWD/$REPO_NAME/

cd $REPO_NAME

rm -- *.old

npm i react-router-dom

```

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

## React and Redux setup specifications

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
