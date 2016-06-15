const express = require('express');
const {json} = require('body-parser');
const app = express();
const port = 8887;

app.use(json());
////////////////

let books = [];

app.get(`/api/books`, (req, res, next) => {
	res.status(200).send(books);
});

app.post(`/api/books`, (req, res, next) => {
	books.push(req.body);
	res.status(201).send(books);
});

app.delete(`/api/books`, (req, res, next) => {
	for (var i = 0; i < books.length; i++) {
		if (books[i].title === req.body.title) {
			books.splice(i, 1);
		}
	}
	res.status(200).send(books);
});

////////////////
app.listen(port, () =>{
	console.log(`Running on ${port}`);
})