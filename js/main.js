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

});


/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$ functionality header $$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// jQuery
$(() => {

    /********************** header fixed feture **********************/

    // heigte section whene scrolling show navbar
    const heightShowNavbar = $("#services").offset().top;

    // function hide & show navbar
    const hideShowHeader = () => {
        // scroll vertical page
        const scrollingVertical = $(window).scrollTop();

        // whene navbar skips header section
        if (scrollingVertical >= heightShowNavbar) {

            // show navbar
            $(".navbar").addClass("scrolling-nav");

        } else {

            // hide navbar
            $(".navbar").removeClass("scrolling-nav");
        }
    }

    // window on scroll
    $(window).on("scroll", () => {
        hideShowHeader();
    })

    //run function after window loaded
    hideShowHeader();

    /********************** scroll bottom button **********************/

    // when button scroll bottom click
    $(".scroll-bottom").click( () => {
        // scroling t0 service section
        $("html, body").animate({
            scrollTop: heightShowNavbar
        })
    })
});


/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$ functionality portolio $$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// jQuery
$(() => {
    // categories links and projects
    const categories = $(".portfolio .categories li");
    const projects = $(".portfolio .prodacts section");

    categories.click( function (e) {
        // remove class active from all categories
        categories.removeClass("active");
        // add class active to category clicked
        $(this).addClass("active");

        // when click all categoies
        if ($(this).attr("data-category") === "all") {
            // show all projects
            projects.show(); 
        } else {
            
            // filter projects
            const projectsThisCategory = $(`.portfolio .prodacts section[data-category='${$(this).attr("data-category")}']`);
           
            // hide all projects
            projects.hide();
    
            // show filter projects
            projectsThisCategory.show();
        }
    });  
});


/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$ functionality testimonials $$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/

// jQuery
$(() => {
    const nextButton = $(".testimonials .pagination .next");
    const prevButton = $(".testimonials .pagination .prev");
    const bults = $(".testimonials .pagination ul li");
    const bultActive = $(".testimonials .pagination ul li.active");

    // click bults function
    bults.click( function () {
        // remove class active from all bults
        bults.removeClass("active");
        // add class active to bults clicked
        $(this).addClass("active");
    })

    nextButton.click( () => {
        const bultActive = $(".testimonials .pagination ul li.active");
        // remove class active from active bults
        bultActive.removeClass("active")
        // add class active
        bultActive.next().addClass("active")
    })

    prevButton.click( () => {
        const bultActive = $(".testimonials .pagination ul li.active");
        // remove class active from active bults
        bultActive.removeClass("active")
        // add class active
        bultActive.prev().addClass("active")
    })
});



