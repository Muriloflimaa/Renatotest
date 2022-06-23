import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { SessionProvider as NextAuthProvider } from 'next-auth/react'
import '../styles/global.scss'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextAuthProvider session={pageProps.session}>
            <Toaster position="bottom-right" />
            <Header />
            <Component {...pageProps} />
        </NextAuthProvider>
    )
}

export default MyApp
