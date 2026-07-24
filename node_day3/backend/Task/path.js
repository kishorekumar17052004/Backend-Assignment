import path from "path"
import fs from "fs/promises"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import process from "process"

const createFolder = async()=>{
   const projectPath = path.join(process.cwd(),"project") 
     const folders = [
    projectPath,
    path.join(projectPath, "public"),
    path.join(projectPath, "public", "css"),
    path.join(projectPath, "public", "js"),
    path.join(projectPath, "public", "images"),
    path.join(projectPath, "uploads"),
    path.join(projectPath, "uploads", "documents"),
    path.join(projectPath, "uploads", "videos"),
    path.join(projectPath, "config"),
    path.join(projectPath, "logs"),
  ];

   try {
    for (const folder of folders) {
      await fs.mkdir(folder, { recursive: true });
      console.log(folder);
    }

    console.log("\n All folders created successfully!");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

createFolder();

