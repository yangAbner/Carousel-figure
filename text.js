/**
 * Created by asus on 2016/11/13.
 */
var container=document.getElementById('container');
var buttons=document.getElementById('buttons').getElementsByTagName('span');
var list=  document.getElementById('list');
var next = document.getElementById('next');
var pre=document.getElementById('pre');
list.style.left = '-800px';
var index = 1;
function light() {
    for(var i = 0; i<5;i++)
    {
        buttons[i].className='';
    }
    buttons[index-1].className = 'on';
}
function _next () {
    var oldleft= parseInt(list.style.left);
    var left=list.style.left;
    function nextspeed() {
        if(parseInt(list.style.left)>(oldleft-800))
        {
            list.style.left=parseInt(list.style.left)-40+'px';
            setTimeout(nextspeed,10);
        }
        else if  (parseInt(list.style.left)<-4000){
            list.style.left='-800px';
        }
    }
    nextspeed();
    index=(parseInt(left)/(-800))+1;
    if(index==6)
        index=1;
    light();
}
function _prev(){
    var oldleft= parseInt(list.style.left);
    var left=list.style.left;
    function prevspeed() {
        if(parseInt(list.style.left)<(oldleft+800))
        {
            list.style.left=parseInt(list.style.left)+40+'px';
            setTimeout(prevspeed,10);
        }
        else if  (parseInt(list.style.left)>-800){
            list.style.left='-4000px';
        }
    }
    prevspeed();
    index=(parseInt(left)/(-800))-1;
    if(index==0)
        index=5;
    light();
}


for(var m=0;m<5;m++) {
    buttons[m].onclick =function change(){
        for (var i = 0; i < 5; i++) {
            buttons[i].className = '';
        }
        var myindex = parseInt(this.getAttribute('xindex'));
        list.style.left=((-800)*myindex)+'px';
        index=myindex;
        light();
    }
}


