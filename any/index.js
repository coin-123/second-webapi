let form =document.querySelector("form")
const users = {obed:{
                    password:2009,
                    department:"student",
                    gender:10

},
sonia:{
                    password:2008,
                    department:"child",
                    gender:11

},
chika:{
                    password:2007,
                    department:"mother",
                    gender:12

},
isreal:{
                    password:2006,
                    department:"father",
                    gender:13

}


}
form.addEventListener("submit", (e)=>{
e.preventDefault()
// if (form.username.value == ""){
//     // alert("can not submit empty file by obed")
// }
// console.log (form.username.value)
if(form.username.value in users){
if(users[form.username.value].department == form.department.value){
    // console.log("user details correct")
    location.href = "dashbord.html"

}else{
    // console.log("error")
    alert(error)
}
// console.log ("user found")
}
 })



// let type=document.querySelector("#put")
// let btn =document.querySelector('#choose')
// let box =document.querySelector('.box')
// box.style.backgroundColor=localStorage.getItem
// ("backgroundColor")
// console.log(localStorage.getItem("car"))
// // console.log(localStorage.getItem("choose"))
// let car={model:"benz",
//           year:2020,
//           color:"gray",
//           type:"sedan",
//           hp:"550",
        
// }
// let choose={
//     light_coral:"#f08080",
//     salmon:"#fa8072",
//     red:"ff0000",
//     medium_violet_red:"#c71585",
//     coral:'#ff7f50',
//     dark_orange:'#ff8c00',
//     moccasin:"#ffe135",
//     blue:'#0000ff',
//     green:'#000000',
//     white:"#ffffff"
// }


// btn.addEventListener('click', function(){
//     box.style.backgroundColor = "yellow"

//     let newColor = "yellow"
//     box.style.backgroundColor=newColor
//     localStorage.setItem("backgroundColor", newColor)
//     localStorage.setItem("car", JSON.stringify(car))
//     // // type=choose.value
//      let types = type.value.toLowerCase() 
     
//     if(types in choose){
//         box.style.backgroundColor = types
//     }else{
//         alert("input color")
//     }

// })


