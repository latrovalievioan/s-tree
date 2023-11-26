const isDir = (s: string) => s.endsWith("/") || s === "";
const getDepth = (s: string) => {
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "/") depth++;
  }
  return isDir(s) ? depth : depth + 1;
};

export const getDirectChildren = (prefix: string, objects: string[]) => {
  return objects.filter((o) => {
    const currentDepth = getDepth(prefix);
    const isFromSubtree = o.startsWith(prefix);
    const objectDepth = getDepth(o);
    const isDeeperByOne = objectDepth === currentDepth + 1;

    return isDeeperByOne && isFromSubtree;
  });
};
