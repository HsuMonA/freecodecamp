# FAQ

## How to setup a new project?

1. npx create-react-app front-end-development-libraries/random-quote-machine --template redux
1. npm init -w ./front-end-development-libraries/random-quote-machine
1. [Delete node_modules in random-quote-machine.]
   "don't type it in the terminal."
1. npm install bootstrap -w random-quote-machine
1. npm install react-bootstrap -w random-quote-machine
1. [Add this line before any custom files in index.js, it means before files using "./":]
   ```javscript
   import "bootstrap/dist/css/bootstrap.min.css";
   ```
1. npm install gh-pages -w random-quote-machine --save-dev
1. [Add those lines inside package.json under "scripts":
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build -e ./front-end-development-libraries/random-quote-machine"
   ]
1. In package.json in random-quote-machine, set "homepage" to "."
1. Add the below freecodecamp `<script>` before the end of `</body>` from public/index.html
   ```html
   <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
   ```

## How to start a project?

1. npm run start -w random-quote-machine

## How to deploy a project to Github Pages?

1. npm run deploy -w random-quote-machine

## How to setup the repository for gh-pages?

1. Go to Settings -> Pages
1. Choose the branch gh-pages
1. Be sure that the folder is root
1. Click on save

## How to deploy a project?

1. npm run deploy -w random-quote-machine

## How to update HTML from responsive-web-design?

1. Update and push to the main branch.
1. Upload your changes also in gh-pages branch.
