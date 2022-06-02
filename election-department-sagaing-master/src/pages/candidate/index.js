import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Form, Input, Row, Col, Select, Collapse} from 'antd'
import { RightOutlined, SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import api from '../../api'
import '../pages.css'
import {Link} from 'react-router-dom'

const { Option } = Select;

const Candidate = (props) => {
    const [form] = Form.useForm();

    const [candidate, setState] = useState([])
    const [partyList, setPartyList] = useState([])
    const [constituencyList, setConstituencyList] = useState([])


    useEffect(() => {
        async function fetchData() {
            const result = await api().get('/candidate')
            result && result.status === 200 && setState(result.data)

            const partyData = await api().get(`/party`)
            partyData && partyData.status === 200 && setPartyList(partyData.data)

            const consData = await api().get('/constituency')
            consData && consData.status === 200 && setConstituencyList(consData.data)

        }
        fetchData()
    }, []);

    const onFinish = async (values) => {
        let candidate_name = values.candidate_name
        let party_id = values.party_id
        let constituency_id = values.constituency_id

        const result = await api().get(`candidate?query=candidate_name:${candidate_name},party_id:${party_id},constituency_id:${constituency_id}`)
        result && result.status === 200 && setState(result.data)

    }

    const handleClear = async() => {
        form.resetFields();
        const result = await api().get('/candidate')
        result && result.status === 200 && setState(result.data)

    }

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text, record) => {
                let image = record.image
                return <div>
                    <img src={image} height='300px' width='340px' style={{ borderRadius: '12px'}}/>
                </div>
            }
        },
        {
            title: 'ကိုယ်စားလှယ်လောင်း အမည်',
            dataIndex: 'candidate_name',
            key: 'candidate_name',
            render: (text, record) => {
                let id = record.candidate_id
                let party= record.party_name
                let constituency = record.constituency_name
                return <div>
                    {/* <img src={image} height='150px' width='200px'/> */}
                    <a onClick={() => props.history.push(`/candidate/${id}`)}><p>{text}</p></a>
                    
                    <p style={{color: '#ccc'}}>{party}</p>
                    <p style={{color: '#ccc'}}>{constituency}</p>
                </div>
            }
        }
    ]

    return <div className="content">
                
                <p className='page-nav'><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ  <RightOutlined /></Link> <a style={{color:'#aaa', textDecoration:'none'}}>ကိုယ်စားလှယ်လောင်းများ</a></p>

                <div className='form-div'>
                    <Form 
                        layout="vertical" 
                        onFinish={onFinish} 
                        form={form} 
                        >
                        <Row style={{width: '100%'}}>
                            <Col style={{width: '100%'}}>
                                <Form.Item name="candidate_name" label="ကိုယ်စားလှယ်လောင်းအမည်ဖြင့်ရှာရန်" >
                                    <Input/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{width: '100%'}}>
                            <Col style={{width: '100%'}}>
                                <Form.Item name="party_id" label="ပါတီအမည်ဖြင့်ရှာရန်">
                                    <Select
                                        showSearch
                                        optionFilterProp="children"
                                        allowClear
                                    >
                                        {
                                            partyList && partyList.map((item) => {
                                                return <Option
                                                    value={item.party_id}>{item.party_name}
                                                </Option>
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row style={{width: '100%'}}>
                            <Col style={{width: '100%'}}>
                                <Form.Item name="constituency_id" label="မဲဆန္ဒနယ်ဖြင့်ရှာရန်">
                                    <Select
                                        showSearch
                                        optionFilterProp="children"
                                        allowClear
                                    >
                                        {
                                            constituencyList && constituencyList.map((item) => {
                                                return <Option
                                                    value={item.constituency_id}>{item.constituency_name}
                                                </Option>
                                            })
                                        }
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Space>
                                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit" style={{borderRadius: '15px'}}>
                                    ရှာရန်
                                    </Button>
                                    <Button icon={<CloseCircleOutlined />} type="danger" onClick={handleClear} style={{borderRadius: '15px'}}>
                                        ဖျက်ရန်
                                    </Button>
                                </Space>
                    </Form>
                </div>
        <br />

        <Table className="ant-table" columns={columns} dataSource={candidate} />
         
    </div>
}

export default withRouter(Candidate);
