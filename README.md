# pixelybets-app

* Using single-spa you can create a micro service front-end and enable multiple 
applications to work in concert in a unified experience.
* Each MFE has a seperate pipeline (github > travis ci > AWS S3)
* ObservableStore (https://github.com/danwahlin/observable-store) has been added to service the need for cross MFE comms (Think BFFs on the Client)

## Coding standards disclaimer: 
This project is a work in progress and is focused on learning the big picture concepts of MFEs and not low level syntax (e.g. code standards and consistency have not been given any attention yet)

## Full architecture outlined: 
https://github.com/pixelypants/pixelybets-app/blob/master/MFE_Architecture_Jan2020.pdf


=============================

## Technologies
1. [single-spa](https://single-spa.js.org/)
2. [SystemJS](https://github.com/systemjs/systemjs)

## Versions of node/npm
Node v8.10.0
npm 6.1.0

## Installation and setup
1. Clone the repo
3. run `yarn start`
4. Open running code at `http://localhost:8233/`

## External applications
1. pixelybets-mfe-navbar - https://github.com/pixelypants/pixelybets-mfe-navbar
2. pixelybets-mfe-sports - https://github.com/pixelypants/pixelybets-mfe-sports
3. pixelybets-mfe-betslip - https://github.com/pixelypants/pixelybets-mfe-betslip
4. pixelybets-store-betslip - https://github.com/pixelypants/pixelybets-store-betslip
5. pixelybets-store-sports - https://github.com/pixelypants/pixelybets-store-sports


# Notes

I reverse engineered Justin McMurdies single-spa-portal-example (https://gitlab.com/TheMcMurder/single-spa-portal-example) to learn how a MFE architecture works in the real world.

Please see: https://gitlab.com/TheMcMurder/single-spa-portal-example/blob/master/README.md
