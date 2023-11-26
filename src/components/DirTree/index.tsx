import { useQuery } from "react-query";
import { getObjects } from "../../api";

export const DirTree = () => {
  const { status, data, error } = useQuery("objects", getObjects);

  console.log(data);
  return <div>DirTree</div>;
};
