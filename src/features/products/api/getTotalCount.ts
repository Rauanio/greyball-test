
import { $api } from "@/shared/api/api"
import { Product } from "@/shared/types/product.types"

export const getTotalCount = async () => {
    try {
        const response = await $api.get<Product[]>(`/products`)

        const total = response.data.length 

        return total
        
    } catch(error) {
        console.log(error); 
        throw error;
    }
}