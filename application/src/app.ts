import {app} from "./app/index";

const status = "Ready to Go!";
const port = process.env.PORT || 4001;
const url = "http://localhost:" + port;
const r = "http://localhost:" + port+ "/send";

console.log({status, url});
console.log("Use:   ", r);
// listen for requests
app.listen(port);
