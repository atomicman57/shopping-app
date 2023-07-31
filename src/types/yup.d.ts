// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as yup from 'yup'

declare module 'yup' {
  interface StringSchema {
    notOneOfArray(array: string[], message: string): StringSchema
  }
}
