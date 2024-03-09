import ProductCard, { ProductCardProps } from "./ProductCard";

interface ProductsCardListProps {
  products: ProductCardProps[];
}

const ProductsCardList: React.FC<ProductsCardListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductsCardList;
