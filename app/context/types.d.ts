interface Cart {
  id: number
  title: string
  text: string
  sobreId: number
}

interface Sobre {
  id: number
  title: string
  text: string
}

type CartAction =
  | { type: "add", payload: Cart }
  | { type: "remove", cartId: number }
  | { type: "init", payload: Cart[] }

type SobreAction =
  | { type: "add", payload: Sobre }
  | { type: "remove", sobreId: number }
  | { type: "init", payload: Sobre[] }
