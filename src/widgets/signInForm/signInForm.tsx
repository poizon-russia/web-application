'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';

import { useLoginUser } from '@/src/features/auth/hooks/useLoginUser';
import { Form, FormField, FormItem, FormControl } from '@/src/shared/ui/form';
import { Input } from '@/src/shared/ui/input';
import { Button } from '@/src/shared/ui/button';
import { loginSchema } from '@/src/entities/auth/model/schema';
import type { ServerError } from '@/src/entities/auth/model/types';

import css from './signInForm.module.scss';

type LoginFormValues = {
  account: string;
  password: string;
};

type FieldErrors = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any | undefined;
};

const SignInForm: React.FC = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      account: '',
      password: '',
    },
  });

  const { mutateAsync: loginUser } = useLoginUser();
  const [isErrorsShown, setIsErrorsShown] = useState<boolean>(false);
  const errors: FieldErrors = form.formState.errors;

  const signIn = async (data: LoginFormValues) => {
    try {
      await loginUser(data);
      toast.success('Вы успешно авторизовались!', { position: 'top-right' });
    } catch (error) {
      const serverError = error as ServerError;
      const errorMessage =
        serverError.response?.data?.message ||
        'Ошибка входа. Пожалуйста, попробуйте позже.';
      toast.error(errorMessage, { position: 'top-right' });
      if (isErrorsShown) {
        form.setError('root', { type: 'manual', message: errorMessage });
      }
    }
  };

  useEffect(() => {
    if (!isErrorsShown) return;
    for (const field in errors) {
      const errorMessage = errors[field]?.message;
      if (errorMessage) {
        toast.error(errorMessage, { position: 'top-right' });
      }
    }
    setIsErrorsShown(false);
  }, [isErrorsShown, errors]);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  return (
    <>
      <Toaster />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(signIn)} className={css.form}>
          <p>Вход</p>
          <FormField
            control={form.control}
            name="account"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Номер телефона"
                    {...field}
                    onKeyDown={handleKeyPress}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Пароль"
                    type="password"
                    {...field}
                    onKeyDown={handleKeyPress}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            onClick={() => setIsErrorsShown(true)}
            variant={'default'}
          >
            Войти
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignInForm;
