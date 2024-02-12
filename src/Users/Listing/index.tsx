import React, { ReactElement } from 'react';
import Button from '@mui/material/Button';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import useUsersList from '../hooks/useUsersList';
import { Link } from "react-router-dom";
import Alert from '@mui/material/Alert';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center' },
    {
      field: 'login',
      headerName: 'User Name',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      editable: true,
      renderCell: (params: GridRenderCellParams) => {
        return (
            <Link to={`user/${params.value}`}>{params.value}</Link>
        )
      }
    },
    {
      field: 'avatar_url',
      headerName: 'User Avatar',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => {
        return (
            <div style={{height: '100%'}}>
                 <img alt='User Avatar' height={'100%'} src={params.value} />
            </div>
        )
      }
    },
  ];


const Listing = (): ReactElement => {
    const { users, error, loading} = useUsersList();

    if(error) {
        return <Alert severity="error">Error while fetching users list.</Alert>
    }
    return (
        <>
            <DataGrid
                rows={users}
                columns={columns}
                density='comfortable'
                loading={loading}
                hideFooterPagination
                disableRowSelectionOnClick
            />
        </>
    )
}

export default Listing;