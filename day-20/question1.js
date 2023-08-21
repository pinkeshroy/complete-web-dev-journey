//Question 01
// const elem = document.getElementById('main-heading').innerText
// console.log(elem)

//Que-02 Utilize elem.type to target the input element with the ID "name" and print its type to the console. (elem.type)

// const elem=document.getElementById('name')
// console.log(elem.type)

//Q-03 Make use of elem.name to target the input element with the ID "name" and print its name attribute to the console. (elem.name)

// const elem = document.getElementById('name')
// console.log(elem.name)

// Q04 Using elem.id, target the input element with the ID "name" and print its ID attribute to the console. (elem.id)

// const elem = document.getElementById('name')
//  console.log(elem.id);

// Q05 5. With the help of ** `elem.value` **, target the input element with the ID "name" and print its value to the console. (** `elem.value` **)

// const elem = document.getElementById('name')
//  console.log(elem.value);

// 06 Using querySelectorAll, target all <li> elements within the <ul> with class "list" and print them to the console. (querySelectorAll)

// const elem = document.querySelectorAll('.list')
// console.log(elem[0].innerHTML);

// 07 Leveraging querySelector, target the <p> element within the <div> with class "content" and print it to the console. (querySelector)

// const elem = document.querySelector('.content').querySelector('p')
// console.log(elem.innerText)

//08  Utilizing document.body.children, target all child elements of the <body> element and print them to the console. (document.body.children)

// const elem = document.body.children
// console.log(elem);

// 09 Using getElementsByTagName, target the first <li> element within the <ul> with class "list" and print it to the console. (getElementsByTagName)

// const elem = document.getElementsByTagName('li')
// console.log(elem[0].innerText)

//10  Make use of getElementsByClassName, target all elements with the class "content" and print them to the console. (getElementsByClassName)
//  const elem = document.getElementsByClassName('content')
//  console.log(elem[0].innerHTML)

//11  Using getElementsByName, target the input element with the name "fullName" and print it to the console. (getElementsByName)

// const elem = document.getElementsByName('fullName')
// console.log(elem)

// 12 What classes are present in the classList of the element with the ID "main-heading"? (classList)

// const elem = document.getElementById('main-heading').classList
// console.log(elem.length)

//13  Add the class "highlight" to the element with the ID "main-heading". What classes are present now? (classList.add)

// const elem = document.getElementById('main-heading')
// console.log(elem.classList.add('newClass'))
// console.log(elem.classList.length);

//14 Remove the class "highlight" from the element with the ID "main-heading". What classes are present now? (classList.remove)

// const elem = document.getElementById('main-heading')
// console.log(elem.classList.add('newClass'))
// elem.classList.remove(['hjbsdv'])
// console.log(elem.classList.length);

// 15  Toggle the class "active" on the element with the class "inner-box" inside the element with the ID "container".What classes are present on the "inner-box" element ? (classList.toggle)

// const elem = document.getElementById('container').getElementsByClassName('inner-box')[0]
// console.log(elem.classList.toggle('active'))

//16 Check if the element with the class "inner-box" has the class "active". Print true or false. (elem.classList.has)

// const elem = document.getElementById('container').getElementsByClassName('inner-box')[0];
// console.log(elem.classList.contains('inner-box'));

// 17  Does the element with the ID "name" have the class "input-field"? Print true or false. (classList.contains)

// const elem = document.getElementById('name')
// console.log(elem.classList.contains('input-field'))

// 18  What is the background color of the element with the ID "main-heading"? (style.background-color)

// const elem = document.getElementById('main-heading')
// console.log(elem.style.backgroundColor='red');

//19 Does the element with the class "content" match a <div> tag? Print true or false. (matches)

// const elem = docu

//20 What is the nearest ancestor of the element with the class "inner-box" that has the ID "container"? (closest)

// const elem = document.querySelector('.inner-box')
// console.log(elem.closest('#container'))

// 21. Print the first child element of the ** `<body>` ** element. (** `document.body` **)

// const elem = document.body
// console.log(elem.children[0])

// 22. Print the number of child elements within the ** `<body>` ** element. (** `document.body.children` **)

// const elem = document.body.children
// console.log(elem.length);

// 23. What is the tag name of the first child element of the ** `<body>` ** element ? (** `document.body.firstChild.tagName` **)

// const elem = document.body.firstElementChild.tagName
// console.log(elem);

