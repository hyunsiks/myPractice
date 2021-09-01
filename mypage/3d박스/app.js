const boxes = document.querySelector('.login');
const stage = document.querySelector('.stage');
boxes.addEventListener('click', function (e) {
    /*
    document.body.classList.toggle('flipped') : toggle은 넣었다 뺐다 하는것
    document.body.classList.add('flipped') : add는 넣기만 하고 끝
    */
    stage.classList.toggle('flipped');
})