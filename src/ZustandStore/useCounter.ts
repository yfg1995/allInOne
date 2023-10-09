import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'; // persist - localStorage | devtools - redux

interface ICounter {
  count: number;
  increaseCount: (by: number) => void;
}

// export const useCounter = create<ICounter>()((set) => ({
//   count: 0,
//   increaseCount: (by) => set((state) => ({count: state.count + by})),
// }))

export const useCounter = create<ICounter>()(
  devtools(
    persist((set) => ({
      count: 0,
      increaseCount: (by) => set((state) => ({count: state.count + by})),
      }),
      {name: 'counter'}
    )
  )
)