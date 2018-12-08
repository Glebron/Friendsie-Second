$('.friends-list li').after('<hr/>');

var buttonFriends = document.querySelector('.kaverit').addEventListener('click', showFriends);
var buttonKysy = document.querySelector('.kysy').addEventListener('click', showQuestions);
var buttonKysy = document.querySelector('.viestit').addEventListener('click', showMessages);

// var buttonQuestions = document.querySelector('.kysy').addEventListener('click', showFriends);
//Objects from server 'list of friends'
var Gleb = {
    name: 'Gleb',
    icon: 'pictures/profile.png',
}
var Aryna = {
    name: 'Aryna',
    icon: 'pictures/profile1.png',
}
var Jasmin = {
    name: 'Jasmin',
    icon: 'pictures/profile2.png',
}
//
//Array for Objects
const friends = [Gleb, Aryna, Jasmin];
//
//Function for button viestit to show friends page
function showFriends(){
    var friendString = "";
    friends.forEach(element => {
        friendString += `<li>${element.name}<img class='profilePicture' src='${element.icon}'></li>`;
    });
    document.querySelector(".page").innerHTML = friendString;

}
//

//Objects from server 'list of questions'
var Oma = {
    categoryName:"Oma",
    question2 : "Oma kysymys1",
    question3 : "Oma kysymys2",
    question4 : "Oma kysymys3",
    questionOma : "Oma kysymys4"
}
var Klassikot = {
    categoryName : "Klassikot",
    question2 : "Klassikot kysymys1",
    question3 : "Klassikot kysymys2",
    question4 : "Klassikot kysymys3",
    questionOma : "Klassikot kysymys4"
}
var Lempi = {
    categoryName: 'Lempi',
    question2 : "Lempi kysymys1",
    question3 : "Lempi kysymys2",
    question4 : "Lempi kysymys3",
    questionOma : "Lempi kysymys4"
}
//

//Array for Objects
 var listOfCategories = [Oma, Klassikot, Lempi];

 //Function for button viestit to show friends page
    function showQuestions(){
         var questionList = '';
        listOfCategories.forEach(element => {
        questionList += `<li onclick='showAllQuestions(${element.categoryName})'>${element.categoryName}<br><div id='${element.categoryName}' class='hide'>${element.question2}<br>${element.question3}<br>${element.question4}<br>${element.questionOma}</div></li>`;
         });
        document.querySelector(".page").innerHTML = questionList;    
        }

    function showAllQuestions(id){
       document.getElementById(id).classList.toggle('active');
     }
//
        // function showCategories(){
        //     var categories = '';
        //     listOfCategories.forEach(element => {
        //         categories += `<li></li>`;
        //          });
        //         document.querySelector(".page").innerHTML = categories;    
        // }
    


//Objects from server 'list of messages'
        var glebMessage = {
            name: 'Gleb',
            icon: 'pictures/profile.png',
            typeOfmessage: 'Jos olisin..',
        }
        var arynaMessage = {
            name: 'Aryna',
            icon: 'pictures/profile1.png',
            typeOfmessage: 'Lempi..'
        }
        var bobMessage = {
            name: 'Bob',
            icon: 'pictures/profile2.png',
            typeOfmessage: 'Oletko koskaan..'
        }

        var massageList = [glebMessage, arynaMessage, bobMessage];

        function showMessages(){
            var messageDisplay = '';
            massageList.forEach(element => {
                messageDisplay += `<li>${element.name}<br>${element.typeOfmessage}<img class='profilePicture' src='${element.icon}'></li>`;
            });
            document.querySelector(".page").innerHTML = messageDisplay;    
        }
        
        showMessages();

