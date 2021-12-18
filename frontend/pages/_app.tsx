import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '../theme';

import '@fontsource/source-sans-pro/200.css';
import '@fontsource/source-sans-pro/300.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
