interface Brand {
  name: string;
  logoUrl: string;
}

const brands: Brand[] = [
  {
    name: "Brand A",
    logoUrl: "/images/brands/lenovo.png", // Replace with the actual logo URL
  },
  {
    name: "Brand B",
    logoUrl: "/images/brands/google.png", // Replace with the actual logo URL
  },
  {
    name: "Brand C",
    logoUrl: "/images/brands/apple.png", // Replace with the actual logo URL
  },
  {
    name: "Brand D",
    logoUrl: "/images/brands/microsoft.png", // Replace with the actual logo URL
  },
  {
    name: "Brand E",
    logoUrl: "/images/brands/samsung.png", // Replace with the actual logo URL
  },
  {
    name: "Brand C",
    logoUrl: "/images/brands/apple.png", // Replace with the actual logo URL
  },
  {
    name: "Brand D",
    logoUrl: "/images/brands/microsoft.png", // Replace with the actual logo URL
  },
  {
    name: "Brand A",
    logoUrl: "/images/brands/lenovo.png", // Replace with the actual logo URL
  },
  {
    name: "Brand B",
    logoUrl: "/images/brands/google.png", // Replace with the actual logo URL
  },
  {
    name: "Brand A",
    logoUrl: "/images/brands/lenovo.png", // Replace with the actual logo URL
  },
  // Add more brands as needed
];

const ShopByBrandSection: React.FC = () => {
  return (
    <section className="bg-blue-100 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center">
          Shop by Brand
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-md shadow-md"
            >
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="max-h-12 max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrandSection;
