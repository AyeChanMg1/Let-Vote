import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Form, Input, Row, Col, Select} from 'antd'
import { RightOutlined, SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import api from '../../api'
import {Link} from 'react-router-dom'

const { Option } = Select;

const Constituency = (props) => {
    const [form] = Form.useForm();

    const [constituency, setState] = useState([])
    const [reload, setReload] = useState(false)
    const [townshipList, setTownshipList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await api().get('/constituency')
            result && result.status === 200 && setState(result.data)

            const townshipData = await api().get('/township')
            townshipData && townshipData.status === 200 && setTownshipList(townshipData.data)

        }
        fetchData()
    }, [reload]);

    const onFinish = async (values) => {
        let constituency_name = values.constituency_name
        let township_id = values.township_id

        const result = await api().get(`constituency?query=constituency_name:${constituency_name},township_id:${township_id}`)
        result && result.status === 200 && setState(result.data)

    }
    const columns = [
        {
            title: 'မြို့နယ်အမည်',
            dataIndex: 'township_name',
            key: 'township_name'
        },
        {
            title: 'မဲဆန္ဒနယ်အမည်',
            dataIndex: 'constituency_name',
            key: 'constituency_name',
            render: (text, record) => {
                let id = record.constituency_id
                return <div>
                    <a onClick={() => props.history.push(`/constituency/${id}`)}>{text}</a>
                </div>
            }
        },
        {
            title: 'Election Name',
            dataIndex: 'election_name',
            key: 'election_name'
        }
    ]
    const handleClear = async () => {
        form.resetFields();
        const result = await api().get('/constituency')
        result && result.status === 200 && setState(result.data)

    }
    return <div className="content">
        
        <p className='page-nav'><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ  <RightOutlined /></Link> <a style={{color:'#aaa', textDecoration:'none'}}>မဲဆန္ဒနယ်များ</a></p>

                <div className="form-div">
                    <Form layout="vertical" onFinish={onFinish} form={form}>
                        <Row style={{width: '100%'}}>
                            <Col style={{width: '100%'}}>
                                <Form.Item name="constituency_name" label="မဲဆန္ဒနယ်အမည်ဖြင့်ရှာရန်">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col style={{width: '100%'}}>
                                <Form.Item name="township_id" label="မြို့နယ်အမည်ဖြင့်ရှာရန်">
                                    <Select
                                        showSearch
                                        optionFilterProp="children"
                                        allowClear
                                    >
                                        {
                                            townshipList && townshipList.map((item) => {
                                                return <Option
                                                    value={item.township_id}>{item.township_name}
                                                </Option>
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Space>
                                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit" style={{borderRadius: '45px', border: 'none', boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.1)',}}>
                                        Search
                                </Button>
                                    <Button icon={<CloseCircleOutlined />} type="danger" onClick={handleClear} style={{borderRadius: '15px'}}>
                                        Cancel
                                </Button>
                                </Space>
                    </Form>
                </div>
        <br />
        <Table columns={columns} dataSource={constituency} />
    </div>
}

export default withRouter(Constituency);
