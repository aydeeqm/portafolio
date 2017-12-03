import store from './store';
import firebase from "firebase"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCii5hz0vxgVHhv9INC-j44DtPWOrdXODQ",
    authDomain: "aydee-portafolio.firebaseapp.com",
    databaseURL: "https://aydee-portafolio.firebaseio.com",
    projectId: "aydee-portafolio",
    storageBucket: "aydee-portafolio.appspot.com",
    messagingSenderId: "96052603802"
};
firebase.initializeApp(config);

const snapshotToArray = snapshot => {
    let comments = []
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        let key = childSnapshot.key;
        item.id = key;
        comments.push(item);
    });
    store.setState({
        comments: comments
    })

};

export const readAllComments = () => {
    firebase.database()
        .ref('comentarios/')
        .on('value', (res) => {
            snapshotToArray(res)
        });
}

export async function addComments(name, email, subject, msm) {
    const comments = [...store.getState().comments]
    const newcomment = {
        name: name,
        email: email,
        subject: subject,
        msm: msm
    };

    const res = await firebase.database().ref('comentarios/').push(newcomment);
    newcomment.id = res.key;

    const newComment = comments.concat(newcomment);
    store.setState({
        comments: newComment
    })
}

export const isHidden = () => {
    const bolean = store.getState().showing;
    const newStyle = !bolean;
    store.setState({
        showing: newStyle,
    });
}

export const clickit = () =>{
    const bolean = store.getState().showing;
    const newStyle = !bolean;
    store.setState({
        showing: newStyle,
    });
}