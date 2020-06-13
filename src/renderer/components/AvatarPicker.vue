<template>
    <div class="avatar-wrapper">
	    <img id="uploaded-avatar" class="profile-pic" src="" v-show="avatarSetted">
	    <div class="upload-button" v-on:click="handleClick">
            <i class="fas fa-user-astronaut fa-5x" v-show="!avatarSetted"></i>
            <i class="fas fa-pen fa-3x edit-icon" v-show="avatarSetted"></i>
	    </div>
	    <input class="file-upload" type="file" accept="image/*" v-on:change="readURL">
    </div>
</template>

<script>
	const electronStorage = require('electron-json-storage');

  	export default {
        name: 'avatar-picker',
        data() {
    		return {
      			avatarSetted: false
    		}
          },
		created() {
			let self = this;
			electronStorage.getMany(['avatar'], function(error, data) {
				if (error) throw error;

				if (Object.keys(data.avatar).length === 0) {
					//console.log('Аватара нет');
					self.avatarSetted = false;
				} else {
                    //console.log('Аватар есть');
                    const image = document.getElementById('uploaded-avatar');
                    image.src = data.avatar.avatar;
                    self.avatarSetted = true;
				}
			});
		},
    	methods: {
		    readURL(e) {
                let input = e.target;
                if (input.files && input.files[0]) {
                    const reader = new FileReader();
                    let self = this;
                    reader.onload = function (e) {
                        const image = document.getElementById('uploaded-avatar');
                        image.src = e.target.result;
                        self.avatarSetted = true;
                        electronStorage.set('avatar', { avatar: e.target.result }, function(error) {
  					        if (error) throw error;
				        });
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            },
            handleClick() {
                document.querySelector(".file-upload").click();
            }
        },
  }
</script>

<style lang="scss" scoped>

    .avatar-wrapper {
        position: relative;
        height: 150px;
        width: 150px;
        margin-bottom: 20px;
        border-radius: 50%;
        overflow: hidden;
        transition: all .3s ease;
        box-shadow: 1px 1px 15px -5px white;
    }
    .avatar-wrapper:hover {
        /*transform: scale(1.05);*/
        cursor: pointer;
    }
    .avatar-wrapper:hover .profile-pic {
        opacity: .5;
    }
    .avatar-wrapper .profile-pic {
        object-fit: cover;
        height: 100%;
        width: 100%;
        transition: all .3s ease;
    }
    .avatar-wrapper .profile-pic:after {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        font-size: 190px;
        background: #ecf0f1;
        text-align: center;
    }
    .avatar-wrapper .upload-button {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .avatar-wrapper .upload-button .fa-arrow-circle-up {
        position: absolute;
        font-size: 234px;
        top: -17px;
        left: 0;
        text-align: center;
        opacity: 0;
        transition: all .3s ease;
        color: #34495e;
    }
    .avatar-wrapper .upload-button:hover .fa-arrow-circle-up {
        opacity: .9;
    }
    .file-upload {
        display: none;
    }
    .edit-icon {
        transition: all .3s ease;
        opacity: 0;
    }
    .upload-button:hover .edit-icon {
        opacity: 1;
    }

</style>