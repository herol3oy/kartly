import LoadingProductCard from "@/components/loadingProductCard";
import NoProductMessage from "@/components/noProductMessage";
import ProductCard from "@/components/productCard";
import ProductCardsContainer from "@/components/productCardsContainer";
import SearchProducts from "@/components/searchProducts";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import { filterProducts } from "@/utils/filter-products";
import { requestProducts } from "@/utils/request-products";
import ErrorPage from "next/error";
import { useState } from "react";
// import { requestProducts } from "@/utils/request-products";
import { Category } from "@/types/category";
import { formatCategory } from "@/utils/format-category";
import { getCategoryName } from "@/utils/get-category-name";

export type HomeProps = { initialProducts: Product[] };

const Home = ({ initialProducts }: HomeProps): JSX.Element => {
  console.log(initialProducts);
  const [productSearchQuery, setProductSearchQuery] = useState<string>("");
  const [userSelectCategory, setUserSelectCategory] = useState<string>("");

  const { data: products, isLoading, error } = useProducts(initialProducts);

  console.log("products", products);

  const handleCategoryClick = (category: Category) => {
    setUserSelectCategory(category);
  };

  // const { data: products, isLoading, error } = useProducts();

  const filteredProducts = filterProducts({
    products: products ?? [],
    productSearchQuery,
    userSelectCategory,
  });

  // if (error) {
  //   return (
  //     <ErrorPage
  //       title="There was an error retrieving the products. Please refresh the page and try again"
  //       statusCode={404}
  //       withDarkMode={false}
  //     />
  //   );
  // }

  return (
    <>
      <SearchProducts
        productSearchQuery={productSearchQuery}
        setProductSearchQuery={setProductSearchQuery}
      />

      <div className="flex gap-2 my-10 justify-center">
        <button
          onClick={() => setUserSelectCategory("")}
          className={`${
            userSelectCategory === "" && "primary-bg-color text-white"
          } border primary-border-color primary-text-color p-2 font-boldx`}
        >
          All
        </button>
        {Object.values(Category).map((category) => {
          const categoryBackgrounds =
            {
              [Category.MEN]: "text-cyan-300",
              [Category.WOMEN]: "text-pink-300",
              [Category.ELECTRONICS]: "text-slate-300",
              [Category.JEWELERY]: "text-yellow-300",
            }[category] || "";
          return (
            <button
              key={category}
              className={`${categoryBackgrounds} border primary-border-color p-2 font-bold ${
                userSelectCategory === category && "primary-bg-color"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {formatCategory(getCategoryName(category))}
            </button>
          );
        })}
      </div>

      <ProductCardsContainer>
        {isLoading && !filteredProducts ? (
          Array.from({ length: 10 }).map((_, index) => (
            <LoadingProductCard key={index} />
          ))
        ) : filteredProducts.length ? (
          filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <NoProductMessage message="No product found!" />
        )}
      </ProductCardsContainer>
    </>
  );
};

export async function getStaticProps() {
  const initialProducts = await requestProducts();
  return {
    props: {
      initialProducts,
    },
  };
}
export default Home;

// export async function getServerSideProps() {
//   const data = await requestProducts();

//   return {
//     props: {
//       data,
//     },
//   };
// }
