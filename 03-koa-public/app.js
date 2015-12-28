'use strict'

let koa = require('koa')
let server = require('koa-static');
let app = koa();


app.use(server('public'));

app.listen(3000);


