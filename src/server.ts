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

  console.log(headers);

  // Si el número es menor a 80, devolver un item aleatorio
  // const returnValue = {
  //   "keys": [
  //     {
  //       "kty": "RSA",
  //       "kid": "8dfe2155bbfe54079ba640560ae930411e93a008",
  //       "use": "sig",
  //       "alg": "RS256",
  //       "n": "4ic0du_iuWw8LJulkEf4BaryzJreE95dzV_u9e5_uZ2iR4PywmgXs-1ACSJpmAFWFgeF5YolBiyGalC_aEB_0_h4_JyWKPFW5BUaippty0YsxYQ3IW9jNxeSkHYC459eGudtldr7UYODy0Tvzh1aE0VOJvwqw5auV1jxyCOTQSx-KITbXZssk4DZ44MAJoRyMOg0JLZ2C3rwwFKP-NK3ka1mC_6BGiNEAie94SZhYT-6FcRUQ1xYDywID51JdYkt3dYbMQpyJueD9QhMGBff8clkhlqvZBAvB9w-pMhCXeLs_BBcmve1U71CeTSheyXJAjZhJgMcMBV5vtzs-5SqxQ",
  //       "e": "AQAB"
  //     }
  //   ]
  // }
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
