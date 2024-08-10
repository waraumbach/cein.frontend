import { Link } from "react-router-dom";
import { useOrder } from "../../context/orderContext";

const Products = ({ products }) => {
  const { addToOrder } = useOrder();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product._id} className="group bg-white overflow-hidden hover:bg-secondary hover:bg-opacity-5">
            <Link to={'/products/' + product._id}>
            <div className="flex flex-col items-center">
              <img src={product.images[0]} alt={product.name} className="w-full h-48 my-4 object-contain" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="font-thin text-sm mb-4">{product.description}</p>
              <p className="font-thin text-sm">{product.quantity} ml</p>
              <p className="font-thin text-sm text-neutral">{product.price} $</p>
            </div>
            </Link>
            <button onClick={() => addToOrder(product, 1)} className="z-10 w-full bg-neutral text-neutral-50 font-thin p-4 text-sm mt-4 hidden group-hover:block">Add to your cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
