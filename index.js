const jsonServer = require('json-server');
const restServer = jsonServer.create();
const roouter = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const port = 4000;
restServer.use(middleware);
restServer.use(roouter);
restServer.listen(port, () => {
    console.log("server listening to port" + port);
})
