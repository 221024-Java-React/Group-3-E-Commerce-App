document.getElementById("auth");


document.getElementById("login").addEventListener("click", testLogin);
document.getElementById("register").addEventListener("click", Register);

async function testLogin(e)
{
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(`username ${email}  password ${password}`);
    
    let url = `http://localhost:8000/user/login?email=${email}&password=${password}`;
    try{
        
        let req = await  fetch(url);
        let response = await req.text();
        console.log(response);
       // createPokemon(response);
    } catch(e){
        console.log("Something went wrong with the request  "+e);
    }
    
}


 async function Register(e)
{
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(`username ${email}  password ${password}`);
   let user=
   {
        "email": email,
        "password":password
    }
    console.log(user);
    const URL = "http://localhost:8000/user/register";
    try{
    let req = await  fetch(URL, {
        method: "POST",
        body: JSON.stringify(user)
    });
   
    let response = await req.text();
        console.log(response);
       // createPokemon(response);
    } catch(e){
        console.log("This person is already registered  "+e);
    }
    
}

    function Login(e)
{
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(`username ${email}  password ${password}`);
   let user=
   {
        "email": email,
        "password":password
    }
    console.log(user);
    const URL = "http://localhost:8000/user/login";
    fetch(URL, {
        method: "POST",
        body: JSON.stringify(user)
    })
    .then((response) => {
        console.log(response);
        if(response.ok){
            return response.json();
        } else {
           console.log("Invalid username or password");
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