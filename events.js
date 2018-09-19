function showVal(){
            console.log(document.getElementById('name').value);
            alert("hello");
        }

        document.getElementById('thebutton').addEventListener("click", showVal);

        var myTextBox = document.getElementById('name');
        myTextBox.addEventListener("focus", newFunction);

        function newFunction(){
            myTextBox.style.backgroundColor = "grey";
        }

    var secondButton = document.getElementById('button2');
    secondButton.addEventListener("click", function(){

    var divText = document.getElementById('thediv').innerHTML;
    divText += " new stuff";
    document.getElementById('thediv').innerHTML = divText;

        alert(divText);
    });

document.getElementById('Lists').addEventListener('click',function(){
    var listItems = document.getElementsByTagName('li');
    var item = document.getElementById('addAnItem').value;

    for (let i = 0; i < listItems.length; i++){
        console.log(listItems[i].innerHTML);
    }
    document.getElementById('theList').innerHTML += "<li>" + item + "</li>";



});