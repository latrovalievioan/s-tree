import * as React from 'react';
import {
  S3Client,
  // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
  ListObjectsCommand,
} from '@aws-sdk/client-s3';

const client = new S3Client({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.VITE_SECRET_ACCESS_KEY,
  },
});

export const main = async () => {
  const command = new ListObjectsCommand({
    Bucket: 'ionibonboni-test-bucket',
  });

  try {
    const celiqObekt = await client.send(command);
    console.log(celiqObekt);
  } catch (err) {
    console.error(err);
  }
};

function App() {
  React.useEffect(() => {
    main();
  }, []);

  return <>HELLO</>;
}

export default App;
