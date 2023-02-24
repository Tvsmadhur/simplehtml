import { get } from './Request'
import { makeapicall } from './make-api-call'
export async function getuserById(id) {
    return makeapicall(`https://reqres.in/api/users/${id}`, {
        method: "GET"
    })
}
export async function login(data) {
    console.log(makeapicall("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(data)
    }))
    return makeapicall("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(data)
    })
}
export async function signup(data) {
    return makeapicall("https://reqres.in/api/register", {
        method: "POST",
        body: JSON.stringify(data)
    })
}
export async function getUsers() {
    return makeapicall(`https://reqres.in/api/users?page=2`, {
        method: "GET"
    })
}