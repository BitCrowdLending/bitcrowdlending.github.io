# BitCrowdLending.github.io
Bit Crowd Lending landing page

#Tools
* [HarpJS](http://harpjs.com/)
* [BrowserSync](http://www.browsersync.io/)
* [Gulp](http://gulpjs.com/)
* [Jade](http://jade-lang.com/)
* [Stylus](https://learnboost.github.io/stylus/)
* [Web Starter Kit](https://developers.google.com/web/starter-kit/)

#Install

Install the npm modules:

`$ npm install`

Install the bower modules:

`$ bower install`

#Run

Run it with gulp:

`gulp`

will be open automatically page on `http://localhost:9001`.

#Deploy

Compile with harpJS and push to repository:

`$ harp compile .`
`$ git commit -m 'deploy'`
`$ git push origin development`

split the www folder into master branch:

`$ git subtree --prefix www push origin master`

open on `http://bitcrowdlending.github.io./`


#License
[MIT](./License)

