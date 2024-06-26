const ejs = require("ejs");
const fs = require("fs");
const data = require("./data.json");

const template = fs.readFileSync("template.ejs", "utf-8");
const html = ejs.render(template, data);

const outputDir = "public";
const outputFile = "public/index.html";
const imageSource = "assets/images/me.jpeg";
const imageDestination = "public/me.jpeg";

try {
  fs.mkdirSync(outputDir);
  console.log("Directory created successfully!");
} catch (err) {
  if (err.code === "EEXIST") {
    console.log("Directory already exists.");
  } else {
    console.error("Error creating directory:", err);
  }
}

if (fs.existsSync(outputFile)) {
  console.log("File already exists. Overwriting...");
}

try {
  fs.writeFileSync(outputFile, html);
  console.log("File written successfully!");
} catch (err) {
  console.error("Error writing file:", err);
}

try {
  fs.copyFileSync(imageSource, imageDestination);
  console.log("Assets copied successfully!");
} catch (err) {
  console.error("Error copying image file:", err);
}
