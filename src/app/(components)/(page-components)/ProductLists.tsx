const products = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    href: "#",
    price: "2299AZN",
    description:
      "Super Retina XDR display, ProMotion technology, Always-On display",
    options: "3069AZN",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14pro-digitalmat-gallery-5-202209?wid=728&hei=666&fmt=png-alpha&.v=1663346233360",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Apple Watch S8 45mm",
    href: "#",
    price: "849AZN",
    description:
      "Temperature sensing, Period predictions, Measure your blood oxygen",
    options: "1151AZN",
    imageSrc:
      "https://www.apple.com/v/apple-watch-series-8/c/images/overview/health/health_hero__d63yvs2woguq_large_2x.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 2,
    name: "Airpods Max",
    href: "#",
    price: "1099AZN",
    description:
      "Personalized Spatial Audio with dynamic head tracking, Active Noise Cancellation and Transparency mode",
    options: "1549AZN",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1604709293000",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 2,
    name: "Microsoft Surface Pro 9 Laptop",
    href: "#",
    price: "2049AZN",
    description:
      "Blazing-fast performance to power through local games, creative apps, or stay on top of work with professional software built on the Intel® Evo platform.",
    options: "2500AZN",
    imageSrc:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RE59GDk_slim-pen-2_platinum?fmt=png-alpha",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

export default function ProductLists() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto my-6 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden hover:shadow-md transition duration-400"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 transition duration-400 sm:aspect-none sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 cursor-pointer"
                  />
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex-1 flex flex-col justify-end">
                  <p className="text-sm italic text-red-500 text-decoration-line line-through">
                    {product.options}
                  </p>
                  <p className="text-base font-medium text-green-700">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
