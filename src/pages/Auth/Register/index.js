import React, { useState } from 'react'

import { Form, Row, Col, Input, Button, Typography } from 'antd'

import { auth } from 'config/firebase'

import { createUserWithEmailAndPassword } from 'firebase/auth'


const { Title } = Typography


const intialState = { firstName: "", lastName: "", email: "", Password: "", confirmPassword: "" }

const Register = () => {

  const [state, setState] = useState(intialState)

  const [isProcessing, setIsProcessing] = useState(false)


  //set on evenry input to get the val  ue if change or not 

  const handleChnage = (e) => {


    setState((state) => ({

      ...state, [e.target.name]: e.target.value

    }));
  }

  // submit Buttons
  const handleSubmit = (e) => {
    e.preventDefault();

    let { firstName, lastName, email, Password, confirmPassword } = state;

    const userData = { uid: "", firstName, lastName, email, Password, confirmPassword }

    setIsProcessing(true)

    createUserWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        createDate({ ...userData, uid: user.uid })
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setIsProcessing(false)

        // ..
      });



    setTimeout(() => {
      setIsProcessing(false)
    }, 1000);
  }
  const createDate = (userData) => {
    console.log("userdate", userData);

  }


  ///use set state and pass the the value intial state that we store all input field



  return (

    <main className='auth p-3 p-md-4'>

      <div className="card p-3 p-md-4">
        <Title className='text-center mb-4 text-primary'>Register Page</Title>
        <Form layout='vertical' >

          <Row gutter={16}>

            <Col span={12}>
              <Form.Item label="First Name" required>
                <Input size='large' type='text' name='firstName' placeholder='Enter Your Full Name' onChange={handleChnage} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="last Name" >
                <Input size='large' type='text' name='lastName' placeholder='Enter Your Last Name' onChange={handleChnage} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item label="Email" required>
                <Input size='large' type='email' name='email' placeholder='Enter Your Email ' onChange={handleChnage} />
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
          <Row>
            <Col span={24}>
              <Form.Item label="Confirm Password" required>
                <Input.Password size='large' name='confirmPassword' placeholder='Enter Your Password Again' onChange={handleChnage} />
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

export default Register
