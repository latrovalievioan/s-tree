import { SVGProps } from "react";

export const FileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 9v8.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C17.48 21 16.92 21 15.8 21H8.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C5 19.48 5 18.92 5 17.8V6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.52 3 7.08 3 8.2 3H13m6 6-6-6m6 6h-5a1 1 0 0 1-1-1V3"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
