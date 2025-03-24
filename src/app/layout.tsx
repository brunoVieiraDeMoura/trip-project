import type { Metadata } from 'next';
import './globals.css';
import theme from '@/src/utils/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';

export const metadata: Metadata = {
  title: 'safetrip',
  authors: { name: 'Bruno Vieira de Moura' },
  description:
    'Transforme seu treino com o FitBoost, o aplicativo de treinos personalizados que ajuda você a alcançar seus objetivos! Experimente grátis.',
  keywords:
    'treino personalizado, fitness app, treinos, saúde, fitboost, exercícios, progresso fitness',
  openGraph: {
    type: 'website',
    url: '',
    title: 'fitboost - treinos personalizados para você',
    description:
      'Transforme seu treino com o FitBoost! Treinos personalizados, gráficos de progresso e muito mais. Baixe agora!',
    images: '',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'fitboost - treinos personalizados para você',
    description:
      'Transforme seu treino com o FitBoost! Treinos personalizados, gráficos de progresso e muito mais. Baixe agora!',
    images: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
