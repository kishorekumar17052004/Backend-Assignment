import os from "os";
import process from "process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(2)} ${units[i]}`;
}

console.log("--- System Information Dashboard ---\n");
console.log("Node Version:", process.version);
console.log("Current Working Directory:", process.cwd());
console.log("Hostname:", os.hostname());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Count:", os.cpus().length);
console.log("Total RAM:", formatBytes(os.totalmem()));
console.log("Free RAM:", formatBytes(os.freemem()));
console.log("Process ID:", process.pid);

console.log("\n--- End ---");
