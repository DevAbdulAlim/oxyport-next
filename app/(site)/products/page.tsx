import Link from "next/link";

export default function page() {
  return (
    <>
      <div>All Products</div>
      <Link href="/products/[slug]" as={`/products/a`}>
        Product Details
      </Link>
    </>
  );
}
