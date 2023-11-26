import { useGetObjectNames } from "@/hooks/useGetObjectNames";
import { getDirectChildren } from "@/utils";

type Props = {
  prefix?: string;
};

export const DirTree: React.FC<Props> = ({ prefix = "" }) => {
  const objects = useGetObjectNames();
  const directChildren = getDirectChildren(prefix, objects);
  return (
    <div>
      <ul>
        <div>{prefix || "root"}</div>
        {directChildren.map((c) => (
          <li key={c}>
            <DirTree prefix={c} />
          </li>
        ))}
      </ul>
    </div>
  );
};
