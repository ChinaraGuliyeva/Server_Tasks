/*Необходимо создать сервер для хранения информации о редких монетах. Напишите обработчик GET-запроса, который будет возвращать массив монет. Свойства объекта монета - название, год, цена, редкость, id.
Добавьте возможность получения отдельной монеты по id.
Реализуйте пагинацию с помощью параметров count и offset.*/

const express = require('express');
const app = express();

const coins = require('./coins_named.json')
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("Домашняя страница");
});

app.get('/coins', (req, res) => {
    const copy=[...coins];
    const count = Number(req.query.count);
    const offset = Number(req.query.offset);
    res.json(coins.slice(offset, offset + count));
});

app.get('/coin/:id', (req, res) => {
    const id= Number(req.params.id);
    const coin = coins.find(item => item.id===id);

    res.send(coin);
});

app.post('/coins', (req, res)=> {console.log(req.body);
    res.send("test");
})

app.listen(3000, ()=> {console.log("Работает сервер")});