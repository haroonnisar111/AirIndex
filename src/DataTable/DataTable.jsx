import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Chip, Typography } from '@mui/material';

export default function FixedSizeGrid({ data }) {
  const divStyles = {
    height: 600,
    width: '100%',
    marginTop: 10,
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Station Name',
      width: 400,
      align: 'center',
      headerAlign: 'center',
      editable: true,
      valueGetter: params => `${params.row.station.name}`,
    },

    {
      field: 'aqi',
      headerName: 'Air Quality',
      width: 400,
      align: 'center',
      headerAlign: 'center',
      renderCell: params => {
        return (
          <Chip
            sx={{ width: '50%' }}
            label={`${params.row.aqi}%`}
            color={`${
              params.row.aqi <= 100
                ? 'success'
                : params.row.aqi >= 100
                ? 'error'
                : 'primary'
            }`}
          />
        );
      },
    },
    {
      field: 'stime',
      headerName: 'Time',
      width: 400,
      align: 'center',
      headerAlign: 'center',
      editable: true,
      valueGetter: params => `${params.row.time.stime}`,
    },
  ];

  return (
    <div style={divStyles}>
      {data.length > 0 ? (
        <DataGrid columns={columns} rows={data} pageSize={20} />
      ) : (
        <Typography variant='h5'>
          Search For Country to View Air Quality
        </Typography>
      )}
    </div>
  );
}
