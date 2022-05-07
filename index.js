import {} from 'dotenv/config';
import express from 'express';
import path from 'path';
import { routers } from './src/routers/routers.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3009;
let __dirname = path.resolve(path.dirname(''));

console.log(__dirname);

app.set('view engine', 'ejs');
app.use(routers);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});