const express = require('express');

const app = express();
const port = 3001;

app.use(express.json());

let items = [];

app.get('/', (req, res) => {
    res.json({ hello: 'there' })
});

app.get('/items', (req, res) => {
    res.json({
        items
    });
});

app.post('/items', (req, res) => {
    items.push(req.body.item);
    res.json({
        items
    });
});

app.delete('/items', (req, res) => {
    items.splice(items.indexOf(req.body.item), 1);
    res.json({
        items
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});