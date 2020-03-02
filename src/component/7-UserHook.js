import React, { useState, useEffect } from 'react';
//自定义Hook，但并不是自定义Hook组件，自定义hook是自定义State函数，类似useState函数
function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        console.log(friendID);
        //ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            // ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
            console.log("cleanup");

        };
    });

    return isOnline;
}

const friendList = [
    { id: 1, name: 'Phoebe' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Ross' },
];

function ChatRecipientPicker() {
    const [recipientID, setRecipientID] = useState(1);
    const [recipientIDSec, setRecipientIDSec] = useState(1);
    const isRecipientOnline = useFriendStatus(recipientIDSec);

    return (
        <>
            {/* <Circle color={isRecipientOnline ? 'green' : 'red'} /> */}
            <select
                value={recipientID}
                onChange={e => setRecipientID(Number(e.target.value))}
            >
                {friendList.map(friend => (
                    <option key={friend.id} value={friend.id}>
                        {friend.name}
                    </option>
                ))}
            </select>
        </>
    );
}

export default ChatRecipientPicker;