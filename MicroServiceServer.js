import express from 'express';
import { champions } from './champions.js'
  
const app = express();
const PORT = 3001;

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.post('/results', (req, res) => {
    const {name} = req.body;
    let result = getChampion(name)
    res.send(result);
});

function getChampion(name) {
    let champion = champions[0];
    for(const key in champions) {
        if(champions[key].name === name) {
            champion = champions[key];
            return champion;
        }
    }
    return "Error: Champion not found";
}

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});