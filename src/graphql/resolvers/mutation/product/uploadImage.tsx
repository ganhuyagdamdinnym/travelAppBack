// import formidable from "formidable-serverless";
import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";

cloudinary.config({
  cloud_name: "dtilbfc3a",
  api_key: "256327797565374",
  api_secret: "JlDebB2Ut1I5ddgOb-oc36TJYME",
  secure: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

type Data = {
  message: string;
  url?: string;
};

export const uploadImage = () => {};
