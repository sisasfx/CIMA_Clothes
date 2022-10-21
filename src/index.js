const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routerApi = require('./routes');
const serveStatic = require('serve-static');

const port = process.env.ALWAYSDATA_HTTPD_PORT || 5500;
const IP = process.env.ALWAYSDATA_HTTPD_IP || null;

// const port = process.env.PORT || 3000;
const coroptions = {
     origin:'http://localhost:5500',
    //optionsSuccessStatus: 200
}

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('uploads'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


/*SERVIR ESTÁTICOS! HTML CSS*/
app.use('/api/v1/static', express.static('src/public'));


/*root PAGE*/
app.get('/',cors(),(request, response)=>{
    response.send('Esta seria la pag. Principal o LOGIN, apartir de aqui empieza la navegación');
});

/*LOG PUERTO*/
app.listen(port,IP, ()=>{
    console.log('Mi puerto es: '+ port);
});

routerApi(app);
