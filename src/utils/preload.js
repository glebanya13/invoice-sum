import { fileURLToPath } from 'url';
import path, { dirname as pathDirname, resolve } from 'path';
import sharp from 'sharp';

const filename = fileURLToPath(import.meta.url);
const dirname = pathDirname(filename);

export const getPath = (relativePath) => {
    const ROOT_PATH = path.join(dirname, '../');
    return resolve(ROOT_PATH, relativePath);
};

export const preload = async (input, output) => {
    return await sharp(input)
    .resize(1200)
    .grayscale()
    .normalize()
    .sharpen()
    .toBuffer();
};
