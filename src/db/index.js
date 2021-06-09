const User = {
    username: 'admin',
    password: 'root',
    name:'Administrador',
    validatePassword: (pass) =>{
        return password === pass;
    }
}

export default User;