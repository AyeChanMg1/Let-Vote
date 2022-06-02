import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom'
import { Table, Button, Space, Form, Input, Row, Col, Select } from 'antd'
import { SearchOutlined, CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import api from '../../api'

const { Option } = Select;

const Voter = (props) => {
    const [form] = Form.useForm();

    const [voter, setVoter] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await api().get(`/voter`)
            result && result.status === 200 && setVoter(result.data)
        }
        fetchData();
    }, []);

    const onFinish = async (values) => {
        { console.log(values) }
        let voter_name = values.voter_name
        let nric_no = values.nric_no
        let father_name = values.father_name

        const result = await api().get(`voter?query=voter_name:${voter_name}, nric_no:${nric_no},  father_name:${father_name}`)
        result && result.status === 200 && setVoter(result.data)

    }

    const columns = [
        {
            title: 'မဲဆန္ဒရှင်အမည်',
            dataIndex: 'voter_name',
            key: 'voter_name',
            render: (text, record) => {
                let id = record.voter_id
                return <div>
                    <a href onClick={() => props.history.push(`/voter/${id}`)}>{text}</a>
                </div>
            }
        },
        {
            title: 'အဖအမည်',
            dataIndex: 'father_name',
            key: 'father_name'
        },
        {
            title: 'မှတ်ပုံတင်နံပါတ်',
            dataIndex: 'nric_no',
            key: 'nric_no'
        }
    ]

    const handleClear = async () => {
        form.resetFields();
        const result = await api().get('/voter')
        result && result.status === 200 && setVoter(result.data)

    }

    return <div className="content">
        <p className='page-nav'><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ  <RightOutlined /></Link> <a style={{color:'#aaa', textDecoration:'none'}}>မဲဆန္ဒရှင်များ</a></p>

        <div className='form-div'>
            <Form layout="horizonal" onFinish={onFinish} size='medium'>
                <Row style={{ width: '100%', }}>
                    <Col style={{ width: '100%', }}>
                        <Form.Item name="voter_name" rules={[{ required: true, message: 'မဲဆန္ဒရှင်အမည်ထည့်ပါ!' }]}>
                            <Input placeholder="မဲဆန္ဒရှင်အမည်" />
                        </Form.Item>
                    </Col>
                </Row>
                <br />
                <Row style={{ width: '100%', }}>
                    <Col style={{ width: '100%', }}>
                        <Form.Item name="father_name" rules={[{ required: true, message: 'အဖမည်ထည့်ပါ!' }]}>
                            <Input placeholder='အဖမည်' />
                        </Form.Item>
                    </Col>
                </Row>
                <br />
                <Row style={{ width: '100%', }}>
                    <Col style={{ width: '100%', }}>
                        <Form.Item name="nric_no" rules={[{ required: true, message: 'မှတ်ပုံတင်နံပါတ်ထည့်ပါ!' }]}>
                            <Input placeholder='မှတ်ပုံတင်နံပါတ်' />
                        </Form.Item>
                    </Col>
                </Row>
                <br />
                <Space>
                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit" style={{ borderRadius: '15px' }}>
                        ရှာရန်
                                </Button>
                    <Button icon={<CloseCircleOutlined />} type="danger" onClick={handleClear} style={{ borderRadius: '15px' }}>
                        Cancel
                                </Button>
                </Space>
            </Form>
        </div>

        <br />
        <Table columns={columns} dataSource={voter} />

    </div>
}

export default withRouter(Voter);
