<template>
  <div
    @mouseover="onHandleMouseHover"
    @mouseleave="onHandleMouseLeave"
    ref="target"
  >
    <slot></slot>
    <div
      class="bg-slate-600 h-[120px] w-[140px] absolute"
      :style="styleOfPopup"
    >
      slot
    </div>
  </div>
</template>
<script>
export default {
  name: "PopupComponent",
  props: {
    actionType: {
      type: String,
      default: "hover",
    },
  },
  data() {
    return {
      isShowPopup: false,
      positionEl: {},
    };
  },
  mounted() {
    this.positionEl = this.$refs.target.getBoundingClientRect();
  },
  methods: {
    onHandleMouseHover() {
      if (this.actionType !== "hover") return;
      this.isShowPopup = !this.isShowPopup;
    },
    onHandleMouseLeave() {
      if (this.actionType !== "hover") return;
      this.isShowPopup = !this.isShowPopup;
    },
  },
  computed: {
    styleOfPopup() {
      const { top, height, width, left, right, x, y } = this.positionEl;
      const marginTop = top + height;
      const marginLeft = left - width;
      return {
        top: `${marginTop}px`,
        right: `${y}px`,
      };
    },
  },
};
</script>
