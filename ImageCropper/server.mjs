/* eslint-disable no-undef */
import Koa from 'koa';
import koaBody from 'koa-body';
import fs from 'fs';
import path from 'path';
const app = new Koa();
const moduleURL = new URL(import.meta.url);
const __dirname = path.dirname(moduleURL.pathname);
console.log(JSON.stringify(import.meta));

app.use(koaBody({ multipart: true }));
// 跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});
app.use(async (ctx, next) => {
    if (ctx.path === '/upload' && ctx.method === 'POST') {
        const blob = ctx.request.files.avatar;
        console.log(blob.path);
        const reader = fs.createReadStream(blob.path);
        const outputPath = path.join(__dirname, './images/mixiojio.jpg');
        const writer = fs.createWriteStream(outputPath);
        reader.pipe(writer);
        ctx.status = 200;
        ctx.body = { ret: 0, message: '上传成功' };
        await next();
    }
});

app.listen(7001, '127.0.0.1', () => {
    console.log('server is running at port 7001');
});
