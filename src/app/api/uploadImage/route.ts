import { v2 as cloudinary } from "cloudinary";
import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

cloudinary.config({
  cloud_name: "dtilbfc3a",
  api_key: "256327797565374",
  api_secret: "JlDebB2Ut1I5ddgOb-oc36TJYME",
  secure: true,
});

type Data = {
  message: string;
  url?: string;
};

export const POST = async (req: NextRequest, res: NextApiResponse<Data>) => {
  const data = await req.formData();
  const file = data.get("file") as File;

  const fileBuffer = await file.arrayBuffer();

  const mimeType = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");

  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;
  try {
    const upload = await cloudinary.uploader.upload(fileUri, {
      folder: "product",
      public_id: undefined,
    });
    return Response.json({
      message: "succceeed uploaded",
      uploadUrl: upload.secure_url,
      url: upload.public_id,
    });
  } catch (err) {
    console.error(err);
  }
};
