  const myCarousel = document.querySelector('#heroCarousel')
  const carousel = new bootstrap.Carousel(myCarousel, {
    interval: 4000,
    ride: 'carousel',
    pause: false
  })


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCount();
});

