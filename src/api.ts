import {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  HeadBucketCommand,
} from '@aws-sdk/client-s3';
import { CredentialsType } from './types';
import { useClientStore } from './store';

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

  return client;
};

export const listObjects = async (prefix = '') => {
  const { client, bucket } = useClientStore.getState();

  if (!client) return;

  const listObjectsCommand = new ListObjectsCommand({
    Bucket: bucket,
    Prefix: prefix,
  });

  return await client.send(listObjectsCommand);
};

export const getObject = async (key: string) => {
  const { client, bucket } = useClientStore.getState();

  if (!client) return;

  const getObjectCommand = new GetObjectCommand({
    Bucket: bucket,
    Key: key,
  });

  return await client.send(getObjectCommand);
};

export const putObject = async (obj: { key: string; body: string }) => {
  const { client, bucket } = useClientStore.getState();

  if (!client) return;

  const createObjectCommand = new PutObjectCommand({
    Bucket: bucket,
    Key: obj.key,
    Body: obj.body,
  });

  return await client.send(createObjectCommand);
};

export const deleteObject = async (key: string) => {
  const { client, bucket } = useClientStore.getState();

  if (!client) return;

  const objectsToDelete = await listObjects(key);

  if (!objectsToDelete || !objectsToDelete.Contents) return;

  const deletionPromises = objectsToDelete.Contents.map((o) => {
    const deleteObjectCommand = new DeleteObjectCommand({
      Bucket: bucket,
      Key: o.Key,
    });

    return client.send(deleteObjectCommand);
  });

  return await Promise.all(deletionPromises);
};
