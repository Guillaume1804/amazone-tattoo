// script/generateImageData.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Emuler __dirname pour ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dossier d'entrée des images (dans /public)
const inputDir = path.join(__dirname, "..", "public", "gallery-imgs");

// Fichier de sortie
const outputFile = path.join(__dirname, "..", "src", "data", "imagesData.json");

// Lire les fichiers image
const files = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(png|jpe?g|webp)$/i.test(file));

// Générer les données
const imageData = files.map((filename, index) => ({
  id: `img_${String(index + 1).padStart(3, "0")}`,
  filename: `/gallery-imgs/${filename}`, // chemin relatif depuis public
  alt: "",
  style: [],
  theme: [],
  client: "",
  createdAt: null,
}));

// Créer le dossier src/data si besoin
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Écrire le fichier JSON
fs.writeFileSync(outputFile, JSON.stringify(imageData, null, 2));
console.log(`✅ ${files.length} images exportées vers ${outputFile}`);
