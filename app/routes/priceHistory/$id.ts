import { json } from '@remix-run/node';
import data from '../../../data/prices.json';

export async function loader({ params }) {
  return json(data);
}
