// import { Request, Response } from 'express';
// import ChampionModel from '../models/championSchema'

// export async function getChampion(req: Request, res: Response) {
//   const { name, traits, specie, gender, rol, resource, region, year, fightingStyle } = req.body;

//   const newChampion = new ChampionModel({
//     name,
//     traits,
//     specie,
//     gender,
//     rol,
//     resource,
//     region,
//     year,
//     fightingStyle
//   });

//   try {
//     await newChampion.save();
//     res.json(newChampion);
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default {
//   getChampion
// };