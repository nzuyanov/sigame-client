import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import VueNativeSock from 'vue-native-websocket';
import './assets/css/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
//import '@fortawesome/fontawesome-free/js/all.js';

const SOCKET_URL_DEFAULT = 'wss://sigame.goxash.tk:7000';
const protobuf = require("protobufjs");
const Root  = protobuf.Root;
const Type  = protobuf.Type;
const Field = protobuf.Field;

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueNativeSock, SOCKET_URL_DEFAULT, {
	connectManually: true,
});

/* eslint-disable no-new */
const vm = new Vue({
	components: { App },
	router,
	store,
	template: '<App/>'
}).$mount('#app');


vm.$options.sockets.onmessage = async (event) => {
	console.log(event.data);
	const TestMessage = new Type("Response").add(new Field("avatar", 1, "bytes"));
	let ua = new Uint8Array(event.data);
	let decoded = TestMessage.decode(ua);
	let blob = new Blob([decoded.avatar], {type: 'image/png'});
	console.log(decoded);
	document.getElementById('test_image').src = URL.createObjectURL(blob);
	vm.$disconnect();
};
vm.$options.sockets.onopen = () => {
	vm.$socket.binaryType = 'arraybuffer';
	const TestMessage = new Type("Request").add(new Field("labels", 1, "string", "repeated"));
	const root = new Root().define("test").add(TestMessage);
	const payload = { labels: ['kolyan loh', 'zritel pidor'] };
	const message = TestMessage.create(payload); 
	const buffer = TestMessage.encode(message).finish();

	vm.$socket.send(buffer);
};