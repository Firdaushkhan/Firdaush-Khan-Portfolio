function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}

/*------Dark mode-------*/

const body = document.querySelector("body");
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark");
});

/*------Typing effect-------*/

// var typingEffect = new Typed(".typedText", {
//     Strings: ["Coder","Designer","Developer"],

//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 80,
//     backDelay: 2000,
// });

/*------Scroll animation-------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });


sr.reveal(".project-box", { interval: 200});

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: "2000",
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100});
srLeft.reveal(".contact-info", { delay: 100});

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: "2000",
    reset: true,
})

srRight.reveal(".skill", { delay: 100});
srRight.reveal(".skill-box", { delay: 100});

/*--------active link-------*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {

    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        const sectionId = current.getAttribute("id");

        const navLink = document.querySelector(
            '.nav-menu a[href*="' + sectionId + '"]'
        );

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLink.classList.add("active-link");
        } else {
            navLink.classList.remove("active-link");
        }

    });

}

window.addEventListener("scroll", scrollActive);





function createSlider(imageId, dotSelector, images, speed = 3000){

    let current = 0;

    const image = document.getElementById(imageId);

    const dots = document.querySelectorAll(dotSelector);

    function showSlide(index){

        current = index;

        image.src = images[current];

        dots.forEach(dot=>dot.classList.remove("active"));

        dots[current].classList.add("active");

    }

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            showSlide(index);

        });

    });

    setInterval(()=>{

        current++;

        if(current>=images.length){

            current=0;

        }

        showSlide(current);

    },speed);

    showSlide(0);

}


const projectImages=[

"images/multishop-home.png",

"images/master-dashboard.png",

"images/admin-dashboard.png",

"images/user-dashboard.png",

"images/shopkeeper-dashboard.png",

"images/intern-dashboard.png",

"images/create-demand.png",

"images/notifications.png"

];

createSlider(

"projectMainImage",

".project-dot",

projectImages,

2500

);



const certificates = [

{
image:"images/mern-certificate.jpg",

title:"MERN Stack Application Development",

description:"Successfully completed the MERN Stack Application Development certification under the Microsoft TechSaksham Program in collaboration with Microsoft, SAP, AICTE and Edunet Foundation. Gained hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js and Node.js.",

certificateLink: "images/mern-certificate.jpg",

tags:["Microsoft","SAP","AICTE","Edunet"],

highlights:[
"MERN Stack Development",
"REST API Integration",
"JWT Authentication",
"MongoDB Database Design"
]

},

{
image:"images/ir4-certificate.jpg",

title:"IR 4.0 Foundation Course",

description:"Successfully completed the Industry 4.0 Foundation Course under the Microsoft TechSaksham initiative. Gained knowledge of Artificial Intelligence, Internet of Things (IoT), Cloud Computing, Automation, Smart Manufacturing, Digital Transformation and emerging technologies shaping modern industries.",

certificateLink: "images/ir4-certificate.jpg",

tags:["Industry 4.0","Microsoft","SAP","Edunet"],

highlights:[
"Industry 4.0",
"Digital Transformation",
"AI Fundamentals",
"Smart Manufacturing"
]

},

{
image:"images/data-analytics1.jpg",

title:"Data Analytics MasterClass",

description:"Completed a 30-Day Data Analytics MasterClass conducted by NoviTech R&D Pvt. Ltd. Learned Excel, SQL, Power BI, data cleaning, dashboard creation, business reporting, data visualization and analytical techniques to solve real-world business problems using industry-standard tools.",

certificateLink: "images/data-analytics1.jpg",

tags:["Excel","SQL","Power BI","Analytics"],

highlights:[
"Power BI",
"Dashboard",
"Excel",
"SQL"
]

},

{
image:"images/data-analytics2.jpg",

title:"Advanced Data Analytics",

description:"Successfully completed the Advanced Data Analytics training focused on business intelligence and real-world reporting. Enhanced skills in Power BI, SQL, data visualization, KPI reporting, dashboard development and transforming raw datasets into meaningful business insights.",

certificateLink: "images/data-analytics2.jpg",

tags:["Analytics","Power BI","SQL","Visualization"],

highlights:[
"Data Analysis",
"Visualization",
"Business Reports",
"Power BI"
]

},

{
image:"images/ai-dashboard.jpg",

title:"AI Dashboard Workshop",

description:"Successfully completed the AI Dashboard Workshop organized by Skill Nation. Learned to build AI-powered dashboards, integrate AI tools into business workflows, create interactive visualizations and understand practical applications of Artificial Intelligence for decision-making.",

certificateLink: "images/ai-dashboard.jpg",

tags:["AI","Dashboard","Skill Nation","Analytics"],

highlights:[
"AI Dashboard",
"Business Intelligence",
"Visualization",
"AI Tools"
]

},

{
image:"images/yoga-certificate.jpg",

title:"International Yoga Day",

description:"Received the International Yoga Day Pledge Certificate from Dr. A.P.J. Abdul Kalam Technical University (AKTU) for participating in the Yoga for Harmony and Peace initiative. Demonstrated commitment towards promoting physical fitness, mental wellness and a healthy lifestyle.",

certificateLink: "images/yoga-certificate.jpg",

tags:["AKTU","Yoga","Health","Wellness"],

highlights:[
"Yoga",
"Health",
"Wellness",
"Participation"
]

},

{
image:"images/naukri-quiz.jpg",

title:"Independence Day Quiz",

description:"Awarded the Certificate of Participation by Naukri Campus for successfully participating in the GenQuezt Independence Day Quiz. Demonstrated enthusiasm for continuous learning, general knowledge and active participation in educational events.",

certificateLink: "images/naukri-quiz.jpg",

tags:["Naukri","Quiz","Participation","Learning"],

highlights:[
"Quiz",
"Knowledge",
"Participation",
"Learning"
]

},

{
image:"images/campuscrew.jpg",

title:"CampusCrew 100K Milestone",

description:"Received the CampusCrew 100K Milestone Honor Certificate in recognition of valuable contributions to a thriving global student community of over 100,000 members. Acknowledged for active participation, continuous engagement and supporting collaborative learning initiatives.",

certificateLink: "images/campuscrew.jpg",

tags:["CampusCrew","Achievement","Recognition","Community"],

highlights:[
"Recognition",
"Community",
"100K Milestone",
"Achievement"
]

}

];



let currentCertificate = 0;

const certificateImage = document.getElementById("certificateImage");
const certificateTitle = document.getElementById("certificateTitle");
const certificateDescription = document.getElementById("certificateDescription");
const certificateTags = document.getElementById("certificateTags");
const certificateHighlights = document.getElementById("certificateHighlights");
const certificateDots = document.querySelectorAll(".certificate-dot");
const certificateButton = document.getElementById("certificateButton");

function showCertificate(index){

currentCertificate=index;

const data=certificates[index];

certificateImage.src=data.image;

certificateTitle.innerText=data.title;

certificateDescription.innerText=data.description;

certificateButton.href = data.certificateLink;

certificateTags.innerHTML="";

data.tags.forEach(tag=>{

certificateTags.innerHTML+=`<span>${tag}</span>`;

});

certificateHighlights.innerHTML="";

data.highlights.forEach(item=>{

certificateHighlights.innerHTML+=`
<div class="highlight-item">
<i class="uil uil-check-circle"></i>
<span>${item}</span>
</div>
`;

});

certificateDots.forEach(dot=>dot.classList.remove("active"));

certificateDots[index].classList.add("active");

}

certificateDots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

showCertificate(index);

});

});

setInterval(()=>{

currentCertificate++;

if(currentCertificate>=certificates.length){

currentCertificate=0;

}

showCertificate(currentCertificate);

},3500);

showCertificate(0);