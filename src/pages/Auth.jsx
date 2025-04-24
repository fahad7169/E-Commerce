import React from 'react'
import { Link, useNavigate, useMatch } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
// import { FormErrors } from '../components'
import useAuth from '../hooks/useAuth'
import { Button } from "@/components/ui/button"


function Auth() {
  const navigate = useNavigate()
  const isRegister = useMatch('/register')
  const { login } = useAuth()

  async function onSubmit(values, actions) {
    try {
      const { data } = await axios.post(`/users${isRegister ? '' : '/login'}`, { user: values })

      login(data.user)

      navigate('/')
    } catch (error) {
      const { status, data } = error.response

      if (status === 422) {
        actions.setErrors(data.errors)
      }
    }
  }

  const loginInitialValues = { email: '', password: '' }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
    {/* Left Image Section */}
    <div className="md:w-[50vw] w-full md:max-h-[87vh] md:inline-block hidden overflow-hidden">
      <img
        src="src/assets/images/Side Image.jpg"
        alt="auth"
        className="w-full h-auto"
      />
    </div>
  
    {/* Right Form Section */}
    <div className="flex-1 flex items-center -mt-32 justify-center  p-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">
          {isRegister ? 'Create an account' : 'Log in to exclusive'}
        </h1>
  
        <Formik
          onSubmit={onSubmit}
          initialValues={
            isRegister
              ? { ...loginInitialValues, username: '' }
              : loginInitialValues
          }
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {isRegister && (
                <div className="form-group">
                  <Field
                    type="text"
                    name="username"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Your Name"
                  />
                </div>
              )}
              <div className="form-group">
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Password"
                />
              </div>

         <div>
         <Button 
              variant="outline" 
              className="w-full bg-blue-500 hover:text-white hover:bg-blue-600 text-white py-5 transition text-md cursor-pointer"              onClick={onSubmit}
              disabled={isSubmitting}
              type="submit"
            >
              {isRegister ? 'Create an Account' : 'Login'}
            </Button>

            {!isRegister && (
            /* Forgot Password */
            <Link to="/forgot-password" className="text-blue-500 hover:underline ml-1">
              Forgot Password?
            </Link>

            )}

         </div>
         <div className="flex items-center justify-center space-x-2 my-4">
           <span className='text-gray-600 text-sm'>Or</span>
         </div>
         <Button 
           variant="outline" 
           className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 transition text-md flex items-center justify-center cursor-pointer"
           onClick={() => {/* Add Google login functionality here */}}
         >
           <img src="path/to/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
           Continue with Google
         </Button>
            </Form>
          )}
        </Formik>
  
        <p className="mt-6 ml-1 text-gray-600">
          {isRegister ? 'Already have an account?' : 'Don\'t have an account?'}
          <Link
            to={isRegister ? '/login' : '/register'}
            className="text-blue-500 hover:underline mx-2"

          >
            {isRegister ? 'Login': 'Register'}
          </Link>
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default Auth