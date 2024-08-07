import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Product List</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Link to={'/products/' + product._id}>
            <div key={product._id} className="flex flex-col items-center bg-white rounded-lg overflow-hidden">
              <img src={product.images[0]} alt={product.name} className="w-full h-48 mb-4 object-contain" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="font-thin text-sm mb-4">{product.description}</p>
              <p className="font-thin text-sm">{product.quantity} ml</p>
              <p className="font-thin text-sm text-neutral">{product.price} $</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
