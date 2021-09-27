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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav
const navServices = document.querySelector('nav a:nth-child(1)');
const navProduct = document.querySelector('nav a:nth-child(2)');
const navVision = document.querySelector('nav a:nth-child(3)');
const navFeatures = document.querySelector('nav a:nth-child(4)');
const navAbout = document.querySelector('nav a:nth-child(5)');
const navContact = document.querySelector('nav a:nth-child(6)');
navServices.textContent = siteContent.nav["nav-item-1"];
navProduct.textContent = siteContent.nav["nav-item-2"];
navVision.textContent = siteContent.nav["nav-item-3"];
navFeatures.textContent = siteContent.nav["nav-item-4"];
navAbout.textContent = siteContent.nav["nav-item-5"];
navContact.textContent = siteContent.nav["nav-item-6"];

const nav = document.querySelector('nav');
const newNav1 = document.createElement('a');
const newNav2 = document.createElement('a');
newNav1.textContent = 'last Nav';
newNav2.textContent = 'first Nav';
nav.appendChild(newNav1);
nav.prepend(newNav2);

const navText = document.querySelectorAll('nav a');
navText.forEach(a => a.style.color = 'green');



// cta
const ctaH1 = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');
ctaH1.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta["img-src"];


// main content
// main content top
const featuresH4 = document.querySelector('.top-content div:nth-child(1) h4');
const featuresText = document.querySelector('.top-content div:nth-child(1) p');
featuresH4.textContent = siteContent["main-content"]["features-h4"];
featuresText.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector('.top-content div:nth-child(2) h4');
const aboutText = document.querySelector('.top-content div:nth-child(2) p');
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutText.textContent = siteContent["main-content"]["about-content"];

// main content image
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]['middle-img-src'];

// main content bottom
const servicesH4 = document.querySelector('.bottom-content div:nth-child(1) h4');
const servicesText = document.querySelector('.bottom-content div:nth-child(1) p');
const productH4 = document.querySelector('.bottom-content div:nth-child(2) h4');
const productText = document.querySelector('.bottom-content div:nth-child(2) p');const visionH4 = document.querySelector('.bottom-content div:nth-child(3) h4');
const visionText = document.querySelector('.bottom-content div:nth-child(3) p');
servicesH4.textContent = siteContent['main-content']['services-h4'];
servicesText.textContent = siteContent['main-content']['services-content'];
productH4.textContent = siteContent['main-content']['product-h4'];
productText.textContent = siteContent['main-content']['product-content'];
visionH4.textContent = siteContent['main-content']['vision-h4'];
visionText.textContent = siteContent['main-content']['vision-content'];


// contact section
const contactH4 = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-child(2)');
const phone = document.querySelector('.contact p:nth-child(3)');
const email = document.querySelector('.contact p:nth-child(4)');
contactH4.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

// footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];


