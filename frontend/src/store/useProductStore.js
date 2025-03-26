import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useProductStore = create((set, get) => ({
  //products state
  products: [],
  loading: false,
  error: null,
  currentProduct: null,

  //form state
  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormDATA: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  resetForm: () => set({ formData: { name: "", price: "", image: "" } }),
  fetchProduct: async (id) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products/${id}`);
      set({ currentProduct: response.data.data, formData: response.data.data, error: null });
    } catch (err) {
      console.log(err);
      set({ error: "Something went wrong", currentProduct: null });
    } finally {
      set({ loading: false });
    }
},

  addProduct: async (e) => {
    e.preventDefault();
    set({ loading: true });
    try {
      const formData = get().formData;
      await axios.post(`${BASE_URL}/api/products`, formData);
      await get().fetchProducts();
      get().resetForm();
      document.getElementById("addProductModal").close();
      toast.success("Product added successfully");
      //todo:close the form automatically
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      set({ products: response.data.data, error: null });
    } catch (err) {
      if (err.response.status == 429) set({ error: "Too many requests" });
      else set({ error: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true });
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      set((prev) => ({
        products: prev.products.filter((product) => product.id !== id),
        error: null,
      }));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  },

  updateProduct :async (id) => {
    set({ loading: true });
    try {
      const { formData } = get().formData;
      const response = await axios.put(`${BASE_URL}/api/products/${id}`, formData);
      set({ currentProduct: response.data.data});
      toast.success("Product updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      set({ loading: false });
    }
  }
    
}));
