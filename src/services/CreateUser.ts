
interface TechObject {
    title: String,
    experience: Number
}

interface CreateUserData{
    name?: String,
    email: string,
    password: string,
    techs: Array<String | TechObject>
}

export default function createUser( {name, email, password, techs} : CreateUserData){
    const user = {
        name,
        email,
        password,
        techs
    }

    return user;
}