import React, { useState } from 'react'

import { Row, Col, Form, Input, Button, Typography } from 'antd'

import { auth } from 'config/firebase'

import { signInWithEmailAndPassword } from 'firebase/auth'

const { Title } = Typography


const intialState = { email: "", Password: "" }

const Login = () => {

    const [state, setState] = useState(intialState)

    const [isProcessing, setIsProcessing] = useState(false)
    //set on evenry input to get the value if change or not 
    const handleChnage = (e) => {


        setState((s) => ({

            ...s, [e.target.name]: e.target.value

        }));
    }

    // submit Buttons
    const handleSubmit = (e) => {
        e.preventDefault();

        let { email, Password } = state;


        setIsProcessing(true)

        signInWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user", user);
                setIsProcessing(true)

                // ...
            })
            .catch((error) => {
                console.log("error", error);
                setIsProcessing(false)
            })
            .finally(() => {
                setIsProcessing(false)
            })






    }


    ///use set state and pass the the value intial state that we store all input field



    return (

        <main className='auth p-3 p-md-4'>
            <div className="card p-3 p-md-4">
                <Title className='text-center mb-4 text-primary'>Login Page</Title>
                <Form layout='vertical' >

                    <Row>
                        <Col span={24}>
                            <Form.Item label="Email"required >
                                <Input size='large' type='email' name='email' placeholder='Enter Your Email '  onChange={handleChnage} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Password" required>
                                <Input.Password size='large' name='Password' placeholder='Enter Your Password' onChange={handleChnage} />
                            </Form.Item>
                        </Col>

                    </Row>


                    <Row >
                        <Col span={24} >
                            <Form.Item >
                                <Button type='primary' size='large' block htmlType='submit' loading={isProcessing} onClick={handleSubmit}>Register</Button>
                            </Form.Item>
                        </Col>

                    </Row>
                </Form>
            </div>

        </main>
    )
}

export default Login
