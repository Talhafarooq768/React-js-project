import React from 'react'

import { Row, Col, Typography } from "antd"

const { Title } = Typography

const Hero = () => {


    return (
        <main>
            <div className='container'>
                <Row>
                    <Col span={24}>
                        <Title className='text-center'>
                            This is hero section
                        </Title>
                    </Col>
                </Row>
            </div>
        </main>
    )
}

export default Hero
