import fs from "fs/promises";
import path from "path";
import os from "os";
import process from "process";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from Task/.env
dotenv.config({ path: path.join(__dirname, ".env") });

const base = path.join(__dirname, "Node-Day3");
const folders = [
  path.join(base, "storage", "reports"),
  path.join(base, "storage", "backup"),
  path.join(base, "uploads", "images"),
  path.join(base, "uploads", "documents"),
];

async function ensureFolders() {
  for (const f of folders) {
    await fs.mkdir(f, { recursive: true });
    console.log("Created:", f);
  }
}

async function createAndManageFile() {
  const reportPath = path.join(base, "storage", "reports", "report.txt");
  const dailyPath = path.join(base, "storage", "reports", "daily-report.txt");
  const backupPath = path.join(base, "storage", "backup", "daily-report.txt");

  const content = `Report generated on: ${new Date().toISOString()}\nHostname: ${os.hostname()}\nPlatform: ${os.platform()}\nNode Version: ${process.version}\nCurrent Working Directory: ${process.cwd()}\nAPP_NAME: ${process.env.APP_NAME || "(not set)"}\n`;

  await fs.writeFile(reportPath, content, "utf-8");
  console.log("Wrote report:", reportPath);

  const data = await fs.readFile(reportPath, "utf-8");
  console.log("\n--- report.txt contents ---\n", data);

  // Rename report.txt -> daily-report.txt
  await fs.rename(reportPath, dailyPath);
  console.log("Renamed to:", dailyPath);

  // Copy to backup
  await fs.copyFile(dailyPath, backupPath);
  console.log("Copied to backup:", backupPath);

  // Delete the original (reports) file after copying
  await fs.unlink(dailyPath);
  console.log("Deleted original from reports:", dailyPath);
}

async function main() {
  try {
    await ensureFolders();
    await createAndManageFile();
    console.log("\n--- File Manager tasks completed ---");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
