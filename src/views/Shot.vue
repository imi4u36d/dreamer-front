<script lang="ts">
import {defineComponent} from 'vue'
import {create} from 'exif-parser';
import html2canvas from 'html2canvas';

export default defineComponent({
  name: "Shot",
  data() {
    return {
      previewUrl: '',
      camera_info: '',
      iso_info: '',
      aperture_info: '',
      focal_length_info: '',
      lens_info: '',
      shutter_speed_info: '',
      imageUrl: '/img/order/icon_code.png'
    };
  },
  methods: {
    saveAsImage() {
      const content = this.$refs.content;

      html2canvas(content).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'new_image.png'; // 下载的文件名
        link.click();
      });
    }
    ,
    handleFileChange(event) {
      const file = event.target.files[0]; // Get the selected image file from the user

      if (file) {
        this.previewUrl = URL.createObjectURL(file);
      } else {
        this.previewUrl = '';
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;

        // Parse EXIF data using exif-parser
        const parser = create(imageData);
        const result = parser.parse();

        console.log(result.tags); // Output the parsed EXIF data

        // 相机品牌
        console.log(result.tags.Make);
        // 相机型号
        this.camera_info = result.tags.Model;
        // iso信息
        this.iso_info = result.tags.ISO;
        // 光圈信息
        this.aperture_info = "F" + result.tags.FNumber;
        // 焦距信息
        this.focal_length_info = result.tags.FocalLength;
        // 镜头信息
        this.lens_info = result.tags.LensModel;
        // 快门速度
        this.shutter_speed_info = result.tags.ExposureTime + "s";
      };

      reader.readAsArrayBuffer(file);
    }
  }
})
</script>

<template>
  <div class="shot">
    <div class="inputArea">
      <input type="file" @change="handleFileChange">
      <button @click="saveAsImage">保存为图片</button>
    </div>

    <div class="img" ref="content">
      <img :src="previewUrl" alt="Preview Image" v-if="previewUrl"/>
      <div class="shotInfo">
        <div class="logo">
          <img src="../assets/img/Sony-logo.png" alt="logo">
        </div>
        <div class="detailInfo">
          <span>
            {{ camera_info }} ｜ {{ lens_info }} ｜ {{ aperture_info }} ｜ ISO{{ iso_info }}
          </span>
          <!--          <span>-->
          <!--          焦距：{{ focal_length_info }}-->
          <!--          </span>-->

          <!--          <span>-->
          <!--          快门：{{ shutter_speed_info }}-->
          <!--          </span>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.shot {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.inputArea {
  margin-bottom: 50px;
}

.img {
  width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.shotInfo {
  width: 500px;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.logo {
  width: 20%;
  height: 100%;
}

.logo img {
  width: 100%;
  height: 100%;
}

.detailInfo {
  width: 100%;
  display: flex;
  font-size: 0.5rem;
  justify-content: end;
  align-items: center;
}
</style>
