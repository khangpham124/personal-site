$(function () {
  // $(".upload-image-set-bg").on("change", function(event) {
  //   src = URL.createObjectURL(event.target.files[0]);
  //   $(this).parent().parent(".view-bg").css("background-image", "url(" + src + ")");
  // });

  // $(".upload-image").on("change", function(event) {
  //   src = URL.createObjectURL(event.target.files[0]);
  //   $(this).parent().next('.source-img').attr('src', src);
  // });

  // $(".js-input-video").on("change", function() {
  //   let src = $(this).val();
  //   let idYT = src.substr(src.length - 11)
  //   let urlYT = 'https://www.youtube.com/embed/'
  //   $(this).parent().prev('iframe').attr('src', urlYT + idYT);
  //   // $(this).fadeOut(200)
  // });

  // $(".js-heading-text").on("change", function() {
  //   let textHead = $(this).val();
  //   console.log(textHead)
  //   $(this).next('.js-heading-text-value').text(textHead)
  // });

  // $('.js-input-type').on("change", function() {
  //   let val = $(this).val();
  //   if(val!='') {
  //     $(this).addClass('no-bg-input');
  //   } else {
  //     $(this).removeClass('no-bg-input');
  //   }
  // });

  // $('.js-rmove').on("click", function() {
  //   $(this).parent().remove()
  // });

  // $('.js-preview').on("click", function() {
  //   $('#designHtml').addClass('previewBlock');
  // });

  // $('.js-close-preview').on("click", function() {
  //   $('#designHtml').removeClass('previewBlock');
  // });

  const FILE_SERVER_API =
    "https://api-gateway.dreamlands.vn/api/gateway/crm/file-uploader";
  const FILE_SERVER = "";
  const uploadToClient = (event) => {
    const i = event.target.files[0];
    let sizeFileUpload = i?.size;
    let typeFileUpload = i?.type;
    let src = URL.createObjectURL(i);
    const imgTpye = ["image/jpeg", "image/png"];
    // console.log(i);
    if (imgTpye.includes(typeFileUpload)) {
      const body = new FormData();
      body.append("file", i);

      axios
        .post(FILE_SERVER_API, body, {
          headers: {
            // Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        })
        .then((response) => {
          // document.getElementById("file_name").innerHTML = i.name;
          return response.data.file
        })
        .catch(function (error) {});
    } else {
      console.log("test");
    }
  };

  $('body').on('change', '.upload-image-set-bg', function(event) {
    const i = event.target.files[0];
    let sizeFileUpload = i?.size;
    let typeFileUpload = i?.type;
    let src = URL.createObjectURL(i);
    const imgTpye = ["image/jpeg", "image/png"];
    if (imgTpye.includes(typeFileUpload)) {
      const body = new FormData();
      body.append("file", i);
      let iconLoading = '<i class="fa fa-spinner fa-spin"></i>';
      $(this).parent().prev('.js-loading-icon').html(iconLoading);
      axios
        .post(FILE_SERVER_API, body, {
          headers: {
            // Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        })
        .then((response) => {
          let iconCamera = '<i class="fa fa-camera" aria-hidden="true"></i>';
          $(this).parent().prev('.js-loading-icon').html(iconCamera);
          let src = FILE_SERVER + response.data.file
          $(this).parent().parent(".view-bg").css("background-image", "url(" + src + ")");
          $(this).parent().next('.js-zoom-image').attr('href', src);
        })
        .catch(function (error) {});
    } else {
      console.log("test");
    }
  });

  $('body').on('change', '.upload-image', function() {
    const i = event.target.files[0];
    let sizeFileUpload = i?.size;
    let typeFileUpload = i?.type;
    let src = URL.createObjectURL(i);
    const imgTpye = ["image/jpeg", "image/png"];
    if (imgTpye.includes(typeFileUpload)) {
      const body = new FormData();
      body.append("file", i);
      let iconLoading = '<i class="fa fa-spinner fa-spin"></i>';
      $(this).parent().prev('.js-loading-icon').html(iconLoading);
      axios
        .post(FILE_SERVER_API, body, {
          headers: {
            // Authorization: `Bearer ${Cookies.get("access_token")}`,
          },
        })
        .then((response) => {
          let iconCamera = '<i class="fa fa-camera" aria-hidden="true"></i>';
          $(this).parent().prev('.js-loading-icon').html(iconCamera);
          let src = FILE_SERVER + response.data.file
          $(this).parent().next('.source-img').attr('src', src);
          let dataClone = $(this).parent().attr('data-clone');
          let itemClone = `<li>
          <img src="${src}" />
          </li>`;
          if(dataClone.length > 0) {
            $('.slider-nav').append(itemClone)
          }
        })
        .catch(function (error) {});
    } else {
      console.log("test");
    }
  });

  $('body').on('change', '.js-input-video', function() {
    let src = $(this).val();
    let idYT = src.substr(src.length - 11)
    let urlYT = 'https://www.youtube.com/embed/'
    $(this).parent().prev('iframe').attr('src', urlYT + idYT);
    $('.play-video').attr('data-url',urlYT + idYT)
  });

  $('body').on('change', '.js-heading-text', function() {
    let textHead = $(this).val();
    $(this).attr('value',textHead)
    $(this).text(textHead);
    $(this).next('.js-heading-text-value').text(textHead)
  });

  $('body').on('change', '.js-heading-link', function() {
    let textHead = $(this).val();
    $(this).attr('value',textHead)
    $(this).text(textHead);
    $(this).next('.js-heading-link-value').find('.js-heading-link-href').text(textHead)
  });

  $('body').on('change', '.js-heading-link', function() {
    let link = $(this).val();
    $(this).prev('.js-heading-link-value').find('.js-heading-link-href').attr('href',link);
  });
  
  $('body').on('change', '.js-input-type', function() {
    let val = $(this).val();
    if(val!='') {
      $(this).addClass('no-bg-input');
    } else {
      $(this).removeClass('no-bg-input');
    }
  });

  $('body').on('change', '#desc-ultility', function() {
    let val = $(this).val();
    // if(val.length > 200) {
    //   $('.js-read-more').addClass('showButton')
    // }
    $('#ultility-content').text(val);
  });



  

  $('body').on('click', '.js-rmove', function() {
    $(this).parent().remove();
    $(this).parent().parent().parent('.slider-room-item').remove();
  });

  $('body').on('click', '.js-rmove-silde', function() {
    $(this).parent().parent().parent('.js-slider-rmvable').remove();
  });
  
  $('body').on('click', '.js-preview', function() {  
    $('#designHtml').addClass('previewBlock');
  });

  $('body').on('click', '.js-read-more', function() {  
    $('.popup').show();
    $('.onepage-pagination').hide();
  });

  $('body').on('click', '.js-close-popup', function() {  
    $('.popup').hide();
    $('.onepage-pagination').show();
  });

  const sliderNav =  $('.slider-nav li').length;

  $('body').on('click', '.js-preview-modern', function() {  
    $('.wrapper-scroll').addClass('previewBlockScroll');
    // $('#designHtml').addClass('main-scroll onepage-wrapper');
    let descUltility =  $('#desc-ultility').val();
    if(descUltility.length > 150) {
      $('.js-read-more').addClass('showButton')
    }
    
    $('.slider-room').slick({
      autoplay: false,
      // fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    });

    $('.slide-image').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav'
    });
  
  
    $('.slider-nav').slick({
      slidesToShow: sliderNav,
      slidesToScroll: 1,
      asNavFor: '.slide-image',
      focusOnSelect: true,
      arrows: false,
    });

    $(".main-scroll").onepage_scroll({
      sectionContainer: "section",
      responsiveFallback: 600,
      loop: false
    });

    let arrayTitle = [];
    $('.js-component').each(function( index ) {
      let elm  = $(this);
      let titleText = elm.find('.toggle-bar').find('.js-heading-text').val();
      console.log(titleText)
      arrayTitle.push(titleText)
    });

    console.log($('#title-block-4').val())

    $('.onepage-pagination li').each(function( index ) {
      let indexItem = $(this).find('a').attr('data-index');
      let textTitle = arrayTitle[index]
      $(this).find('a').html(`<span>0${index + 1}</span>${textTitle}`);
    });

  });
  
  $('body').on('click', '.js-close-preview', function() {  
    $('#designHtml').removeClass('previewBlock');
    $('#designHtml').parent('.wrapper-scroll').removeClass('previewBlockScroll');
    $(".main-scroll").onepage_scroll({
      sectionContainer: "em",
      responsiveFallback: 600,
      loop: false
    });
    $('.slider-room').slick('unslick');
    $('.slide-image').slick('unslick');
    $('.slider-nav').slick('unslick');
    $('.onepage-wrapper').css('transform','none');
  });

  $('body').on('click', '.slide-image-item', function() {  
    let viewImg = $(this).find('.source-img').attr('src');
    $("#block-privew-frame").attr('src',viewImg)
    $("#block-privew-frame").attr('src',viewImg)
    $('#image-popup-vertical-fit').attr('href',viewImg)
  });

  $('body').on('click', '.play-video', function() { 
    let stopUrl = $(this).attr('data-url');
    if(!$(this).hasClass('play')) {
      $("#youtube-player")[0].src += "?autoplay=1";
      $(this).addClass('play');
    } else {
      $("#youtube-player")[0].src = stopUrl;
      $(this).removeClass('play');
    }
  });

  $('body').on('change, blur , keyup', '.js-text-length', function() { 
    let valueInput = $(this).val();
    if(valueInput.length > 100) {
      $(this).next('.invalid-feedback').text('Max length is 100 characters.').addClass('has-err');
    } else {
      $(this).next('.invalid-feedback').text('');
    }
  });

  $('body').on('change, blur', '.js-text-email', function() { 
    let valueInput = $(this).val();
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (!testEmail.test(valueInput)) {
      $(this).next('.invalid-feedback').text('Email is invalid. ').addClass('has-err');
    } else {
      $(this).next('.invalid-feedback').text('');
    }
  });

  $('body').on('change, blur, keyup', '.js-text-number', function() { 
    let valueInput = $(this).val();
    if(!$.isNumeric(valueInput)) {
      $(this).next('.invalid-feedback').text('Must be numeric').addClass('has-err');
    } else {
      $(this).next('.invalid-feedback').text('');
    }
  });

  $('body').on('change, blur , keyup', '.js-area-length', function() { 
    let valueInput = $(this).val();
    if(valueInput.length > 300) {
      $(this).next('.invalid-feedback').text('Max length is 300 characters.').addClass('has-err');
    } else {
      $(this).next('.invalid-feedback').text('');
    }
  });
  
  // $('.draggable-element').arrangeable();
  $('.js-component').arrangeable({dragSelector: '.drag-area'});

  $('body').on('click', '.js-toggle-bar', function() {
    $(this).next('.hide-toggle').slideToggle(200);
  });

  $('body').on('click', '.js-toggle-bar-multi', function() {
    $(this).next().next('.hide-toggle').slideToggle(200);
  });

  $('body').on('click', '.js-remove-component', function() {
    $(this).parent('.js-component').remove();
    $(".main-scroll").onepage_scroll({
      sectionContainer: "section",
      responsiveFallback: 600,
      loop: false
    });
  });

  $('body').on('click', '.js-expand', function() {
    $('.hide-toggle').slideDown(400);
  });

  $('body').on('click', '.js-collapse', function() {
    $('.hide-toggle').slideUp(400);
  });

  
});