// 24. What is the class name of the first child element of the ** `<body>` ** element ? (** `document.body.firstChild.className` **)

// const elem = document.body.firstElementChild.className
// console.log(elem);

// 25. Print the ** `innerHTML` ** of the element with the class "content". (** `innerHTML` **)

// const elem = document.querySelector('.content')
// console.log(elem.innerHTML )

// 26. Print the ** `innerText` ** of the element with the class "content". (** `innerText` **)

// const elem = document.querySelector('.content')
// console.log(elem.innerText);

// 27. Get the value of the "type" attribute of the input element with the ID "name". (** `getAttribute()` **)

// const elem = document.getElementById('name')
// console.log(elem.getAttribute('type'))

// 28. Set the "placeholder" attribute of the input element with the ID "name" to "Enter your full name". (** `setAttribute()` **)

// const elem = document.getElementById('name')
// elem.setAttribute('placeholder', 'Enter your full name')
// console.log(elem)

// 29. Does the input element with the ID "name" have the "placeholder" attribute ? Print ** `true` ** or ** `false` **. (** `hasAttribute()` **)

// const elem1 = document.getElementById('name')
// console.log(elem1.hasAttribute('placeholder'));

// 30. Remove the "value" attribute from the input element with the ID "name". (** `removeAttribute()` **)

// const elem=document.getElementById('name').removeAttribute('value')
// console.log(document.getElementById('name').hasAttribute('value'));

// 31. Print the total number of attributes present in the element with the ID "main-heading". (** `attributes()` **)

// const elem = document.getElementById('main-heading')
// console.log(elem.attributes.length);

// 32. Create a new ** `<div>` ** element using the ** `document.createElement` ** method.Print the created element. (** `document.createElement` **)

// const elem = document.createElement("div")
// console.log(elem)

// 33. Create a new text node with the content "This is a new text node." using the ** `document.createTextNode` ** method.Print the created text node. (** `document.createTextNode` **)

// const newNode = document.createTextNode(' text')

// 34. Append the created text node to the element with the ID "main-heading".Print the updated element. (** `append` **)

// const elem = document.querySelector('#main-heading')
// const appendres=elem.appendChild(newNode)
// console.log(document.getElementById('main-heading').innerText)

// 35. Prepend the created ** `<div>` ** element to the element with the class "content".Print the updated element. (** `prepend` **)

// const ele=document.querySelector('.content').prepend(elem)
// console.log(document.querySelector('.content').firstChild);

// 36. Replace the element with the ID "main-heading" with the created text node.Print the updated element. (** `replaceWith` **)

// console.log(elem.innerText)
// const replaceText=document.createTextNode(' replaceWith')
// appendres.replaceWith(replaceText)
// console.log(elem.innerText)

// 37. Insert the created ** `<div>` ** element before the element with the class "inner-box".Print the updated parent element. (** `before` **)

// const newDiv= document.createElement("div")
// const ele = document.querySelector('.inner-box').parentElement
// const childre=document.querySelector('.inner-box')
// const appendbefore=ele.insertBefore(newDiv,childre)
// console.log(ele.innerHTML,appendbefore)

// 38. Insert the created ** `<div>` ** element after the element with the class "inner-box".Print the updated parent element. (** `after` **)

// const appendafter = ele.appendChild(newDiv)
// console.log(ele.innerHTML,appendafter);

// 39. Print the ** `offsetHeight` ** and ** `offsetWidth` ** of the element with the class "content". (** `offsetHeight` ** / **`offsetWidth`**)

// const targetClass = document.getElementById('content')
// console.log(targetClass.offsetHeight)

// 40. Print the ** `clientHeight` ** and ** `clientWidth` ** of the element with the class "content". (** `clientHeight` ** / **`clientWidth`**)

// console.log(targetClass.clientHeight)

// 41. Print the ** `scrollHeight` ** and ** `scrollWidth` ** of the element with the class "content". (** `scrollHeight` ** / **`scrollWidth`**)

// console.log(targetClass.scrollHeight)

// 42. Print the ** `innerHeight` ** and ** `innerWidth` ** of the window. (** `innerHeight` ** / **`innerWidth`**)

// console.log(window.innerHeight); The innerHeight property returns the height of a window's content area.

// 43. Print the ** `outerHeight` ** and ** `outerWidth` ** of the window. (** `outerHeight` ** / **`outerWidth`**)

