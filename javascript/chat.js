const sendBtn = document.getElementsByTagName("button");
const chatBox = document.querySelector(".chat-box");

function sendMessage(event) {
    // form values
    var outgoing_id = event.outgoing_id.value;
    var incoming_id = event.incoming_id.value;
    var message = event.message.value;

    var xhr = new XMLHttpRequest();

    var url = '../php/insert-chat.php';
    var params = 'outgoing_id=' + outgoing_id + '&incoming_id=' + incoming_id + '&message=' + message;
    xhr.open('POST', url, true);

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("chat-form").reset();
            console.log(xhr.responseText);
        }
    }

    // Send params with request
    xhr.send(params);
}

chatBox.onmouseenter = () => {
    chatBox.classList.add("active");
}
chatBox.onmouseleave = () => {
    chatBox.classList.remove("active");
}

const form = document.querySelector(".typing-area");
const outgoing_id = document.getElementById("outgoing_id")?.value;
const incoming_id = document.getElementById("incoming_id")?.value;

setInterval(() => {
    let xhr = new XMLHttpRequest(); //creating XML object

    var getUrl = '../php/get-chat.php';

    xhr.open("POST", getUrl, true);
    var params2 = 'outgoing_id=' + outgoing_id + '&incoming_id=' + incoming_id;
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = xhr.response;
            chatBox.innerHTML = data;
            if(!chatBox.classList.contains("active")){ //if active class not contains in chatbox the scroll to bottom
                scrollToBottom();
            }
        }
    }

    xhr.send(params2); // sending data to php
}, 500); // this function runs after 500ms

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}
