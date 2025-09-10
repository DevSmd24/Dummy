import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

function ProductTable({ products }) {
  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "price", headerName: "Price ($)", type: "number", flex: 1 },
    {
      field: "inStock",
      headerName: "In Stock",
      flex: 1,
      renderCell: (params) => (params.value ? "Yes" : "No"),
    },
    // {
    //   field: "createdAt",
    //   headerName: "Created At",
    //   flex: 1,
    //   valueGetter: (params) =>
    //     params.value
    //       ? new Date(params.value).toLocaleDateString("en-US")
    //       : "N/A",
    // },
  ];

  return (
    <Box sx={{ height: 400, width: "100%", mt: 2 }}>
      <DataGrid
        rows={products.map((p) => ({ ...p, id: p._id }))}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
      />
    </Box>
  );
}

export default ProductTable;
