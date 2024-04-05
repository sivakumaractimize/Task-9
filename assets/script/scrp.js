
function data(status) {
  const cardsContainer = document.getElementById("card");
  var jsondata = JSON.parse(cardData);
  let htmlContent = "";
  let btn="";
  let percent="";
  jsondata.map((item) => {
    if (item.status === status) {
      if (status === "Available") {
        document.getElementById("productHeading").innerHTML = "Available Items";
        btn ='<button class="btn btn-success">Available</button>';
       }
      if (status === "Upcoming") {
        document.getElementById("productHeading").innerHTML = "Upcoming Items";
        btn ='<button class="btn btn-warning">Upcoming</button>';
      }
      if (status === "Missed") {
        document.getElementById("productHeading").innerHTML = "Missed Items";
        btn ='<button class="btn btn-danger">Missed</button>';
        
      }
      function percentage(OriginalPrice,OfferPrice){
      percent=Math.ceil((OriginalPrice-OfferPrice)/OriginalPrice*100);
      return percent;
      }


      let starRatingHTML = "";
      for (let i = 1; i <= 5; i++) {
        if (i <= item.rate) {
          starRatingHTML += '<span><img src="./assets/images/star.png" alt="" id="star"></span>';
        } else {
          starRatingHTML += ' <span><img src="./assets/images/star1.png" alt="" id="eStar"></span>';
        }
      }

     

  htmlContent += `
  <div class="swiper-slide">
    <div class="col">
      <div class="card border-0">
        <img src="${item.img}" class="card-img-top" alt="..." >
        <div class="card-body border-0 bg-light text-center">
          <h5 class="card-title">${item.name}</h5>
          <p>&#x20B9 ${item.disPrice}<strike class="ms-2 text-danger">&#x20B9 ${item.price}</strike ><span class="text-success ms-3 fw-bold">${percentage(item.price,item.disPrice)}%Off</span></p>
           <p class="d-flex justify-content-center" >${starRatingHTML}</p>
          <p>${btn}</p>
        </div>
      </div>
    </div>
  </div>
`;
    }
  });
  cardsContainer.innerHTML = htmlContent;

   // Update Swiper instance with new slides
   swiper.update();

   // Move Swiper to first slide
   swiper.slideTo(0);

}