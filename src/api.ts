import {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  HeadBucketCommand,
} from '@aws-sdk/client-s3';
import { CredentialsType } from './types';

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

  await client.send(headBucketCommand);

  return { client, bucket };
};

export const listObjects = async (
  client: S3Client,
  bucket: string,
  prefix = ''
) => {
  const listObjectsCommand = new ListObjectsCommand({
    Bucket: bucket,
    Prefix: prefix,
  });

  return await client.send(listObjectsCommand);
};

export const getObject = async (
  client: S3Client,
  bucket: string,
  key: string
) => {
  const getObjectCommand = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });

  return await client.send(getObjectCommand);
};

export const putObject = async (
  client: S3Client,
  bucket: string,
  obj: { key: string; body: string }
) => {
  const createObjectCommand = new PutObjectCommand({
    Bucket: bucket,
    Key: obj.key,
    Body: obj.body,
  });

  return await client.send(createObjectCommand);
};

export const deleteObject = async (
  client: S3Client,
  bucket: string,
  key: string
) => {
  const objectsToDelete = await listObjects(client, bucket, key);

  if (!objectsToDelete.Contents) return;

  const deletionPromises = objectsToDelete.Contents.map((o) => {
    const deleteObjectCommand = new DeleteObjectCommand({
      Bucket: bucket,
      Key: o.Key,
    });

    return client.send(deleteObjectCommand);
  });

  return await Promise.all(deletionPromises);
};
