import React from 'react';
import {useField} from 'formik';
import {FormControl, InputLabel, Select} from '@material-ui/core';

const CustomSelect = ({label, children, ...props}) => {
  const [field] = useField(props)

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select {...field}>
        {children}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;