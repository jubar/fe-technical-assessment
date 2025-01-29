import { SVGProps } from 'react';

export default function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.35186 0.13324H2.6481L2.10735 0.673991H0.214722V1.75549H7.78524V0.673991H5.89261L5.35186 0.13324ZM6.16298 3.37775V8.78526H1.83698V3.37775H6.16298ZM0.755473 2.29624H7.24449V8.78526C7.24449 9.38008 6.75781 9.86676 6.16298 9.86676H1.83698C1.24215 9.86676 0.755473 9.38008 0.755473 8.78526V2.29624Z"
      />
    </svg>
  );
}
