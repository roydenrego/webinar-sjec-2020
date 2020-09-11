const express = require('express');
const cors = require('cors');

const app = express();
const port = 6913;

app.use(express.json());
app.use(cors())


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

app.delete('/items/:index', (req, res) => {
    items.splice(req.params.index, 1);
    res.json({
        items
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});