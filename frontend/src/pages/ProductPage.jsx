import { useProductStore } from "../store/useProductStore";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftIcon } from "lucide-react";

function ProductPage() {
  const {
    currentProduct,
    loading,
    error,
    fetchProduct,
    updateProduct,
    formData,
    setFormDATA,
    deleteProduct,
  } = useProductStore();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }
  return (
    <main className="container max-w-7xl mx-auto px-4 py-8 ">
      <div className="flex justify-between items-center mb-8">
        <button className="btn btn-primary gap-2" onClick={() => navigate(-1)}>
          <ArrowLeftIcon className="size-5" />
          Back to products
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* product image */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-base-100">
          <img
            src="https://i.pinimg.com/736x/05/89/8c/05898c23e071226120860524b22dcb33.jpg"
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* product details */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Edit Product</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault;
                updateProduct(e);
              }}
              className="space-y-6"
            >
              {/* product name input */}
              <label className="label">
                <span className="label-text font-bold">Product name</span>
              </label>
              <input
                type="text"
                placeholder="Product name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={(e) => setFormDATA({ ...formData, name: e.target.value })}
              />
              {/* product price input */}
              <label className="label">
                <span className="label-text font-bold">Product price</span>
              </label>
              <input
                type="number"
                placeholder="0.00"
                className="input input-bordered w-full"
                value={formData.price}
                onChange={(e) => setFormDATA({ ...formData, price: e.target.value })}
              />
              {/* product image input */}
              <label className="label">
                <span className="label-text font-bold">Product image</span>
              </label>
              <input
                type="text"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full"
                value={formData.image}
                onChange={(e) => setFormDATA({ ...formData, image: e.target.value })}
              />
              {/* form actions */}
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-success w-full">
                  Save changes
                </button>
                <button
                  className="btn btn-error w-full"
                  onClick={() => deleteProduct(currentProduct.id)}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
