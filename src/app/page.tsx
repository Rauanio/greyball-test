'use client'

import { getProducts } from "@/features/products/api/getProducts";
import { App } from "./App";
import { useEffect, useState } from "react";
import { Product } from "@/shared/types/product.types";
import { useFilters } from "@/features/filters";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const filters = useFilters()

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts(filters);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [filters])

  return (
    <>
      <App products={products} />
    </>
  );
}
