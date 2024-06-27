<template>
  <RouterView />
</template>

<script setup>
import { resizeHook } from '@/hooks/resizeHook';
function placeholderPic() {
  const baseFountSize = 16;
  const cw = window.innerWidth;
  const sw = window.screen.width;
  const fontSize = (cw / sw) * baseFountSize;
  const oHtml = document.getElementsByTagName('html')[0];
  oHtml.style.fontSize = fontSize + 'px';
  if (cw > 1920) {
    oHtml.style.fontSize = 15 + 'px';
  }
  if (cw < 800) {
    oHtml.style.fontSize = 7 + 'px';
  }
}
placeholderPic();

resizeHook(placeholderPic);
</script>
