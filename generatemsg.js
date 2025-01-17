//Define 3 Arrays with text parts
const beginMSG = ["Did you know that ", "I just realized that ", "It's amazing how ", "Sometimes I think about how ", "Have you ever wondered why ", "One of the best things about ", "The funniest part of ", "It turns out that ", "I can't believe ", "You won't believe this, but "]
const middleMSG = ["coding can be so addictive ", "cats seem to understand humans better than dogs ", "everyone enjoys a good laugh ", "traveling broadens your perspective ", "books can transport you to another world ", "small acts of kindness can make a huge difference ", "learning new skills keeps your mind sharp ", "technology evolves so quickly these days ", "simple solutions are often the most effective ", "music has the power to heal "]
const endMSG = ["when you least expect it.", "even if it seems hard at first.", "and it makes life so interesting.", "which is why it's so fascinating.", "and that's what keeps me motivated.", "because it connects us all.", "especially in challenging times.", "and it's something worth appreciating.", "so I try to embrace it.", "and that's truly inspiring."]

//Function for generating random number
const generateNum = () => {
    return Math.floor(Math.random()*10)
}

const createMessage = () => {
    const message = beginMSG[generateNum()] + middleMSG[generateNum()] + endMSG[generateNum()]
    return message
}

