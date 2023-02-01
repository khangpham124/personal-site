$(function () {
  'use strict';
  $('.preloader').fadeOut();
  $(".select2").select2();
  jQuery(document).on('click', '.mega-dropdown', function (e) {
    e.stopPropagation();
  });
  // ==============================================================
  // This is for the top header part and sidebar part
  // ==============================================================
  var set = function () {
    var width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
    var topOffset = 55;
    if (width < 1170) {
      $('body').addClass('mini-sidebar');
      $('.navbar-brand span').hide();
      $('.sidebartoggler i').addClass('ti-menu');
    } else {
      $('body').removeClass('mini-sidebar');
      $('.navbar-brand span').show();
    }
    var height =
      (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
    height = height - topOffset;
    if (height < 1) height = 1;
    if (height > topOffset) {
      $('.page-wrapper').css('min-height', height + 'px');
    }
  };
  $(window).ready(set);
  $(window).on('resize', set);
  // ==============================================================
  // Theme options
  // ==============================================================
  $('.sidebartoggler').on('click', function () {
    if ($('body').hasClass('mini-sidebar')) {
      $('body').trigger('resize');
      $('body').removeClass('mini-sidebar');
      $('.navbar-brand span').show();
    } else {
      $('body').trigger('resize');
      $('body').addClass('mini-sidebar');
      $('.navbar-brand span').hide();
    }
  });
  // this is for close icon when navigation open in mobile view
  $('.nav-toggler').click(function () {
    $('body').toggleClass('show-sidebar');
    $('.nav-toggler i').toggleClass('ti-menu');
    $('.nav-toggler i').addClass('ti-close');
  });
  $('.search-box a, .search-box .app-search .srh-btn').on('click', function () {
    $('.app-search').toggle(200);
  });
  // ==============================================================
  // Right sidebar options
  // ==============================================================
  $('.right-side-toggle').click(function () {
    $('.right-sidebar').slideDown(50);
    $('.right-sidebar').toggleClass('shw-rside');
  });
  // ==============================================================
  // This is for the floating labels
  // ==============================================================
  $('.floating-labels .form-control')
    .on('focus blur', function (e) {
      $(this)
        .parents('.form-group')
        .toggleClass('focused', e.type === 'focus' || this.value.length > 0);
    })
    .trigger('blur');

  // ==============================================================
  //tooltip
  // ==============================================================
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // ==============================================================
  //Popover
  // ==============================================================
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  // ==============================================================
  // Perfact scrollbar
  // ==============================================================
  $(
    '.scroll-sidebar, .right-side-panel, .message-center, .right-sidebar'
  ).perfectScrollbar();
  $('#chat, #msg, #comment, #todo').perfectScrollbar();
  // ==============================================================
  // Resize all elements
  // ==============================================================
  $('body').trigger('resize');
  // ==============================================================
  // To do list
  // ==============================================================
  $('.list-task li label').click(function () {
    $(this).toggleClass('task-done');
  });
  // ==============================================================
  // Collapsable cards
  // ==============================================================
  $('a[data-action="collapse"]').on('click', function (e) {
    e.preventDefault();
    $(this)
      .closest('.card')
      .find('[data-action="collapse"] i')
      .toggleClass('ti-minus ti-plus');
    $(this).closest('.card').children('.card-body').collapse('toggle');
  });
  // Toggle fullscreen
  $('a[data-action="expand"]').on('click', function (e) {
    e.preventDefault();
    $(this)
      .closest('.card')
      .find('[data-action="expand"] i')
      .toggleClass('mdi-arrow-expand mdi-arrow-compress');
    $(this).closest('.card').toggleClass('card-fullscreen');
  });
  // Close Card
  $('a[data-action="close"]').on('click', function () {
    $(this).closest('.card').removeClass().slideUp('fast');
  });
  // ==============================================================
  // Color variation
  // ==============================================================

  var mySkins = [
    'skin-default',
    'skin-green',
    'skin-red',
    'skin-blue',
    'skin-purple',
    'skin-megna',
    'skin-default-dark',
    'skin-green-dark',
    'skin-red-dark',
    'skin-blue-dark',
    'skin-purple-dark',
    'skin-megna-dark'
  ];
  /**
   * Get a prestored setting
   *
   * @param String name Name of of the setting
   * @returns String The value of the setting | null
   */
  function get(name) {
    if (typeof Storage !== 'undefined') {
      return localStorage.getItem(name);
    } else {
      window.alert(
        'Please use a modern browser to properly view this template!'
      );
    }
  }
  /**
   * Store a new settings in the browser
   *
   * @param String name Name of the setting
   * @param String val Value of the setting
   * @returns void
   */
  function store(name, val) {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem(name, val);
    } else {
      window.alert(
        'Please use a modern browser to properly view this template!'
      );
    }
  }

  /**
   * Replaces the old skin with the new skin
   * @param String cls the new skin class
   * @returns Boolean false to prevent link's default action
   */
  function changeSkin(cls) {
    $.each(mySkins, function (i) {
      $('body').removeClass(mySkins[i]);
    });
    $('body').addClass(cls);
    store('skin', cls);
    return false;
  }

  function setup() {
    var tmp = get('skin');
    if (tmp && $.inArray(tmp, mySkins)) changeSkin(tmp);
    // Add the change skin listener
    $('[data-skin]').on('click', function (e) {
      if ($(this).hasClass('knob')) return;
      e.preventDefault();
      changeSkin($(this).data('skin'));
    });
  }
  setup();
  $('#themecolors').on('click', 'a', function () {
    $('#themecolors li a').removeClass('working'), $(this).addClass('working');
  });

  // For Custom File Input
  $('.custom-file-input').on('change', function () {
    //get the file name
    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
  });

  $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	$('#image-popups').magnificPopup({
		  delegate: 'a',
		  type: 'image',
		  removalDelay: 500, //delay removal by X to allow out-animation
		  callbacks: {
		    beforeOpen: function() {
		      // just a hack that adds mfp-anim class to markup 
		       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
		       this.st.mainClass = this.st.el.attr('data-effect');
		    }
		  },
		  closeOnContentClick: true,
		  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
		});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.simple-ajax-popup-align-top').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.simple-ajax-popup').magnificPopup({
		type: 'ajax'
  });

  $('.cb-value').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.cb-value').is(':checked')) {
      $(mainParent).addClass('active');
    } else {
      $(mainParent).removeClass('active');
    }
  
  })
  
});
