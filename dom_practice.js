console.log('Hello World')

/////////////////////////PLEASE READ//////////////////
//===========================================================================================
//Sorry for the mess with all the comments, that was and Preet trying out different things.
//Alot of this was trial and error and staying up until 4AM to make my 15k worth it.
//I have a decent understanding on the DOM but not 100% on it.
//===========================================================================================



// const listItems = document.querySelectorAll('li')
// listItems[2].style.color = 'red'
// const listItems = document.querySelectorAll('li')
//     listItems[0].style.color ='red'

const listItems = document.querySelectorAll('li')
listItems[0].style.color ='red'

console.log('Welcome to Boston')
document.querySelector('h2').innerText = 'Welcome to Boston!'

// console.log('Quincy Market')
// document.querySelectorAll('li').innerText = 'Jamboree sandwich at the Jambo-ree'

// document.querySelector('.sox').innerText = 'Jamboree sandwich at the Jambo-ree'

// var newImg = document.createElement('img');
// newImg.setAttribute(src, 'harborwalk');

// var img = document.createElement(‘img’);
// img.src = 'harborwalk.jpg';

// const bridge = document.createElement(‘img’);
// bridge.setAttribute(‘src’, ‘SF2’);

// const eggos = document.createElement('img')
// //first arg: what attribut are we setting?
// //secnd arg: what value are we setting it to?
// eggos.setAttribute('src', 'https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg')

//attempt 5
const walk = document.createElement('img')
walk.setAttribute('src', 'harborwalk.jpg');
document.body.appendChild(walk);

// const tools = document.getElementById(".st");
// tools.remove(); 

// const tools = document.getElementById(element.id);
// if (tools.textContent == 'Edit') {
//      text.textContent = 'Done';
// }

// document.getElementsByClassName('.st').remove()

//Tried to remove it but it didnt work
const someSt = document.querySelector('.st');
someSt.appendChild('Newbury');
Newbury.remove()