$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');
    // 要素のフェードイン・フェードアウトを切り替えるメソッド。
    // #sp-menuが開いたときに、.fadeToggle()が処理されるように設定。
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});