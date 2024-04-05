let demo=JSON.parse(availabe);
      
function avl(){
let res="";
 demo.map((item) =>{
   
   
     res +=`   <div class="swiper-slide text-center"  >
                    <div class="col p-1">
                        <div class="card">
                        <img src="${item.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h3 class="card-title">${item.name}</h3>
                            <p class="card-text"> MRP:&#8377 ${item.price}</p>
                            <div>
                              <span class="cost-price"> &#8377 ${item.disPrice}</span>
                              <span class="selling-price"><del>&#8377 ${item.price}</del></span>
                              <span class="discount">Discount: ${percentage(item.price,item.disPrice)}%</span>
                            </div>

                            <p class="card-text"></p>
                            <a href="#" class="btn btn-primary">Order now</a>
                            </div>
                        </div> 
                    </div>
                </div>`
 

});

document.getElementById("card").innerHTML=res;



} 
      
function upcoming(){
    let upcm=JSON.parse(upcoming);
    let res="";
    upcm.map((item) =>{
       
       
         res +=`   <div class="swiper-slide text-center"  >
                        <div class="col p-1">
                            <div class="card">
                            <img src="${item.img}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h3 class="card-title">${item.name}</h3>
                                <p class="card-text"> MRP:&#8377 ${item.price}</p>
                                <div>
                                  <span class="cost-price"> &#8377 ${item.disPrice}</span>
                                  <span class="selling-price"><del>&#8377 ${item.price}</del></span>
                                  <span class="discount">Discount: ${percentage(item.price,item.disPrice)}%</span>
                                </div>
    
                                <p class="card-text"></p>
                                <a href="#" class="btn btn-primary">Order now</a>
                                </div>
                            </div> 
                        </div>
                    </div>`
     
    
    });
    
    document.getElementById("card").innerHTML=res;
    
    
    
    
    } 
    console.log(upcoming())
   
function percentage(OriginalPrice,OfferPrice){
    percent=Math.ceil((OriginalPrice-OfferPrice)/OriginalPrice*100);
   return percent;
   }





























  




