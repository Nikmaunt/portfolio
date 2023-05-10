import React, {useState} from 'react';
import axios from "axios";
import {useFormik} from "formik";

const Contact =  React.memo( () =>  {

    const [error,setError] = useState<boolean>(true)

    type FormikErrorType = {
        email?: string
        name?: string
        message?: string
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Email required'
            }
            if (values.name.length < 2) {
                errors.name = 'Name must be at least 2 characters long'
            }
            if (!values.message) {
                errors.message = 'Message required'
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            setError(false)
            axios.post(
                "https://getform.io/f/96bed2dd-a125-441a-b16a-387f444026dc",
                {
                    email: values.email,
                    name: values.name,
                    message: values.message,
                },
                { headers: {'Accept': 'application/json'}})
                .then(response =>  console.log(response))
                .catch(error => setError(error))
            formik.resetForm()
        },
    })

    return (
        <div id='contact'  className='w-full h-screen  flex justify-center  items-center p-4'>
            <form onChange={()=> setError(true)} onSubmit={formik.handleSubmit} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4  text-[#001b5e]'>Contact</p>
                    <p className='text-gray-600 py-4'>{   'Please don’t hesitate to contact me if you have any questions.'
                         }</p>
                </div>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 ' type="text" placeholder='Name'
                       {...formik.getFieldProps('name')} />
                {formik.touched.name && formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div> : null}
                <input  className='border-2 rounded-lg p-3 flex border-gray-300 mt-4' type="email" placeholder='Email'   {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
                <textarea    className='border-2 rounded-lg p-3 flex border-gray-300 mt-4'  {...formik.getFieldProps('message')} rows={10} placeholder='Message'></textarea>
                {formik.touched.message && formik.errors.message ? <div style={{color:'red'}}>{formik.errors.message}</div> : null}
                {!error ? (
                    <span className=' p-2 mt-0.5'>
                        Your message has been sent.
                    </span>
                ) : ''}
                <button type={'submit'} className=' border-2 hover:bg--gray-400 hover:border-gray-600 rounded-lg px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
            </form>
        </div>
    )
})

export default Contact;
