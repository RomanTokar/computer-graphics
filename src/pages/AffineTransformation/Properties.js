import React from 'react';
import {Formik, Form, Field} from 'formik';
import {Button, Grid} from '@material-ui/core';
import CustomTextField from '../../layous/CustomTextField';
import * as yup from 'yup';

const yupNumberField = yup.number().required().typeError('It must be number');

const validationScheme = yup.object({
  rotation: yupNumberField,
  ax: yupNumberField,
  ay: yupNumberField,
  bx: yupNumberField,
  by: yupNumberField,
  cx: yupNumberField,
  cy: yupNumberField
});

const Properties = ({setProperties, properties}) => {
  return (
    <Formik
      initialValues={properties}
      validationSchema={validationScheme}
      onSubmit={(values) => {
        setProperties(
          Object.entries(values).reduce(
            (acc, [key, value]) => ({...acc, [key]: +value}), {}
          )
        );
      }}
    >
      <Form>
        <Grid container direction={'column'} spacing={4} alignItems={'center'}>
          <Grid item>
            <Field name={'rotation'} label={'Rotation'} as={CustomTextField}/>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Field name={'ax'} label={'Ax'} as={CustomTextField}/>
            </Grid>
            <Grid item xs={6}>
              <Field name={'ay'} label={'Ay'} as={CustomTextField}/>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Field name={'bx'} label={'Bx'} as={CustomTextField}/>
            </Grid>
            <Grid item xs={6}>
              <Field name={'by'} label={'By'} as={CustomTextField}/>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Field name={'cx'} label={'Cx'} as={CustomTextField}/>
            </Grid>
            <Grid item xs={6}>
              <Field name={'cy'} label={'Cy'} as={CustomTextField}/>
            </Grid>
          </Grid>
          <Grid item>
            <Button type={'submit'} color={'primary'} variant={'contained'}>Build</Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
};

export default Properties;