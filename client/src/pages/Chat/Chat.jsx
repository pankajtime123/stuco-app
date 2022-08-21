import React, { useState, useEffect, useRef } from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import './Chat.css'
import { useSelector } from 'react-redux'
import { userChats } from '../../api/ChatRequest'
import Conversation from '../../components/Conversations/Conversation'
import NavIcons from '../../components/NavIcons/NavIcons'
import ChatBox from '../../components/ChatBox/ChatBox'
import { io } from 'socket.io-client'


const Chat = () => {
    const { user } = useSelector(state => state.authReducer.authData)

    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const [receiveMessage, setReceiveMessage] = useState(null)

    const socket = useRef()
  

    useEffect(()=>{
        socket.current = io('http://localhost:8800')
        socket.current.emit("new-user-add", user._id)
        socket.current.on('get-users', (users)=>{
            setOnlineUsers(users)
            
        })
    },[user])

     // sending message to socket server
     useEffect(()=>{
        if(sendMessage !== null){
            socket.current.emit('send-message', sendMessage)
        }
     },[sendMessage])

// receive message from the socket server
    
useEffect(()=>{
       
    socket.current.on("receive-message", (data)=>{
        setReceiveMessage(data)
    })
      
 },[])

    useEffect(() => {
        const getChats = async () => {
            try {
                const { data } = await userChats(user._id)
                setChats(data)

            } catch (error) {
                console.log(error);
            }
        }
        getChats()
    }, [user])

    const checkOnlineStatus = (chat)=>{
        const chatMember = chat.members.find((member)=>member!==user._id)
        const online = onlineUsers.find((user)=> user.userId === chatMember)
        return online ? true : false
    }

    return (
        <div className="Chat">
            {/* left side */}

            <div className="Left-side-chat">
                

                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) => (

                            <div key={chat._id} onClick={() => setCurrentChat(chat)}>
                                <Conversation  data={chat} currentUserId={user._id} online={checkOnlineStatus(chat)} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


         
                {/* chat body */}

                <ChatBox chat={currentChat} currentUser={user._id} setSendMessage={setSendMessage} receiveMessage={receiveMessage} />


            </div>

        
    )
}

export default Chat
