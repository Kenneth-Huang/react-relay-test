import React from 'react'
import { Formik, Form, Field, } from 'formik'
// import * as EmailValidator from 'email-validator'
import * as yup from 'yup'
import {
	Box,
	TextField,
  } from '@mui/material';

type LoginFormProps = any;

const LoginForm: React.FC<LoginFormProps> = props => {
	const {setLooggedIn, history} = props
	const handleLogin = () => {
		setLooggedIn(true);
		history.push('/');
	}
	// console.log('props', props)
	const validationSchema = yup.object({
		email: yup
			.string()
			.email('Enter a valid email')
		  	.required('Email is required'),
		password: yup
			.string()
			.min(8, 'Password should be of minimum 8 characters length')
			.required('Password is required'),
	  });
	return (
		<>
			<h1>Login form</h1>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema= {validationSchema}
				// validate={values => {
				// 	const errors: Partial<any> = {};
				// 	if (!values.email) {
				// 	errors.email = 'Required';
				// 	} else if (
				// 	!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
				// 	) {
				// 	errors.email = 'Invalid email address';
				// 	}
				// 	if (!values.password) {
				// 		errors.password = 'Required'
				// 	}
				// 	return errors;
				//   }}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						console.log('submitted')
						setSubmitting(false)
						handleLogin()
					}, 1000);
				}}	
			>
				{({
					values,
					touched,
					errors,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit
				  }) => {
					  console.log('values', values)
				  return (
					  <Form>
							<Box margin={1}>
								<Field
									error={Boolean(errors.email) && touched.email}
									value={values.email}
									component={TextField}
									id="email"
									name="email"
									type="email"
									label="Email"
									placeholder="input your email" 
									onChange={handleChange}
  									onBlur={handleBlur}
  									helperText={(errors.email && touched.email) && errors.email}
									/>
								
							</Box>
							<Box margin={1}>
								<Field
									error= {Boolean(errors.password)&& touched.password}
									component={TextField}
									value={values.password}
									id="password"
									name="password" 
									label="Password"
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="input your password"
									helperText={(Boolean(errors.password && touched.password)) && errors.password}
							  />
							</Box>
					<button type="submit" disabled={isSubmitting}>Submit</button>
				  </Form>
				  );
				}}
				
			</Formik>
		</>
		)
	
	
}



export default LoginForm
