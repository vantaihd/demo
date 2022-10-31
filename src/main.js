import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/base.css";

// component
import BaseLayout from "./share/layout/BaseLayout.vue";
import BaseHeader from "./share/layout/header/BaseHeader.vue";
import BaseMain from "./share/layout/main/BaseMain.vue";
import PopupComponent from "./components/popup/PopupComponent.vue";

const app = createApp(App);

app.component(BaseLayout.name, BaseLayout);
app.component(BaseHeader.name, BaseHeader);
app.component(BaseMain.name, BaseMain);
app.component(PopupComponent.name, PopupComponent);

app.use(router);
app.use(store);
app.mount("#app");
