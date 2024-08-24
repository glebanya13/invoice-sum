import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getPath = (relativePath) => {
    return resolve(__dirname, '../', relativePath);
};

export const preload = async (input, output) => {
    await sharp(input)
    .resize(1200)
    .grayscale()
    .normalize()
    .sharpen()
    .toFile(output);
};

