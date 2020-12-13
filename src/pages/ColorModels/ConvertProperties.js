import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import convert from 'color-convert';
import CustomTextField from '../../layous/CustomTextField';

const validationSchema = yup.object({
  hsl: yup
    .string()
    .trim()
    .required()
    .matches(
      /^(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s+(100|[1-9][0-9]|[0-9])\s+(100|[1-9][0-9]|[0-9])%?$/,
      'Incorrect HSL')
});

const ConvertProperties = () => {
  return (
    <Formik
      initialValues={{
        hsl: '',
        cmyk: ''
      }}
      validationSchema={validationSchema}
      onSubmit={({hsl}, {setFieldValue}) => {
        const cmyk = convert.hsl.cmyk(hsl.split(' ')).join(' ');

        setFieldValue('cmyk', cmyk);
      }}
    >
      <Form>
        <Grid container direction={'column'} spacing={4} alignItems={'center'}>
          <Grid item>
            <Typography>Convert HSL into CMYK</Typography>
          </Grid>
          <Grid item>
            <Field name={'hsl'} label={'HSL'} as={CustomTextField}/>
          </Grid>
          <Grid item>
            <Field disabled name={'cmyk'} label={'CMYK'} as={CustomTextField}/>
          </Grid>
          <Grid item>
            <Button type={'submit'} color={'primary'} variant={'contained'}>Convert</Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default ConvertProperties;