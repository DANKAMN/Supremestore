import { Toaster } from 'react-hot-toast'
import AppLayout from 'src/components/Layout'
import 'src/styles/globals.css'
import { CartProvider } from 'use-shopping-cart'

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

export default function App({ Component, pageProps }) {
  return (
    <CartProvider stripe={stripeKey} cartMode="checkout-session" currency="USD">
      <AppLayout>
        <Component {...pageProps} />
        <Toaster />
      </AppLayout>
    </CartProvider>
    
  )
}
