const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'mysql5-container',
    user: 'root',
    password: 'lucasDoido.019!',
    database: 'apicomdocker'
});

connection.connect(function(err){
    if(err){
        console.log("Erro na conexao");
        throw err;
    }
    console.log("Conexão realizada!");
});

app.get('/products', function(req,res){
    connection.query('SELECT * FROM tb_prod', function (error,results) {
        if(error){
            console.log("Erro Na Query");
            connection.end();
            
        };
        res.send(results.map(item => ({name: item.name, price: item.price}
            )));
    });
    
});

app.listen(9001,'0.0.0.0', function(){
console.log("Esperando a porta 9001");
})