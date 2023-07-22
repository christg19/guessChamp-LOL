import mongoose, { Document, Schema } from 'mongoose';

interface ChampionDocument extends Document {
    image: string;
    name: string;
    gender: string;
    position: string;
    specie: string;
    resource: string;
    rangeType: string;
    region: string;
    release: number;
  }
  
  const ChampionSchema = new Schema<ChampionDocument>({
    image: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    position: { type: String, required: true },
    specie: { type: String, required: true },
    resource: { type: String, required: true },
    rangeType: { type: String, required: true },
    region: { type: String, required: true },
    release: { type: Number, required: true },
  });
  
  const ChampionModel = mongoose.model<ChampionDocument>('Champion', ChampionSchema);
  
  export default ChampionModel;