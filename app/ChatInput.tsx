"use client"
import React, { FormEvent } from 'react'
import { useState } from 'react'
import { v4 as uuid} from 'uuid';
import { Message } from '../typings';


function ChatInput() {

    const [input, setInput] = useState('');
    const addMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (!input) return;

        const messageToSend = input;

        setInput('');

        const id = uuid();

        const message : Message = {
            id: id,
            message: messageToSend,
            created_at: Date.now(),
            username: 'Elon Musk',
            profilePic: 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg',
            email: 'hansanca@gmail.com'
        }
        
    };

  return (
    <form onSubmit={addMessage} className='fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100'>
        <input type='text' 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter Message Here...' className='
        flex-1 rounded border-gray-300 focus:outline-none
        focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5
        py-3 disabled:opacity-50 disabled:cursor-not-allowed
        ' />
        <button type='submit' 
        disabled={!input}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold 
        py-2 px-4 rounded
        disabled:opacity-50 disabled:cursor-not-allowed'>
            Send
        </button>
    </form>
  )
}

export default ChatInput