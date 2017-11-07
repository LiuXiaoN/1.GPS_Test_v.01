<template>
  <div class="AmapDoc">

      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
        <el-amap vid="amapDemo" :center="mapCenter" :zoom="zoom" class="amap-demo"
          style="height:600px;width: 1000px">
        <el-amap-marker v-for="marker in markers" :position="marker" ></el-amap-marker>
      </el-amap>

  </div>
</template>

<style>
  .amap-demo {
    height: 300px;
  }

  .search-box {
    position: absolute;
    top: 50px;
    left: 20px;
  }

  /*.AmapDoc {*/
    /*position: relative;*/
  /*}*/
</style>

<script>
  module.exports = {
    data: function() {
      return {
        markers: [
          [121.59996, 31.197646],
          [121.40018, 31.197622],
          [121.69991, 31.207649]
        ],
        searchOption: {
          city: '北京',
          citylimit: true
        },
        mapCenter: [121.59996, 31.197646]
      };
    },
    methods: {
      addMarker: function() {
        let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
        let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
        this.markers.push([lng, lat]);
      },
      onSearchResult(pois) {
        let latSum = 0;
        let lngSum = 0;
        if (pois.length > 0) {
          pois.forEach(poi => {
            let {lng, lat} = poi;
            lngSum += lng;
            latSum += lat;
            this.markers.push([poi.lng, poi.lat]);
          });
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          };
          this.mapCenter = [center.lng, center.lat];
        }
      }
    }
  };
</script>
