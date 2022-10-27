
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
    createMockUserMessage("Jack Black", "Hey man, let's get groovy", "1989/07/12", ""),
    createMockUserMessage("John Doe", "I need my shoes back.", "2001/12/05", ""),
    createMockUserMessage("William Turner", "Have You heard of our lord and savior", "2005/08/03", ""),
    createMockUserMessage("Spare Jackow", "Why's the rum gone", "1005/05/18", "")
]

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


export const loadMessageOverviews = (dataCallback) => {
    setTimeout(()=>{dataCallback(MockedData)}, 300);
}

export const loadMessageHistory = (id, dataCallback) => {
    setTimeout(()=>{dataCallback(MockedMessageHistory)}, 300);
}