// const fs = require("fs");
// const path = require("path");
// const { exit } = require("process");

// // const baseUrl = "https://vivacious-magenta.cmd.outerbase.io/image-data-insert";
// const baseUrl = "https://disturbing-azure.cmd.outerbase.io/destory-sqlite";

// function getFiles(dir, files = []) {
//   // Get an array of all files and directories in the passed directory using fs.readdirSync
//   const fileList = fs.readdirSync(dir);
//   // Create the full path of the file/directory by concatenating the passed directory and file/directory name
//   for (const file of fileList) {
//     const name = `${dir}/${file}`;
//     // Check if the current file/directory is a directory using fs.statSync
//     if (fs.statSync(name).isDirectory()) {
//       // If it is a directory, recursively call the getFiles function with the directory path and the files array
//       getFiles(name, files);
//     } else {
//       // If it is a file, push the full path to the files array
//       files.push(name);
//     }
//   }
//   return files;
// }

// (async () => {
//   const processFilesInBatches = async (files, batchSize) => {
//     for (let i = 0; i < files.length; i += batchSize) {
//       const batch = files.slice(i, i + batchSize);
//       const requests = batch.map(async (file) => {
//         try {
//           const folderPath = path.join(__dirname, file);
//           const [z, x, y] = folderPath
//             .split(path.sep)
//             .slice(-3)
//             .map((i) => i.split(".")[0]);
//           const filePath = path.join(__dirname, file);
//           const buffer = await new Promise((resolve, reject) => {
//             fs.readFile(filePath, { encoding: "hex" }, (err, data) => {
//               if (err) reject(err);
//               else resolve(data);
//             });
//           });

//           const response = await fetch(
//             "https://environmental-turquoise.cmd.dev.outerbase.io/destroy-sqlite",
//             {
//               method: "PUT",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 x: Number(x),
//                 y: Number(y),
//                 z: Number(z),
//                 blob: buffer,
//               }),
//             }
//           );

//           if (response.status === 200) {
//             console.log(`PUT request successful for ${filePath}`);
//           } else {
//             console.log(
//               `Failed to send PUT request for ${filePath}. Status code: ${response.status}`
//             );
//           }
//         } catch (error) {
//           console.error(`Error processing ${file}: ${error}`);
//         }
//       });

//       await Promise.all(requests);
//     }
//   };

//   const files = getFiles("./public").filter((file) => file.endsWith(".png"));
//   const batchSize = 1000;
//   await processFilesInBatches(files, batchSize);
// })();
// // Call the function with the root directory of your PNG files
