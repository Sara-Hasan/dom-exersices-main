
    let y = document.getElementById("mydiv");
    y.style.background='blue';

    let color=['red','green','blue'];
    let count =0;
    y.addEventListener('click',function(event){
        event.target.style.background=color[count];
    count++;

    }
    );
