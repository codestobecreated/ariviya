import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await params;
  const fileName = pathSegments.join("/");
  const localPath = path.join(process.cwd(), "public", "images", fileName);

  if (fs.existsSync(localPath)) {
    const fileBuffer = fs.readFileSync(localPath);
    const ext = path.extname(fileName).toLowerCase();
    const contentType =
      ext === ".svg"
        ? "image/svg+xml"
        : ext === ".png"
        ? "image/png"
        : ext === ".jpg" || ext === ".jpeg"
        ? "image/jpeg"
        : ext === ".webp"
        ? "image/webp"
        : "application/octet-stream";

    return new NextResponse(fileBuffer, {
      headers: { "Content-Type": contentType },
    });
  }

  const remoteUrl = `https://html.awaikenthemes.com/petmart/images/${fileName}`;
  try {
    const res = await fetch(remoteUrl);
    if (!res.ok) {
      return new NextResponse("Image not found", { status: 404 });
    }
    const buffer = Buffer.from(await res.arrayBuffer());

    const dir = path.dirname(localPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localPath, buffer);

    const contentType = res.headers.get("content-type") || "image/jpeg";
    return new NextResponse(buffer, {
      headers: { "Content-Type": contentType },
    });
  } catch (err) {
    return new NextResponse("Error fetching image", { status: 500 });
  }
}
