
let indexCalc = 0;

const createMockUserMessage = (fullName, lastMessageContent, lastMessageTime, profilePhotoRef) =>{
    return {
        chatId: ++indexCalc,
        fullName: fullName,
        lastMessageContent: lastMessageContent,
        lastMessageTime: lastMessageTime,
        profilePhotoRef: profilePhotoRef
    }
}

const MockedData = [
    createMockUserMessage("Jack Black", "Hey man, let's get groovy", "1989/07/12", "https://randomuser.me/api/portraits/men/1.jpg"),
    createMockUserMessage("John Doe", "I need my shoes back.", "2001/12/05", "https://randomuser.me/api/portraits/men/3.jpg"),
    createMockUserMessage("William Turner", "Have You heard of our lord and savior", "2005/08/03", "https://randomuser.me/api/portraits/men/6.jpg"),
    createMockUserMessage("Spare Jackow", "Why's the rum gone", "1005/05/18", "https://randomuser.me/api/portraits/men/5.jpg")];

const createMockMessageHistory = (fullName, sentTime, isAuthor, messageContent) =>{
    return {
        fullName: fullName,
        sentTime: sentTime,
        isAuthor: isAuthor,
        messageContent: messageContent
    };
}

const MockedMessageHistory = [
    createMockMessageHistory("Jack Black", "2001/01/01", true, "Lorem Ipsum"),
    createMockMessageHistory("John Doe", "2001/01/01", false, "Lorem Ipsum"),
    createMockMessageHistory("William Turner", "2001/01/01", false, "Lorem Ipsum"),
    createMockMessageHistory("Jack Black", "2001/01/01", false, "Lorem Ipsum"),
    createMockMessageHistory("John Doe", "2001/01/01", false, "Lorem Ipsum"),
    createMockMessageHistory("William Turner", "2001/01/01", true, "Lorem Ipsum")
]


export const sendNewMessage=(chatId, content, callback)=>{
    console.log("New message sent", chatId, content);
    callback();
}

export const loadMessageOverviews = (dataCallback) => {
    setTimeout(()=>{dataCallback(MockedData)}, 300);
}

export const loadMessageHistory = (id, dataCallback) => {
    setTimeout(()=>{dataCallback(MockedMessageHistory)}, 300);
}