import { useProductStore } from "../store/useProductStore";
import {
  Package2Icon,
  DollarSignIcon,
  ImageIcon,
  PlusCircleIcon,
} from "lucide-react";

function AddProductModal() {
  const { addProduct, formData, setFormDATA, loading } = useProductStore();
  return (
    <dialog className="modal" id="addProductModal">
      <div className="modal-box">
        {/* close button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            X
          </button>
        </form>
        {/* modal header */}
        <h3 className="font-bold text-lg mb-8">Add Product</h3>
        {/* modal body */}
        <form className="flex flex-col gap-4" onSubmit={addProduct}>
          <div className="grid gap-6">
            {/* product name input */}
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text">Product Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-base-content/50 z-10">
                  <Package2Icon className="size-5" />
                </div>

                <input
                  value={formData.name}
                  type="text"
                  onChange={(e) =>
                    setFormDATA({ ...formData, name: e.target.value })
                  }
                  placeholder="Product Name"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200 rounded-full"
                />
              </div>
            </div>

            {/* product price input */}
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text">Product Price</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-base-content/50 z-10">
                  <DollarSignIcon className="size-5" />
                </div>

                <input
                  value={formData.price}
                  type="number"
                  step="0.01"
                  min="0"
                  onChange={(e) =>
                    setFormDATA({ ...formData, price: e.target.value })
                  }
                  placeholder="0.00"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200 rounded-full"
                />
              </div>
            </div>

            {/* product image input */}
            <div className="form-control">
              <label className="label mb-2">
                <span className="label-text">Image URL</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-base-content/50 z-10">
                  <ImageIcon className="size-5" />
                </div>
                <input
                  value={formData.image}
                  type="text"
                  onChange={(e) =>
                    setFormDATA({ ...formData, image: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200 rounded-full"
                />
              </div>
            </div>
          </div>
          {/* form actions */}
          <div className="modal-action">
            <div method="dialog">
              <button className="btn btn-ghost">Cancel</button>
            </div>
            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={
                !formData.name || !formData.price || !formData.image || loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      {/* backdrop */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default AddProductModal;
