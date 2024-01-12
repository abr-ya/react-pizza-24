import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface ICounterState {
  value: number;
  increment: () => void;
  decrement: () => void;
  setValue: (value: number) => void;
  tempString: string;
}

export const useCounter = create<ICounterState>()(
  devtools(
    persist(
      (set) => ({
        value: 0,
        increment: () => set((state) => ({ value: state.value + 1 }), false, "increment"),
        decrement: () => set((state) => ({ value: state.value - 1 }), false, "decrement"),
        setValue: (value) => set(() => ({ value }), false, "setValue"),
        tempString: "просто строка для тестов",
      }),
      { name: "CounterLS", partialize: (state) => ({ counterValue: state.value }) },
    ),
    { name: "Counter" },
  ),
);

export const getCounterValue = () => useCounter.getState().value;
