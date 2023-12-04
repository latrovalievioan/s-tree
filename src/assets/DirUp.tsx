import { SVGProps } from 'react';

export const DirUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#a)"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H1ZM9 20V8m0 0-4 4m4-4 4 4" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);
