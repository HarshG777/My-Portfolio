function resume(){
    window.open("https://drive.google.com/file/d/1G_sjrap1RRskQrCqx94kz4OI863kQMxx/view?usp=sharing","_blank");
}

function scrollDown(){
    window.scrollTo({
        top:700,
        behavior: "smooth",
    });
}

function dev(i){

    if (i === 1){
        window.open("https://github.com/HarshG777/My-Portfolio");
    }
    else if(i === 2){
        console.log("it is two");
    }

}

function sendMessage(){

    let mail = document.getElementById('mail').value;
    let subject = document.getElementById('sub').value;
    let message = document.getElementById('message').value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "harshgaikwadofficial@gmail.com",
        Password : "4DDDCD2AD7F6426312FD1DD870849E1E93A6",
        To : 'harshgaikwadofficial@gmail.com',
        From :'harshgaikwadofficial@gmail.com',
        Subject : subject,
        Body : mail+'  '+message
    }).then(
      message => alert(message)
    );

}

