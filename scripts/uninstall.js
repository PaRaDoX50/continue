const fs = require("fs");

const directories = [
  "./gui/node_modules",
  "./gui/out",
  "./gui/dist",
  "./core/node_modules",
  "./core/dist",
  "./extensions/vscode/node_modules",
  "./extensions/vscode/bin",
  "./extensions/vscode/build",
  "./extensions/vscode/out",
  "./binary/node_modules",
  "./binary/bin",
  "./binary/dist",
  "./binary/out",
];

directories.forEach((dir) => {
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });  // `force: true` helps with permission issues
      console.log(`Removed ${dir}`);
    } else {
      console.log(`${dir} not found`);
    }
  } catch (error) {
    console.error(`Error removing ${dir}:`, error.message);
  }
});
