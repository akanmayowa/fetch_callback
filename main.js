/**
 * 
 */
console.log("hello from here");

fetch('https://api.github.com/users/manishmshiva')
.then(response => response.json())
.then(json =>console.log(json))
.catch(err => console.log('request failed', err));

fetch('https://api.github.com/users/manishmshiva', {
    method: 'GET',
    headers: { 'Content-type': "application/json;charset-uTF-8"}
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('request failed', err));

fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())



data = {

    title: "foo",
    body: "bar",
    userId:1
}

fetch('https://jsonplaceholder.typicode.com/posts',
{
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json;ch'}
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('request failed', err));


setTimeout(my_function, 3000);
function my_function(){
    document.getElementById("id").innerHTML = "I love You !!";
}
console.log(my_function);



let mypromise = new Promise(function(myResolve, myReject)
{
    myResolve(); //when successful
    myReject(); // when error
});


mypromise.then(
    function(value) {}, 
    function(error) {},
);
















