import React, { useContext, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import AlertContext from '../Alert/Alert/AlertContext';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const alertcontext = useContext(AlertContext);
    const {showAlert} =  alertcontext

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://backend-bodaco-trading.vercel.app/sendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, subject, message })
            });

            const data = await response.json();
            if (data.success) {
                showAlert('Email sent successfully!','success');
            } else {
                showAlert('Failed to send email.','danger');
            }
        } catch (error) {
            console.error('Error:', error);
            showAlert('An error occurred while sending the email.','danger');
        }
    };

    return (
        <div className='bg-[#265946] py-10'>
            <div className='w-[90%] mx-auto flex flex-col gap-6'>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className='w-[80%] basis-[35%] mx-auto'>
                        <img src="../Images/Logo1.png" alt="" className='h-16 w-28' />
                    </div>
                    <div className="flex gap-6 flex-col md:flex-row text-white justify-between font-major">
                        <h2 className='text-white basis-[45%] text-3xl font-bold'>The Garden Wall</h2>
                        <div className="flex text-sm basis-[45%] flex-col gap-4">
                            <p>Celebrate our 50th anniversary with a personalised plaque on 'The Garden Wall'.</p>
                            <a href="">www.funditnow.co.uk/thegardenwall</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    <div className="flex flex-col gap-4 basis-[35%] font-major">
                        <h3 className='text-lg font-semibold text-white'>Contact Us</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <h2 className='text-white text-lg'>Email</h2>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder='Enter your Email'
                                    className='bg-white rounded-full py-2 px-4 outline-none border-none'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className='text-white text-lg'>Subject</h2>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder='Enter your Subject'
                                    className='bg-white rounded-full py-2 px-4 outline-none border-none'
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className='text-white text-lg'>Message</h2>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    placeholder='Enter your Message'
                                    className='bg-white rounded-3xl py-2 px-4 outline-none border-none'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className='bg-black py-2 px-4 rounded-full font-major text-white w-fit'
                            >
                                Send
                            </button>
                        </form>
                        {responseMessage && <p className='text-white mt-4'>{responseMessage}</p>}
                    </div>
                    <div className='flex flex-col basis-[30%] gap-4'>
                        <div className="flex flex-col text-white font-major gap-2">
                            <h2 className='text-lg font-semibold'>Address</h2>
                            <p>Bodaco Trading SRL, Bucharest, Romania</p>
                        </div>
                        <div className="flex flex-col text-white font-major gap-2">
                            <h2 className='text-lg font-semibold'>Contact CGMA</h2>
                            <p>Bodaco Trading SRL<br />
                                020 7720 2211<br />
                                hello@cgma.co.uk
                            </p>
                        </div>
                        <div className="flex flex-col text-white font-major gap-2">
                            <h2 className='text-lg font-semibold'>Contact Us</h2>
                            <p>+4 07654321<br />
                                contact@bodacotrading.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row justify-between font-major">
                    <p className='text-white basis-[50%]'>© 2024 Bodaco Trading SRL</p>
                    <div className="flex basis-[50%] text-white justify-between">
                        <div className="flex flex-col gap-2 font-major">
                            <h2>Fruit & Vegetables</h2>
                            <div className="flex gap-2">
                                <FaInstagram />
                                <FaTwitter />
                                <FaFacebookF />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 font-major">
                            <h2>Flowers</h2>
                            <div className="flex gap-2">
                                <FaInstagram />
                                <FaTwitter />
                                <FaFacebookF />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
