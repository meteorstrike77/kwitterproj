// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBIEn76GuDoLiGwIM5lVxm37XLeSYyAQp4",
  authDomain: "let-s-chat-project-5dc7d.firebaseapp.com",
  databaseURL: "https://let-s-chat-project-5dc7d-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-project-5dc7d",
  storageBucket: "let-s-chat-project-5dc7d.appspot.com",
  messagingSenderId: "317968945484",
  appId: "1:317968945484:web:633bd0afa0e5e9a9bcbfe9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addRoom() {

    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room name = " + Room_names);
    row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location = "index.html";
}