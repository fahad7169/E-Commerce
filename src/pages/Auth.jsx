import React from 'react'
import { Link, useNavigate, useMatch } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Button } from "@/components/ui/button"
import { loginSchema, registerSchema } from '@/validators/user'
import { useAuthStore } from '@/stores/useAuthStore'


function Auth() {
  const navigate = useNavigate()
  const isRegister = useMatch('/register')
  const { login } = useAuthStore()



  async function onSubmit(values, actions) {
    console.log('Form submission started with values:', values);
    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login';
    const response = await axios.post(endpoint, values);
    
      // Update auth state with user data from response
      login(response.data.user);
      
      navigate('/');
  
    } catch (error) {
      console.error('Error during form submission:', error);
      const { status, data } = error.response
      console.log('Error status:', status, 'Error data:', data);

      if (status === 422) {
        console.log('Setting form errors:', data.errors);
        actions.setErrors(data.errors)
      }
    }
  }

  const loginInitialValues = { email: '', password: '' }
  const registerInitialValues = { email: '', password: '', username: '' }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side Image */}
      <div className="md:w-[50vw] w-full md:max-h-[87vh] lg:inline-block hidden overflow-hidden">
        <img src="src/assets/images/Side Image.jpg" alt="auth" className="w-full h-auto" />
      </div>

      {/* Right Side Form */}
      <div className="flex-1 flex items-center -mt-32 justify-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">
            {isRegister ? 'Create an account' : 'Log in to exclusive'}
          </h1>

          <Formik
            initialValues={isRegister ? registerInitialValues : loginInitialValues}
            validationSchema={toFormikValidationSchema(isRegister ? registerSchema : loginSchema)}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <>
                {/* <FormErrors /> */}
                <Form className="space-y-4">
                  {isRegister && (
                    <div className="form-group">
                      <Field
                        type="text"
                        name="username"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Your Name"
                      />
                      <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  )}
                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      className="w-full px-3 py-2 border rounded-md"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <Button 
                      variant="outline"
                      className="w-full bg-blue-500 hover:text-white hover:bg-blue-600 text-white py-5 transition text-md cursor-pointer"
                      disabled={isSubmitting}
                      type="submit"
                    >
                      {isRegister ? 'Create an Account' : 'Login'}
                    </Button>

                    {!isRegister && (
                      <Link to="/forgot-password" className="text-blue-500 hover:underline ml-1">
                        Forgot Password?
                      </Link>
                    )}
                  </div>

                  <div className="flex items-center justify-center space-x-2 my-4">
                    <span className='text-gray-600 text-sm'>Or</span>
                  </div>

                </Form>
              </>
            )}
          </Formik>

                  <Button 
                    variant="outline"
                    className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 transition text-md flex items-center justify-center cursor-pointer"
                    onClick={() => {/* Add Google login functionality here later */}}
                  >
                    <img src="src/assets/icons/google.png" alt="Google" className="w-5 h-5 mr-2" />
                    Continue with Google
                  </Button>
          <p className="mt-6 ml-1 text-gray-600">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}
            <Link to={isRegister ? '/login' : '/register'} className="text-blue-500 hover:underline mx-2">
              {isRegister ? 'Login' : 'Register'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth