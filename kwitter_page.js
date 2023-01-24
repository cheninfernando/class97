const firebaseConfig = {
      apiKey: "AIzaSyC2RzZlYc1zRcEHAzlZaRcbSMSDLGfVrTY",
      authDomain: "let--s-chat-9b92f.firebaseapp.com",
      databaseURL: "https://let--s-chat-9b92f-default-rtdb.firebaseio.com",
      projectId: "let--s-chat-9b92f",
      storageBucket: "let--s-chat-9b92f.appspot.com",
      messagingSenderId: "70731818191",
      appId: "1:70731818191:web:059d6a3374a5e4d24d83ba"
    };
    
    user_name=localStorage.getItem("user_name");

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];

name_with_tag="<h4> "+name+" <img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id='"+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+" </span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();


function send (){
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
