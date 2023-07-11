const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
    /*using Sequelize to inject rows to table when running node server.js*/
    /**remove if not nedded and change force to false*/
    db.products.create({
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens' 
    });
    db.products.create({
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras' 
    });
    db.products.create({
        name: 'Phone Standard',
        price: 299,
        description: ''
    });
    console.log('Synced db.');
}).catch((err) => {
    console.log("Failed to sync db:" + err.message);
});

/*app.get("/", (request, response) =>{
    response.json({ message: "Attemting to connect a Angular.js app to a PostgresSQL database." });
});
*/
require('./routes/product.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log('Server is running on port ${PORT}.');
});

app.get("/", (request, response) => {
    response.json({ message: "Postgres API running." });
  });

/*  without sequelize
    app.get('/products', db.getProducts);
*/