// Click on me/////////////
// var clickCount = 0;
// function clickHandler(evt){
//    clickCount++;
//    console.log(evt);
//    var str = "Thanks for clicking " + clickCount;
//    this.innerText = str;
// }

// var p = document.getElementById("pElement");
// p.addEventListener("click", clickHandler);


function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var del = document.getElementById('del');


    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }



    function handleDelete() {
        socket.emit("delete message");
    }

    button.onclick = handleSubmit;
    del.onclick = handleDelete;




    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }
    function DeleteFromDom(old) {
        var old = document.getElementsByTagName("p");
        console.log(old);
        // chatDiv.appendChild(old);

        for (var i in old) {
            if (old.length > 0) {
                chatDiv.removeChild(old[i]);
            }
        }
    }

    socket.on('display message', handleMessage);
    socket.on('delete from your message', DeleteFromDom);
}
// main closing bracket

window.onload = main;
