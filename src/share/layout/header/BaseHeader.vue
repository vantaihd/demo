<template>
  <div class="flex justify-end items-center h-full">
    <div class="w-[150px] h-full flex justify-center items-center">
      <popup-component :actionType="'hover'">
        <div
          class="bg-blue-300 w-[48px] h-[48px] rounded-[30px] cursor-pointer"
        >
          <img src="@/assets/images/avatar.jpeg" alt="user-avatar" />
        </div>
      </popup-component>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>
