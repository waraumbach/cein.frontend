

const products = [
  { id: 1, name: 'Product 1', price: '$29.99', image: './src/assets/photos/products/product.jpg' },
  { id: 2, name: 'Product 2', price: '$39.99', image: './src/assets/photos/products/product2.jpg' },
  { id: 3, name: 'Product 3', price: '$49.99', image: './src/assets/photos/products/product.jpg' },
  { id: 4, name: 'Product 4', price: '$59.99', image: './src/assets/photos/products/product.jpg' },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Product List</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
