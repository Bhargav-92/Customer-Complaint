import { generateRandomNumber } from '../utils/genrate_number';

// return a random number
export function generateOTP() {
  return generateRandomNumber(1000, 9999).toString();
}
