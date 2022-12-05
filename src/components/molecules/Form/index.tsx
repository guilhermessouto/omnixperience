import { Formik, Field, Form as FormContainer} from 'formik';

import * as yup from "yup";

import { Container, Error, FieldContainer, Label } from './style';

import SubmitButton from '../../atoms/Button';

type Props = {
  handleEnterSubmit: any
  loading?: boolean
}

const Form = (props: Props) => {
  const schema = yup.object().shape({
    cep: yup.string()
    .required('Digite o CEP.')
    .min(8, 'Digite pelo menos 8 caracteres.')
  })

  return (
    <Formik
      onSubmit={props.handleEnterSubmit}
      validationSchema={schema}
      validateOnMount
      initialValues={{cep: ''}}
    >
    {({ errors, touched }) => (
      <Container>
        <FormContainer>
          <FieldContainer>
            <Label>Por favor, digite seu CEP abaixo:</Label>
            <Field
              name="cep" 
              type="text" 
              placeholder='00000-000' 
              required={true} 
            />

            <Error>
              {touched.cep ? errors.cep : ''}
            </Error>
          </FieldContainer>
          
          <SubmitButton 
            label='Continuar'
            loading={props.loading}
          />
        </FormContainer>
      </Container>
    )}
    </Formik>
  )
}

export default Form