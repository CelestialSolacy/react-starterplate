echo "Note:"
echo "Running this file assumes you had just ran git clone https://github.com/CelestialSolacy/react-starterplate.git !"

source $PWD/react-starterplate/REPO_NAME.txt

echo "Creating react/redux project in the new repository..."
npx create-react-app $REPO_NAME --template redux

echo "Removing old repository files..."
rm -rv $PWD/$REPO_NAME/src

rm -rv $PWD/$REPO_NAME/public

echo "Copying new repository files..."
cp -rv $PWD/react-starterplate/src $PWD/$REPO_NAME/

cp -rv $PWD/react-starterplate/public $PWD/$REPO_NAME/

echo "Installing dependencies..."
cd $REPO_NAME

rm -- *.old

npm i react-router-dom
