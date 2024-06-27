export const useTestStore = defineStore(
  'test',
  () => {
    const state = reactive({
      text: 'test',
    });

    const setText = (data) => {
      state.text = data;
    };

    return {
      ...toRefs(state),

      setText,
    };
  },
  {
    persist: true,
  },
);
