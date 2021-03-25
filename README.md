This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

like this:
```
npx create-next-app next10-coreui-test

cd next10-coreui-test

npm install sass

(
echo "const path = require('path')"
echo "module.exports = {"
echo "  sassOptions: {    includePaths: [path.join(__dirname, 'styles')],  },"
echo "}"
)>"next.config.js"


type nul > "tsconfig.json"

npm run dev

npm install --save-dev typescript @types/react @types/node @types/react-dom @types/prop-types

npm run dev

//change js to .tsx files
//change css to .module.scss files
//remove api folder
//
//in package.json: enable export: 
//"build": "next build && next export"


//setup linting:

npm i -D babel-eslint eslint-config-airbnb eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
 
  npx eslint --init
 
  npm install --save-dev stylelint stylelint-scss stylelint-config-standard @wordpress/stylelint-config --save-dev
 
 //in package.json
    "lint": "eslint --ext '.ts,.jsx,.tsx' ./**/*.{ts,jsx,tsx} --quiet --fix",
    "lint-scss": "npx stylelint ./**/*.scss --fix"

// see .eslintrc.js file , for settings

///////////////////
 

enable webpack 5:
const path = require('path')
module.exports = {
    sassOptions: {includePaths: [path.join(__dirname, 'styles')],},
    future: {
        webpack5: true
    },
    webpack: function (config, options) {
        console.log(options.webpack.version);
        config.experiments = {};
        // config.node = {
        //     fs: 'empty'
        // };
        return config;
    }
}

```
npm i fs-extra web-vitals


//install core-ui components (based on bootstrap 4.6/5.0):

npm i @coreui/coreui @coreui/react


///
later you can install more packages...:

npm i axios swr

npm i next-pwa


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
