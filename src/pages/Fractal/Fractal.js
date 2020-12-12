import React, {useState} from 'react';
import {Field, FieldArray, Form, Formik} from 'formik';
import {Button, Grid, MenuItem, Select} from '@material-ui/core';
import {AnimatedPythagorasTree} from 'react-armory-pythagoras-tree';
import KochSnowflake from './KochSnowflake';

const Fractal = () => {
  const iterationCounts = new Array(5).fill(0).map((_, i) => i + 1);
  const fractals = ['pifagoras-tree', 'knoch-snowflake'];

  const [iterationCount, setIterationCount] = useState(5);
  const [fractal, setFractal] = useState('pifagoras-tree');
  const [isClear, setIsClear] = useState(true);

  return (
    <Grid container spacing={2}>
      <Grid item lg={3} md={3} sm={3} xs={3} style={{background: 'red'}}>
        <Formik
            initialValues={{
              fractals: [{type: 'pifagoras-tree', id: '' + Math.random()}],
              iterationCounts: [{type: '5', id: '' + Math.random()}]
            }}
            onSubmit={({fractals, iterationCounts}) => {
              setIsClear(false);
              setFractal(fractals[0].type);
              setIterationCount(iterationCounts[0].type);
            }}>
            {({values}) => (
              <Form>
                <Grid container>
                  <Grid item container lg={4} alignItems={'center'}
                        direction={'column'} spacing={4} style={{padding: 50}}
                  >
                    <Grid item>
                      <FieldArray name="fractals">
                        <>
                          {values.fractals.map((fractal, index) => {
                            return (
                              <Field name={`fractals.${index}.type`} type="select"
                                     as={Select} key={fractal.id}
                              >
                                {fractals.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
                              </Field>
                            );
                          })}
                        </>
                      </FieldArray>
                    </Grid>
                    <Grid item>
                      <FieldArray name="iterationCounts">
                        <>
                          {values.iterationCounts.map((iterationCount, index) => {
                            return (
                              <Field name={`iterationCounts.${index}.type`} type="select"
                                     as={Select} key={iterationCount.id}
                              >
                                {iterationCounts.map((el) => <MenuItem key={el} value={el}>{el}</MenuItem>)}
                              </Field>
                            );
                          })}
                        </>
                      </FieldArray>
                    </Grid>
                    <Grid item>
                      <Button type={'submit'} color={'primary'} variant={'contained'}>Build</Button>
                    </Grid>
                    <Grid item>
                      <Button type={'button'} color={'primary'} variant={'contained'}
                              onClick={() => setIsClear(true)}>
                        Clear
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item lg={8}>
                    {!isClear
                      ? <>
                        {fractal === 'pifagoras-tree' &&
                        <AnimatedPythagorasTree totalLevels={iterationCount}/>}
                        {fractal === 'knoch-snowflake' && <KochSnowflake zoom={iterationCount}/>}
                      </>
                      : ''
                    }
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
      </Grid>
      <Grid item lg={9} md={9} sm={9} xs={9} style={{background: 'blue'}}>

      </Grid>
    </Grid>
  );
};

export default Fractal;