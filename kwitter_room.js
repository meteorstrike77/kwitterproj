
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBljdjW3_dJdUiRF0u5M2bHS72JkkCsS0I",
      authDomain: "kwitter-c7841.firebaseapp.com",
      databaseURL: "https://kwitter-c7841-default-rtdb.firebaseio.com",
      projectId: "kwitter-c7841",
      storageBucket: "kwitter-c7841.appspot.com",
      messagingSenderId: "125939455018",
      appId: "1:125939455018:web:8f2e69f3d9b47190735f53",
      measurementId: "G-XVW75003WK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + username;

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