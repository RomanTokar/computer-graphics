import React from 'react';
import {Formik, Form, Field, FieldArray} from 'formik';
import {Button, Grid} from '@material-ui/core';
import CustomTextField from '../../layous/CustomTextField';
import * as yup from 'yup';

const yupNumberField = yup.number().required().typeError('It must be number');
const yupNumberFieldTuple = yup.array().of(yupNumberField);

const validationScheme = yup.object({
  rotationInDegrees: yupNumberField,
  points: yup.array().of(yupNumberFieldTuple)
});

const Properties = ({setProperties, properties}) => {
  const axis = ['x', 'y'];
  const pointsName = ['A', 'B', 'C'];

  return (
    <Formik
      initialValues={properties}
      validationSchema={validationScheme}
      onSubmit={({rotationInDegrees, points}) => {
        setProperties({
          rotationInDegrees: +rotationInDegrees,
          points: points.map(p => [+p[0], +p[1]])
        });
      }}
    >
      {({values}) => (
        <Form>
          <Grid container direction={'column'} spacing={4} alignItems={'center'}>
            <Grid item>
              <Field name={'rotationInDegrees'} label={'Rotation in degrees'} as={CustomTextField}/>
            </Grid>
            <FieldArray name={'points'}>
              {() => (
                values.points.map((point, pointIndex) => (
                  <FieldArray key={pointIndex} name={`points.${pointIndex}`}>
                    {() => (
                      <Grid item container spacing={2}>
                        {point.map((coordinate, coordinateIndex) => (
                          <Grid key={coordinateIndex} item xs={6}>
                            <Field name={`points.${pointIndex}.${coordinateIndex}`}
                                   label={`${pointsName[pointIndex]}${axis[coordinateIndex]}`}
                                   as={CustomTextField}/>
                          </Grid>
                        ))}
                      </Grid>
                    )}
                  </FieldArray>
                ))
              )}
            </FieldArray>
            <Grid item>
              <Button type={'submit'} color={'primary'} variant={'contained'}>Build</Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Properties;