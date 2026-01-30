let cart = 0;

function addToCart(){
    cart++;
    document.getElementById("cartCount").innerText = cart;
}

function subscribe(){
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");

    if(email===""){
        msg.innerText="Enter email to join!";
        msg.style.color="red";
    }else{
        msg.innerText="Welcome to NeoShop Premium 🚀";
        msg.style.color="#00ffcc";
    }
}
