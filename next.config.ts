import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

try {
  const src1 = path.join(process.cwd(), "images", "1.png");
  const dest1 = path.join(process.cwd(), "public", "images", "1.png");
  if (fs.existsSync(src1)) fs.copyFileSync(src1, dest1);

  const src2 = path.join(process.cwd(), "images", "2.png");
  const dest2 = path.join(process.cwd(), "public", "images", "2.png");
  if (fs.existsSync(src2)) fs.copyFileSync(src2, dest2);

  const genSrc = "C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\fa9340e7-5f74-4c47-9675-a7f5639d4c5a\\golden_retriever_about_bg_1788001012260.png";
  const genDest = path.join(process.cwd(), "public", "images", "golden_retriever_about.png");
  if (fs.existsSync(genSrc)) fs.copyFileSync(genSrc, genDest);
  const srcAbout = path.join(process.cwd(), "images", "about.png");
  const destAbout = path.join(process.cwd(), "public", "images", "about.png");
  if (fs.existsSync(srcAbout)) fs.copyFileSync(srcAbout, destAbout);

  const newGenSrc = "C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\fa9340e7-5f74-4c47-9675-a7f5639d4c5a\\pet_family_banner_1788004861741.png";
  const newGenDest = path.join(process.cwd(), "public", "images", "pet-family.png");
  const newGenDestSrc = path.join(process.cwd(), "images", "pet-family.png");
  if (fs.existsSync(newGenSrc)) {
    fs.copyFileSync(newGenSrc, newGenDest);
    fs.copyFileSync(newGenSrc, newGenDestSrc);
  }
  const hqSrc = "C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\fa9340e7-5f74-4c47-9675-a7f5639d4c5a\\ariviya_hq_building_1788005351730.png";
  const hqDest = path.join(process.cwd(), "public", "images", "ariviya-hq.png");
  const hqDestSrc = path.join(process.cwd(), "images", "ariviya-hq.png");
  if (fs.existsSync(hqSrc)) {
    fs.copyFileSync(hqSrc, hqDest);
    fs.copyFileSync(hqSrc, hqDestSrc);
  }
  const sampleSrc = path.join(process.cwd(), "images", "sample.png");
  const sampleDest = path.join(process.cwd(), "public", "images", "sample.png");
  if (fs.existsSync(sampleSrc)) {
    fs.copyFileSync(sampleSrc, sampleDest);
  }

  ["cat.webp", "cow.webp", "dog.webp"].forEach((img) => {
    const s = path.join(process.cwd(), "images", img);
    const d = path.join(process.cwd(), "public", "images", img);
    if (fs.existsSync(s)) fs.copyFileSync(s, d);
  });
} catch (e) {
  console.error("Error copying images:", e);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

