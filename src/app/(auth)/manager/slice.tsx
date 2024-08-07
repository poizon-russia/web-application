import { cn } from '@/src/shared/lib/utils';
import NavPanel from '@/src/widgets/navPanel/NavPanel';

import css from './page.module.scss';

type Props = {
  children: React.ReactNode;
};

export default function ManagerSlice({ children }: Props): JSX.Element {
  return (
    <div
      className={cn(
        css.wrapper,
        'flex min-h-screen w-full flex-col bg-muted/80',
      )}
    >
      <aside className="fixed inset-y-0 left-0 z-10 w-14 flex-col border-r flex bg-background pt-5">
        <div className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <NavPanel />
        </div>
      </aside>
      <div className={css.content}>{children}</div>
    </div>
  );
}
