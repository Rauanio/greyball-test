
import { $api } from "@/shared/api/api"
import { Filters } from "@/shared/types/filters.types"
import { Product } from "@/shared/types/product.types"

export const getProducts = async (params: Filters): Promise<Product[]> => {
    const { limit, page, search, sort } = params
    try {
        const response = await $api.get<Product[]>(`/products?_page=${page}&_limit=${limit}&q=${search}&_sort=price&_order=${sort}`)

        return response.data
    } catch (error) {
        console.log(error);
        throw error;
    }
}