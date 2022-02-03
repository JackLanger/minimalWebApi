'use strict';
const fs = require('fs');
const Controller = require('./controller/controller')
const http = require('http');
const {getReqData} = require('./utils/utils');
const port = process.env.PORT || 5000;
const server= http.createServer(async (req, res) => {
    if(req.url === "/api/v1/modules" && req.method === "GET"){

        let d = await new Controller().getAllData();
        res.writeHead(200, {'Content-Type': 'application/xml'});
        res.write(d);
        res.end();
    }else{

        res.writeHead(404, {'Content-Type': 'application/JSON'});
        res.end(JSON.stringify({message: "route not found"}));
    }
}).listen(port);