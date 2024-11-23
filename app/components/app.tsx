import { useState } from "react"
import { useAppCtx } from "~/context/AppCtx"

import PlayCard from "./cards/playCard"

import { Link } from "@remix-run/react"
import { Button } from "./ui/button"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

export default function App({ sobreId }: { sobreId: number }) {
  const { carts } = useAppCtx()

  const playCarts = carts.map((cart) => {
    if (cart.sobreId === sobreId) return cart
  })

  const [cartToPlay, setCartToPlay] = useState<number>(0)
  const [viewRes, setViewRes] = useState<boolean>(false)

  return (
    <>
      <PlayCard
        title={playCarts[cartToPlay]?.title}
        text={playCarts[cartToPlay]?.text}
        viewRes={viewRes}
        setViewRes={setViewRes}
      />
      <div className="flex justify-between items-center px-20">
        <Button
          disabled={cartToPlay - 1 <= -1 ? true : false}
          onClick={() => {
            setCartToPlay(cartToPlay - 1);
            setViewRes(false)
          }}>
          <ArrowBigLeft className="size-5" />
        </Button>
        <Button
          disabled={cartToPlay + 1 >= playCarts.length ? true : false}
          onClick={() => {
            setCartToPlay(cartToPlay + 1);
            setViewRes(false)
          }}>
          <ArrowBigRight className="size-5" />
        </Button>
      </div>
      <Link to={"/"}>
        <Button>
          Exit
        </Button>
      </Link>
    </>
  )
}