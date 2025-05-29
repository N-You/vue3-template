// 对接收的dom元素进行屏幕适配收缩
export const resizeHook = (onResize) => {
  onMounted(async () => {
    window.addEventListener('resize', onResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onResize);
  });
};
