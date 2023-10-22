import Cryptr from 'cryptr';
import dotenv from 'dotenv';

dotenv.config();

export const encrypt = (data: string) => {
  const cryptr = new Cryptr(process.env.CRYPT_KEY);
  return cryptr.encrypt(data);
};

export const decrypt = (data: string) => {
  const cryptr = new Cryptr(process.env.CRYPT_KEY);
  return cryptr.decrypt(data);
};
