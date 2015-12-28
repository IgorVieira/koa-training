'use strict'

let koa = require('koa')
let _ = require('koa-route');
let app = koa();


function *home(){
  this.body = 'Hello World';
}

function *about(){
 this.body = 'Hi! My name is Igor Vieira';
}

function *contact(){
  this.body = 'Follow me: @IgorPRVieira'	
}

app.use(_.get('/', home));
app.use(_.get('/about', about));
app.use(_.get('/contact', contact));


app.listen(3000);
