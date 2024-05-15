'use client'

import React, { useState } from 'react';
import '../Home/css/home.css';
import './css/contact.css';
import { toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form validation here if needed
        // For demonstration, we'll just display a success toast
        toast.success('Form submitted successfully!');
        // You can also reset the form fields after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='contact_main_div'>
            <div className="contact_top_section">
                <p className="contact_main_heading">Let’s get in touch</p>
                <p className="contact_main_desc">Great! We&apos;re excited to hear from you and let&apos;s start something special together. Call us for any inquiry.</p>
            </div>

            <div className="contact_bottom_section">
                <div className="contact_bottom_content">
                    <p className="contact_bottom_title">Don&apos;t­ be­ afraid­ man­ !</p>
                    <p className="contact_bottom_title">­ say ­hello</p>
                    <p className="contact_bottom_info">+91 07554506621</p>
                    <p className="contact_bottom_info">trisancoinfotech@gmail.com</p>
                    <p className="contact_bottom_info" style={{ textDecoration: 'none' }}>Trisanco Infotech, 117, Shri Ram Colony, Near SMH Hospital, Hoshangabad Road, Bhopal,Madhya Pradesh</p>
                </div>
                <div className='contact_bottom_form_main'>
                    <form className="contact_bottom_form" onSubmit={handleSubmit}>
                        <input
                            placeholder='Name*'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Email*'
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Phone'
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            placeholder='Subject*'
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        <textarea
                            placeholder='Message*'
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <button type='submit' onClick={handleSubmit} className="send_messages_circle">
                            <p className="send_messages">
                                Send Messages<FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                            </p>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;
