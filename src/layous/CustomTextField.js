import React from 'react';
import {useField} from 'formik';
import {TextField} from '@material-ui/core';

const CustomTextField = ({label, disabled, ...props}) => {
  const [field, meta] = useField(props);
  const messageError = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField {...field} {...{label, disabled}} variant={'outlined'} error={!!messageError}
               helperText={messageError}/>
  );
};

export default CustomTextField;