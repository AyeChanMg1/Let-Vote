import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Form, Input, Row, Col, Select} from 'antd'
import { RightOutlined, SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import api from '../../api'
import { Link } from 'react-router-dom'

const { Option } = Select;

const Party = (props) => {

    const [form] = Form.useForm();
    const [party, setState] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await api().get('/party')
            result && result.status === 200 && setState(result.data)

        }
        fetchData()
    }, []);

    const onFinish = async (values) => {

        let party_name = values.party_name
        let abbreviation = values.abbreviation

        const result = await api().get(`party?query=party_name:${party_name},abbreviation:${abbreviation}`)
        result && result.status === 200 && setState(result.data)
    }

    const columns = [
        {
            title: 'Party Name',
            dataIndex: 'party_name',
            key: 'party_name',
            render: (text, record) => {
                let id = record.party_id
                return <div>
                    <a onClick={() => props.history.push(`/party/${id}`)}>{text}</a>
                </div>
            }
        },
        {
            title: 'Abbreviation',
            dataIndex: 'abbreviation',
            key: 'abbreviation'
        },
        {
            title: 'Chair Person',
            dataIndex: 'chair_person',
            key: 'chair_person'
        }
    ]

    const handleClear = async () => {
        form.resetFields();
        const result = await api().get('/party')
        result && result.status === 200 && setState(result.data)
    }

    return <div className="content">
               
                <p className='page-nav'><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ  <RightOutlined /></Link> <a style={{color:'#aaa', textDecoration:'none'}}>နိုင်ငံရေးပါတီများ</a></p>

                <div className='form-div'>
                    <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Row style={{width: '100%'}}>
                            <Col style={{width: '100%'}}>
                                <Form.Item name="party_name" label="ပါတီအမည် ဖြင့်ရှာရန်">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{width: '100%'}}>
                            <Col style={{width: '100%'}}>
                                <Form.Item name="abbreviation" label="Abbreviation">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Space>
                            <Button icon={<SearchOutlined />} type="primary" htmlType="submit" style={{borderRadius: '15px'}}>ရှာရန်</Button>
                            <Button icon={<CloseCircleOutlined />} type="danger" onClick={handleClear} style={{borderRadius: '15px'}}>Cancel</Button>
                        </Space>
                    </Form>
                </div>
                    <br/>
                    <Table columns={columns} dataSource={party} />
            </div>
}

export default withRouter(Party);
