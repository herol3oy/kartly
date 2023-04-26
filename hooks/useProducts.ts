import { Product } from "@/types/product";
import { requestProducts } from "@/utils/request-products";
import { useQuery } from "@tanstack/react-query";

export type UseProducts = {
  data: Product[] | undefined;
  isLoading: boolean;
  error: unknown;
};

export const useProducts = (placeholderData: Product[]): UseProducts => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: requestProducts,
    initialData: placeholderData,
  });

  return { data, isLoading, error };
};
