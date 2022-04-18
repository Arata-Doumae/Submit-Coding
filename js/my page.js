'use strict'

const textChange = () => {
    document.getElementById('target').textContent='こんにちは！筒前 新大（どうまえあらた）です。';
}
setTimeout(textChange,2000);



const showElementAnimation = () => {

    let element = document.getElementsByClassName('title');
    if(!element) return;

    let showTiming = window.innerHeight > 768 ? 200 : 40;
    let scrollY = window.pageYOffset;
    let windowH = window.innerHeight;

    for(let i=0;i<element.length;i++) { 
        let elemClientRect = element[i].getBoundingClientRect(); let elemY = scrollY + elemClientRect.top; 
        if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) ;
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);

  