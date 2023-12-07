import * as Yup from 'yup'

export const EmailSenderSchema = Yup.object({
        companyName: Yup.string()
        .min(3,'must need 3 characters')
          .max(15, 'Must be 15 characters or less')
          .required('Enter company name'),
        companyEmail: Yup.string()
          .email().required('Enter company email'),
        position: Yup.string().required('Required a position'),
      })