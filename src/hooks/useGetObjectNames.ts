import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
import { useQuery } from 'react-query';

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

export const useGetObjectNames = () => {
  const { data } = useQuery('objects', getObjects);
  if (!data?.Contents) return [];

  const objects = data.Contents.flatMap((c) => {
    const objs: string[] = [];
    const str = c.Key || '';
    let accString = '';

    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      accString += currentChar;
      if (currentChar === '/' || i === str.length - 1) objs.push(accString);
    }

    return objs;
  });

  return [...new Set(objects)];
};
