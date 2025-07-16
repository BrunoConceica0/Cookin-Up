import type ICategories from "@/interface/ICategories";

export async function getCategories() {
  const res = await fetch(
    "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json"
  );

  // o TypeScript não sabe que o retorno do fetch é um array de objetos
  // em interface/ICategories.ts temos um array de objetos para typear
  // então precisamos tipar usando  'as' em  ICategories[]
  const categories: ICategories[] = await res.json();
  return categories;
}
