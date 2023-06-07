import { object, string } from 'yup';

export default object().shape({
  email: string().required('Enter your email').email('Enter a valid email'),
});
