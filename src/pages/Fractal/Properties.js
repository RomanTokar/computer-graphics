import React from 'react';
import {Field, FieldArray, Form, Formik} from 'formik';
import {Button, Grid, MenuItem} from '@material-ui/core';
import CustomSelect from '../../layous/CustomSelect';

const Properties = ({setFractal, setIterationCount, setColorScheme, setIsClear}) => {
  const iterationCounts = new Array(5).fill(0).map((_, i) => i + 1);
  const fractals = ['pifagoras-tree', 'knoch-snowflake'];
  const colorSchemes = ['transparent', 'colorScheme1', 'colorScheme2', 'colorScheme3'];

  return (
    <Formik
      initialValues={{
        fractals: [{type: 'pifagoras-tree', id: '' + Math.random()}],
        iterationCounts: [{type: '5', id: '' + Math.random()}],
        colorSchemes: [{type: 'transparent', id: '' + Math.random()}]
      }}
      onSubmit={({fractals, iterationCounts, colorSchemes}) => {
        setIsClear(false);
        setFractal(fractals[0].type);
        setColorScheme(colorSchemes[0].type)
        setIterationCount(iterationCounts[0].type);
      }}>
      {({values}) => (
        <Form>
          <Grid container alignItems={'center'}
                direction={'column'} spacing={4}
          >
            <Grid item>
              <FieldArray name="fractals">
                <>
                  {values.fractals.map((fractal, index) => (
                      <Field name={`fractals.${index}.type`} type="select"
                             as={CustomSelect} key={fractal.id} label={'Fractal'}
                      >
                        {fractals.map((el) => (
                          <MenuItem key={el} value={el}>{el}</MenuItem>
                        ))}
                      </Field>
                    )
                  )}
                </>
              </FieldArray>
            </Grid>
            <Grid item>
              <FieldArray name="colorSchemes">
                <>
                  {values.colorSchemes.map((colorScheme, index) =>
                    (
                      <Field name={`colorSchemes.${index}.type`} type="select"
                             as={CustomSelect} key={colorScheme.id}
                             label={'Color Scheme'}
                      >
                        {colorSchemes.map(
                          (el) => <MenuItem key={el} value={el}>{el}</MenuItem>)
                        }
                      </Field>
                    )
                  )}
                </>
              </FieldArray>
            </Grid>
            <Grid item>
              <FieldArray name="iterationCounts">
                <>
                  {values.iterationCounts.map((iterationCount, index) =>
                    (
                      <Field name={`iterationCounts.${index}.type`} type="select"
                             as={CustomSelect} key={iterationCount.id}
                             label={'IterationCount'}
                      >
                        {iterationCounts.map(
                          (el) => <MenuItem key={el} value={el}>{el}</MenuItem>)
                        }
                      </Field>
                    )
                  )}
                </>
              </FieldArray>
            </Grid>
            <Grid item>
              <Button type={'submit'} variant={'contained'}
                      style={{background: '#217FA8', fontSize: 24, textTransform: 'none'}}
              >
                Build
              </Button>
            </Grid>
            <Grid item>
              <Button type={'button'} color={'primary'} variant={'outlined'}
                      style={{fontSize: 24, textTransform: 'none'}}
                      onClick={() => setIsClear(true)}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Properties;