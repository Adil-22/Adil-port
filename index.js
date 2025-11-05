
  // navbar part

document.querySelectorAll('a[href="#"]').forEach(anchor=>{

  anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:"smooth"
    })
  })
})

 var tl=gsap.timeline();

// tl.from(".navh1 h1",{
//   y:-20,
//   opacity:0,
//   duration:1,
//   delay:1
// })

// tl.from(".navoptions",{
//   y:-20,
//   opacity:0,
//   duration:1,
//   delay:1,
//    //stragger:1
// })

// tl.from(".herosection-right1",{
//   x:590,
//   opacity:0,
//   duration:1,
//   delay:1,
 
// })
 tl.from(".herosection-left1",{
  y:-290,
  opacity:0,
   duration:1,
  delay:1,
  
 })

let MenuIcon=document.querySelector(".menu-icon");
let NavOption=document.querySelector(".navoptions");
let NavOption2=document.querySelector(".navoption2");
let CrossIcon=document.querySelector(".cross-icon");

 MenuIcon.addEventListener("click",function(){
    NavOption2.style.display = "block";
     MenuIcon.style.display="none";
     CrossIcon.style.display="block";
      
  
 })
CrossIcon.addEventListener("click",function(){
    NavOption2.style.display ="none";
    MenuIcon.style.display="block";
    CrossIcon.style.display="none";
  
 })




//  Herosection part

let HerosectionRightImage=document.querySelector(".herosection-right-myimage")
let originalsrc="img1.jpeg"
let changesrc="image2.jpeg"
    HerosectionRightImage.addEventListener("click",function(){
        
        // if(originalsrc){
        //        HerosectionRightImage.src="frooti.jpg"
        // }else if( changesrc){
        //       HerosectionRightImage.src="pic.jpg"
        // }

        if(HerosectionRightImage.src.includes( originalsrc)){
            HerosectionRightImage.src=changesrc;
        }else{
            HerosectionRightImage.src=originalsrc;
        }
    })

//    About part

    let aboutRightSkills=document.querySelector(".about-right-skills");
    let aboutRightList=document.querySelector(".about-right-list");
    let aboutRightEducation=document.querySelector(".about-right-education")
    let aboutRightList1=document.querySelector(".about-right-list1")
    let aboutRightList2=document.querySelector(".about-right-list2")
     aboutRightList1.style.display="block";
     aboutRightList2.style.display="none";

     aboutRightSkills.addEventListener("click",function(){
       aboutRightList1.style.display="block";
       aboutRightList2.style.display="none";
     })


      aboutRightEducation.addEventListener("click",function(){
        aboutRightList2.style.display="block";
        aboutRightList1.style.display="none";
     })

    //  Services part
    let ServiceBox=document.querySelector(".services-boxes");
    let ServiceH1=document.querySelector(".my-service-h1")
    let ServiceBox1=document.querySelector(".service-box-1");
    let ServiceBox2=document.querySelector(".service-box-2");
    let ServiceBox3=document.querySelector(".service-box-3")
    let Learn=document.querySelector(".learn-box1");
    let LearnBox2=document.querySelector(".learn-box2")
    let LearnBox3=document.querySelector(".learn-box3")
     
   
     ServiceBox1.addEventListener("mouseover",function(){
        ServiceBox1.style.backgroundColor="white";
        ServiceBox1.style.color="green";
     })


      ServiceBox1.addEventListener("mouseout",function(){
        ServiceBox1.style.backgroundColor="";
        ServiceBox1.style.color="";
      })

      Learn.addEventListener("click",function(){
        alert("All Details are Coming Soon...")
      })

        ServiceBox2.addEventListener("mouseover",function(){
        ServiceBox2.style.backgroundColor="white";
        ServiceBox2.style.color="purple";
     })

      ServiceBox2.addEventListener("mouseout",function(){
        ServiceBox2.style.backgroundColor="";
        ServiceBox2.style.color="";
      })

      LearnBox2.addEventListener("click",function(){
        alert("All Details are Coming Soon...")
      })


      
        ServiceBox3.addEventListener("mouseover",function(){
        ServiceBox3.style.backgroundColor="white";
        ServiceBox3.style.color="blue";
     })

      ServiceBox3.addEventListener("mouseout",function(){
        ServiceBox3.style.backgroundColor="";
        ServiceBox3.style.color="";
      })

      LearnBox3.addEventListener("click",function(){
        alert("All Details are Coming Soon...")
      })



    //   Projects

    // let ProjectsH1=document.querySelector(".project-h1");
    // let ProjectBoxes=document.querySelector(".project-boxes");

    //       ProjectsH1.addEventListener("click",function(){
    //              ProjectBoxes.style.display="flex";
                   
    //       })

          //contact part

    let Input=document.querySelector(".input");
    let InputName=document.querySelector(".name");
    let InputEmail=document.querySelector(".email");
    let InputText=document.querySelector(".text");
    let SubmitButton=document.querySelector(".submit-btn")

       SubmitButton.addEventListener("click",function(event){
         event.preventDefault(); 
        if (!InputName.value || !InputEmail.value || !InputText.value) {
      alert("Please fill in all fields!");
      return;
    }  
       else{
          let name=InputName.value.trim();
          let email=InputEmail.value.trim();
          let text=InputText.value.trim();

           let userData = {
      name: name,
      email: email,
      message: text
    };

    
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Data saved successfully!");

       }
       
         InputName.value = "";
         InputEmail.value = "";
         InputText.value = "";
        
       })

