const fs = require("fs");

const rawData = fs.readFileSync("dados_pessoas.json");
const data = JSON.parse(rawData);

console.log(data);