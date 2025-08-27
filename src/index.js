document.addEventListener("DOMContentLoaded", function () {
    let currentImage = 0;
    const images = document.querySelectorAll("#slideshow img");
    
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextImage() {
        currentImage = (currentImage + 1) % images.length;
        showImage(currentImage);
    }

    setInterval(nextImage, 5000); // Change image every 3.5 seconds
});

function navigateToSecond() {
    // Scroll to the element with the id 'second'
    document.querySelector('#second').scrollIntoView({
      behavior: 'smooth'
    });
  }

  function backToTop() {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  AOS.init({
    duration: 800,         // Set the duration of the animation
    easing: 'ease-in-out', // Set the easing function for a smoother animation
  });

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


  function showMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  }
  

  function viewImage(imagePath) {
    // Create a modal element
    var modal = document.createElement("div");
    modal.classList.add("modal");

    // Create an image element inside the modal
    var modalImage = document.createElement("img");
    modalImage.src = imagePath;
    modalImage.classList.add("modal-content");

    // Append the image to the modal
    modal.appendChild(modalImage);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Add a click event listener to close the modal when clicked outside the image
    modal.addEventListener("click", function () {
        modal.remove();
    });

    // Prevent clicks on the image from closing the modal
    modalImage.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}
