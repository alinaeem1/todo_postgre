"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var serverConfig_1 = require("./serverConfig");
var pg = require("pg");
var client = new pg.Client("postgres://localhost/todo");
// const seed = () => {
//   const qry = `DROP TABLE IF EXISTS todo_info;
//   CREATE TABLE todo_info {
//     id smallint,
//     title text    ,
//     discription text,
//     done boolean
//   }`;
//   client.query(qry, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// };
// const connect = () => {
//   client.connect(err => {
//     if (!err) {
//       if (seed) {
//         seed();
//         console.log("seed some data");
//       }
//     }
//   });
// };
// connect();
var server = app_1.default.listen(serverConfig_1.default.port, function () {
    console.log("server is running at " + serverConfig_1.default.port);
});
module.exports = server;
//# sourceMappingURL=server.js.map