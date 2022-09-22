import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from '../../redux/store';

// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, Box, Ale } from '@mui/material';

// sections
import AddDeleteTable from 'src/sections/dashboard/auto-evaluation/add-delete-table/AddDeleteTable';
import useTableAction from 'src/hooks/useTableAction';
// ----------------------------------------------------------------------

export default function RHFTable({ name, tableData, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <AddDeleteTable type={name} field={field}  />
          </>
        );
      }}
    />
  );
}
