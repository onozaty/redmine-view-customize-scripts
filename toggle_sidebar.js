$(function() {

  $('#content')
    .css({
      'width': 'auto',
      'padding-right': '20px'
    });

  var sidebar = $('#sidebar');
  var sidebarBaseHeight = sidebar.height();
  var sidebarBaseWidth = sidebar.width();
  var sidebarBaseOffsetTop = sidebar.offset().top;

  var toggleFlag = true;

  sidebar
    .css({
      'background-color': '#EEEEEE',
      'border': '1px solid #DDDDDD',
      'padding': '5px',
      'position': 'absolute',
      'right': '0',
      'width': '12px',
      'height': '12px',
      'overflow': 'hidden'
    })
    .prepend(
      $('<a href="#">&nbsp;↓&nbsp;</a>')
        .css({
          'position': 'absolute',
          'font-weight': 'bold',
          'font-size': '12px',
          'text-decoration': 'none',
          'top': '2px',
          'right': '0',
          'border-bottom': '2px solid'
        })
        .click(function(event) {
          if (toggleFlag) {
            sidebar.stop().animate({
              'padding': '5px 5px 15px 15px',
              'width': sidebarBaseWidth,
              'height': sidebarBaseHeight
            }, 0);
            $(this)
              .css({
                'border-top': '2px solid',
                'border-bottom': ''
              })
              .html('&nbsp;↑&nbsp;');
          } else {
            sidebar.stop().animate({
              'padding': '5px',
              'width': '12px',
              'height': '12px'
            }, 0);
            $(this)
              .css({
                'border-top': '',
                'border-bottom': '2px solid'
              })
              .html('&nbsp;↓&nbsp;');
          }

          toggleFlag = !toggleFlag;
          event.preventDefault();
        })
    );

  var lastWindowScrollTop = $(window).scrollTop();
  var onScroll = function() {

    var windowScrollTop = $(window).scrollTop();
    var isUp = lastWindowScrollTop > windowScrollTop;
    lastWindowScrollTop = windowScrollTop;

    if (windowScrollTop > sidebarBaseOffsetTop) {

      var windowHeight = $(window).height();
      var sidebarMerginTop = parseInt(sidebar.css('margin-top').replace(/px$/,'') || '0');
      var sidebarOuterHeight = sidebar.outerHeight();
      var adjustMerginTop = windowScrollTop - sidebarBaseOffsetTop;

      if (sidebarOuterHeight < windowHeight) {
        // サイドバーがウインドウサイズより小さい場合
        // 先頭位置にあわせて調整
        sidebar.css('margin-top', adjustMerginTop + 'px');
        return;
      }

      if (isUp) {
        // 上にスクロールした場合、サイドバーの先頭位置にあわせて調整
        if (adjustMerginTop < sidebarMerginTop) {
          sidebar.css('margin-top', adjustMerginTop + 'px');
        }
      } else {
        // 下にスクロールした場合、サイドバーの末尾位置にあわせて調整
        var windowBottomPosition = windowHeight + windowScrollTop;
        var sidebarBottomPosition = $('#sidebar').offset().top + sidebarOuterHeight;
        if (windowBottomPosition > sidebarBottomPosition) {
          sidebar.css('margin-top', (windowBottomPosition - sidebarBaseOffsetTop - sidebarOuterHeight) + 'px');
        }
      }
    } else {
      sidebar.css('margin-top', '');
    }
  }

  $(window).scroll(onScroll);
  onScroll();
});
