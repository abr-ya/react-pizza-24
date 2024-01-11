import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface ICounterState {
  value: number;
  increment: () => void;
  decrement: () => void;
  setValue: (value: number) => void;
}

export const useCounter = create<ICounterState>()(
  devtools(
    (set) => ({
      value: 0,
      increment: () => set((state) => ({ value: state.value + 1 }), false, "increment"),
      decrement: () => set((state) => ({ value: state.value - 1 }), false, "decrement"),
      setValue: (value) => set(() => ({ value }), false, "setValue"),
    }),
    { name: "Counter" },
  ),
);
