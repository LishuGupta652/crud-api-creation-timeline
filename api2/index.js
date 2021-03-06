import express from 'express';
import userRoutes from './routes/user.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/users',userRoutes);
app.get('/', (req, res) => {
    console.log('[test]!');

    res.send("Hey there this is a api.")
})


app.listen(PORT, () => console.log(`live on https://localhost:${PORT}`));
