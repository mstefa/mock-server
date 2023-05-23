import express, { Request, Response } from 'express';
import morgan from 'morgan'

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'))

interface Item {
  id: number;
  name: string;
  price: number;
}

app.get('/item', (req: Request, res: Response) => {

  res.json(getRandomItem());
});

app.post('/random-item', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('POST request received');
});

app.get('/random-response', (req, res) => {
  // Generar un número aleatorio entre 0 y 99
  const randomNumber = Math.floor(Math.random() * 100);

  // Si el número es menor a 80, devolver un item aleatorio
  if (randomNumber < 60) {
    const randomItem = getRandomItem();
    res.json(randomItem);
  }
  // Si el número es menor a 90, devolver un error 400 Bad Request
  else if (randomNumber < 90) {
    res.status(400).send('Error 400: Bad Request');
  }
  // Si el número es menor a 100, devolver un error 500 Internal Server Error
  else {
    res.status(500).send('Error 500: Internal Server Error');
  }
});

app.get('/random-failure/:id', (req, res) => {
  // Generar un número aleatorio entre 0 y 99
  const randomNumber = Math.floor(Math.random() * 100);
  const itemId = req.params.id as unknown as number
  console.log(itemId)
  // Si el número es menor a 80, devolver un item aleatorio
  if (randomNumber < 80) {
    res.json(items[itemId]);
  }
  // Si el número es menor a 90, devolver un error 400 Bad Request
  else if (randomNumber < 90) {
    res.status(400).send('Error 400: Bad Request');
  }
  // Si el número es menor a 100, devolver un error 500 Internal Server Error
  else {
    res.status(500).send('Error 500: Internal Server Error');
  }
});

app.get('/failure', (req, res) => {
  res.status(400).send('Error 400: Bad Request');
});

const items = [
  { id: 0, name: 'Zapatilla', price: 10 },
  { id: 1, name: 'Zapato', price: 20 },
  { id: 2, name: 'Camiseta', price: 30 },
  { id: 3, name: 'Pantalon', price: 40 },
];

function getRandomItem() {

  // Elegir un item aleatorio del array
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

app.get('/aura-services/v1/openid/jwk', (req, res) => {
  // Generar un número aleatorio entre 0 y 99
  const randomNumber = Math.floor(Math.random() * 100);

  const headers = req.headers;

  console.log(headers['x-correlator']);

  const returnValue = 11000;
  if (randomNumber < 90) {
    res.json(returnValue);
  }
  // Si el número es menor a 90, devolver un error 400 Bad Request
  else if (randomNumber < 95) {
    res.status(400).send('Error 400: Bad Request');
  }
  // Si el número es menor a 100, devolver un error 500 Internal Server Error
  else {
    res.status(500).send('Error 500: Internal Server Error');
  }
});


export { app } 
