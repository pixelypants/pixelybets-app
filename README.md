# pixelybets-app

# Single Spa

Using single-spa you can create a micro service front-end and enable multiple 
applications to work in concert in a unified experience.

## Technologies
1. [single-spa](https://single-spa.js.org/)
2. [SystemJS](https://github.com/systemjs/systemjs)

## Versions of node/npm
Node v8.10.0
npm 6.1.0

## Installation and setup
1. Clone the repo
2. Run `yarn install-all`
3. run `yarn start`
4. Open running code at `http://localhost:8233/`

## External applications
1. pixelybets-mfe-navbar (written in react)
2. pixelybets-mfe-sports (written in react)
3. pixelybets-mfe-betslip (written in react)
4. pixelybets-bff-sports (written in ObservableStore)
5. pixelybets-bff-bets (written in ObservableStore)


## Current Services
1. fetchWithCache (vanilla javascript)

# Notes

## Why `@portal/`
I'm using webpack (a static module bundler) to build each application for our micro-frontend approach. Webpack requires
access to everything it needs to include in the bundle at build time. This means when an app that imports a service,
for example planets importing the fetchWithCache service, webpack will try to bundle the service into the planets bundle.
The built in way to avoid webpack doing this is [webpack externals](https://webpack.js.org/configuration/externals/), 
using externals works really well but to avoid having to include a regex for each service I'm using the postfix to signal 
to webpack (and developers) that the import is another micro-app/service/front-end. The prefix isn't required if you 
would rather include a different postfix or none at all it should work, you'll just have to modify each webpack config 
for externals.

## Code splitting
Code splitting is a complicated topic. I'm not going to dive into each facet of it within Webpack, see [Webpacks docs for 
that](https://webpack.js.org/guides/code-splitting/).

In our project code splitting is further complicated because webpack's module format expects to load more modules from 
the website root, which will always fail in this project unless webpack is told where to load additional modules. Right
now there is a single example of this, [done in the people application](./people/src/people.js#L10).

## Deployment

github > travis > S3