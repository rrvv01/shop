'use client'

import { useDispatch, useSelector } from 'react-redux'
import CartSidebar from './CartSidebar'
import Header from './Header'
import { useEffect } from 'react'
import { hideLoading } from '@/redux/slices/cartSlice'
import { usePathname } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ children }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(hideLoading())
  }, [dispatch])

  const { cartItems, loading } = useSelector((state) => state.cart)
  const pathname = usePathname()

  return (
    <div>
      <div
        className={`${
          loading
            ? ''
            : cartItems.length > 0 &&
              (pathname === '/' || pathname.indexOf('/product/') >= 0)
            ? 'mr-32'
            : ''
        }`}
      >
        <Header />
        <main className="">{children}</main>
      </div>
      <CartSidebar />
    </div>
  )
}
