var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("peerInfo").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "http://bitcoin.mubiz.com/peerinfo", true);
xmlhttp.send();