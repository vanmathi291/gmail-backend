import express from 'express';
import routes from './routes/route';
import cors from 'cors';
import connection from './database/db';


const app = express();
app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use('/',routes);
const PORT = 8000;

connection();

app.listen(PORT,()=>console.log(`Server is started on PORT ${PORT}`));