const express = require('express');
const app = express();
const plantsModule = require('./plants');

app.use(express.json());

app.get('/plants', (_req, res) => {
  const plants = plantsModule.getPlants();
  res.send(plants);
})

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(id);
  res.send(plant);
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.removePlantById(id);
  res.send(plant);
});

app.post('/plant', (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsModule.createNewPlant(newPlant);
  res.send(plant);
});

const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 0;

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

