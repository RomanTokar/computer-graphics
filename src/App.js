import {FieldArray, Formik, Field, Form} from 'formik';
import {Button, Grid, MenuItem, Select} from '@material-ui/core';
import {AnimatedPythagorasTree} from 'react-armory-pythagoras-tree';
import {useState} from 'react';
import KochSnowflake from './KochSnowflake';

function App() {
  const [iterationCount, setIterationCount] = useState(5);
  const [fractal, setFractal] = useState('pifagoras-tree');
  const [isClear, setIsClear] = useState(true);

  return (
    <div>
      <Formik
        initialValues={{
          fractals: [{type: 'pifagoras-tree', id: '' + Math.random()}],
          iterationCounts: [{type: '5', id: '' + Math.random()}]
        }}
        onSubmit={({fractals, iterationCounts}) => {
          setIsClear(false);
          setFractal(fractals[0].type)
          setIterationCount(iterationCounts[0].type)
        }}>
        {({values}) => (
          <Form>
            <Grid container>
              <Grid item container lg={4} alignItems={'center'}
                    direction={'column'} spacing={4} style={{padding: 50}}
              >
                <Grid item>
                  <FieldArray name="fractals">
                    {() => (
                      <div>
                        {values.fractals.map((fractal, index) => {
                          return (
                            <div key={fractal.id}>
                              <Field
                                name={`fractals.${index}.type`}
                                type="select"
                                as={Select}
                              >
                                <MenuItem value="pifagoras-tree">pifagoras-tree</MenuItem>
                                <MenuItem value="knoch snowflake">knoch snowflake</MenuItem>
                              </Field>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </FieldArray>
                </Grid>
                <Grid item>
                  <FieldArray name="iterationCounts">
                    {() => (
                      <div>
                        {values.iterationCounts.map((iterationCount, index) => {
                          return (
                            <div key={iterationCount.id}>
                              <Field
                                name={`iterationCounts.${index}.type`}
                                type="select"
                                as={Select}
                              >
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="5">5</MenuItem>
                              </Field>
                            </div>
                          );
                        })}
                      </div>
                    )}
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
                  ? <div>
                    {fractal === 'pifagoras-tree' && <AnimatedPythagorasTree totalLevels={iterationCount}/>}
                    {fractal === 'knoch snowflake' && <KochSnowflake zoom={iterationCount}/>}
                  </div>
                  : <></>
                }
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
