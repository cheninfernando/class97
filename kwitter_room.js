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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

      function redirecttoroomname(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }