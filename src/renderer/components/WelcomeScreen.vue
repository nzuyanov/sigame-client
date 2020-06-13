<template>
  <div class="welcome">
	  <div class="credits">
		  <div>
			<h2 class="credits__title">Управление</h2>
			<p class="credits__text">[F11] — полноэкранный режим</p>
			<h3 class="credits__subtitle">Ведущий</h3>
			<p class="credits__text">[P] — пауза/продолжить</p>
			<p class="credits__text">[S] — суммы игроков</p>
			<p class="credits__text">[SPACE] — пропустить таймер</p>
			<p class="credits__text">[LEFT] — предыдущий раунд</p>
			<p class="credits__text">[RIGHT] — следующий раунд</p>
		  	<h3 class="credits__subtitle">Игрок</h3>
		  	<p class="credits__text">
			<p class="credits__text">[SPACE] — дать ответ</p>
			<p class="credits__text">[Q] — апелляция</p>

			<button v-on:click="test">test</button>
		</div>
		<div class=credits__credits-wrapper>
			<img src="../assets/images/logo.svg" alt="logo">
		  	<p class="credits__credits">
				Nagi & The Last Pride<br>
				2020
			</p>
		</div>
	  </div>
	  <div class="settings">
			<h2 class="settings__title">Своя Игра</h2>
			<avatar-picker></avatar-picker>
			<textarea class="settings__input settings__input_large" type="text" maxlength="35"
				v-on:click="handleInputClicked"
				v-on:change="handleNicknameChanged"
				v-model="nickname"
			></textarea>
			<h3 class="settings__setting-name">Сервер:</h3>
			<textarea class="settings__input settings__input_medium" type="text"
				v-on:change="handleServerChanged"
				v-on:click="handleInputClicked"
				v-model="server"
			></textarea>
			<h3 class="settings__setting-name">Порт:</h3>
			<input class="settings__input settings__input_medium" type="number" min="1001"
				v-on:click="handleInputClicked"
				v-on:change="handlePortChanged"
				v-model="port"
			>
			<button class="settings__button" 
					v-on:click="test2"
				>Играть
			</button>
	  </div>
  </div>
</template>

<script>
	import AvatarPicker from './AvatarPicker';
	const electron = require('electron');
	const electronStorage = require('electron-json-storage');

	const DEFAULT_NICKNAME = 'Ваше имя';
	const DEFAULT_SERVER = 'sigame.goxash.tk';
	const DEFAULT_PORT = 7000;

  	export default {
		name: 'welcome-screen',
		components: {
			AvatarPicker
		},
		data() {
			return {
				nickname: '',
				server: '',
				port: ''
			}
		},
		created() {
			let self = this;
			electronStorage.getMany([ 'nickname', 'server', 'port' ], function(error, data) {
				if (error) throw error;

				if (Object.keys(data.nickname).length === 0) {
					//console.log('Никнейма нет');
					self.nickname = DEFAULT_NICKNAME;
				} else {
					//console.log('Никнейм есть');
					self.nickname = data.nickname.nickname;
				}
				if (Object.keys(data.server).length === 0) {
					//console.log('Сервера нет');
					self.server = DEFAULT_SERVER;
				} else {
					//console.log('Сервер есть');
					self.server = data.server.server;
				}
				if (Object.keys(data.port).length === 0) {
					//console.log('Порта нет');
					self.port = DEFAULT_PORT;
				}  else {
					//console.log('Порт есть');
					self.port = Number(data.port.port);
				}
			});
		},
    	methods: {
			handleNicknameChanged() {
				if (this.nickname === '') {
					this.nickname = DEFAULT_NICKNAME
				}
				electronStorage.set('nickname', { nickname: this.nickname }, function(error) {
  					if (error) throw error;
				});
			},
			handleServerChanged() {
				if (this.server === '') {
					this.server = DEFAULT_SERVER
				}
				electronStorage.set('server', { server: this.server }, function(error) {
  					if (error) throw error;
				});
			},
			handlePortChanged() {
				if (this.port === '') {
					this.port = DEFAULT_PORT
				}
				electronStorage.set('port', { port: this.port }, function(error) {
  					if (error) throw error;
				});
			},
			handleInputClicked(e) {
				e.target.select();
			},



			test() {
				let window = electron.remote.getCurrentWindow();
				if (window.isFullScreen()) {
					window.setFullScreen(false);
				} else {
					window.setFullScreen(true);
				}
			},
			test2() {
				//this.$connect();
			}
		}
  }
</script>