import { Typography, Row, Col } from 'antd';
import React from 'react';

const Copyright = () => {
    const year = new Date().getFullYear();
    const { Paragraph } = Typography;

    return (
        <footer className="bg-primary ">
            <div className="container">
                <Row>
                    <Col span={24}>
                        <Paragraph className='text-white text-center mb-0 p-2'>
                            &copy;{year}. All Rights Reserved.
                        </Paragraph>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};

export default Copyright;
