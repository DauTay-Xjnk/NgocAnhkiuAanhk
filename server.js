
window.addEventListener('scroll', function () {
    let k = 0, L = 350, opacity;

    let head = document.querySelector('.mpapp-head')

    if (window.scrollY < k && k != '') return;

    if (window.scrollY > L && L != '') opacity = 1;
    if (window.scrollY < L && L != '') opacity = 0;

    head.style.background = `rgb(255, 255, 255, ${opacity})`
    head.style.transition = `opacity 2.55s ease`;

    if (window.scrollY > L && L != '') {
        head.innerHTML = `<div class="dow-data" style="width: 100%; height: auto; display: flex; align-items: center; gap: 10px;">
                <img src="avatar.png" alt="" style="width: 40px; border-radius: 50%; height: 40px; margin-left: .3em;">
                <h3 class="dow-name-data" style="color: black; font: 500; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 8pt; font-weight: 500;">Ngọc Anhk'iu Anhk</h3>
            </div>`;
        document.querySelector('.dow-data').classList.remove('dow-data')
    } else {
        head.innerHTML = '';
        document.querySelector('.dow-data').classList.add('dow-data')
    }
})

function fix() {
    alert('chúc bạn 1 ngày tốt đẹp, đã ghé thăm trang cá nhân của mình.')
    let us = 'chill.mp3';

    document.querySelector('.cd').innerHTML = `<audio id="src"></audio>`

    document.getElementById('src').src = us
    document.getElementById('src').play()
} fix()

if (window.innerWidth < 400) {
    document.querySelector('.lid-uI-Tz').style.fontSize = 8.55 + 'px'
    document.querySelector('.lid-uI-_p').style.fontSize = 7.55 + 'px'
    document.querySelector('.data-name').style.fontSize = 17.55 + 'px'
} else if (window.innerWidth < 300) {
    document.querySelector('.data-name').style.fontSize = 15 + 'px'
}


// document.querySelector('.myapp-background-image').addEventListener('click', function(){
//     document.getElementById('show-myapp-background-image').style.opacity = 1
// })