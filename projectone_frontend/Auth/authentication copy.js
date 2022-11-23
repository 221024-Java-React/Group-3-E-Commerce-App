document.getElementById("auth");

let loginUrl = "http://localhost:8000/user/login";
let registerUrl = "http://localhost:8000/user/register";

document.getElementById("auth").addEventListener("submit", authenticate(loginUrl));
//document.getElementById("auth").addEventListener("submit", authenticate(registerUrl));


function authenticate(URL)
{
   // e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(`username ${email}  password ${password}`);
   let user=
   {
        "email": email,
        "password":password
    }
    console.log(user);
    //const URL = "http://localhost:8000/user/login";
    fetch(URL, {
        method: "POST",
        body: JSON.stringify(user)
    })
    .then((response) => {
        console.log(response);
        if(response.ok){
            return response.json();
        } else {
           console.log("This person already registered");
        }
    })
    .then((data) => {
      console.log(data);
    })
    .catch(e => {
        console.log(e);
    });

}
async function GetAllUsers (e){
 e.preventDefault();
    let url = "http://localhost:8000/users";
    try{
        let req = await  fetch(url);
        let response = await req.json();
        console.log(response);
       // createPokemon(response);
    } catch(e){
        console.log("Something went wrong with the request  "+e);
    }

}