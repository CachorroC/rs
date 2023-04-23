import { cache } from "react";

export type Category = {
  name: string;
  idProceso: string;
  count: number;
  items: Omit<Category, "items">[];
};

export const getCategories = cache((): Category[] => [
  {
    name: "Electronics",
    idProceso: "electronics",
    count: 11,
    items: [
      {
        name: "Phones",
        idProceso: "phones",
        count: 4,
      },
      {
        name: "Tablets",
        idProceso: "tablets",
        count: 5,
      },
      {
        name: "Laptops",
        idProceso: "laptops",
        count: 2,
      },
    ],
  },
  {
    name: "Clothing",
    idProceso: "clothing",
    count: 12,
    items: [
      {
        name: "Tops",
        idProceso: "tops",
        count: 3,
      },
      {
        name: "Shorts",
        idProceso: "shorts",
        count: 4,
      },
      {
        name: "Shoes",
        idProceso: "shoes",
        count: 5,
      },
    ],
  },
  {
    name: "Books",
    idProceso: "books",
    count: 10,
    items: [
      {
        name: "Fiction",
        idProceso: "fiction",
        count: 5,
      },
      {
        name: "Biography",
        idProceso: "biography",
        count: 2,
      },
      {
        name: "Education",
        idProceso: "education",
        count: 3,
      },
    ],
  },
]);

export async function fetchCategoryByidProceso(idProceso: string | undefined) {
  // Assuming it always return expected categories
  return getCategories().find((category) => category.idProceso === idProceso);
}

export async function fetchCategories(): Promise<Category[]> {
  return getCategories();
}

async function findSubCategory(
  category: Category | undefined,
  subCategoryidProceso: string | undefined
) {
  return category?.items.find(
    (category) => category.idProceso === subCategoryidProceso
  );
}

export async function fetchSubCategory(
  categoryidProceso: string | undefined,
  subCategoryidProceso: string | undefined
) {
  const category = await fetchCategoryByidProceso(categoryidProceso);

  return findSubCategory(category,
    subCategoryidProceso);
}
