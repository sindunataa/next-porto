'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"
import { useState } from "react"
import axios from "axios";

const Form = () => {

    return <form className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
            <Input 
                type='text' 
                name='name' 
                id='name' 
                placeholder='Name' 
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