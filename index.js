// var key=document.getElementById('key');
// var ele=document.createElement('h1');

// document.addEventListener('keypress',function(event){
//     var s =' ';
//     s=s+event.key
//     console.log(s)
//     key.appendChild(ele).textContent=s

// })


var len=document.querySelectorAll("button").length;


for(var i=0;i<len;i++)
{

    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var a=this.innerHTML;
     
        makeSound(a)
        animation(a)
           
    })
}
document.addEventListener("keypress",function(event){
    console.log(event)
    makeSound(event.key)
    animation(event.key)
  
})
function makeSound(key)
{
    console.log(key)
    switch(key)
    {
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break
        case "d":

            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break
         case "j":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break
        case "k":
                    var audio = new Audio('./sounds/tom-3.mp3');
                    audio.play();
                    break
        case "l":
                  var audio = new Audio('./sounds/tom-4.mp3');
                    audio.play();

    }
}
function animation(key)
{
    var addkey=document.querySelector('.' +key);
    addkey.classList.add('pressed');
    setTimeout(() => {
        addkey.classList.remove('pressed')
        
    }, 100);
}
