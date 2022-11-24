let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let con = document.getElementById('chatContainer');
let inp = document.getElementById('userInput');
let btn = document.getElementById('sendMsgBtn');



function chtbot() {
    let len = Math.ceil(Math.random() * (chatbotMsgList.length - 1));
    let div2 = document.createElement('div');
    let span2 = document.createElement('span');
    span2.textContent = chatbotMsgList[len];
    span2.classList.add('msg-from-chatbot');
    div2.appendChild(span2);
    div2.classList.add('msg-from-chatbot-container');
    con.appendChild(div2);
}

btn.onclick = function() {
    if (inp.value === '') {
        return chtbot();
    }
    let div1 = document.createElement('div');
    let span1 = document.createElement('span');
    span1.textContent = inp.value;
    span1.classList.add('msg-to-chatbot');
    div1.appendChild(span1);
    div1.classList.add('msg-to-chatbot-container');
    con.appendChild(div1);
    chtbot();

}
