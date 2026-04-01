'use client';

import { ReactNode } from 'react';
import { I18nProvider } from '@/lib/i18n/context';
import { UserProvider } from '@/lib/userContext';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <UserProvider>{children}</UserProvider>
    </I18nProvider>
  );
}
