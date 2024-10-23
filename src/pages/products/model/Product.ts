export interface ProductModel {
  id: number;
  name: string;
  price: number;
}
export const products: ProductModel[] = [
  { id: 0, name: "Banana", price:500},
  { id: 1, name: "Peach" , price:700 },
  { id: 2, name: "Apple", price:600 },
  { id: 3, name: "Qiwi", price:100 },
  { id: 4, name: "Pineapple", price:1500 },
];
