import React from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';


function CardForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            date: '',
            cvc: '',
        },
        onSubmit: () => {
            const name = formik.values.name;
            const number = formik.values.number;
            const date = formik.values.date;
            const cvc = formik.values.cvc;

            console.log(name + "," + number + "," + date + "," + cvc)

        }
    })
    return (
        <div className='formContainer'>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <p className='FormLabel'>Name of credit card owner</p>
                    <Form.Control
                        type="text"
                        className='input'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicnumber">
                    <p className='FormLabel'>card number</p>
                    <Form.Control
                        type="text"
                        className='input'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        name="number"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicdate">
                    <p className='FormLabel'>expiration date</p>
                    <Form.Control
                        type="text"
                        className='input'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        name="date"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccvc">
                    <p className='FormLabel'>cvc</p>
                    <Form.Control
                        type="text"
                        className='input'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.cvc}
                        name="cvc"
                    />
                </Form.Group>
                <div className='submit'>
                    <Button variant="primary" type="submit" className='submitButton'>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default CardForm