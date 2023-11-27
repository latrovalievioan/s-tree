import { SVGProps } from 'react';

export const FileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    width={21}
    height={20}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"
    />
  </svg>
);
