import { extendTheme } from '@chakra-ui/react'

// helper function to make it easy to switch out themed colours
export const primaryColor = (value?: number) => (value ? `teal.${value}` : 'teal')

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: 'gray.700',
        backgroundColor: 'gray.50',
      },
    },
  },
})
