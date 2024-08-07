import ManagerSlice from './slice';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <ManagerSlice>{children}</ManagerSlice>;
}
