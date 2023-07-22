const express = require('express');
const router = express.Router();
import { Request, Response } from 'express';
import ChampionModel from '../models/championSchema';

router.use(express.urlencoded({ extended: true }));

router.get('/champions', async (req:Request, res:Response)=>{
  const champions = await ChampionModel.find();
  res.json(champions);
})

router.post('/championPost', async (req:Request, res:Response)=>{
  const { image, name, position, specie, gender, rangeType, resource, region, release } = req.body;

  const newChampion = new ChampionModel({
    image,
    name,
    gender,
    position,
    specie,
    resource,
    rangeType,
    region,
    release
  });

  try {

    const champions = await ChampionModel.find();

    const isDuplicate = champions.some(champion => champion.name === name);

    if (isDuplicate) {
      return res.status(400).json({ error: 'El personaje ya existe' });
    }

    newChampion.save();
    res.json(newChampion);
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;