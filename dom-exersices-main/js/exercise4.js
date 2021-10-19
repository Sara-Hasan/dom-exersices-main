var font_family = document.getElementById('font_family');
var font_size = document.getElementById('font_size');
var font_italic = document.getElementById('font_italic');
var font_bold = document.getElementById('font_bold');
var font_underline = document.getElementById('font_underline');
var bold = document.getElementsByTagName('label')[1].innerText; 
var italic = document.getElementsByTagName('label')[0].innerText; 
var underline = document.getElementsByTagName('label')[2].innerText; 
var text = document.getElementById('text');


function changefont() { 
    var result1 = font_family.value; 
    text.style.fontFamily= result1;
}

function changesize() { 
    var result2 = font_size.value; 
    text.style.fontSize= result2;
}

function changeitalic() { 
    text.style.fontStyle= italic;
}

function changebold() { 
    text.style.fontWeight= bold;
}

function changeline() {  
    text.style.textDecoration= underline;
}

// var option = document.querySelectorAll('option');
// option.forEach( function() {
//     console.log(option);
// });

// option.addEventListener('onclick', function(event){
//     var fvalue = '';
//     var i=0;
//     for ( i = 0; i < font_family.length; i++) {
//         event.target.style.fontFamily = value[i];
// }})


