let count;
let timer;
let isrunning = false;
document.getElementById('start').onclick = function()
{
    isrunning = true;
    const hr = parseInt(document.getElementById('hrs').value) || 0;
    const m = parseInt(document.getElementById('min').value) || 0;
    const s = parseInt(document.getElementById('sec').value) || 0;
    count = 3600*hr + 60*m + s;
    startTimer();
}

function startTimer(){
    timer = setInterval(() => {
        if(count > 0 && isrunning==true)
        {
            count --;

            const hr = Math.floor(count/3600);
            const min = Math.floor((count%3600)/60);
            const sec = Math.floor(count % 60);

            document.getElementById('hrs').value = String(hr).padStart(2,'0');
            document.getElementById('min').value = String(min).padStart(2,'0');
            document.getElementById('sec').value = String(sec).padStart(2,'0');

        }
        else {
            alert("Times up!");
            clearInterval(timer);
        }
    },1000);
}

document.getElementById('reset').onclick = function() {
    clearInterval(timer);
    document.getElementById('hrs').value = 'HH';
            document.getElementById('min').value = 'MM';
            document.getElementById('sec').value = 'SS';
}