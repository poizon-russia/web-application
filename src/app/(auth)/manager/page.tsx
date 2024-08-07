'use client';
import { useRouter } from 'next/navigation';

const Manager: () => void = () => {
  const router = useRouter();
  return router.push('manager/products');
};

export default Manager;
