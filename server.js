const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== "production"
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
  .then(()=>{
    const server = express();

    server.get('/users/profile/:id',(req,res)=>{
      const actualPage = '/users/profile';
      const queryparams = {userId:req.params.id,hello:'hey'}
      app.render(req,res,actualPage,queryparams)
    })

    server.get('*',(req,res)=>{
      return handle(req,res)
    })

    server.listen(3000,(error)=>{
      if(error) throw error
      console.log('ready on 3000')
    })
  })

  .catch((error)=>{
    console.error(error.stack)
    process.exit(1)
  })