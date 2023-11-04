import '@/styles/globals.css'
import { axeCoreA11yReporter } from '@/utils/axeCoreA11yReporter'
import type { AppProps } from 'next/app'

axeCoreA11yReporter()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
