import "./styles.css";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { DirTree } from "./components/DirTree";

// type CreateObjectInput = {
//   Body: string;
//   Bucket: string;
//   Key: string;
// };

// export const createObject = async (
//   input: CreateObjectInput,
//   client: S3Client,
// ) => {
//   const createObjectCommand = new PutObjectCommand(input);
//   const response = await client.send(createObjectCommand);
//   console.log(response);
// };

const queryClient = new QueryClient();

function App() {
  // React.useEffect(() => {
  //   // createObject(
  //   //   {
  //   //     Body: "test-folder/depth-one-file.go",
  //   //     Bucket: import.meta.env.VITE_BUCKET_LUCID,
  //   //     Key: "test-folder/depth-one-file.go",
  //   //   },
  //   //   lucidClient,
  //   // );
  //   // createObject(
  //   //   {
  //   //     Body: "test-folder/depth-one-file.go",
  //   //     Bucket: import.meta.env.VITE_BUCKET_IONI,
  //   //     Key: "test-folder/depth-one-file.go",
  //   //   },
  //   //   ioniClient,
  //   // );
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <DirTree />
    </QueryClientProvider>
  );
}

export default App;
