function myFunction() {
    // Base code from: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
    var navlinks = document.getElementById("navlinks");
    var burger = document.getElementById("BurgerIcon");
    var close = document.getElementById("CloseMenuIcon");
    var main = document.getElementById('mainBody');
    var footer = document.getElementById('footer')
    var mobileNavLogo = document.getElementById('NavLogo')



    if (navlinks.style.display === "flex") {
        navlinks.style.display = "none";
        burger.style.display = 'block';
        close.style.display = 'none';
        main.style.display = 'flex';
        footer.style.display = 'block';
        mobileNavLogo.style.display = 'block'


    } else {
        navlinks.style.display = "flex";
        burger.style.display = "none";
        close.style.display = "block";
        main.style.display = 'none';
        footer.style.display = 'none';
        mobileNavLogo.style.display = 'none'


    }

}

document.addEventListener("adobe_dc_view_sdk.ready", function(){ 
    var adobeDCView = new AdobeDC.View({clientId: "a6fbbfe327884c68b99c32062e40e1eb", divId: "adobe-dc-view"});
    adobeDCView.previewFile({
        content:{location: {url: "https://orville-mo-he.github.io/MobileView/assets/Writing/BGReport.pdf"}},
        metaData:{fileName: "Bodea Brochure.pdf"}
    }, {});
});




window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var h = window.innerHeight
    var top = document.getElementById("NavAid")

    if (document.body.scrollTop > h/3 || document.documentElement.scrollTop > h/3) {
      top.style.display = "flex";
    } else {
      top.style.display = "none";
    }
  }