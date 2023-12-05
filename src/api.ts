import {
  S3Client,
  ListObjectsCommand,
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  HeadBucketCommand,
  _Object,
} from '@aws-sdk/client-s3';
import { CredentialsType } from './types';
import { isDir } from './utils';

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
  const objects: _Object[] = [];
  let marker: string | undefined = undefined;

  for (;;) {
    const listObjectsCommand = new ListObjectsCommand({
      Bucket: bucket,
      Prefix: prefix,
      Marker: marker,
    });

    const response = await client.send(listObjectsCommand);

    if (!response.Contents) break;

    objects.push(...response.Contents);

    if (response.Contents.length < 1000) break;

    marker = objects[objects.length - 1].Key || '';
  }

  return objects;
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
  if (!isDir(key)) {
    const deleteObjectCommand = new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    return client.send(deleteObjectCommand);
  }

  const objectsToDelete = await listObjects(client, bucket, key);

  const deletionPromises = objectsToDelete.map((o) => {
    const deleteObjectCommand = new DeleteObjectCommand({
      Bucket: bucket,
      Key: o.Key,
    });

    return client.send(deleteObjectCommand);
  });

  return await Promise.all(deletionPromises);
};
