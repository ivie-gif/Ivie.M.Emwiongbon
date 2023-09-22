
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    phoneNumber: yup
      .string()
      .matches(/^\d+$/, 'Phone number must be a number')
      .required('Phone number is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
  });
export default schema;