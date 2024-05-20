import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme"; // Adjust the import based on your theme setup

const mockData = [
  {
    _id: "66472432957e9567345dcc46",
    firstname: "Test",
    lastname: "test",
    email: "abc@gmail.com",
    phone: "1234567890",
    area: "Area1",
    complaintType: "Type1",
    sectors: "Sector2",
    company: "RK",
    details: "Demo",
    document: "E:\\MCA\\Python\\Customer-Complaint\\Customer-Complaint\\Backend\\uploads\\1715938354712-homePage.png",
    status: "Pending",
    date: "2024-05-17T09:32:34.936Z",
  },
  // Add more mock data as needed
];

const ListOfComplaints = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleViewDocument = (documentPath) => {
    // Assuming documentPath is a local file path, you'll need to adjust this to match your actual file serving mechanism
    const fileUrl = documentPath.replace(/\\/g, '/'); // Adjust path for URL if needed
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "firstname", headerName: "First Name", flex: 1 },
    { field: "lastname", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "area", headerName: "Area", flex: 1 },
    { field: "complaintType", headerName: "Complaint Type", flex: 1 },
    { field: "sectors", headerName: "Sectors", flex: 1 },
    { field: "company", headerName: "Company", flex: 1 },
    { field: "details", headerName: "Details", flex: 2 },
    {
      field: "document",
      headerName: "Document",
      flex: 2,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleViewDocument(params.value)}
        >
          View Document
        </Button>
      ),
    },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      renderCell: (params) => (
        <Typography>
          {new Date(params.value).toLocaleDateString()}
        </Typography>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" color={colors.primary[500]}>
          Complaints Dashboard
        </Typography>
      </Box>
      <Box mt="20px" style={{ height: 600, width: '100%' }}>
        <DataGrid
          autoPageSize={true}
          rows={mockData.map((item, index) => ({ id: index + 1, ...item }))}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default ListOfComplaints;
