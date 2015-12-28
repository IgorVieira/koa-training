'use strict'

let views = require('co-views');
let koa = require('koa');
let app = koa();

let render = views(__dirname+'/views',{ext:'ejs'});

let user = {
   name:{
     first:'Tom',
     lastName:'Jobim'
   },
   work: 'musician',
   bestJob: 'Garota de Ipanema, Chuva de março and Wave'
   
	
}

app.use(function*(){
  this.body = yield  render('user',{user:user})
})

app.listen(3000)

