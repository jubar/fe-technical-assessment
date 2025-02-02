import { SVGProps } from 'react';

export default function EditIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.06 2.13324C9.92479 2.13324 9.7842 2.18731 9.68145 2.29006L8.69188 3.27963L10.7197 5.30745L11.7093 4.31787C11.9202 4.10698 11.9202 3.76631 11.7093 3.55542L10.4439 2.29006C10.3358 2.18191 10.2006 2.13324 10.06 2.13324ZM8.11328 5.38858L8.61077 5.88607L3.71156 10.7853H3.21407V10.2878L8.11328 5.38858ZM2.13257 9.83896L8.11328 3.85825L10.1411 5.88607L4.16039 11.8668H2.13257V9.83896Z"
      />
    </svg>
  );
}
