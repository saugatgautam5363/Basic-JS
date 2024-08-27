// function changeColor(){
// document.body.getElementById("demo").style.backgroundColor = "green";
// }

// let heading = document.getElementsByClassName("hedding");
// console.dir(heading);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);


// let element = document.querySelectorAll("#demo");
// console.dir(element);

// let parahs = document.querySelector("p");
// console.dir(parahs);

// script.js

// script.js



// let div = document.querySelector("div");
// console.log(div);


// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// find cllass name
// let para1 = document.querySelector("p");
// console.log(para1.getAttribute("class"));

//chamge the attribute

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// let div = document.querySelector("div");
// console.log(div);
// console.log(div.style);

// div.style.backgroundColor = "rgb(34,5,23)";
// div.style.width = ("300px");
// div.style.height = ("300px");
// div.style.color = ("white");
// div.style.textAlign = ("center");
// div.style.fontSize ="50px";
// div.innerText = "This is a new text";
// div.style.visibility = "hidden";


// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
//     // div.append(newBtn);
//     // div.prepend(newBtn);
//     // div.before(newBtn);
//     div.after(newBtn);


//     let heading = document.createElement('h1');
//     heading.innerHTML = "<I>I am new heading</I>";
//     document. querySelector("body").prepend(heading);
// let para = document.querySelector("p");
//     para.remove();

//     let heading1 = document.querySelector("h1");
//     heading1.remove();


// function createMenuItem(name) {
//     let li = document.createElement('li');
//     li.textContent = name;
//     return li;
// }
 //get the ul#menu
// const menu = document.querySelector('#menu');
// // add menu item
// menu.appendChild(createMenuItem('Home'));
// menu.appendChild(createMenuItem('Services'));
// menu.appendChild(createMenuItem('About Us'));

//                                 event event event event event event event

// let btn1 = document.querySelector("#btn1");
// btn1.onclick = ()=>{
//     console.log("button was click");
//     let a = 45;
//     let b = 5;
//     let c = a+b;
//     console.log(c);
// }
  

// let div = document.querySelector("div");
// div.onmouseover = () =>{
//     console.log("div was hover");
//     let a = 45;
//     let b = 5;
//     let c = a**b;
//     console.log(c);
// }

//event object event object event object event object event object event object event object 

// let btn = document.querySelector("#btn1");
// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log("button was clicked");
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };


// let btn = document.querySelector("#btn1");
// btn.addEventListener("click",(evt)=>{
//     console.log("button was clicked");
//     console.log(evt);
//      console.log(evt.type);

// });

// btn.addEventListener("click", () =>{
//     console.log("button was clicked-1");
// });



//                                           inheritance in js 

// class parent {
//     hello(){
//         console.log("hello");
//     }
// }
// class Child extends parent{}
// let obj = new Child();

class person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eat");
    }
  
}
    class Engineer extends person{
        constructor(branch){
            console.log("enter child constructor");
            super();//to invoke parent class constructor
            this.branch = branch;
            console.log("exit child constructor    ")
        }
        work(){
            console.log("solve problem, bulid something")
        }
    }
let engObj = new Engineer("chemica engg");
