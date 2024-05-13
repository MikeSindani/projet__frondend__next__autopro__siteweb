import { create } from 'zustand'
interface Car {
  id: number;
  year: number;
  model: string;
  marque: string;
  priceUSD: number;
  priceCDF: number;
  kilometrage: number;
  transmission: string;
  category: string;
  etat: string;
  images: string[];
  moteur: number;
  unit: string;
}
interface Modal {
  showModal: boolean;
  setShowModal: () => void;
  id: number;
  setId: (value:number) => void;
  data: Car[];
  setData: (value: Car[]) => void;
}
const useStoreModal = create<Modal>((set) => ({
  showModal: false,
  setShowModal: () => set((state) => ({ showModal: !state.showModal })),
  id: 1,
  setId: (value) => set((state) => ({ id: value})),
  data : [],
  setData: (value) => set(() => ({ data: value})),
}))
export default useStoreModal