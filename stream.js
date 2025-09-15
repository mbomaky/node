const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname, "test.txt"), (err, data) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log(data);
//   console.log('Successfully read file');
// })

const stream = fs.createReadStream(path.join(__dirname, "test.txt"));
stream.on("data", (chunk) => {
  console.log(chunk);
})
stream.on("error", (err) => {
  console.log(err);
})