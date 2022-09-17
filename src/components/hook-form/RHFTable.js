import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField, Box, Ale } from '@mui/material';

// sections
import AddDeleteTable from 'src/sections/dashboard/auto-evaluation/add-delete-table/AddDeleteTable';
import useTableAction from 'src/hooks/useTableAction';
// ----------------------------------------------------------------------

export default function RHFTable({ name, ...other }) {
  const { control } = useFormContext();
  const { equipmentObjectData } = useTableAction();
  // console.log('dldldl', equipmentObjectData);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <>
            <AddDeleteTable
              type="equipmentObject"
              onChange={
                // console.log('aidl', field)
                ((field.value = equipmentObjectData), console.log(field))
                // field.onChange(equipmentObjectData)
              }
            />
            {/* <input
              type="file"
              id="filepicker"
              name="fileList"
              webkitdirectory="true"
              multiple
              // accept=".jpg"
              onChange={(event) => {
                for (const file of event.target.files) {
                  prepareFile(file);
                  // field.onChange(equip mentObjectData);

                  // setFileList([...fileList, file]);
                  // console.log(...fileList);
                  // console.log(file.webkitRelativePath); // dat_example/SK-04-01-CD-C2-03-002013.dat
                }
                // const keys = Object.keys(e.target.files);
                // for (let i = 0; i < keys.length; i++) {
                //   // setFile(e.target.files[i])
                //   console.log(e.target.files[i]);
                // }
              }}
            /> */}
          </>
        );
      }}
    />
  );
}
