// const userAction = async () => {
//     const response = await fetch('https://www.food2fork.com/api/search?key=[KEY]&q=chicken%20breast&page=2');
//     const myJson = await response.json(); 
//     // do something with myJson
//     myJson.forEach(function(item){
//       console.log(item);
//     });
//   }


async function fetchAsync () {
  let data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
  return data;
  }

var test = function(){
  fetchAsync().then(function(test){
   test.forEach(function(item, index){
     if (index < 10){
      createRecipeCard(item['title'], item['body'])
     }
   });
  })
}
test()



var createRecipeCard = function(title, text){
  var div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "100px";
  div.classList.add('recipe-card')
  div.innerHTML = "<h2>" + title + "</h2><p>" + text + "</p>";
  document.getElementById("main").appendChild(div);
}
  
