(function(){
  'use strict';
  // DOM 선택하기
  var menuItems = document.querySelectorAll('.menu-item');
  var boardTabs = document.querySelectorAll('.board-tab');
  var boardTabPanels = document.querySelectorAll('.board-tab-panel');

  // 메인 메뉴 제어하기
  for(var i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener('click', function(e){
      // 기본 이벤트 제거 (a 요소를 사용할 경우 필요)
      e.preventDefault();

      // 메뉴 버튼의 부모 요소에 is-active 클래스 제거
      for (var i = 0; i < menuItems.length; i++) {
        if(!menuItems[i].classList.contains('is-active')){
          continue;
        }
        menuItems[i].classList.remove('is-active');
      }

      // 메뉴 버튼의 부모 요소에 is-active 클래스 추가
      e.target.parentElement.classList.add('is-active');
    });
  }


  // 탭 제어하기
  for(var i = 0; i < boardTabs.length; i++){
    // 탭 요소에 동적으로 tabindex="0" 추가
    boardTabs[i].setAttribute('tabindex', '0');
    // 탭 요소에 클릭 이벤트 연결
    boardTabs[i].addEventListener('click', handleTab);

    // 탭 요소에 키 이벤트 연결 (Enter, Space만 동작하도록 설정)
    boardTabs[i].addEventListener('keyup', function(e){
      if(!(e.keyCode === 13 || e.keyCode === 32)){
        return;
      }
      handleTab(e);
    });
  }

  // 탭 선택 시 부모 요소의 클래스 제거 및 추가하는 함수
  function handleTab(e){
    // 기본 이벤트 제거 (a 요소를 사용할 경우 필요)
    e.preventDefault();

    // 탭의 부모 요소에 is-select 클래스 제거
    for (var i = 0; i < boardTabs.length; i++) {
      if(!boardTabs[i].parentElement.classList.contains('is-select')){
        continue;
      }
      boardTabs[i].parentElement.classList.remove('is-select');
    }

    // 탭의 부모 요소에 is-select 클래스 추가
    e.target.parentElement.classList.add('is-select');
  }
})();


