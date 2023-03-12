import React from 'react'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

function HomePage() {
  return (
    <main> 
      {/* messageList */}
      <MessageList />


      {/* chatInput */}
      <ChatInput />

    </main>
  )
}

export default HomePage