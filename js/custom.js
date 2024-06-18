$(function(){
    // Include html files
    // $('.gnb-include').load('/include/gnb.html');
    // $('.main-header-include').load('/include/main_header.html');
    // $('.goods-detail-header-include').load('/include/goods_detail_header.html');
    
    includeHTML();

    // Category Accordian
    $('.category-accordian .detail').eq(0).show();
    $('.category-accordian .title').click(function(){            
        $(this).next().stop().slideToggle();
        $(this).siblings('.category-accordian .title').next().stop().slideUp();

        $(this).addClass('active');
        $(this).siblings('.category-accordian .title').removeClass('active');
    });

    // Recent Search Result
    $('.search-recent .btn-clear').click(function(){
        $(this).parent().hide();
    });
    $('.search-recent .btn-all-clear').click(function(){
        $('.search-recent .item').hide();
    });

    // Cart Items
    // $('.cart-content .btn-all-clear').click(function(){
    //     $('.cart-item').hide();
    // });
    // $('.cart-content .btn-clear').click(function(){
    //     $(this).parents('.cart-item').hide();
    // });

    // Cart Item Empty
    $('.cart-content .btn-all-clear').click(function(){
        $('.cart-item').remove();
        if($('.cart-item').length == 0){
            $('.cart-item-empty').show();
            $('.cart-items-check-all').hide();
            $('.cart-items-summary').hide();
            $('.btn-primary.btn-order').hide();
        }
    });
    $('.cart-content .btn-clear').click(function(){
        $(this).parent().parent().remove();
        if($('.cart-item').length == 0){
            $('.cart-item-empty').show();
            $('.cart-items-check-all').hide();
            $('.cart-items-summary').hide();
            $('.btn-primary.btn-order').hide();
        }
    });

    // Cart Check All
    $('.cart-check-all').click(function(){
        $('.cart-chk').prop('checked', this.checked);
    });

    // Front Slider
    $('.front-slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // Goods Suggestion Slider
    $('.goods-suggestion-items').slick({
        slidesToShow: 3,
        slidesToScroll: 2
    });

    // Wish
    $('.wish').click(function(){
        $(this).toggleClass('active');
    });

    // Front Footer
    $('.btn-view-more').click(function(){
        $('.company-info-more').show();
    });

    // Goods Detail Slider
    $('.goods-detail-slider').slick({
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1
    });

    // Goods Accordian
    $('.goods-accordian .detail').eq(0).show();
    $('.goods-accordian .title').click(function(){
        $(this).toggleClass('active');
        $(this).next('.goods-accordian .detail').toggle();
    });

    // Goods Order Info
    $('.btn-order-choice').click(function(){
        $('.goods-order-choice').hide();
        $('.goods-order-final').slideDown(250);
        $('.overlay-fold').show();
    });
    $('.btn-fold, .overlay-fold').click(function(){
        $('.goods-order-choice').show();
        $('.goods-order-final').slideUp();
        $('.overlay-fold').hide();
    });

    



})

