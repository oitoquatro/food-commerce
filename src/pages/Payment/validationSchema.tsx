//npm i react-imask
//npm install react-hook-form
//npm i @hookform/resolvers yup
//npm i @brazilian-utils/brazilian-utils
import { IMaskInput } from 'react-imask'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('Nome e sobrenome é um campo obrigatório.')
      .min(3, 'O nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'Onome deve conter o sobrenome'),
    email: yup.string().email('O email deve ser válido.').required('Email é um campo obrigatório'),
    mobile: yup
      .string()
      .required('Celular é um campo obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, '')) //pega o valor digitado e tira todos os caracteres deixando somente os números
      .test('validateMobile', 'Celular inválido.', (value) => isValidPhone(value)),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
