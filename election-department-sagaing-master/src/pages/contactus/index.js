import React from 'react'
import './contactus.css'
import image from '../image/phone.png'
import gmail from '../image/gmail.png'


const ContactUs = () => {
    return <div className='contact'>

        <div className='contact-title'>
        <h1>πͺπΆπ΅π»π¨πͺπ» πΌπΊ</h1>
        </div>

        <div className='phone'>
            <img src={image} className='contact-img'/>
            <h3>Telephone: <a href="tel:+959-400-234-455" title='Call Now'> +959-400-234-455 </a>
            </h3>
            <br></br>
            <br></br>
            <img src={gmail} className='contact-img' />
            <h3>Gmail: <a href="mailto: vs-sgg@gmail.com" title="Email us"> vs-sgg@gmail.com</a></h3>
        </div>
    </div>
}

export default ContactUs