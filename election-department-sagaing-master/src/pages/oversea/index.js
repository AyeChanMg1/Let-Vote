import React from 'react'
import { RightOutlined } from '@ant-design/icons';
import './oversea.css'
import { Link } from 'react-router-dom'
import Image from '../image/warning.png'
import Oversea2 from '../image/oversea2.jpg'
import Oversea1 from '../image/oversea1.jpg'
import {Divider} from 'antd'
const Oversea = () => {

    return <div className="oversea">
        
        <p className='page-nav'><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ  <RightOutlined /></Link> <a style={{color:'#aaa', textDecoration:'none'}}>နိုင်ငံပြင်ပရောက်မဲဆန္ဒရှင်များ</a></p>

        <div className='oversea-div'>
            <text className='oversea-title'>သင် - အစိုးရ၏ ခွင့်ပြုချက်ဖြင့် နိုင်ငံပြင်ပတွင် ရောက်ရှိနေပါက နိုင်ငံပြင်ပကြိုတင်မဲပေးနိုင်ရန် ဘယ်လိုဆောင်ရွက်ရမလဲ...?</text>
            <br /><br /><p><img src={Image} style={{width: '40px', height: '40px'}} />  နိုင်ငံပြင်ပတွင် ရောက်ရှိနေသူ သင်၏အမည်သည် သက်ဆိုင်ရာ မြို့နယ်နှင့်ရပ်ကွက်၊ ကျေးရွာအုပ်စုကော်မရှင်အဖွဲ့ခွဲက ခွင့်ပြုထားသည့် မဲစာရင်းတွင် ပါဝင်ရမည်။ သင်၏အမည် သက်ဆိုင်ရာမဲစာရင်းတွင် မပါဝင်လျှင် မဲပေးခွင့်ရမည်မဟုတ်ပါ။</p>
            <div className='oversea-div-sub'>
            <text className='oversea-title'>ဘယ်လို Register လုပ်ရမလဲ ...?</text>
            <ul className="oversea-ul">
                <li>သက်ဆိုင်ရာ မြန်မာနိုင်ငံ သံရုံး၊ ကောင်စစ်ဝန်ရုံး၊ အမြဲတမ်းကိုယ်လှယ်ရုံးသို့ သတ်မှတ်ထားသော ရက်အတွင်း ဆက်သွယ်ပါ။</li>
                <li>သံရုံးမှ ပုံစံ (၁၅) ‌တာင်းယူပါ။</li>
                <li>ပုံစံ (၁၅)ကို ဖြည့်စွပ်ရေးသွင်းပါ။</li>
                <li>ဖြည့်စွပ်ရေးသွင်းပြီး ပုံစံ( ၁၅ )ကို သက်ဆိုင်ရာ သံရုံးကြီးအမှူးထံ သတ်မှတ်ရက်အတွင်း ပြန်လည်ပေးပို့ပါ။</li>
            </ul>
            <img src={Oversea2} className='oversea-img'/>
            </div>
            <Divider type='horizonal' />
            <div  className='oversea-div-sub'>
            <text className='oversea-title'>ဘယ်လိုမဲပေးရမလဲ ...?</text>
            <ul className="oversea-ul">
                <li>မဲပေးရမည့်ရက်ကို သက်ဆိုင်ရာသံရုံးသို့ ဆက်သွယ်စုံစမ်းပါ။</li>
                <li>မဲပေးရမည့်ရက်တွင် သက်ဆိုင်ရာ မြန်မာနိုင်ငံ သံရုံး၊ ကောင်စစ်ဝန်ရုံး၊ အမြဲတမ်းကိုယ်လှယ်ရုံးသို့ သွားရောက်ပါ။</li>
                <li>ကြိုတင်ဆန္ဒမဲလက်မှတ်များနဲ့ စာအိပ်များကို ထုတ်ယူပါ။</li>
                <li>ဆန္ဒပြုပြီး ဆန္ဒမဲလက်မှတ်ကို စာအိတ်အတွင်းထဲ့၍ လုံခြုံအောင်ပိတ်ပါ။</li>
                <li>ပိတ်ထားသည့်စာအိပ်ကို သံရုံးမှ တာဝန်ရှိသူထံ အပ်နှံပါ။</li>
            </ul>
            <img src={Oversea1} className='oversea-img'/>
            </div>
        </div>
    </div>
}

export default Oversea;