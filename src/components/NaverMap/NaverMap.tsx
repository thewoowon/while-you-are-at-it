import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {NAVER_MAP_CLIENT_ID} from '@env';

const NaverMap = () => {
  const clientId = NAVER_MAP_CLIENT_ID;

  const mapHtml = `
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <title>간단한 지도 표시하기</title>
      <script
        type="text/javascript"
        src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}"
      ></script>
      <script>
      window.onload = function() {
        try {
          const mapOptions = {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10,
            mapTypeId: naver.maps.MapTypeId.NORMAL,
          };
          const map = new naver.maps.Map("map", mapOptions);
        } catch (e) {
          console.error('Map initialization error:', e);
        }
      };
      window.onerror = function(message, source, lineno, colno, error) {
        console.error('Script Error:', message, source, lineno, colno, error);
      };
    </script>

    </head>
    <body style="margin: 0 !important;padding: 0 !important;">
      <div id="map" style="width: 100%; height: 100%;"></div>
     <script>
        document.addEventListener("DOMContentLoaded", function () {
          const mapOptions = {
            center: new naver.maps.LatLng(37.3595704, 127.105399),
            zoom: 10,
            mapTypeId: naver.maps.MapTypeId.NORMAL,
          };
          const map = new naver.maps.Map("map", mapOptions);
        });
      </script>
    </body>
  </html>
  `;

  useEffect(() => {
    console.log('NaverMap rendered');
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        key={Date.now()}
        originWhitelist={['*']}
        source={{html: mapHtml, baseUrl: 'http://localhost:8081'}}
        style={{flex: 1}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onHttpError={error => console.error('Map script error:', error)}
        onError={error => console.error('Map script error:', error)}
        webviewDebuggingEnabled={true}
        geolocationEnabled={true}
        zoomEnable={true}
        injectedJavaScript={`
          console = {
            log: function(msg) {
              window.ReactNativeWebView.postMessage(JSON.stringify({type: 'log', message: msg}));
            },
            error: function(msg) {
              window.ReactNativeWebView.postMessage(JSON.stringify({type: 'error', message: msg}));
            }
          };
          true;
        `}
        onMessage={event => {
          const data = JSON.parse(event.nativeEvent.data);
          if (data.type === 'error') {
            console.error('WebView error:', data.message);
          } else {
            console.log('WebView message:', data.message);
          }
        }}
        onLo
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default NaverMap;
