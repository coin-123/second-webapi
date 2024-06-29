// const form = document.querySelector("form");
// let head;
// let input = document.getElementById("in");

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     document.getElementById("come").textContent = input.value

// })



const form = document.querySelector("form");
let head = document.getElementById("come");
let input = document.getElementById("in");
// const 

const check=
sessionStorage.getItem("name");
head.innerHTML= check;
// console.log(check);



form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let text ={
        password:form.pass.value,
        age:form.age.value,
        height:form.height.value
    };
    console.log(text);

    head.innerHTML = input.value;
    sessionStorage.setItem("entries", JSON.stringify(text));
})

const validate = sessionStorage.getItem("entries")
console.log(validate);


