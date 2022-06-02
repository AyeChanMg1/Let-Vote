import React from 'react'
import { RightOutlined} from '@ant-design/icons';
import './canvote.css'
import { Link } from 'react-router-dom'
const CanVote = () => {

    return <div className="can-vote">
        
        <p className='page-nav'><Link to='/' style={{ color: 'black' }}>မူလစာမျက်နှာ  <RightOutlined /></Link> <a style={{color:'#aaa', textDecoration:'none'}}>ဆန္ဒမဲပေးပိုင်ခွင့်ရှိသူများ</a></p>

        <div className='can-vote-div'>
            <text className='can-vote-title'>ဆန္ဒမဲပေးပိုင်ခွင့်ရှိသူများ</text>
            <ul className="can-vote-ul">
                <li>ရွေးကောက်ပွဲ စတင်ကျင်းပသည့်နေ့တွင် အသက်(၁၈)နှစ် ပြည့်ပြီးသူ။</li>
                <li>သက်ဆိုင်ရာ လွှတ်တော် ရွေးကောက်ပွဲ ဥပဒေပါ ပြဋ္ဌာန်းချက်များနှင့် မဆန့်ကျင်သောသူ။</li>
                <li>နိုင်ငံသား၊ ဧည့်နိုင်ငံသားနှင့် နိုင်ငံသား ပြုခွင့်ရသူ။</li>
                <li>သက်ဆိုင်ရာ မဲဆန္ဒနယ်၏ မဲစာရင်းတွင် ပါဝင်သူ။</li>
            </ul>
        </div>
    </div>
}

export default CanVote;