import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {KAKAO_MAP_API_KEY} from '@env';

const KakaoMap = () => {
  const apiKey = KAKAO_MAP_API_KEY;

  const mapHtml = `
    <html>
      <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
        <script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer,drawing"></script>
      </head>
      <body style="margin: 0 !important;padding: 0 !important;">
        <div id="map" style="width:100%;height:100%;"></div>
        <script>
          const container = document.getElementById('map');
          const options = {
            center: new kakao.maps.LatLng(37.5665, 126.9780),
            level: 3
          };
          const map = new kakao.maps.Map(container, options);

          const markerPosition = new kakao.maps.LatLng(37.5665, 126.9780);
          const marker = new kakao.maps.Marker({
            position: markerPosition
          });

          marker.setMap(map);


          const drawingManager = new kakao.maps.drawing.DrawingManager({
            map: map,
            drawingMode: kakao.maps.drawing.OverlayType.POLYLINE,
            drawingControl: true,
            drawingControlOptions: {
              position: kakao.maps.ControlPosition.TOP,
              drawingModes: [
                kakao.maps.drawing.OverlayType.POLYLINE
              ]
            },
            polylineOptions: {
              strokeWeight: 5,
              strokeColor: '#FF0000',
              strokeOpacity: 0.7
            }
          });

          kakao.maps.event.addListener(drawingManager, 'overlaycomplete', function(data) {
            const path = data.overlay.getPath();
            console.log(path);
          });

          kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            console.log(mouseEvent.latLng);
          });

          kakao.maps.event.addListener(map, 'zoom_changed', function() {
            console.log(map.getLevel());
          });

          kakao.maps.event.addListener(map, 'center_changed', function() {
            console.log(map.getCenter());
          });

          kakao.maps.event.addListener(map, 'bounds_changed', function() {
            console.log(map.getBounds());
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{html: mapHtml}}
        style={{flex: 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default KakaoMap;
