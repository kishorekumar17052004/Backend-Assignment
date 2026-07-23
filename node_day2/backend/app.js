import dotenv from "dotenv"
import  { createServer } from "http"
import os from "os"
import process from "process"
import path from "path"


dotenv.config()

const PORT = process.env.PORT  || 6000
//Tak 1 os 
console.log("===== OS =====")
 
// Hostname
console.log("Hostname:", os.hostname());

// Platform
console.log("Platform:", os.platform());

// Architecture
console.log("Architecture:", os.arch());

// CPU Information
console.log("\nCPU Information:");
console.log(os.cpus());

// Total RAM
const totalRAM = (os.totalmem() / (1024 ** 3)).toFixed(2);
console.log("\nTotal RAM:", totalRAM, "GB");

// Free RAM
const freeRAM = (os.freemem() / (1024 ** 3)).toFixed(2);
console.log("Free RAM:", freeRAM, "GB");

// Task 2 Process 
console.log("===== PROCESS INFORMATION =====");

// Display Node.js version
console.log("Node.js Version:", process.version);

// Display current working directory
console.log("Current Working Directory:", process.cwd());

// Display operating system platform
console.log("Platform:", process.platform);

// Display command-line arguments
console.log("\n===== COMMAND LINE ARGUMENTS =====");
console.log(process.argv);

// Display environment variables
console.log("\n===== ENVIRONMENT VARIABLES =====");
console.log(process.env);

// Task 3   Path 
 const upload = path.join("upload", "images","videos" , "documents")
console.log(upload)

// Task 4 .env 
console.log("Application Name:", process.env.APPLICATION_NAME);
console.log("Port Number:", process.env.PORT);
console.log("Author Name:", process.env.AUTHOR_NAME);

const app = createServer((req,res)=>{
   res.end("Server is Running... ")
   
})

app.listen(PORT,()=>{
   console.log(`server run on http://localhost:${PORT}`)
   
})