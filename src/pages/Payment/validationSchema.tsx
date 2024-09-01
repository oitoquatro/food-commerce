//npm i react-imask
//npm install react-hook-form
//npm i @hookform/resolvers yup
//npm i @brazilian-utils/brazilian-utils
import { IMaskInput } from 'react-imask'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import { complement } from 'polished'

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
    document: yup
      .string()
      .required('O CPF/CNPJ é obrigatório')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test(
        'validateDocument',
        'CPF/CNPJ inválido.',
        (value) => isValidCPF(value) || isValidCNPJ(value),
      ),
    zipCode: yup
      .string()
      .required('O CEP é obrigatório.')
      .transform((val) => val.replace(/[\d]+/g, '')),
    street: yup.string().required('O endereço é obrigatório.'),
    number: yup.string().required('O número é obrigatório.'),
    complement: yup.string(),
    neighborhood: yup.string().required('O bairro é obrigatório.'),
    city: yup.string().required('A cidade é obrigatória.'),
    state: yup.string().required('O estado é obrigatório.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
