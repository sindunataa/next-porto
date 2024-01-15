'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react"
import axios from "axios";

const Form = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
        .send(
        'service_z3trlfb', // paste your ServiceID here (you'll get one when your service is created).
        'template_byh3qdk', // paste your TemplateID here (you'll find it under email templates).
        {
            from_name: form.name,
            to_name: 'sindunata', // put your name here.
            from_email: form.email,
            to_email: 'sindunata61@gmail.com', //put your email here.
            message: form.message,
        },
        'yABACNFMAfl0pQgoE' //paste your Public Key here. You'll get it in your profile section.
        )
        .then(
        () => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');

            setForm({
            name: '',
            email: '',
            message: '',
            });
        },
        (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong. Please try again.');
        }
        );
    };

    return <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
            <Input 
                type='text' 
                name='name' 
                id='name' 
                placeholder='Name' 
                value={form.name}
                onChange={handleChange}
                required
            />
            <User className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
            <Input 
                type='email' 
                name='email' 
                id='email' 
                placeholder='Email' 
                value={form.email}
                onChange={handleChange}
                required 
            />
            <MailIcon className="absolute right-6" size={20} />
        </div>
        <div className="relative flex items-center">
            <Textarea 
                type='text' 
                name='message' 
                id='message' 
                placeholder='Type Your Message Here.'
                value={form.message}
                onChange={handleChange}
                required
            />
            <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
        <Button type='submit' className='flex items-center gap-x-1 max-w-[166px]'
        >
            Let's Talk
        <ArrowRightIcon size={20}/>
        </Button>
    </form>
}

export default Form