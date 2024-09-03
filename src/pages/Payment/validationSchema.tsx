import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import { complement } from 'polished'
import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('Campo obrigatório.')
      .min(3, 'O nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
    email: yup.string().required('Campo obrigatório.').email('O email deve ser válido.'),
    mobile: yup
      .string()
      .required('Campo obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateMobile', 'Celular inválido.', (value) => isValidPhone(value)),
    document: yup
      .string()
      .required('Campo obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test(
        'validateDocument',
        'CPF/CNPJ é inválido.',
        (value) => isValidCPF(value) || isValidCNPJ(value),
      ),
    zipCode: yup
      .string()
      .required('CEP é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, '')),
      street: yup.string().required('Campo obrigatório.'),
      number: yup.string().required('Campo obrigatório.'),
      complement: yup.string(),
      neighborhood: yup.string().required('Campo obrigatório.'),
      city: yup.string().required('Campo obrigatório.'),
      state: yup.string().required('Campo obrigatório.'),
  })
  .required()

export type FieldValues = yup.InferType<typeof schema>
