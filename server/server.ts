import express, {Express} from 'express';
import giftsRouter from './routes/gifts';



const app: Express = express();
const port = process.env.PORT || 3001;

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API - v0.1</h1>')
})

app.use('/gifts', giftsRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
