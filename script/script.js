const swiper = new Swiper('.swiper', {
    autoplay: 
    {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    simulateTouch: false,
  });


  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }else{
        change.target.classList.remove('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.photo');

  for (let elm of elements) {
    observer.observe(elm);
  }

