import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/src/shared/ui/tooltip';
import { cn } from '@/src/shared/lib/utils';

import css from './navItem.module.scss';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, isActive }) => (
  <div
    className={cn(
      'flex h-9 w-9 items-center justify-center rounded-full',
      isActive ? 'bg-active' : '',
    )}
  >
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className="flex h-full w-full items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <div
              className={cn(
                'flex items-center justify-center h-5 w-5',
                isActive ? css.activeIcon : css.icon,
              )}
            >
              {icon}
            </div>
            <span className="sr-only">{label}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

export default NavItem;
