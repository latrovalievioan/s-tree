import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

export const getObjects = async () => {
  const client = new S3Client({
    region: import.meta.env.VITE_REGION_LUCID,
    credentials: {
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID_LUCID,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY_LUCID,
    },
  });

  const listObjectsCommand = new ListObjectsCommand({
    Bucket: import.meta.env.VITE_BUCKET_LUCID,
  });

  return await client.send(listObjectsCommand);
};
