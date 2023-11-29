import {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  HeadBucketCommand,
} from '@aws-sdk/client-s3';
import { CredentialsType } from './types';

export const listObjects = async (prefix = '') => {
  const client = new S3Client({
    region: import.meta.env.VITE_REGION_LUCID,
    credentials: {
      accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID_LUCID,
      secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY_LUCID,
    },
  });

  const listObjectsCommand = new ListObjectsCommand({
    Bucket: import.meta.env.VITE_BUCKET_LUCID,
    Prefix: prefix,
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

  const objectsToDelete = await listObjects(key);

  if (!objectsToDelete.Contents) return;

  const deletionPromises = objectsToDelete.Contents?.map((o) => {
    const deleteObjectCommand = new DeleteObjectCommand({
      Bucket: import.meta.env.VITE_BUCKET_LUCID,
      Key: o.Key,
    });

    return client.send(deleteObjectCommand);
  });

  return await Promise.all(deletionPromises);
};

export const initializeClient = async (credentials: CredentialsType) => {
  const { accessKeyId, secretAccessKey, bucket, region } = credentials;

  const client = new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const headBucketCommand = new HeadBucketCommand({ Bucket: bucket });

  return await client.send(headBucketCommand);
};
