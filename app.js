/**
 * 入口文件
 * 1- 服务器文件不应该放在这里 -- 暂时先放在这里吧
 * 2- 入口文件 做一个交通入口/枢纽的地位 导向前台的信息分配给那些文件处理  -- 这个就是服务器的事啊 哈哈
 * 3- 还是说这个作为ctroller来调度各个中间件 + 服务器用另外的文件写 并用nodemon启动
 */
const Koa = require('koa');

const app = new Koa();

// 中间件的级联 x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-response-time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async ctx => {
  ctx.body = "Hello world";
});

app.listen(3000);