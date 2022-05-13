const form = document.querySelector(".typing-area");
// const inputField = form.querySelector(".input-field");
const sendBtn = form.querySelector("button");
const chatBox = document.querySelector(".chat-box");

const outgoing = document.getElementById("outgoing_id").value;
const incoming = document.getElementById("incoming_id").value;
const message = document.getElementById("txmessage");

message.addEventListener('change',(e)=>{
    console.log(e.target.value)
})

console.log("message");
console.log(message);
console.log(typeof message);

sendBtn.onclick = (e) => {
    // e.preventDefault();

    console.log('CHATTING');
    
    let xhr = new XMLHttpRequest(); //creating XML object 
    xhr.open("POST", "../php/insert-chat.php", true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log(message);
    xhr.send("incoming_id=" + incoming + "&outgoing_id=" + outgoing + "&message=" + message); // sending data to php

    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                console.log('RESPONSE FROM INSERTING');
            //    inputField.value = ""; // once message is inserted into db then leave input field blank
               scrollToBottom();
            }
        }
    }


    // console.log(form)
    // let formData = new FormData(form); // creating new formData object
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xhr.send(formData); // sending data to php
}

chatBox.onmouseenter = () => {
    chatBox.classList.add("active");
}
chatBox.onmouseleave = () => {
    chatBox.classList.remove("active");
}
// setInterval(() => {
//     let xhr = new XMLHttpRequest(); //creating XML object 
//     xhr.open("POST", "../php/get-chat.php", true);
//     xhr.onload = () => {
//         if(xhr.readyState === XMLHttpRequest.DONE) {
//             if(xhr.status === 200) {
//                 let data = xhr.response;
//                 chatBox.innerHTML = data;
//                 if(!chatBox.classList.contains("active")){ //if active class not contains in chatbox the scroll to bottom
//                     scrollToBottom();
//                 }
//             }
//         }
//     }
//     let formData = new FormData(form); // creating new formData object
//     xhr.send(formData); // sending data to php
// }, 50000); // this function runs after 500ms

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}