
var userData = []
document.querySelector("form").addEventListener("submit", function(){
    event.preventDefault()
   
    var userObj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        mobile: document.querySelector("#mobile").value
    }

    // console.log(userObj)
    userData.push(userObj)
    localStorage.setItem("userData",JSON.stringify(userData))
    alert("User has registered successfully")
    document.querySelector("form").reset()
    
})