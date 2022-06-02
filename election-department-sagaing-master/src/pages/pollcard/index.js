import React from 'react'
import { RightOutlined} from '@ant-design/icons';
import './pollcard.css'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import Front from '../image/front.jpg'
import Back from '../image/back.jpg'
import Meta from 'antd/lib/card/Meta';
const PollCard = () => {

    return <div className="can-vote">
        
        <p className='page-nav'><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ  <RightOutlined /></Link> <a style={{color:'#aaa', textDecoration:'none'}}>မဲဆန္ဒရှင်သက်သေခံကဒ်ပြား</a></p>

        <div className='pollcard-div'>
            <text className='pollcard-title'>မဲဆန္ဒရှင်သက်သေခံကဒ်ပြား</text>
            <br /><br/>
            <text>မဲဆန္ဒရှင်သက်သေခံကဒ်ပြားများကို မဲစာရင်းကြေ ငြာပြီး တစ်ပတ်အလိုတွင် သက်ဆိုင်ရာ ရပ်ကွက်အုပ်ချုပ်ရေးမှုးရုံး (သို့မဟုတ်) ရွေးကောက်ပွဲကော်မရှင်အဖွဲ့ခွဲတို့ထံတွင် ထုတ်ယူနိုင်ပါသသည်။</text>
            <br>
            </br>
            <br/><text>မဲဆန္ဒရှင်များအနေဖြင့်-</text>
            <ul className="pollcard-ul">
                <li>မဲပေးရန်လာရောက်သည့်အခါ မဲဆန္ဒရှင်သက်သေခံကဒ်ပြားကို ယူဆောင်လာရမည်။</li>
                <li>ရှေ့စာမျက်နာတွင် ဖော်ပြထားသည့် အချက်အလက်များ မှားယွင်းနေပါက ပြင်င်ပေးပါ။</li>
                <li>မဲဆန္ဒရှင်အနေဖြင့် မဲပေးပြီးသည့်အခါ ဤသက်သေခံလက်မှတ်အား မင်တို့ပေးသူထံ  ပြန်လည်အပ်နှံရမည်။။</li>
            </ul>
            
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Front} />
                <Card.Body>
                    <Card.Title>ရှေ့စာမျက်နာ</Card.Title>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Back} />
                <Card.Body>
                    <Card.Title>ရှေ့စာမျက်နာ</Card.Title>
                </Card.Body>
            </Card> */}

            <Card hoverable style={{width: '300px' , height:'200' , textAlign: 'center'}} cover={<img src={Front} className='pollcard-img'/>} >
                <Meta title="ရှေ့စာမျက်နာ" />              
            </Card>
            <br />
            <Card hoverable style={{width: '300px' , height:'200' , textAlign: 'center'}} cover={<img src={Back} className='pollcard-img'/>} >
                <Meta title="နောက်စာမျက်နာ" />              
            </Card>
        </div>
    </div>
}

export default PollCard;