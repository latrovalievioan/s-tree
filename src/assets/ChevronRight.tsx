import { SVGProps } from 'react';

export const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={10}
    height={10}
    viewBox="0 0 6 10"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 9 4-4-4-4"
    />
  </svg>
);
