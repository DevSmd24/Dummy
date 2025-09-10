import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import api from "../api";
import ProductTable from "../components/ProductTable";

function Public() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <h2>Public Product List</h2>
      <ProductTable products={products} />
    </Container>
  );
}

export default Public;
