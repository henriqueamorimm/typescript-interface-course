interface User {
 email: string;
 name: string;
 password: string;
}

const myAccount: User = {
    email: "myaccount@account.com",
    name: "Default Name",
    password: "Default Password"
}
function login(user: User){
console.log(`Buscando informações para ${user.email}...`);
console.log(`Encontrado! Segue suas informações:`);
console.log(`Nome: ${user.name}\nE-mail: ${user.email}\n`)
}


