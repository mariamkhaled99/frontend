

const allMoivesUrl="https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
const IMG_PATH='https://image.tmdb.org/t/p/w500'
const Search_URL='https://api.themoviedb.org/3/search/movie?&api_key=eba8b9a7199efdcb0ca1f96879b83c44&query=" '
var myData=[]

//----------------------------------------//get Initial Movie//--------------------------------------------------------//
getmMoivesall(allMoivesUrl)
async function getmMoivesall(allMoivesUrl){
    let x = await fetch(allMoivesUrl)
     myData=await x.json()
     myData=myData.results
    console.log(myData[2].title)
    displayMovies()
}


//-----------------------------------------fetch  NowPlaying-----------------------------------------------------------
$("#Now-Playing").click(function(){
    async function getmMoivesNowPlaying(){
        let x = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
         myData=await x.json()
         myData=myData.results
        
        displayMovies()
    }
    getmMoivesNowPlaying()
})


//-----------------------------------------fetch  Popular-----------------------------------------------------------
$("#Popular").click(function(){
    async function getmMoivesPopular(){
        let x = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eba8b9a7199efdcb0ca1f96879b83c44")
         myData=await x.json()
         myData=myData.results
        // console.log(myData)
        displayMovies()
    }
    getmMoivesPopular()
})



//-----------------------------------------fetch  TopRated-----------------------------------------------------------
$("#Top-Ratd").click(function(){
    async function getmMoivesTopRated(){
        let x = await fetch("https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=eba8b9a7199efdcb0ca1f96879b83c44")
         myData=await x.json()
         myData=myData.results
        // console.log(myData)
        displayMovies()
    }
    getmMoivesTopRated()
})

//-----------------------------------------fetch   Upcoming-----------------------------------------------------------
$("#Upcoming").click(function(){
    async function getmMoivesUpcoming(){
        let x = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
        myData=await x.json()
        myData=myData.results
        // console.log(myData)
        displayMovies()
    }
    getmMoivesUpcoming()
})



 //-----------------------------------------fetch Trending -----------------------------------------------------------
$("Trending").click(function(){
    async function getmMoivesTrending (){
        let x = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44")
       myData=await x.json()
       myData=myData.results
        // console.log(myData)
        displayMovies()
    } getmMoivesTrending()
    
})




//----------------------------------------display movies-----------------------------------------------------------------------

function displayMovies(){
    var hasalah=``;
    for(var i=0;i< myData.length;i++){
        hasalah+=
        `  <div class="">
        <div class="movie  rounded position-relative col-md-4 ">
        <div classs="col-md-6 col-lg-4 my-3 myM  shadow">
        <div class="poster  ">
    <img src="https://image.tmdb.org/t/p/w500${myData[i].poster_path}" alt="posterImg" class="img-fluid rounded">

     <div class="layer  align-items-center text-black rounded">
     <div class="info p-0">
      <h2 class="title">${myData[i].original_title}</h2>
      <p class="overview">${myData[i].overview}</p>
      <p class="rate">${myData[i].vote_average}</p>
      <p class="date">${myData[i].release_date}</p>
     </div>
  </div>

         
    </div>
    </div>  
    </div>`
    }

   document.getElementById("main").innerHTML= hasalah;
    // $("#main").html(" hasalah")
}


//////////////////////////////////////////////////////////NOTE- work only one time doesnot support toggle///////////////////////////////////////
// //---------------------------------------------------------------------open navbar-----------------------------------
// $("#close").click(function(){

//     $("#close").remove(0,function(){
//         $(".close").after(`<i class="fas fa-times open"id="open"></i>`)
//     })
   
// })

// //----------------------------------------------------------------------close navbar------------------------------------
// $("#open").click(function(){

//     $("#open").remove(0,function(){
// $(".close").after(` <i class="fas fa-align-justify close" id="close"></i>`)
//     })
    
// })
/* <i class="fas fa-times"></i> */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-----------------------------------------------------navbar slide-------------------------------------------


