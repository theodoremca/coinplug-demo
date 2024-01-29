import * as functions from "firebase-functions";
import * as proxyApp from "./app/proxy";
import {app} from "./app/index";


export const pushPlug = functions.https.onRequest(app);
export const gmbScrapper = functions.https.onRequest(proxyApp.staticProxy);
export const dynamicProxy = functions.https.onRequest(proxyApp.dynamicProxy);
