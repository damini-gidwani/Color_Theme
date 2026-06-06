const btns = document.querySelectorAll('.btn');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    //for bgclr only
    // body.style.backgroundColor = e.target.id;

    //for bgclr & h1
    const btns = document.querySelectorAll('.btn');
    const body = document.querySelector('body');
    const h1 = document.querySelector('h1');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        if (e.target.id == 'grey') {
          body.style.backgroundColor = 'grey';
          h1.style.color = 'white';
          h1.style.boxShadow = '2px 2px 2px white';
        } else if (e.target.id == 'yellow') {
          body.style.backgroundColor = 'yellow';
          h1.style.color = 'orange';
          h1.style.boxShadow = '2px 2px 2px white';
        } else if (e.target.id == 'pink') {
          body.style.backgroundColor = 'pink';
          h1.style.color = 'purple';
          h1.style.boxShadow = '2px 2px 2px white';
        } else if (e.target.id == 'green') {
          body.style.backgroundColor = 'green';
          h1.style.color = 'yellow';
          h1.style.boxShadow = '2px 2px 2px white';
        } else if (e.target.id == 'white') {
          body.style.backgroundColor = 'white';
          h1.style.color = 'black';
          h1.style.boxShadow = '2px 2px 2px white';
        } else if (e.target.id == 'purple') {
          body.style.backgroundColor = 'purple';
          h1.style.color = 'pink';
          h1.style.boxShadow = '2px 2px 2px white';
        }
      });
    });
  });
});
