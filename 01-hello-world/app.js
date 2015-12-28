'use strict'

let koa = require('koa');
let app = koa();

app.use(function* (){
  this.response.body = 'Hello World';
})
app.listen(3000)

