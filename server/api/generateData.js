import { generateFakeData } from '../../dataGenerator';

export default function handler(req, res) {
  const { region, errors, seed, page } = req.query;

  const generatedData = generateFakeData(region, errors, seed, page);
  res.status(200).json(generatedData);
}
