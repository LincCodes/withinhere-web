$(function(){"use strict";$(window).on('load',function(event){$('.preloader').delay(500).fadeOut(500);});$(window).on('scroll',function(event){var scroll=$(window).scrollTop();if(scroll<20){$(".navbar-area").removeClass("sticky");}else{$(".navbar-area").addClass("sticky");}});var scrollLink=$('.page-scroll');$(window).scroll(function(){var scrollbarLocation=$(this).scrollTop();scrollLink.each(function(){var sectionOffset=$(this.hash).offset().top-73;if(sectionOffset<=scrollbarLocation){$(this).parent().addClass('active');$(this).parent().siblings().removeClass('active');}});});$(".navbar-nav a").on('click',function(){$(".navbar-collapse").removeClass("show");});$(".navbar-toggler").on('click',function(){$(this).toggleClass("active");});$(".navbar-nav a").on('click',function(){$(".navbar-toggler").removeClass('active');});$('.video-popup').magnificPopup({type:'iframe'});$('.image-popup').magnificPopup({type:'image',gallery:{enabled:true}});$(window).on('scroll',function(event){if($(this).scrollTop()>600){$('.back-to-top').fadeIn(200)}else{$('.back-to-top').fadeOut(200)}});$('.back-to-top').on('click',function(event){event.preventDefault();$('html, body').animate({scrollTop:0,},1500);});jQuery('img.svg').each(function(){var $img=jQuery(this);var imgID=$img.attr('id');var imgClass=$img.attr('class');var imgURL=$img.attr('src');jQuery.get(imgURL,function(data){var $svg=jQuery(data).find('svg');if(typeof imgID!=='undefined'){$svg=$svg.attr('id',imgID);}
if(typeof imgClass!=='undefined'){$svg=$svg.attr('class',imgClass+' replaced-svg');}
$svg=$svg.removeAttr('xmlns:a');$img.replaceWith($svg);},'xml');});new WOW().init();var swiper=new Swiper('.swiper-container',{pagination:{el:'.swiper-pagination',type:'bullets',clickable:true,},speed:1000,effect:'coverflow',loop:true,centeredSlides:true,slidesPerView:'auto',coverflowEffect:{rotate:0,stretch:40,depth:150,modifier:1,slideShadows:false,}});$('.testimonial-content').slick({slidesToShow:1,slidesToScroll:1,arrows:false,fade:true,asNavFor:'.testimonial-author'});$('.testimonial-author').slick({slidesToShow:5,slidesToScroll:1,asNavFor:'.testimonial-content',dots:false,arrows:false,centerMode:true,focusOnSelect:true,centerPadding:"0",responsive:[{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:3}}]});});





async function fetchAirtableTutorData() {
    const url = "https://api.airtable.com/v0/appA8DCBSHKzihk5Q/Tutorials?maxRecords=3&view=Grid%20view";
    const options = {
        headers: {
            "Authorization": "Bearer patjeGuqLi5TpHSbH.6e407b6148fcf2943b6d3345837e63b653314797dbae1427abaa777c97614499"
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        populateTutorialsData(data.records);
    } catch (error) {
        console.error("Error fetching Airtable data:", error);
    }
}

function populateTutorialsData(records) {
    const gridContainer = document.querySelector('#tutor');

    records.forEach(record => {
        const { fields } = record;
        if (!fields.image || !fields.title || !fields.type || !fields.shortdetails) {
            return;
        }

        const imageUrl = fields.image[0].url;
        const title = fields.title;
        const type = fields.type;
        const shortDetails = fields.shortdetails;

        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 col-sm-6';
        colDiv.setAttribute('data-filter', type);

        colDiv.innerHTML = `
            <div class="portfolio-style-three">
                <div class="portfolio-image">
                    <img src="${imageUrl}" alt="image">
                    <div class="portfolio-overlay d-flex align-items-center justify-content-center">
                        <div class="portfolio-content">
                            <div class="portfolio-icon">
                                <a class="image-popup-three glightbox3" href="${imageUrl}">
                                    <i class="lni lni-zoom-in"> </i>
                                </a>
                            </div>
                            <div class="portfolio-icon">
                                <a href="javascript:void(0)">
                                    <i class="lni lni-link"> </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portfolio-text">
                    <h4 class="portfolio-title">
                        <a href="javascript:void(0)">${title}</a>
                    </h4>
                    <p class="text">${shortDetails}</p>
                </div>
            </div>
        `;

        gridContainer.appendChild(colDiv);
    });
}

// Call the function to fetch and populate data
fetchAirtableTutorData();



async function fetchAirtableData() {
    const url = "https://api.airtable.com/v0/apposCuwJaaAkih6b/Blogs?maxRecords=3&view=Grid%20view";
    const options = {
        headers: {
            "Authorization": "Bearer patjeGuqLi5TpHSbH.6e407b6148fcf2943b6d3345837e63b653314797dbae1427abaa777c97614499"
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        populateNews(data.records);
    } catch (error) {
        console.error("Error fetching Airtable data:", error);
    }
}

function populateNews(records) {
    const rowContainer = document.querySelector('#blog');

    records.forEach(record => {
        const { fields } = record;
        if (!fields.image || !fields.title || !fields.shortdetails) {
            return;
        }

        const imageUrl = fields.image[0].url;
        const title = fields.title;
        const shortDetails = fields.shortdetails;
        const author = fields.author;

        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-4 col-md-6 col-12';

        colDiv.innerHTML = `
            <div class="single-news">
                <div class="image">
                    <a href="javascript:void(0)">
                        <img class="thumb" src="${imageUrl}" alt="Blog">
                    </a>
                    <div class="meta-details">
                        <img class="thumb" src="${imageUrl}" alt="Author">
                        <span>BY ${author.toUpperCase()}</span>
                    </div>
                </div>
                <div class="content-body">
                    <h4 class="title">
                        <a href="javascript:void(0)">${title}</a>
                    </h4>
                    <p>${shortDetails}</p>
                </div>
            </div>
        `;

        rowContainer.appendChild(colDiv);
    });
}

// Call the function to fetch and populate data
fetchAirtableData();
