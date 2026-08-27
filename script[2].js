const phrases=["Emerging Software Engineer","Full-Stack Developer in Progress","Software & Web Development Enthusiast","Continuous Learner & Problem Solver"];
const typed=document.getElementById("typed");let pi=0,ci=0,deleting=false;
function type(){const word=phrases[pi];typed.textContent=word.slice(0,ci);if(!deleting&&ci<word.length){ci++;setTimeout(type,70)}else if(!deleting){deleting=true;setTimeout(type,1500)}else if(ci>0){ci--;setTimeout(type,38)}else{deleting=false;pi=(pi+1)%phrases.length;setTimeout(type,350)}}type();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".pending").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();alert("The GitHub repository link will be added when the actual repository is ready.")}));
document.querySelectorAll("[data-pending]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();alert("The GitHub profile link will be added once the final URL is provided.")}));

const modal=document.getElementById("modal"), title=document.getElementById("modalTitle");
document.querySelectorAll("[data-cert]").forEach(btn=>btn.addEventListener("click",()=>{title.textContent=btn.dataset.cert+" — Certificate";modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));
document.querySelector(".modal-close").addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")});
document.querySelector(".modal-backdrop").addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")});

document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const email="ankitagupta2918@gmail.com";
  const subject=encodeURIComponent("Portfolio contact from "+data.get("name"));
  const body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
  document.getElementById("formNote").textContent="Opening your email app…";
  window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  const links=document.querySelector(".nav-links");
  const open=links.style.display==="flex";
  links.style.cssText=open?"":"display:flex;position:absolute;top:58px;left:12px;right:12px;padding:15px;flex-direction:column;background:rgba(255,255,255,.95);border:1px solid #e4e8ef;border-radius:16px;box-shadow:0 15px 35px rgba(50,60,90,.12)";
});
