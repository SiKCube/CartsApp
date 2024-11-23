import React, { useEffect, useReducer, useContext, createContext } from "react";

function CartsReducer(state: Cart[], action: CartAction) {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    case "remove":
      return state.filter((cart) => cart.id !== action.cartId)
    case "init":
      return action.payload
  }
}

function SobreReducer(state: Sobre[], action: SobreAction) {
  switch (action.type) {
    case "add":
      return [...state, action.payload]
    case "remove":
      return state.filter((sobre) => sobre.id !== action.sobreId)
    case "init":
      return action.payload
  }
}

const initalValue = {
  carts: [],
  sobres: []
}

const AppCtx = createContext<{
  carts: Cart[]
  cartsDishpatch: React.Dispatch<CartAction>
  sobres: Sobre[]
  sobresDishpatch: React.Dispatch<SobreAction>
}>({
  carts: initalValue.carts,
  cartsDishpatch: () => { },
  sobres: initalValue.sobres,
  sobresDishpatch: () => { }
})

export default function AppCtxProvider({ children }: { children: React.ReactNode }) {
  const [carts, cartsDishpatch] = useReducer(CartsReducer, initalValue.carts)
  const [sobres, sobresDishpatch] = useReducer(SobreReducer, initalValue.sobres)

  useEffect(() => {
    if (localStorage.getItem("carts")) {
      const localStorageCarts = JSON.parse(localStorage.getItem("carts")!)

      cartsDishpatch({ type: "init", payload: localStorageCarts })
    } else {
      localStorage.setItem("carts", JSON.stringify(initalValue.carts))

      const localStorageCarts = JSON.parse(localStorage.getItem("carts")!)

      cartsDishpatch({ type: "init", payload: localStorageCarts })
    }

    if (localStorage.getItem("sobres")) {
      const localStoragesobres = JSON.parse(localStorage.getItem("sobres")!)

      sobresDishpatch({ type: "init", payload: localStoragesobres })
    } else {
      localStorage.setItem("sobres", JSON.stringify(initalValue.sobres))

      const localStoragesobres = JSON.parse(localStorage.getItem("sobres")!)

      sobresDishpatch({ type: "init", payload: localStoragesobres })
    }
  }, [])

  useEffect(() => {
    if (carts !== initalValue.carts) localStorage.setItem("carts", JSON.stringify(carts))
    if (sobres !== initalValue.sobres) localStorage.setItem("sobres", JSON.stringify(sobres))
  }, [carts, sobres])

  return (
    <AppCtx.Provider value={{ carts, cartsDishpatch, sobres, sobresDishpatch }} >
      {children}
    </AppCtx.Provider>
  )
}

export const useAppCtx = () => useContext(AppCtx)
