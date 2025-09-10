import { useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import api from "../api";

function ProductForm({ onProductAdded }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    inStock: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/products", {
      ...form,
      price: Number(form.price),
    });
    onProductAdded(res.data);
    setForm({ name: "", category: "", price: "", inStock: true });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 2, border: "1px solid #ddd", borderRadius: 2, mb: 2 }}
    >
      <h3>Add Product</h3>
      <TextField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Category"
        name="category"
        value={form.category}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={form.inStock}
            onChange={handleChange}
            name="inStock"
          />
        }
        label="In Stock"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>
    </Box>
  );
}

export default ProductForm;
