import { useAppCtx } from "~/context/AppCtx"
import CartCard from "./cards/cartCard"

export default function CartList({ id }: { id: number }) {
  const { carts } = useAppCtx()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        carts.map((cart, index) => {
          if (cart.sobreId === id) return (
            <CartCard title={cart.title} text={cart.text} id={cart.id} key={index} />
          )
        })
      }
    </div>
  )
}