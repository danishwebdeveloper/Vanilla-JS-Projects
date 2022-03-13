// increase, decrease, reset the value
var count = 0;

var takeValue = document.querySelector('#value');
var btns = document.querySelectorAll('.btn')


btns.forEach((btn) => {
    //
    btn.addEventListener('click', function(e) {
        const latest = e.target.classList;
        if (latest.contains('decrease')) {
            // console.log('Decrease clcik');
            count--;
        } else if (latest.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            takeValue.style.color = 'green';
        }
        if (count < 0) {
            takeValue.style.color = 'red';
        }
        if (count == 0) {
            takeValue.style.color = "black";
        }
        takeValue.textContent = count;
    })
})