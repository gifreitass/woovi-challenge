import { create } from 'zustand'

interface IPrice {
    amount: string,
    total: string,
    parcelNumber: number
}

interface priceState {
    price: IPrice,
    removePrice: () => void,
    updatePrice: (newPrice: IPrice) => void
}

export const useStore = create<priceState>((set) => ({
    price: {
        amount: '',
        total: '',
        parcelNumber: 0
    },
    removePrice: () => set({ price: {
        amount: '',
        total: '',
        parcelNumber: 0
    } }),
    updatePrice: (newPrice: IPrice) => set({ price: newPrice }),
}))
