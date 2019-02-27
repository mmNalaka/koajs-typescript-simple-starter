import Koa from 'Koa';
import httpStatusCodes from 'http-status-codes';

export default () => async (ctx: Koa.Context, next: any) => {
  try {
    await next();
    ctx.assert(
      ctx.response.body &&
        Number(ctx.response.status) !== httpStatusCodes.NOT_FOUND,
      httpStatusCodes.NOT_FOUND
    );
  } catch (err) {
    const status: number =
      err.status ||
      err.statusCode ||
      err.status_code ||
      (err.output && err.output.statusCode) ||
      (err.oauthError && err.oauthError.statusCode) ||
      httpStatusCodes.INTERNAL_SERVER_ERROR

    ctx.type = 'application/json'
    ctx.status = status
    ctx.body = `Uh-oh: ${err.message}`
  }
}
