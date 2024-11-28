import { allStudentQuery } from '@/customHooks/crud.query.hooks';
import { Box, Card, CircularProgress, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

const AllStudent = () => {
  const { data: allStudentsData, isPending: allStudentPending } = allStudentQuery();
  const allStudentData = allStudentsData?.data || [];
  console.log('data', allStudentData);

  const columns = [
      { field: 'name', headerName: 'Name', flex: 1 },
      { field: 'email', headerName: 'Email', flex: 1 },
      { field: 'phone', headerName: 'Phone', flex: 1 },
      { field: 'city', headerName: 'City', flex: 1 },
      { field: 'address', headerName: 'Address', flex: 1 },
      { field: 'class', headerName: 'Class', flex: 1 },
  ];

  return (
      <>
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center',  }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
              All Students
          </Typography>

          <Card
              sx={{
                  width: '100%',
                  maxWidth: '800px',
                  p: 2,
                  boxShadow: 3,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
              }}
          >
              {
                  allStudentPending ? (
                      <Box
                          sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              height: 300,
                          }}
                      >
                          <CircularProgress />
                      </Box>
                  ) : (
                      <DataGrid
                          rows={allStudentData?.map((student: any) => ({
                              id: student._id,
                              name: student.name,
                              email: student.email,
                              phone: student.phone,
                              city: student.city,
                              address: student.address,
                              class: student.class,
                          })) || []}
                          columns={columns}
                          autoPageSize
                          sx={{
                              '& .MuiDataGrid-root': {
                                  border: 'none',
                              },
                              '& .MuiDataGrid-columnHeaders': {
                                  backgroundColor: 'primary.main',
                                  color: 'black',
                                  fontSize: '16px',
                              },
                              '& .MuiDataGrid-row:hover': {
                                  backgroundColor: 'action.hover',
                              },
                          }}
                      />
                  )
              }
          </Card>
      </Box>
      </>
  )
}

export default AllStudent