const cart=document.getElementById("cart"),overlay=document.getElementById("overlay"),count=document.getElementById("count"),items=document.getElementById("items"),total=document.getElementById("total");let bag=[];
function render(){items.innerHTML=bag.length?bag.map((x,i)=>`<div class="cart-item"><span>${x.name}</span><strong>£${x.price}</strong></div>`).join(""):"<p style='color:#777;font-size:13px'>Your bag is empty.</p>";count.textContent=bag.length;total.textContent="£"+bag.reduce((s,x)=>s+x.price,0)}
function openCart(){cart.classList.add("open");overlay.classList.add("open");render()}function closeCart(){cart.classList.remove("open");overlay.classList.remove("open")}
document.querySelectorAll(".add").forEach(b=>b.onclick=()=>{bag.push({name:b.dataset.name,price:+b.dataset.price});openCart()});
document.getElementById("bagBtn").onclick=openCart;document.getElementById("close").onclick=closeCart;overlay.onclick=closeCart;
document.getElementById("checkout").onclick=()=>alert("Checkout is ready to connect to Stripe or Shopify.");
document.getElementById("signup").onsubmit=e=>{e.preventDefault();document.getElementById("message").textContent="You're on the list. Welcome to CLIOS.";e.target.reset()};
render();