$(".fa-times").hide()

$(".fa-align-justify").click(function(){
    let navbarLeft=$(".nav2").css("left")
    
     console.log(navbarLeft)
   
    if(navbarLeft=="0px" ) {
         
        let nav2width=$(".nav2").outerWidth(true);
       
        $(".nav2").animate({left:`-${nav2width}` } ,1000)
        $(".nav1").animate({left:"0" } ,1000 )
       
       
        
    }
    else{
        let nav2width=$(".nav2").outerWidth(true);
        $(".nav1").animate({left:`${nav2width}` } ,1000)
        $(".nav2").animate({left:`0` } ,1000)
        
    }
    
})
//-----------------------------------------------------------------search input-----------------------------------------------------


// document.getElementById("search").addEventListener("keyup",function (userword){
     
//     var hasalah=``;
   
//       for(var i=0;i<= myData.length;i++)
//       { 
        
        
//           if( ((myData[i]).results).title == userword){
  
//               `  <div class="">
//               <div class="movie  rounded position-relative col-md-4 ">
//               <div classs="col-md-6 col-lg-4 my-3 myM  shadow">
//               <div class="poster  ">
//           <img src="https://image.tmdb.org/t/p/w500${myData[i].poster_path}" alt="posterImg" class="img-fluid rounded">
      
//            <div class="layer  align-items-center text-black rounded">
//            <div class="info p-0">
//             <h2 class="title">${myData[i].original_title}</h2>
//             <p class="overview">${myData[i].overview}</p>
//             <p class="rate">${myData[i].vote_average}</p>
//             <p class="date">${myData[i].release_date}</p>
//            </div>
//         </div>
      
               
//           </div>
//           </div>  
//           </div>`
  
//           }
//       }
  
//       if(hasalah.length<=0){
//           $("#main").text("Sorry There is no result please Try Again")
//       }
//       else{
//           document.getElementById("main").innerHTML= hasalah;
//       }
//   })

document.getElementById("search").addEventListener('keyup',(e)=>{
    e.preventDefault()
    const searchTerm =search.value;
    if( searchTerm&&searchTerm!==''){
        getmMoivesall(Search_URL+searchTerm)

        

        // search.value =''
    }
   
    else{
        window.location.reload()
    }

})



document.getElementById("word").addEventListener('keyup',(e)=>{
    e.preventDefault()
    const searchTerm =word.value;
    if( searchTerm&&searchTerm!==''){
        getmMoivesall(Search_URL+searchTerm)

        

        // search.value =''
    }
   
    else{
        window.location.reload()
    }

})


//------------------------------------------------------------------------form-------------------------------------------------------------------


var nameInput =  document.getElementById("name"); // input    /* global 
var emailInput =  document.getElementById("email"); // input      variable to  
var passInput =  document.getElementById("pass"); // input     use it in any function */
var repassInput= document.getElementsByName("repass");
var ageInput= document.getElementsByName("age");
var phoneInput= document.getElementsByName("phone");



$(".alert-name").hide();
$(".alert-email").hide();
$(".alert-phone").hide();
$(".alert-age").hide();
$(".alert-pass").hide();
$(".alert-repass").hide();


var regxName=/[a-z 0-9 A-Z]+/;
var regxEmail=/[a-z 0-9 A-Z]+[@]gmail.com$/;
var regxPass=/^[A-Z][a-z 0-9]+$/;
var regxPhone=/^[01][ 0-9]+$/;
var regxAge=/^[1-9][8-9]?$|^100$/;


var myForm ; // to become global and at the same time do not remove what inside it

if(  localStorage.getItem("NameStorage") == null   )
{
    myForm = [];
}
else
{
    myForm= JSON.parse( localStorage.getItem("NameStorage") ) ; // need only key retrive as json

}

//-------------------------regx for name------------------

