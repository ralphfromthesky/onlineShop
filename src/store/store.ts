import { create } from "zustand";

type store = {
    name: string,
    email: string,
    setName: () => void;
}

export const userStore = create<store>((set)=> ({
    name: '',
    email: '',
    setName: () => set((state) => ({name: state.name}))
}))