
function openNav() {
    document.getElementById("side").style.width = "15%";
    document.body.style.backgroundColor="rgba(0,0,0,0.6)"; 
    document.body.style.margin="0px";
    document.body.style.padding="0px";
  
  }
  function closeNav() {
    document.getElementById("side").style.width = "0";
    document.body.style.background="white";
}

function darkmode(){
    var darkon=document.getElementById("on").value;
    console.log(darkon);
var darkoff=document.getElementById("off").value;
  if(darkon=="on"){
    document.body.style.backgroundColor="black";
   
  } else if(darkoff="off"){
    document.body.style.backgroundColor="white";
  }
  

}
function modes(){
        
  var change=document.getElementById("button");
  change.innerHTML="Dark Mode";
  var elem=document.body;
  elem.classList.toggle("changes");
  if(elem.classList.contains("changes")){
    change.innerText="Light Mode";
    change.style.backgroundColor="white"
    change.style.color="black"
  }
}
  var div1=document.getElementById("div");
  
let news=()=>{
  const api=`https://newsapi.org/v2/everything?q=tesla&from=2022-10-15&sortBy=publishedAt&apiKey=eb146c5cb90141c9963058fefdef0f41`;
  const paper=fetch.api;
  const reply=paper.json();
  console.log(paper);
// matter(reply);
}
// function matter(){

// }






// var divRef=document.getElementById("main");


// let details= async(name)=>{
//     const url=`https://newsapi.org/v2/everything?q=tesla&from=2022-10-15&sortBy=publishedAt&apiKey=eb146c5cb90141c9963058fefdef0f41`;
//     const response= await fetch (url);
//     const data=await response.json();
//     console.log(data.articles);
//     // showProfile(data);    
// }
// details();
// function showCards(data){
//     data.articles.forEach(e => {
//         divRef.innerHTML=`<div id="main">
//         <div id="div1">
//     <section id="image1"><img src="${e.urlToImage}"></section>
//     <section id="content1"><p class="para1">${e.title}</P>
//     <span id="span1">${e.content}</span><br><br>
//     <span id="time">${e.publishedAt}</span><br><br>
//     <span id="description">${e.description}</span></section>
//     </div>
//     <div id="div2">
//     <section id="image1"><img src="${e.urlToImage}"></section>
//     <section id="content1"><p class="para1">${e.title}</P>
//     <span id="span1">${e.content}</span><br><br>
//     <span id="time">${e.publishedAt}</span><br><br>
//     <span id="description">${e.description}</span></section>
//     </div>
//     <div id="div3">
//     <section id="image1"><img src="${e.urlToImage}"></section>
//     <section id="content1"><p class="para1">${e.title}</P>
//     <span id="span1">${e.content}</span><br><br>
//     <span id="time">${e.publishedAt}</span><br><br>
//     <span id="description">${e.description}</span></section>
//     </div>

//     </div>`
//     });
// }
  
