import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import api from "../api";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";

function Admin() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
    console.log(res.data)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductAdded = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <h2>Admin Panel</h2>
      <ProductForm onProductAdded={handleProductAdded} />
      <ProductTable products={products} />
    </Container>
  );
}

export default Admin;