document.getElementById("name").addEventListener("keyup",()=>{
   
   
    $(".alert-name").show(0,function(){
        
              if(regxName.test(nameInput.value)){
                     $(".alert-name").hide();
              }
    })
 })
 //-------------------------regx for pass------------------

document.getElementById("pass").addEventListener("keyup",()=>{
   
   
    $(".alert-pass").show(0,function(){
        
              if(regxPass.test(passInput.value)){
                     $("..alert-pass").hide();
              }
    })
 })
 //-------------------------regx for repass------------------

document.getElementById("repass").addEventListener("keyup",()=>{
   
   
    $(".alert-repass").show(0,function(){
        
              if(regxPass.test(repassInput.value)){
                     $(".alert-repass").hide();
              }
    })
 })
 //-------------------------regx for phone------------------

document.getElementById("phone").addEventListener("keyup",()=>{
   
   
    $(".alert-phone").show(0,function(){
        
              if( regxPhone.test(phoneInput.value)){
                     $(".alert-phone").hide();
              }
    })
 })
 //-------------------------regx for email------------------

document.getElementById("email").addEventListener("keyup",()=>{
   
   
    $(".alert-email").show(0,function(){
        
              if(regxEmail.test(emailInput.value)){
                     $(".alert-email").hide();
              }
    })
 })
 //-------------------------regx for age------------------

document.getElementById("age").addEventListener("keyup",()=>{
   
   
    $(".alert-age").show(0,function(){
        
              if(regxAge.test(ageInput.value)){
                     $(".alert-age").hide();
              }
    })
 })
//---------------------------------------------------------sign up by button------------------------------------------------------
$(".btn").addEventListener("click",function(){
    function signUp()
{
 //[a-z 0-9 A-Z]+  ------>for name
//[a-z 0-9 A-Z]+[@]gmail.com$  -----> for email
//^[A-Z][a-z 0-9]+$  ---------->for password
 



// if (isEmpty() == false) {
//     document.getElementsByClassName('alert').innerHTML = '<span class="text-danger m-3">All inputs is required</span>';
//     return false ;
// }
   var regxName=/[a-z 0-9 A-Z]+/;
   var regxEmail=/[a-z 0-9 A-Z]+[@]gmail.com$/;
   var regxPass=/^[A-Z][a-z 0-9]+$/;
   var regxPhone=/^[01][0-9]+$/;
   var regxAge=/^[1-9][8-9]?$|^100$/;



   


   if(regxName.test(nameInput.value) && regxEmail.test(emailInput.value) && regxPass.test(passInput.value ) && regxPass.test(repassInput.value ) && regxAge.test(ageInput.value )&&  regxPhone.test(phoneInput.value ))
   {
    var onePerson= {  // Person
     
        nameI : nameInput.value ,
        emailI : emailInput.value ,
         passwordI : passInput.value ,
        repasswordI : repassInput.value ,
        phoneI : phoneInput.value ,
        ageI : ageInput.value 

         
     
     }
  
     myForm.push(onePerson) ; //json (array of object)
     
     localStorage.setItem( "NameStorage"  , JSON.stringify(myForm)  ); // string  set need key and value  , need to convert json to string
  
  
     /*-------------------------------*/
  
     clearInputs();  
     
  
   }
  
   else{

    $("btn").disabled();
  
    
   }
  

}signUp();
})


// to remove the value from the input
function clearInputs(){

    nameInput.value="";
    emailInput.value="";
    passInput.value ="";
    repassInput.value ="";
    ageInput.value ="";
    phoneInput.value ="";



}

// for check email is exist
function isEmailExist() {
    for (var i = 0; i < myForm.length; i++) {
        if (myForm[i].myemail.toLowerCase() == emailInput.value.toLowerCase()) {
            return false;
        }
    }
}

//for check inputs is empty or not
function isEmpty() {

    if (nameInput.value == "" || emailInput.value == "" || passInput.value == ""|| repassInput.value == ""|| phoneInput.value.value == ""|| ageInput.value == "") {
        return false;
    } else {
        return true;
    }
}
