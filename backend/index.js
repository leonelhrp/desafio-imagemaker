const path = require('path')
const express = require('express');
const cors = require('cors')
const app = express();
const {
    PORT
} = require("./env");

// Configurar cabeceras y cors
app.use(cors())

app.use('/', express.static(path.join(__dirname, 'public')))

require("./routes/api")(app);
require("./routes/views")(app);

// DB connection
let redis = require('redis');

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
})

client.on('connect',function(){
console.log('Redis connected successfully!!!!!');
});
// DB connection end

function init() {
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, () => {
        console.log("El servidor Express esta activo.");
    });
}

init();