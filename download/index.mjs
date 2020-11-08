import fs from 'fs';
import path from 'path';
import url from 'url';
import { promisify } from 'util';
import fetch from 'node-fetch';
import dayjs from 'dayjs';

const prefixPath = 'https://static5.porn-images-xxx.com/upload/20200413/815/834421/';
const sum = 93;
const dir = path.resolve('/Users/denislin/Downloads/Image', dayjs(new Date()).format('YYYYMMDD'));
const writeFile = promisify(fs.writeFile);
let index = 1;

async function download() {
    try {
        const _url = url.resolve(prefixPath, `${index}.jpg`);
        !fs.existsSync(dir) && fs.mkdirSync(dir);
        console.log(_url);
        let data = await fetch(_url, {
            headers: {
                'user-agent':
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36'
            }
        });
        if (index > 93) {
            return;
        } else if (data.status > 400) {
            index += 1;
            download();
        } else {
            data = await data.buffer();
            const exportPath = path.resolve(dir, `./${index}.jpg`);
            await writeFile(exportPath, data);
            console.log(`download ${exportPath} successfully`);
            setTimeout(() => {
                index += 1;
                download();
            }, 3000);
        }
    } catch (error) {
        console.error(error);
    }
}

download();
