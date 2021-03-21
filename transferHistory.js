function writeDataIntoTable(senderIdValue, receiverIdValue, amountValue, timeValue) {
    var table = document.getElementById("transTable");

    var length = table.length;
    var row = table.insertRow(length);

    var senderId = row.insertCell(0);
    var receiverId = row.insertCell(1);
    var amount = row.insertCell(2);
    var time = row.insertCell(3);

    senderId.innerHTML = senderIdValue;
    receiverId.innerHTML = receiverIdValue;
    amount.innerHTML = amountValue;
    time.innerHTML = timeValue;
    var loaders = document.getElementById("loadings").hidden = true;

}
var firebaseConfig = {
    apiKey: "AIzaSyDOPdwsUHo3ExGfbQkHH9al43AB4oUkrCs",
    authDomain: "bank-system-52201.firebaseapp.com",
    projectId: "bank-system-52201",
    storageBucket: "bank-system-52201.appspot.com",
    messagingSenderId: "87345930564",
    appId: "1:87345930564:web:01a7bac7f9bee536cd3711"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function getData() {
    // firebase.database().ref('transfer').push({senderId: senderAccountId, receiverId:receiverAccountId, amount:enterAmount,time:time});

    firebase.database().ref("transfer").once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var senderId = childData['senderId'];
            var receiverId = childData['receiverId'];
            var amount = childData['amount'];
            var time = childData['time'];
            writeDataIntoTable(senderId, receiverId, amount, time);
        });

    });

}
getData();
window.onload = getData;
