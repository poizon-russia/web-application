import Link from 'next/link';

import LogoIcon from './assets/brand/logo/LogoIcon';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Link href="/">
      <LogoIcon {...props} />
    </Link>
  );
};

export default Logo;
