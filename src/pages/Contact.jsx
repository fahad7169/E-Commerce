import React from 'react'
import { Formik, Form, Field } from 'formik'

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const handleSubmit = (values, actions) => {
    console.log('Form submitted:', values)
    actions.resetForm()
  }

  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Contact Us</h1>
          <p className="text-xs-center">Have a question? We'd love to hear from you.</p>
          
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <fieldset className="form-group">
                  <Field
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <Field
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <Field
                    type="text"
                    name="subject"
                    className="form-control form-control-lg"
                    placeholder="Subject"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <Field
                    as="textarea"
                    name="message"
                    className="form-control form-control-lg"
                    placeholder="Message"
                  />
                </fieldset>
                <button type="submit" className="btn btn-lg btn-primary pull-xs-right" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Contact
