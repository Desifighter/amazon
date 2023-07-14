var source = [];
source.push(
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/MFD/MFD-July-hero-PCskin._CB600958145_.jpg"
);
source.push(
  "https://images-eu.ssl-images-amazon.com/images/G/31/vendorcentral/supporthub/trainingCourses/learningPaths/5300-Kitchen---Water-bottles--Lunch-box--hero-v2-3000-x-1200-_Under_1._CB601243436_.jpg"
);

source.push(
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
);

source.push(
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/MFD/Unrec/Jewelry/3000._CB601232246_.jpg"
);

// source.push(
//   "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/SVD/July/Hero/PC_tall_Hero_SVD_UNREC_BOB_3000x1200._CB601321325_.jpg"
// );

var imgNum = 0;
setInterval(function() {
    document.querySelector("#slide1").setAttribute("src",source[imgNum]);
    imgNum++;

    if (imgNum == source.length) {
        imgNum = 0;
    }
},5000);

document.getElementById("btn1").addEventListener("click", function () {
  document.querySelector(".pic-lab ul").scrollLeft -= 280;
});
document.getElementById("btn2").addEventListener("click", function () {
  document.querySelector(".pic-lab ul").scrollLeft += 280;
});