const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            pagos: '/api/pagos'

        }

        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/inventory', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    routes(){
        this.app.use(this.paths.pagos, require('./routes/pagos')   )

    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`);
            console.log(`Trabajo de casquete rodriguez Jean Pier `);
        })
    }


}


module.exports = Server;