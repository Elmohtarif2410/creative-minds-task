/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$ functionality style css $$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// jQuery
$(() => {

    /************************ calc landding height ************************/

    //calc navbar Height
    const navbarHeight = $("nav.navbar").innerHeight();
    // landding Section
    const landdingSection = $("header .landding");
    // landding Section height = 100vh - navbar Height 
    landdingSection.css({height: `calc(100vh - ${navbarHeight}px)`});

    
})