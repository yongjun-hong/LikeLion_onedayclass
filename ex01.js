
function toggleImg() {


    // *이미지의 path를 이용해서 하려고 했으나 컴퓨터에 있는 이미지의 path가 나와서 replit에는 적용할수가 없다.
    // var a = document.getElementById('img').src;
    // if (document.getElementById('img').src === "my_selfie.jpg")
    // {
    //     console.log('a');
    //   console.log("123");
    //   document.getElementById('img').src = "like_lion.jpg";
    // }
    // else
    // {
    //     console.log(a);
    //   console.log("456");
    //   document.getElementById("img").src = "my_selfie.jpg";
    // }
    number += 1;
    console.log(number);
    if (number % 4 == 1)
    {
        document.getElementById('img').src = 'like_lion.jpg';
    }
    else if (number % 4 == 2)
    {
        document.getElementById("img").src = "my_favorite_place.jpg";
    }
    else if (number % 4 == 3)
    {
        document.getElementById("img").src = "with_sally.jpg";
    }
    else if (number % 4 == 0)
    {
        document.getElementById("img").src = "my_selfie.jpg";
    }
  }

var insta = document.getElementById('instagram');
var insta_click = function(){
    alert("Welcome to my Instagram profile.");
}
insta.addEventListener("click",insta_click);


var blog = document.getElementById('blog');
var blog_click = function(){
    alert("Welcome to my blog.");
}
blog.addEventListener("click",blog_click);
