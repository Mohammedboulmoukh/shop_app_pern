import { Link } from "react-router-dom";
import { EditIcon, Trash } from "lucide-react";
import { useProductStore } from "../store/useProductStore";


function ProductCard({ product }) {

  const { deleteProduct } = useProductStore();
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl trasition-shadow duration-300">
      {/* The product image. */}
      <figure className="relative pt-[56.25%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>
      {/* The product details. */}

      <div className="card-body">
        {/* The product name and price. */}
        <h1 className="card-title tect-lg font-semibold">{product.name}</h1>
        <p className="text-2xl font-bold text-primary">
          ${Number(product.price).toFixed(2)}
        </p>
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-sm btn-info btn-outline"
          >
            <EditIcon className="size-5" />
          </Link>
          <button className="btn btn-sm btn-error btn-outline" onClick={() => deleteProduct(product.id)}>
            <Trash className="size-5" />
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
