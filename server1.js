/*Необходимо создать сервер для хранения информации о редких монетах. Напишите обработчик GET-запроса, который будет возвращать массив монет. Свойства объекта монета - название, год, цена, редкость, id.
Добавьте возможность получения отдельной монеты по id.
Реализуйте пагинацию с помощью параметров count и offset.*/

//import json here

//const fs = require('fs');
const express = require('express');
const app = express();

//const coinsJSON = fs.readFile('./coins_named.json');
//const coins = JSON.parse(coinsJSON);

app.get('/', (req, res) => {
    res.send("Chinara");
});

app.listen(300, ()=> {console.log("Работает сервер")});

//console.log(coins);