//  const fs = require("fs");
// const fs = require("fs");

// fs.readFile("posts.json", "utf8", (err, data) => {
//     console.log(data);
// });
const fs = require("fs");

fs.readFile("posts.json", "utf8", (err, data) => {
    console.log("ERROR:", err);
    console.log("DATA:", data);
});