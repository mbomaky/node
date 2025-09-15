const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "testFolder2"), (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

fs.writeFile(path.join(__dirname, "test.txt"), "some data1", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Successfully written");
});
