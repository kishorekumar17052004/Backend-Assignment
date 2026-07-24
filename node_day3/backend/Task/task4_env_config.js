import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

console.log("--- Environment Configuration ---\n");
console.log("APP_NAME:", process.env.APP_NAME || "(not set)");
console.log("PORT:", process.env.PORT || "(not set)");
console.log("AUTHOR:", process.env.AUTHOR || "(not set)");
console.log("DB_NAME:", process.env.DB_NAME || "(not set)");

console.log("\nCurrent Node Version:", process.version);
console.log("Current Project Folder:", process.cwd());

console.log("\n--- End ---");
