let login = document.querySelector("#Login");
login.addEventListener("click",()=>{
    let name = document.querySelector("#user_name").value;
    let email = document.querySelector("#email").value;
    if(name.length == 0 && email.length == 0){
        alert("Some think wrong!!")
    }
    
    else{
    
    let footer = document.querySelector(".footer");
    let feed = document.querySelector(".feed");
    let header = document.querySelector(".header");
    let main_contact = document.querySelector(".main_contact");
    let login_page = document.querySelector(".login_page");
        login_page.style.display = "none";
            footer.style.display = "block";
            feed.style.display = "block";
            header.style.display = "block";
            main_contact.style.display = "block";
    }
})


let menuBtn = document.querySelector("#menuBtn");

menuBtn.addEventListener('click', () => {
    let mobileMenu = document.querySelector("#mobileMenu");

    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
});


// function Pin(){
//     let file = document.querySelector("#file");
//     let statement = document.querySelector(".doc_upl");
//     let leng = file.length;
//     if (leng!= 0){
//         statement.style.display = "block";
//         console.log(leng);
//     }
//     else{
//         console.log("NO");
//     }
// };

const upload_btn = document.querySelector("#upload_btn");
const input = document.getElementById("fileInput");
const viewer = document.getElementById("pdfViewer");
const statement = document.querySelector(".doc_upl");

// Button click
upload_btn.addEventListener("click", () => {

  // Check if file selected
  if (input.files.length === 0) {
    console.log("NO FILE SELECTED");
    alert("Please select a PDF first!");
    return;
  }
  let proce =document.querySelector(".proce");
  proce.style.display="block";
  setTimeout(() => {
    const file = input.files[0];
    let proce =document.querySelector(".proce");
  

  // Check PDF
  if (file.type !== "application/pdf") {
    alert("Only PDF allowed!");
    return;
  }
  proce.style.display="none";
  // Show container
  statement.style.display = "block";


  // Show PDF
  const fileURL = URL.createObjectURL(file);
  viewer.src = fileURL;
  }, 3000);
  
});

