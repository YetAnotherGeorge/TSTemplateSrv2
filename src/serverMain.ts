import http from "http";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

import * as express from "express";
async function mainExpressAsync(httpPort: number) {
   let lh: () => string = () => `[${new Date().toISOString().slice(0, -1).split('T')[1]}] [ SRV]`;
   const app: express.Express = express.default();
   app.use(express.json({ limit: '50mb' }));

   app.use("/", (req, _, next) => {
      let u: string = req.url.length > 90 ? req.url.slice(0, 87) + "..." : req.url;
      console.log(`${lh()} REQ FROM ${req.ip} | URL: ${u}`);
      next();
   });

   app.use(express.static("./public/dist"));

   //#region HTTP
   let httpServer: http.Server;
   try {
      httpServer = http.createServer(app);
      httpServer.listen(httpPort);
   } catch (ex) {
      if (ex instanceof Error) {
         console.log(`${lh()} Error: ${ex.message}`);
      } else {
         throw ex;
      }
   }
   console.log(`${lh()} Listening on port ${httpPort}`);
}
(async () => { await mainExpressAsync(3000); })();

(async () => {
   console.log("Hello world");
})();