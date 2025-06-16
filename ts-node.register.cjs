const { pathToFileURL } = require("node:url");
const { register } = require("node:module");

register("ts-node/esm", pathToFileURL("./"));
