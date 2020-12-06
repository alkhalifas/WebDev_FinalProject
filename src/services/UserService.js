// const username = "group3person"
// const password = "nicsalehwill3"
import fire from "../config/db";

const gistId = "3ca80de89acfaac051414ac0c308359b"

const headers = {
    "Authorization" : `Token 70f143af3d540e77de91e721e5c4e8960a181663`
}

const USER_URL = "https://cs5610-project-java-server.herokuapp.com/api/users"

export const findAllUsers = () =>
    fire.database().ref("/users").once('value')
        .then((snapshot) => {
            return Object.values(snapshot.val())
        })

export const getTokenForUser = () =>
    fire.database().ref("/users/" + fire.auth().currentUser.uid).once('value')
        .then((snapshot) => {
            return snapshot.val()["paToken"]
        })

export const updateUser = (userId, newUser) =>
    fetch(`${USER_URL}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(newUser),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())



export default { findAllUsers }
