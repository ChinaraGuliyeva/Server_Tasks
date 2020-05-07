const express = require('express');

const app = express();

const transactions = [
    {
        id: 1,
        from: "Sam",
        to: "John"
    },
    {
        id: 2,
        from: "Alex",
        to: "Ahmad"
    },
    {
        id: 3,
        from: "Ahmad",
        to: "Javid"
    },
    {
        id: 4,
        from: "Shako",
        to: "Rustam"
    },
    {
        id: 5,
        from: "Sabina",
        to: "Naila"
    }
]

app.get('/', (req, res) => {
    res.send("Chinara");
});

app.get('/credit', (req, res) => {
    res.send("Этот route отвечает за кредиты");
});

app.get('/card', (req, res) => {
    res.send("Этот route отвечает за карты");
});

app.get('/client', (req, res) => {
    res.send("Этот route отвечает за клиентов");
});

app.get('/legal', (req, res) => {
    res.send("Этот route отвечает за юридические лица");
});

app.get('/user/:id', (req, res) => {
    const users = [
        { id: 1, name: 'Alexandra'},
        { id: 2, name: 'Julia'},
        { id: 3, name: 'Kate'},
        { id: 4, name: 'Chinara'},
        { id: 5, name: 'Aliya'},
    ]

    const id= Number(req.params.id);
    const user = users.find(item => item.id===id);

    res.send(`Route transaction ${id}`);
});

app.get('/transaction', (req, res) => {
    res.send(transactions);
});

app.get('/transaction/:id', (req, res) => {
    const id= Number(req.params.id);
    const transaction = transactions.find(item => item.id===id);
    res.json(transaction);
});

app.get('/current-time', (req, res) => {
    const date = new Date();
    const result = `${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`
    res.send(result);
});

app.listen(3000, ()=> {
    console.log('Server is running');
})