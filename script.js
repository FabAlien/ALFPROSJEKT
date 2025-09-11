
function burgerFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}



async function getArticle() {
  const response = await fetch("articles.json");
  const article = await response.json();
  console.log(article)
}



getArticle();

let article1 = article[0];