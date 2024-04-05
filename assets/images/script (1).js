var swiper;
function data(status) {
  const cardsContainer = document.getElementById("cards-container");
  var jsondata = JSON.parse(cardData);
  let htmlContent = "";
  let btn="";
  let percent="";
  jsondata.map((item) => {
    if (item.status === status) {
      if (status === "Available") {
        document.getElementById("heading").innerHTML = "Available Items";
        btn ='<button class="btn btn-success">Available</button>';
       }
      if (status === "Upcoming") {
        document.getElementById("heading").innerHTML = "Upcoming Items";
        btn ='<button class="btn btn-warning">Upcoming</button>';
      }
      if (status === "Missed") {
        document.getElementById("heading").innerHTML = "Missed Items";
        btn ='<button class="btn btn-danger">Missed</button>';
        
      }
      function percentage(OriginalPrice,OfferPrice){
      percent=Math.ceil((OriginalPrice-OfferPrice)/OriginalPrice*100);
      return percent;
      }
     let starRatingHTML = "";
      for (let i = 1; i <= 5; i++) {
        if (i <= item.rating) {
          starRatingHTML += '<span class="fa fa-star checked"></span>';
        } else {
          starRatingHTML += '<span class="fa fa-star"></span>';
        }
      }
     

  htmlContent += `
  <div class="swiper-slide">
    <div class="col">
      <div class="card border-0">
        <img src="${item.imageSrc}" class="card-img-top" alt="...">
        <div class="card-body border-0 bg-light text-center">
          <h5 class="card-title">${item.title}</h5>
          <p>&#x20B9 ${item.OfferPrice}<strike class="ms-2 text-danger">&#x20B9 ${item.OriginalPrice}</strike ><span class="text-success ms-3 fw-bold">${percentage(item.OriginalPrice,item.OfferPrice)}%Off</span></p>
          <p>${starRatingHTML}</p>
          <p>${btn}</p>
        </div>
      </div>
    </div>
  </div>
`;
    }
  });
  cardsContainer.innerHTML = htmlContent;
 
  if (swiper) {
    swiper.destroy(true, true);
  }
  changeSwiper();
}
function changeSwiper() {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });
}

