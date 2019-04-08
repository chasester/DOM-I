const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//add tags
  //main content
  let content = ["features", "about", "services","product","vision"];
  [...document.querySelectorAll(".text-content")].map((x,i)=> x.classList.add(content[i]));
  
  //contact
  let contact = ["address","phone","email"];
  [...document.querySelectorAll(".contact p")].map((x,i)=> x.classList.add(contact[i]));
  //nav
  document.querySelector("nav").classList.add("top-nav-bar");

//nav
document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"]);
[...document.querySelector("header nav").children].map((x,i)=> x.textContent = siteContent["nav"]["nav-item-" + (i+1).toString()]);
[...document.querySelector("header nav").children].map((x,i)=> x.style.color = 'green'); //i know this is so inefficent but im lazy

//cta
document.querySelector(".cta h1").textContent = siteContent["cta"]["h1"];
document.querySelector(".cta button").textContent = siteContent["cta"]["button"];
document.querySelector(".cta img").setAttribute('src', siteContent["cta"]["img-src"]);

//main-content
  //topcontent
  document.querySelector(".main-content .features h4").textContent = siteContent["main-content"]["features-h4"];
  document.querySelector(".main-content .features p").textContent = siteContent["main-content"]["features-content"];
  document.querySelector(".main-content .about h4").textContent = siteContent["main-content"]["about-h4"];
  document.querySelector(".main-content .about p").textContent = siteContent["main-content"]["about-content"];
  //middle img
  document.querySelector(".main-content .middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  //bottom-content
  document.querySelector(".main-content .services h4").textContent = siteContent["main-content"]["services-h4"];
  document.querySelector(".main-content .services p").textContent = siteContent["main-content"]["services-content"];
  document.querySelector(".main-content .product h4").textContent = siteContent["main-content"]["product-h4"];
  document.querySelector(".main-content .product p").textContent = siteContent["main-content"]["product-content"];
  document.querySelector(".main-content .vision h4").textContent = siteContent["main-content"]["vision-h4"];
  document.querySelector(".main-content .vision p").textContent = siteContent["main-content"]["vision-content"];

//contact
document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
document.querySelector(".contact .address").textContent = siteContent["contact"]["address"];
document.querySelector(".contact .phone").textContent = siteContent["contact"]["phone"];
document.querySelector(".contact .email").textContent = siteContent["contact"]["email"];

//footer
document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];

window.onscroll = () => stickyScroll();
var navbar = document.querySelector(".top-nav-bar");

var stickyStart = navbar.offsetTop+30;

function stickyScroll()
{
  if(window.pageYOffset >= stickyStart) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
}