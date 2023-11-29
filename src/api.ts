import {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';

export const listObjects = async () => {
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

export const getObject = async (key: string) => {
  const client = new S3Client({
    region: import.meta.env.VITE_REGION_LUCID,
    credentials: {
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID_LUCID,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY_LUCID,
    },
  });

  const getObjectCommand = new GetObjectCommand({
    Bucket: import.meta.env.VITE_BUCKET_LUCID,
    Key: key,
  });

  return await client.send(getObjectCommand);
};

export const putObject = async (obj: { key: string; body: string }) => {
  const client = new S3Client({
    region: import.meta.env.VITE_REGION_LUCID,
    credentials: {
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID_LUCID,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY_LUCID,
    },
  });

  const createObjectCommand = new PutObjectCommand({
    Bucket: import.meta.env.VITE_BUCKET_LUCID,
    Key: obj.key,
    Body: obj.body,
  });

  return await client.send(createObjectCommand);
};

export const deleteObject = async (key: string) => {
  const client = new S3Client({
    region: import.meta.env.VITE_REGION_LUCID,
    credentials: {
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID_LUCID,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY_LUCID,
    },
  });

  const deleteObjectCommand = new DeleteObjectCommand({
    Bucket: import.meta.env.VITE_BUCKET_LUCID,
    Key: key,
  });

  return await client.send(deleteObjectCommand);
};
