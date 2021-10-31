const express =require('express');
const { extend } = require('lodash');
import { userRouter} from './routes/users.js'

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/user', userRouter);
app.get('/', (req,res) => {
    res.status(200).send("This app is working fine.");
}) 

app.listen(PORT, () => console.log(`Live on https://localhost/${PORT}`))

