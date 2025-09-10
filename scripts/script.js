



let touchEvent = null;
if ('ontouchstart' in window || navigator.maxTouchPoints) {
  touchEvent = 'touchstart';
} else {
  touchEvent = 'click';
}
document.querySelectorAll('.member').forEach(member => {
  member.addEventListener(touchEvent, () => {
    document.querySelectorAll('.member').forEach(m => m.classList.remove('active'));
    member.classList.add('active');
  });
});