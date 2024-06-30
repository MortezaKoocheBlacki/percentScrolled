let pageProgress = document.querySelector(".aside .pageProgress"),
main = document.querySelector(".main"),
progressPercentages = document.querySelector("aside .pageProgress span"),
pageProgressDot = document.querySelector("aside .pageProgress .dot");

console.log(main.clientHeight);

window.addEventListener("scroll", function() {
      let scrolled = window.scrollY;

      let contentHeight = document.body.clientHeight;

      let windowHeight = window.innerHeight;

      let scrollPercent = scrolled / (contentHeight - windowHeight);

      let scrollPercentRounded = Math.round(scrollPercent * 100);

      pageProgress.style.background = `conic-gradient(from 0deg, #A721E6 ${scrollPercentRounded}%, transparent ${scrollPercentRounded}%)`;
      pageProgressDot.style.transform = `rotate(${scrollPercentRounded * 3.6}deg)`

      progressPercentages.textContent = `${scrollPercentRounded}%`;
      if(scrollPercentRounded > 100){
            progressPercentages.textContent = `${100}%`;
      }
});