const toaster = (() => {
  let toasts = [];
  const TOAST_HEIGHT = 100;
  const SHOW_TIME = 3000;

  // 새로운 toast 요소 노드 객체를 생성
  // type toast = {type: string, length: number, message: string}
  const createNewToast = toast => {
    const $newToast = document.createElement('div');
    $newToast.className = `toast toast-${toast.type}`;
    $newToast.innerHTML = `
      <h4 class="toast-heading">${toast.title}</h4>
      <div class="toast-message">
        <svg width="24" height="24">
          <use xlink:href="#${toast.type}" />
        </svg>
        <p>${toast.message}</p>
      </div>
      <a class="close">&times;</a>`;
    return $newToast;
  };

  // 모든 toast 요소의 위치를 설정
  const setPosition = () => {
    toasts.forEach(($toast, i) => {
      $toast.style.bottom = `${i * TOAST_HEIGHT}px`;
    });
  };

  // close button click event handler
  document.body.onclick = e => {
    if (!e.target.matches('.toast > .close')) return;
    toaster.remove(e.target.parentNode);
  };

  return {
    add(toast) {
      // 새로운 toast 요소 노드 객체를 생성해 toasts의 선두에 삽입하고 DOM에 append
      const $newToast = createNewToast(toast);

      // 새로운 toast 요소 노드 객체를 toasts의 선두에 삽입하고 DOM에 append
      toasts = [$newToast, ...toasts];
      setPosition();
      document.body.appendChild($newToast);

      // SHOW_TIME 경과 후에 toast 요소 노드 객체를 제거
      setTimeout(() => this.remove($newToast), SHOW_TIME);
    },
    remove($target) {
      // toast 요소 노드 객체를 toasts에서 제거하고 DOM에서도 제거
      toasts = toasts.filter(toast => toast !== $target);

      // https://stackoverflow.com/questions/36998877/what-is-the-difference-between-remove-and-removechild-method-in-javascript
      // document.body.removeChild($target);
      $target.remove();
      setPosition();
    },
  };
})();

const TOAST_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
};

const createToastAction = (type, title, message) => ({ type, title, message });

export default toaster;
export { TOAST_TYPE, createToastAction };
