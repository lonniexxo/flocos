function carregar(){
    var msg= document.getElementById('msg')
    var msg2= document.getElementById('msg2')
    var img= document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    var minute= data.getMinutes()
    msg.innerHTML=`Agora são ${hora}:${minute}`
    if(hora >= 0 && hora < 12){
        img.src='assets/gifdia.gif'
        document.body.style.background='#ffdcae'
        msg2.innerHTML='bom dia, meu amorzinho!'
    } else if (hora >= 12 && hora < 18){
        img.src='assets/giftarde.gif'
        document.body.style.background='#a40066'
        msg2.innerHTML+='bom tarde, amoreco!'
    } else {
        img.src='assets/gifnoite.gif'
        document.body.style.background='#2c2e97'
        msg2.innerHTML+='bom noite, docinho!'
        document.body.style.color='#f9f9f9'
    }
}