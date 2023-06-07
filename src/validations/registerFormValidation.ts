import { object, string } from 'yup';

export default object().shape({
    first_name: string().trim().required('Enter your first name'),
    email: string().required('Enter your email').email('Enter a valid email'),
    country: string().required('Select your country'),
    password: string().trim().required('Password is mandatory').min(8).label('Password'),
    confirm_password: string().trim().required('Confirm your password').min(8).label('Confirmed Password'),
});
