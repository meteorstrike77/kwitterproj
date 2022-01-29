var firebaseConfig = {
    apiKey: "AIzaSyBIEn76GuDoLiGwIM5lVxm37XLeSYyAQp4",
    authDomain: "let-s-chat-project-5dc7d.firebaseapp.com",
    databaseURL: "https://let-s-chat-project-5dc7d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-project-5dc7d",
    storageBucket: "let-s-chat-project-5dc7d.appspot.com",
    messagingSenderId: "317968945484",
    appId: "1:317968945484:web:633bd0afa0e5e9a9bcbfe9"
  };

  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user_name");
  roomname = localStorage.getItem("room_name");

  console.log(username);
  console.log(roomname);

  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
          name: username,
          message: msg,
          like: 0
      });
      document.getElementById("msg").value = "";
  }