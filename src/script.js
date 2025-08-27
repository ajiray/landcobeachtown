function changeBackground(imageUrl) {
    var backgroundDiv = document.getElementById('backgroundDiv');
    backgroundDiv.style.backgroundImage = 'url(' + imageUrl + ')';
}

function showMenu() {
  let menu = document.getElementById("menu");

  if (menu.classList.contains("hidden")) {
    // show with animation
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.remove("translate-x-full");
      menu.classList.add("translate-x-0");
    }, 10); // slight delay so transition triggers
  } else {
    // hide with animation
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");

    // wait for animation to finish before hiding completely
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 500); // match duration-500
  }
}

 // Show flash alert on page load
 window.addEventListener("load", () => {
  const alertBox = document.getElementById("flashAlert");
  setTimeout(() => { alertBox.classList.add("show"); }, 500);
});

// Close alert
function closeAlert() {
  document.getElementById("flashAlert").style.top = "-100px";
}

function navigateToSecond() {
// Scroll to the element with the id 'second'
document.querySelector('#second').scrollIntoView({
behavior: 'smooth'
});
}

AOS.init();


$(document).ready(function(){
    $('.slick-carousel').slick({
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      autoplay: true, // Optional: Auto play slides
      autoplaySpeed: 3000 // Optional: Set auto play speed in milliseconds
    });
  });


  function backToTop() {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function toggleBackToTopButton() {
    var button = document.getElementById('backToTopBtn');
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        // Show the button and add the fade-in class
        button.style.display = 'block';
        button.classList.remove('fade-out');
        button.classList.add('fade-in');
    } else {
        // Add the fade-out class
        button.classList.remove('fade-in');
        button.classList.add('fade-out');
    }
}


  // Add an event listener to handle scrolling and update button visibility
  window.onscroll = function () {
    toggleBackToTopButton();
  };

  const scrollers = document.querySelectorAll(".scroller");

  // If a user hasn't opted in for reduced motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  
  function addAnimation() {
    scrollers.forEach((scroller) => {
      // Add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it, add aria-hidden, and append it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
  
      // Add event listeners for hover
      scroller.addEventListener("mouseover", () => {
        pauseAnimation(scroller);
      });
  
      scroller.addEventListener("mouseout", () => {
        resumeAnimation(scroller);
      });
    });
  }
  
  function pauseAnimation(scroller) {
    const scrollerInner = scroller.querySelector(".scroller__inner");
    scrollerInner.style.animationPlayState = "paused";
  }
  
  function resumeAnimation(scroller) {
    const scrollerInner = scroller.querySelector(".scroller__inner");
    scrollerInner.style.animationPlayState = "running";
  }


