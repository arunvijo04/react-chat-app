import "./chat.css"

const Chat = () => {
    return(
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span>Arun Vijo</span>
                        <p>Hi there! What's up dude</p>
                    </div>
                </div>
                <div className="icons">
                <img src="./share.png" alt=""/>
                <img src="./video.png" alt=""/>
                <img src="./info.png" alt=""/>
                </div>
            </div>
            <div className="center"></div>
            <div className="bottom"></div>
        </div>
    )
}

export default Chat