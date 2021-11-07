import { ChakraProvider, Box, ColorModeProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Box>
          <Component {...pageProps} />
        </Box>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
