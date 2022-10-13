
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCMp1TS92R3ub-M0tY9JvElN0NdR3uWVHA",
      authDomain: "class-test-d575a.firebaseapp.com",
      projectId: "class-test-d575a",
      storageBucket: "class-test-d575a.appspot.com",
      messagingSenderId: "507876986935",
      appId: "1:507876986935:web:6915b089f7f691d9122fb2",
      measurementId: "G-7ZLL4R3KYY"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
