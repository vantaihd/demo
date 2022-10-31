<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>Oops!</h1>
        <h2>404 - Không tìm thấy trang</h2>
      </div>
      <div class="flex justify-center flex-col gap-[20px] items-center">
        <RouterLink to="/" class="w-[200px]">Về trang chủ</RouterLink>
        <span
          @click="$router.back"
          class="cursor-pointer underline underline-offset-1"
          >Quay lại
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./style.css";
</style>
