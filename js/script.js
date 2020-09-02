let ul=document.getElementById('ul');
let btn=document.getElementById('button');
let scoreCard=document.getElementById('scoreCard');
let quizBox=document.getElementById('celebBox');
let final=document.getElementById('final');

let op = [];

op[0]=0;
op[1]=document.getElementById('op1');
op[2]=document.getElementById('op2');
op[3]=document.getElementById('op3');
op[4]=document.getElementById('op4');


let app={
        levels:[
                    {
                      q:"<img src='img/darwin.jpg'/>", 
                      options:['Fyodor Dostoevsky',
                              'Charles Darwin',
                              'Mahathma Gandhi',
                              'John Locke'],
                      answer:2
                    },
                    {
                      q:"<img src='img/dostoevsky.jpg'/>",
                      options:['Charles Darwin',
                               'Grigory Rasputin',
                               'Fyodor Dostoevsky',
                               'Chris Buchanan'],
                      answer:3
                    },
                    {
                      q:"<img src='img/hendrix.jpeg'/>",
                      options:['Bob Marley',
                               'Marvin Gaye',
                               'Django',
                               'Jimi Hendrix'],
                      answer:4
                    },
                    {
                      q:"<img src='img/lumumba.jpg'/>",
                      options:['Barack Obama',
                               'Alexander Pushkin',
                               'Patrice Lumumba',
                               'John Smith'],
                      answer:3
                    },
                    {
                      q:"<img src='img/maradona.jpg'/>",
                      options:['Diego Maradona',
                               'Jorje Murientes',
                               'Sebastian Klein',
                               'Fabiano Alonso'],
                      answer:1
                    },
                    {
                      q:"<img src='img/navalny.jpg'/>",
                      options:['Alexei Navalny',
                               'Vladislav Gandapas',
                               'Kurt Cobain',
                               'Fritz Wasser'],
                      answer:1
                    },
                    {
                      q:"<img src='img/noe.jpg'/>",
                      options:['Alejandro Inaritu',
                               'Jesus Menendez',
                               'Pablo Aristuto',
                               'Gaspard Noe'],
                      answer:4
                    },
                    {
                      q:"<img src='img/teryan.jpg'/>",
                      options:['Vahan Teryan',
                               'Alexander Khatisyan',
                               'Nikolai Gogol',
                               'Charlie Brown'],
                      answer:1
                    },
                    {
                      q:"<img src='img/zaz.jpg'/>",
                      options:['Beyonce',
                               'Sirusho',
                               'ZAZ',
                               'PAZ'],
                      answer:3
                    },
        ],
          
        index: 0,

        load: function(){
          
             if(this.index<this.levels.length){

                quizBox.innerHTML=this.levels[this.index].q;      
                
                for(let i=1; i<5; i++){
                	op[i].innerHTML=this.levels[this.index].options[i-1];
                }
                   
                this.scoreCard();
              
              }else{

                quizBox.innerHTML="";      

                if(app.score == 0){
                  final.style.color = "red";
                  final.innerHTML = "At least read books and have fun!";
                }else if(app.score > 0 && app.score < 4){
                  final.style.color = "yellow";
                  final.innerHTML = "Low";
                }else if(app.score > 3 && app.score < 7){
                  final.style.color = "blue";
                  final.innerHTML = "Middle";
                }else if(app.score > 6 && app.score < 10){
                  final.style.color = "green";
                  final.innerHTML = "Ты просто Космос!";
                }
                
                final.style.display="block";
                
                for(let i=1; i<5; i++){
                	op[i].style.display="none";
                }
                
                btn.style.display="none";
              }
        },

        next: function(){
            this.index++;
            this.load();
        },
        
        check: function(ele){
                 var id=ele.id.split('');
                 
                 if(id[id.length-1]==this.levels[this.index].answer){
                  this.score++;
                  
                  ele.className="correct";
                  ele.innerHTML="Correct";
                  this.scoreCard();
                
                }else{
                  
                  ele.className="wrong";
                  ele.innerHTML="Wrong";
                  op[this.levels[this.index].answer].className = "myus";
                }
        },
                
        notClickAble: function(){
               for(let i=0;i<ul.children.length;i++){
                    ul.children[i].style.pointerEvents="none";
               }
        },

        clickAble: function(){
               for(let i=0;i<ul.children.length;i++){
                    ul.children[i].style.pointerEvents="auto";
                    ul.children[i].className=''
               }
        },

        score: 0,
        
        scoreCard: function(){
          scoreCard.innerHTML=this.levels.length+"/"+this.score;
        }
}

window.onload = app.load();

function button(ele){
       app.check(ele);
       app.notClickAble();
}

function next(){
   app.next();
   app.clickAble();
} 





