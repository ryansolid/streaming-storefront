"use client";

import { createSignal, createContext, useContext, type Signal } from "solid-js";

const CartCountContext = createContext<Signal<number | null>>();

export function CartCountProvider(props: { children: any }) {
  const countSignal = createSignal<null | number>(null);

  return (
    <CartCountContext.Provider value={countSignal}>
      {props.children}
    </CartCountContext.Provider>
  );
}

export function useCartCount(initialCount: number): Signal<number | null> {
  const context = useContext(CartCountContext);
  if (context === undefined) {
    throw new Error("useCartCount must be used within a CartCountProvider");
  }
  return [
    () => {
      const v = context[0]();
      return v === null ? initialCount : v;
    },
    context[1],
  ];
}
