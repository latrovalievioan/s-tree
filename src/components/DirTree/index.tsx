import { useGetObjectNames } from "@/hooks/useGetObjectNames";

type Props = {
  prefix?: string;
};

const isDir = (s: string) => s.endsWith("/");
const getDepth = (s: string) => {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "/") depth++;
  }
  return isDir(s) ? depth : depth + 1;
};

export const DirTree: React.FC<Props> = ({ prefix = "" }) => {
  const objects = useGetObjectNames();

  const currentDepth = getDepth(prefix);
  const directChildren = objects.filter((o) => {
    const isFromSubtree = o.startsWith(prefix);
    const objectDepth = getDepth(o);
    const isDeeperByOne = objectDepth === currentDepth;

    console.log(objectDepth, o);

    return isDeeperByOne && isFromSubtree;
  });

  return (
    <div>
      <ul>
        {directChildren.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
    </div>
  );
};
