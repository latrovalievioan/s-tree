import * as React from "react";
import {
  S3Client,
  ListObjectsCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";

const lucidClient = new S3Client({
  region: import.meta.env.VITE_REGION_LUCID,
  credentials: {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID_LUCID,
    secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY_LUCID,
  },
});

const ioniClient = new S3Client({
  region: import.meta.env.VITE_REGION_IONI,
  credentials: {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID_IONI,
    secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY_IONI,
  },
});

export const listObjectsLucid = async () => {
  const listObjectsCommand = new ListObjectsCommand({
    Bucket: import.meta.env.VITE_BUCKET_LUCID,
  });

  try {
    const celiqObekt = await lucidClient.send(listObjectsCommand);
    console.log(celiqObekt);
  } catch (err) {
    console.error(err);
  }
};

export const listObjectsIoni = async () => {
  const listObjectsCommand = new ListObjectsCommand({
    Bucket: import.meta.env.VITE_BUCKET_IONI,
  });

  try {
    const celiqObekt = await ioniClient.send(listObjectsCommand);
    console.log(celiqObekt);
  } catch (err) {
    console.error(err);
  }
};

type CreateObjectInput = {
  Body: string;
  Bucket: string;
  Key: string;
};

export const createObject = async (
  input: CreateObjectInput,
  client: S3Client,
) => {
  const createObjectCommand = new PutObjectCommand(input);
  const response = await client.send(createObjectCommand);
  console.log(response);
};

function App() {
  React.useEffect(() => {
    listObjectsLucid();
    listObjectsIoni();
    // createObject(
    //   {
    //     Body: "test-folder/depth-one-file.go",
    //     Bucket: import.meta.env.VITE_BUCKET_LUCID,
    //     Key: "test-folder/depth-one-file.go",
    //   },
    //   lucidClient,
    // );
    // createObject(
    //   {
    //     Body: "test-folder/depth-one-file.go",
    //     Bucket: import.meta.env.VITE_BUCKET_IONI,
    //     Key: "test-folder/depth-one-file.go",
    //   },
    //   ioniClient,
    // );
  }, []);

  return <>HELLO</>;
}

export default App;
