$( document ).ready(function() {
  // DOM 선택 후 변수에 할당
  var menuItems= $('.menu-item');
  var boardTabs = $('.board-tab');
  var boardTabPanels = $('.board-tab-panel');

  // 클릭 시 메인 메뉴 제어
  menuItems.on('click', function(){
    menuItems.removeClass('is-active')
    $(this).addClass('is-active');
  });

  // 탭 요소에 키보드 포커스를 받을 수 있도록 동적으로 tabindex 속성 추가
  boardTabs.attr('tabindex', '0');

  // 탭 클릭이나 엔터 및 스페이스 키를 눌렀을 때 제어
  boardTabs.on('click keyup', function(e){
    e.preventDefault();
    if(e.keyCode === 13 || e.type === 'click'){
      boardTabPanels.removeClass('is-select');
      $(this).parent().addClass('is-select');
    }
  });
});