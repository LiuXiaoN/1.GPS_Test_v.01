<template>
  <div class="AmapPoint">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo"
      style="height:600px;width: 1000px">
      <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
    </el-amap>

    <div class="toolbar">
      <button type="button" name="button" v-on:click="toggleVisible">toggle first marker</button>
      <button type="button" name="button" v-on:click="changePosition">change position</button>
      <button type="button" name="button" v-on:click="chnageDraggle">change draggle</button>
      <button type="button" name="button" v-on:click="addMarker">add marker</button>
      <button type="button" name="button" v-on:click="removeMarker">remove marker</button>
    </div>
  </div>
</template>

<style>
  .amap-demo {
    height: 300px;
  }
</style>

<script>
  module.exports = {
    name: 'amap-page',
    data() {
      return {
        zoom: 14,
        center: [121.5273285, 31.21515044],
        markers: [
          {
            position: [121.5273285, 31.21515044],
            events: {
              click: () => {
                alert('click marker');
              },
              dragend: (e) => {
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
              }
            },
            visible: true,
            draggable: false,
            template: '<span>1</span>'
          }
        ]
      };
    },
    methods: {
      changePosition() {
        let position = this.markers[0].position;
        this.markers[0].position = [position[0] + 0.002, position[1] - 0.002];
      },
      chnageDraggle() {
        let draggable = this.markers[0].draggable;
        this.markers[0].draggable = !draggable;
      },
      toggleVisible() {
        let visableVar = this.markers[0].visible;
        this.markers[0].visible = !visableVar;
      },
      addMarker() {
        let marker = {
          position: [121.5273285 + (Math.random() - 0.5) * 0.02, 31.21515044 + (Math.random() - 0.5) * 0.02]
        };
        this.markers.push(marker);
      },
      removeMarker() {
        if (!this.markers.length) return;
        this.markers.splice(this.markers.length - 1, 1);
      }
    }
  };
</script>
