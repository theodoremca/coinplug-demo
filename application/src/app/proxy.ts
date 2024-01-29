import express from "express";
import proxy from "express-http-proxy";
const staticProxy = express();
const dynamicProxy = express();


staticProxy .use("/", proxy("http://144.126.159.250:4001"));


dynamicProxy.use("/", (req, res, next) => {
  const targetUrl = (req.query.target) as string | undefined;
  if (targetUrl) {
    proxy(targetUrl, {
    })(req, res, next);
  } else {
    res.status(400).send("Missing \"target\" query parameter.");
  }
});
export {dynamicProxy, staticProxy};