// console.log(window.outerHeight);// TheouterHeight property returns the outer height of the browser window, including all interface elements (like toolbars / scrollbars).

// 44. Change the text content of the ** `<h1>` ** element with the ID "main-heading" to "Hello, DOM!".

// const hdom = document.getElementById('main-heading')
// hdom.innerText = "Hello, DOM!"
// console.log((hdom.innerText));

// 45. Change the value of the input element with the ID "name" to "Jane Smith".

// const inputval = document.getElementById('name')
// inputval.value="Pinkesh"
// console.log(inputval.value);

// 46. Add a new ** `<li>` ** element to the ** `<ul>` ** element with class "list" containing the text "Item 4".

// const newli = document.createElement('li')
// newli.appendChild( document.createTextNode("Item 4"))
// console.log(newli.innerText)
// const targetClass = document.querySelector('.list')
// targetClass.appendChild(newli)
// console.log(targetClass.innerHTML)

// 47. Change the text content of the ** `<p>` ** element within the ** `<div>` ** with class "content" to "Updated paragraph text".

// const targetParentElem = document.querySelector('.content').querySelector('p')
// targetParentElem.innerText ="Updated paragraph text"
// console.log(targetParentElem.innerHTML);

// 48. Change the background color of the ** `<div>` ** element with ID "container" to blue.

// const changeColorClass = document.getElementById('container')
// changeColorClass.style.backgroundColor='lightblue'

// 50. Clone the ** `<div>` ** element with ID "container" and append it to the body.

// const elem = document.getElementById('container')
// const cloDiv = elem.cloneNode(true);
// document.body.append(cloDiv);
// console.log(document.body.innerHTML);

// 51. Wrap the contents of the ** `<div>` ** with ID "container" in a new ** `<div>` ** with class "wrapper"

// const newDiv = document.createElement('div')
// newDiv.setAttribute('class', 'wrapper')
// document.body.append(newDiv)
// const origDiv = document.getElementById('container')
// newDiv.append(origDiv)
// console.log(newDiv.innerHTML)


// 52. Remove the first ** `<li>` ** element from the ** `<ul>` ** with class "list".

// const elemLi1 = document.querySelector('.list').children[0]
// console.log(elemLi1)
// elemLi1.remove()

// 53. Add the class "highlight" to the ** `<p>` ** element within the ** `<div>` ** with class "content".

// const addAtri = document.querySelector('.content').querySelector('p').setAttribute('class', 'highlight')
// console.log(addAtri)

// 54. Change the type of the input element with ID "name" to "email"./

// const changeType = document.getElemen/tById('name').getAttribute('type')
// changeType.setAttribute('type', 'email')


// const changeType = document.getElementById('name').setAttribute("type", "email")

// 55. Replace the text content of the ** `<li>` ** element with "Item 2" to "Updated Item 2"./

// const item2 = document.getElementsByTagName('li')[1]
// item2.innerText="Updayed Item2"
// console.log(item2.innerText)

// 56. Change the value of the input element with ID "name" to an empty string.

// const changeType = document.getElementById('name').setAttribute('value',"")

// 57. Remove the entire ** `<form>` ** element from the DOM.

// const removeForm=document.getElementsByTagName('form')[0].remove()

// 58. Add an event listener to the ** `<h1>` ** element with ID "main-heading" that logs a message when clicked.

// const addEvent = document.getElementById('main-heading')
// addEvent.addEventListener('click',()=>{console.log("clicked")})

// 59. Change the font size of the ** `<p>` ** element within the ** `<div>` ** with class "content" to 18px.

// const fontsize = document.querySelector('.content').querySelector('p')
// fontsize.style.fontSize='18px'

// 60. Remove the ** `<ul>` ** element with class "list" from the DOM.

// document.querySelector('.list').remove()

// 61. Create a new ** `<div>` ** element, give it a class of "new-div", and append it to the body.

// const newDiv = document.createElement('div')
// newDiv.setAttribute('class', 'new-div')
// document.body.append(newDiv)
// 62. Append a new ** `<p>` ** element with the text "New paragraph" to the ** `<div>` ** with class "inner-box".

// const newEle = document.createElement('p')
// newEle.innerText = "New paragraph"
// const innerBox = document.querySelector('.inner-box')
// innerBox.append(newEle)
// console.log(innerBox)