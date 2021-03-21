function writeCustomerIntoTable(nameValue, emailValue, balanceValue, accountIdValue) {
  var table = document.getElementById("thisTable");

  var length = table.length;
  var row = table.insertRow(length);
 
  var accountId = row.insertCell(0);
  var name = row.insertCell(1);
  var email = row.insertCell(2);
  var balance = row.insertCell(3);

  name.innerHTML = nameValue;
  email.innerHTML = emailValue;
  balance.innerHTML = balanceValue;
  accountId.innerHTML = accountIdValue;
  var loader = document.getElementById("loading").hidden=true;
  var createClickHandler = function(row) {
    return function() {
      localStorage.setItem("accountId",row.cells[0].innerHTML);
      localStorage.setItem("name",row.cells[1].innerHTML);
      localStorage.setItem("balance",row.cells[3].innerHTML);
      localStorage.setItem("email",row.cells[2].innerHTML);
      location.href = 'singleCustomer.html';
      };
  };
  row.onclick = createClickHandler(row);

}

var firebaseConfig = {
  apiKey: "AIzaSyDOPdwsUHo3ExGfbQkHH9al43AB4oUkrCs",
  authDomain: "bank-system-52201.firebaseapp.com",
  projectId: "bank-system-52201",
  storageBucket: "bank-system-52201.appspot.com",
  messagingSenderId: "87345930564",
  appId: "1:87345930564:web:01a7bac7f9bee536cd3711"
};


// Your web app's Firebase configuration


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {
//  firebase.database().ref('users').push({name:'Mohan Verma', email:'mohanverma678@gmail.com', balance:23455,accountId:9571024987});
  firebase.database().ref("users").once('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();
      var name = childData['name'];
      var email = childData['email'];
      var balance = childData['balance'];
      var accountId = childData['accountId'];
      writeCustomerIntoTable(name, email, balance, accountId);
    });

  });

}
window.onload = getData;