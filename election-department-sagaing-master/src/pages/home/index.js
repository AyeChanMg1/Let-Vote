import React from 'react'
import './home.css'
import 'react-slideshow-image/dist/styles.css'
import { Button, Divider, Carousel } from 'antd'
import {
    Link,
} from "react-router-dom";
import Candidate from '../image/hluttaw.jpg'

import Constituency from '../image/constituency1.jpg'
import Party from '../image/party.jpg'
import Voter from '../image/voter.jpg'
import VotingImage from '../image/how-to-vote.png'
import Group from '../image/group.png'
import VoterImg from '../image/voter.png'
import CardItem from './carditems'

const Home = () => {

    return <div className="parent">

        <Carousel arrows={true} autoplaySpeed={8000} draggable={true} autoplay infinite effect="fade" width="100%" dotPosition="bottom">
            <div className='myslide'>
                <img src={Voter} className="slide-img" />
                <div className='text'>
                    <p><span>CHECK VOTER <br />
                        <blockquote><q>နိုင်ငံသားအခွင့်အရေး မဆုံးရှုံးစေဖို့ မဲစာရင်းစစ်ဆေးကြပါစို့ </q></blockquote></span><br />
                        <span><Link to='/voter' style={{ textDecoration: 'none' }}><Button className='slide-btn'>မဲစာရင်းစစ်မယ်</Button></Link></span></p>
                </div>
            </div>
            <div className='myslide'>
                <img src={Candidate} className="slide-img" />
                <div className='text'>
                    <p><span>CHECK CANDIDATE<br />
                        <blockquote><q>အနာဂတ်တွေလှပဖို့ ကိုယ်စားလှယ်တွေကိုမှန်ကန်စွာရွေးချယ်စို့ </q></blockquote> </span><br />
                        <span><Link to='/candidate' style={{ textDecoration: 'none' }}><Button className='slide-btn'>ကိုယ်စားလှယ်များကိုကြည့်မယ်</Button></Link></span></p>
                </div>
            </div>
            <div className='myslide'>
                <img src={Constituency} className="slide-img" />
                <div className='text'>
                    <p><span>CHECK CONSTITUENCY <br />
                        <blockquote><q>အချိန်မှီမဲသွားပေးနိုင်ဖို့ သင့်မဲစာရင်းပါသောနေရာကိုကြည့်ကြစို့</q></blockquote></span><br />
                        <span><Link to='/constituency' style={{ textDecoration: 'none' }}><Button className='slide-btn'>မိမိမဲဆန္ဒနယ်ကိုကြည့်မယ်</Button></Link></span></p>
                </div>
            </div>
            <div className='myslide'>
                <img src={Party} className="slide-img" />
                <div className='text'>
                    <p><span>CHECK PARTY <br />
                        <blockquote><q>ပါတီမူဝါဒမှသည် ခေတ်မီဖွင့်ဖြိုးတိုးတတ်သောနိုင်ငံတော်ကြီးဆီသို့</q></blockquote></span><br />
                        <span><Link to='/party' style={{ textDecoration: 'none' }}><Button className='slide-btn'>ပါတီများကိုကြည့်မယ်</Button></Link></span></p>
                </div>
            </div>
        </Carousel>

        <div className='cards'>
      <h1>VOTING IN MYANMAR!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src={Group}
              text='မြန်မာနိုင်ငံမှာ ဘယ်လိုလူတွေ မဲပေးပိုင်ခွင့်ရှိလဲ...?'
              path='/canvote'
            />
            <CardItem
              src={VotingImage}
              text='မဲဆန္ဒရှင်တစ်ယောက်အနေဖြင့် ဘယ်လိုမဲပေးရမလဲ...?'
              path='/cannotvote'
            />
            <CardItem
              src={VoterImg}
              text='မဲဆန္ဒရှင်သက်သေခံကဒ်ပြား'
              path='/pollcard'
            />
          </ul>
        </div>
      </div>
    </div>

        <div className="ov">
            <p className='ov-p1'>
            <text className='ov-title'>OVERSEAS VOTER</text>
            <text className='ov-p'><blockquote><q>သင် - အစိုးရ၏ ခွင့်ပြုချက်ဖြင့် နိုင်ငံပြင်ပတွင် ရောက်ရှိနေပါက နိုင်ငံပြင်ပကြိုတင်မဲပေးနိုင်ရန် ဘယ်လိုဆောင်ရွက်ရမလဲ...?</q></blockquote></text>
            <Button className='ov-btn'> <a href='/oversea' style={{color: '#ffff', textDecoration: 'none'}}>REGISTER AS AN OVERSEAS ELECTOR</a></Button>
            </p>
        </div>
        
    </div>
}

export default Home;