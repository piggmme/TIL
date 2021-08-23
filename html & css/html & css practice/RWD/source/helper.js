/* -----------------------------------------------------
 * DOM 선택 헬퍼 함수 */

export function els(selector, context) {
  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
  context = !context ? document : context.nodeType === 1 ? context : el(String(context));
  return context.querySelectorAll(selector);
}

export function el(selector, context) {
  if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
  context = !context ? document : context.nodeType === 1 ? context : el(String(context));
  return context.querySelector(selector);
}