import { SVGProps } from 'react';

export const Back = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={40} cy={40} r={36} stroke="currentColor" strokeWidth={8} />
    <path
      d="M45.333 23 28 40.2l17.333 17.2"
      stroke="currentColor"
      strokeWidth={8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
