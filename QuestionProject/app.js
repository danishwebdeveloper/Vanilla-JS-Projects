// Traversing the dom method
var btns = document.querySelectorAll('.question-btn');
btns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        var ques = e.currentTarget.parentElement.parentElement;
        if (ques.classList.contains('show-text')) {
            btn.classList.remove('show-text');
        }
        ques.classList.toggle('show-text');
    })
})