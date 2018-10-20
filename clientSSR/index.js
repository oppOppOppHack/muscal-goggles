const express = require('express');
const next = require('next');
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: false }));  
  server.use(bodyParser.json());
  server.get('/blog/:id', (req, res) => {
    const actualPage = '/blog'
    const {query} = req;
    const params = {title: req.params.id}
    const queryParams = { params, query } 
    app.render(req, res, actualPage, queryParams)
  })
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})