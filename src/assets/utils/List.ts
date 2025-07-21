export function hasItems(listOne: unknown[], listTwo: unknown[]) {
  return listOne.every((itemListOne) => listTwo.includes(itemListOne));
}
