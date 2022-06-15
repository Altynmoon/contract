import styled from "@emotion/styled";
import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import { getFieldState } from "../utils/getFieldState";

const FieldsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`

type FormInputs = {
    checkbox: boolean,
    text : string,
    typeg: string,
    bin_iin: string;
    zavod: string;
    surname: string;
    name: string;
    otch:string;
    email:string;
    phone: string;
    dolj: string;
    osnov: string;
    region: string;
    punkt: string;
    ured: string;
    bank: string;
    bik: string;
    iik: string;
    kbe: string;
  }
  
const Info = () => {
  const { control, handleSubmit, getValues} = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
        checkbox: true || false,
        text: '',
        typeg: '',
        bin_iin: '',
        zavod: '',
        surname: '',
        name: '',
        otch: '',
        email: '',
        phone: '',
        dolj: '',
        osnov: '',
        region: '',
        punkt: '',
        ured: '',
        bank: '',
        bik: '',
        iik:'',
        kbe: ''
        }
    })
    

      const onSubmit = useCallback(() => {
        alert('SUBMIT')
        console.log(getValues())
    }, [])

    return(
        <form style={{marginTop: '10px'}} onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Typography variant="h5">Данные об организации</Typography>
       

        <FormControl fullWidth sx={{mb: 3}} required>

        <Controller
                name="typeg"
                control={control}
                rules={{
                required: 'Поле обязательное'
                }}
                render={({field, fieldState,formState}) => (

                  <FieldsContainer>

                  <label><span style={{color: "#DC1832"}}>*</span>Организационно-правовая форма:</label>
                  <RadioGroup
                    {...getFieldState({fieldState,formState})}
                    {...field}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    
                  >
                    <FormControlLabel value="АО" control={<Radio  sx={{
                      color: "#29345240",
                      '&.Mui-checked': {
                      color: "#DC1832",
                      },
                     }}/>} label="АО"   
                    />
                    <FormControlLabel value="ТОО" control={<Radio  sx={{
                      color: "#29345240",
                      '&.Mui-checked': {
                      color: "#DC1832",
                      },
                     }}/>} label="ТОО"/>

                    <FormControlLabel value="ИП" control={<Radio  sx={{
                      color: "#29345240",
                      '&.Mui-checked': {
                      color: "#DC1832",
                      },
                     }}/>} label="ИП"/>
                  </RadioGroup>

                  </FieldsContainer> 
                )}
            />
            </FormControl>




        <FormControl fullWidth sx={{mb: 3}} required>

            <Controller
                name="bin_iin"
                control={control}
                rules={{
                    required: 'Поле обязательное'
                }}

                render={({field, fieldState,formState}) => (
                  <FieldsContainer>
                    <label><span style={{color: "#DC1832"}}>*</span>БИН /ИИН:</label>
                    <InputMask mask="9999 9999 9999" style = {{width: '140px',height: "32px"}} 
                      {...getFieldState({fieldState,formState})}
                      {...field}
                    />
                  </FieldsContainer>
                )}
                />
                </FormControl>

        <FormControl fullWidth sx={{mb: 3}} required>

            <Controller
                name="zavod"
                control={control}
                rules={{
                    required: 'Поле обязательное'
                }}

                render={({field,fieldState,formState}) => (
                  <FieldsContainer>
                    <label><span style={{color: "#DC1832"}}>*</span>Полное наименование:</label>
                    <TextField type="text" size="small" style = {{width: '280px',height: 32}} placeholder="Завод номер 1"
                    {...getFieldState({fieldState,formState})}
                    {...field}/>
                  </FieldsContainer>
                )}
            />
        </FormControl>
      

        <Typography variant="h5">Данные представителя</Typography>

        <FormControl fullWidth sx={{mb: 3}} required>

        <Controller
                name="surname"
                control={control}
                rules={{
                    required: 'Поле обязательное'
                }}
                render={({field,fieldState,formState}) => (
                  <FieldsContainer>
                    <label><span style={{color: "#DC1832"}}>*</span>Фамилия: </label>
                    <TextField type="text"  size="small" style = {{width: '280px',height: 32}} 
                    {...getFieldState({fieldState,formState})}
                    {...field}/>
                  </FieldsContainer>
                )}
                />
          </FormControl>

          <FormControl fullWidth sx={{mb: 3}} required>

            <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: 'Поле обязательное'
                    }}
                    render={({field, fieldState,formState}) => (
                      <FieldsContainer>
                        <label><span style={{color: "#DC1832"}}>*</span>Имя:  </label>
                        <TextField type="text"  size="small" style = {{width: '280px',height: 32}} 
                        {...getFieldState({fieldState,formState})}
                        {...field}/>
                      </FieldsContainer>
                    )}
                    />
              </FormControl>
              <FormControl fullWidth sx={{mb: 3}} required>

              <Controller
                      name="otch"
                      control={control}
                      rules={{
                          required: 'Поле обязательное'
                      }}
                      render={({fieldState,field, formState}) => (
                        <FieldsContainer>
                          <label><span>Отчество </span>(необязательный)</label>
                          <TextField type="text"  size="small" style = {{width: '280px',height: 32}} 
                          {...getFieldState({fieldState,formState})}
                          {...field}/>
                        </FieldsContainer>
                      )}
                      />
                </FormControl>

                <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="email"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>Электонная почта: </label>  
                              <TextField type="email"  size="small" style = {{width: '280px',height: 32}} 
                                {...getFieldState({fieldState,formState})}
                                {...field}
                              />
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>

                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="phone"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>Телефон: </label>  
                              <InputMask mask="8 (999)999-99-99" style = {{width: '280px',height: 32}} 
                                {...getFieldState({fieldState,formState})}
                                {...field}/>
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>

                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="dolj"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>Должность:  </label>  
                              <TextField type="text"  size="small" style = {{width: '280px',height: 32}} placeholder = "Введите" 
                                {...getFieldState({fieldState,formState})}
                                {...field} />
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="osnov"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span>Основание полномочий:</span>(необязательный)</label>  
                              <TextField type="text"  size="small" style = {{width: '280px',height: 32}} placeholder = "Введите" 
                                {...getFieldState({fieldState,formState})}
                                {...field}/>
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>

                    <Typography variant="h5">Адрес</Typography>

                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="region"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>Регион:  </label>  
                             <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Город"
                                    {...field}
                                    style = {{width: '280px',height: 32}}
                                >
                                    <MenuItem value={10}>Астана</MenuItem>
                                    <MenuItem value={20}>Алматы</MenuItem>
                                    <MenuItem value={30}>Шымкент</MenuItem>
                                </Select>
                              {/* <TextField type="text"  size="small" style = {{width: '280px',height: 32}} placeholder = "Введите" /> */}
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>

                    
                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="punkt"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>Населенный пункт/Район:  </label>  
                              <TextField type="text"  size="small" style = {{width: '280px',height: 32}} placeholder = "Алматы" 
                                {...getFieldState({fieldState,formState})}
                                {...field} />
                            </FieldsContainer>
                          )}

                          />
                    </FormControl>

                    
                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="ured"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>Юридический адрес:  </label>  
                              <TextField type="text"  size="small" style = {{width: '280px',height: 32}} 
                                {...getFieldState({fieldState,formState})}
                                {...field} />
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>


                    <Typography variant="h5">Банк</Typography>

                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="bank"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>Банк:  </label>  
                              <TextField type="text"  size="small" style = {{width: '280px',height: 32}} placeholder="Напр Халык Банк" 
                                {...getFieldState({fieldState,formState})}
                                {...field}/>
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>

                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="bik"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span> БИК:  </label>  
                             <InputMask mask="999 999 999" style = {{width: '280px',height: 32}}  
                               {...getFieldState({fieldState,formState})}
                               {...field}/>
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>


                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="iik"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>ИИК:  </label>  
                              <TextField type="text"  size="small" style = {{width: '280px',height: 32}}  placeholder="Введите"
                                {...getFieldState({fieldState,formState})}
                                {...field}/>
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>
                    <FormControl fullWidth sx={{mb: 3}} required>
                  <Controller
                          name="kbe"
                          control={control}
                          rules={{
                              required: 'Поле обязательное'
                          }}
                          render={({field, fieldState,formState}) => (
                            <FieldsContainer>
                             <label><span style={{color: "#DC1832"}}>*</span>Кбе  </label>  
                              <TextField type="number" size="small" placeholder="0" 
                                {...getFieldState({fieldState,formState})}
                                {...field} />
                            </FieldsContainer>
                          )}
                          />
                    </FormControl>


                    <Button type="submit" variant="contained">Предпросмотр</Button>

                    <Button type="submit" variant="contained">Подписать с ЭЦП</Button>
                  
                    </Box>      
                  </form>
)
}
export default Info 






