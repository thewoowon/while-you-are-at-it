import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomTriangleIcon, LeftChevronIcon} from '../components/Icons';
import {Picker} from '@react-native-picker/picker';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import Animated, {useSharedValue} from 'react-native-reanimated';

const commonData = {
  option1: 'Option 1',
  option2: 'Option 2',
  option3: 'Option 3',
  option4: 'Option 4',
  option5: 'Option 5',
  option6: 'Option 6',
  option7: 'Option 7',
  option8: 'Option 8',
};

const DeliveryCreateScreen = ({navigation, route}: any) => {
  const [selected, setSelected] = useState<'input' | 'unknown'>('input');
  const [selectedValue, setSelectedValue] = useState('');

  // BottomSheet 애니메이션 값을 관리하는 shared value
  const bottomSheetTranslateY = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // 바텀 시트의 snap 포인트 정의
  const snapPoints = useMemo(() => [250], []);

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
        translucent={false}
      />
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.header}>
          {/* 상단 헤더 */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'absolute',
              left: 16,
            }}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <LeftChevronIcon />
            </Pressable>
          </View>
          <Text style={styles.headerText}>{'게시글 작성하기'}</Text>
        </View>
        <ScrollView style={styles.orderList}>
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 10,
              paddingTop: 10,
              paddingLeft: 15,
              paddingRight: 15,
              borderWidth: 1,
              borderColor: '#E6EAED',
              borderRadius: 6,
              backgroundColor: '#FFFFFF',
              marginBottom: 25,
              height: 47,
            }}>
            <Text
              style={{
                color: '#363636',
                fontSize: 16,
                fontFamily: 'Pretendard-Medium',
              }}>
              전달해드려요
            </Text>
            <Pressable
              style={styles.radioContainer}
              onPress={() => setSelected('input')}>
              <View style={[styles.radioCircle]}>
                {selected === 'input' && (
                  <View
                    style={{
                      height: 11,
                      width: 11,
                      borderRadius: 5,
                      backgroundColor: '#1CD7AE',
                    }}
                  />
                )}
              </View>
            </Pressable>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 9,
              backgroundColor: '#FFFFFF',
              marginBottom: 25,
            }}>
            <View>
              <Text style={styles.headerText}>수령</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
              <Pressable
                style={styles.selectBox}
                onPress={() => {
                  bottomSheetRef.current?.expand();
                }}>
                <Text style={styles.selectBoxText}>
                  수령장소를 선택해주세요
                </Text>
                <BottomTriangleIcon />
              </Pressable>
              <Pressable
                style={styles.selectBox}
                onPress={() => {
                  bottomSheetRef.current?.expand();
                }}>
                <Text style={styles.selectBoxText}>
                  수령가능시간을 선택해주세요
                </Text>
                <BottomTriangleIcon />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 9,
              backgroundColor: '#FFFFFF',
              marginBottom: 25,
            }}>
            <View>
              <Text style={styles.headerText}>전달</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
              <Pressable
                style={styles.selectBox}
                onPress={() => {
                  bottomSheetRef.current?.expand();
                }}>
                <Text style={styles.selectBoxText}>목적지를 선택해주세요</Text>
                <BottomTriangleIcon />
              </Pressable>
              <Pressable
                style={styles.selectBox}
                onPress={() => {
                  bottomSheetRef.current?.expand();
                }}>
                <Text style={styles.selectBoxText}>
                  예정출발일시를 선택해주세요
                </Text>
                <BottomTriangleIcon />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 9,
              backgroundColor: '#FFFFFF',
              marginBottom: 7,
            }}>
            <View>
              <Text style={styles.headerText}>내용</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: '#E6EAED',
                  paddingLeft: 15,
                  paddingRight: 15,
                  paddingTop: 16,
                  paddingBottom: 16,
                  height: 179,
                }}>
                <TextInput
                  placeholder="제목"
                  style={{
                    fontSize: 18,
                    fontFamily: 'Pretendard-Medium',
                  }}
                  multiline={true}
                  numberOfLines={4}
                />
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#E6EAED',
                    marginBottom: 12,
                    marginTop: 16,
                  }}
                />
                <TextInput
                  placeholder="본문내용"
                  style={{
                    fontSize: 14,
                    fontFamily: 'Pretendard-Regular',
                  }}
                />
              </View>
              <Pressable
                style={styles.selectBox}
                onPress={() => {
                  bottomSheetRef.current?.expand();
                }}>
                <Text style={styles.selectBoxText}>모집 인원</Text>
                <BottomTriangleIcon />
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => {}}
            style={({pressed}) => [
              {
                padding: 16,
                borderRadius: 6,
                backgroundColor: '#1CD7AE',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
              {backgroundColor: pressed ? '#0BBDA1' : '#1CD7AE'},
            ]}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontFamily: 'Pretendard-SemiBold',
              }}>
              게시글 업로드
            </Text>
          </Pressable>
        </ScrollView>
        <BottomSheet
          ref={bottomSheetRef}
          // BottomSheet는 처음에 펼쳐진 상태로 시작
          index={-1}
          // 일단 스냅 포인트는 300, 550으로 설정
          handleIndicatorStyle={{
            display: 'none',
          }}
          containerStyle={{
            zIndex: 3,
          }}
          // dim 처리
          snapPoints={snapPoints}
          enablePanDownToClose
          enableDynamicSizing={false}
          onAnimate={(fromIndex, toIndex) => {
            if (toIndex === 0) {
              setCurrentIndex(0);
              bottomSheetTranslateY.value = 0;
            } else {
              setCurrentIndex(-1);
              bottomSheetTranslateY.value = 0;
            }
          }}>
          <BottomSheetView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={itemValue => setSelectedValue(itemValue)}
                style={styles.picker}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
                <Picker.Item label="Option 4" value="option4" />
                <Picker.Item label="Option 5" value="option5" />
                <Picker.Item label="Option 6" value="option6" />
                <Picker.Item label="Option 7" value="option7" />
                <Picker.Item label="Option 8" value="option8" />
              </Picker>
            </View>
          </BottomSheetView>
        </BottomSheet>
        {/* dim 처리 */}
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 2,
            // bottomSheetRef가 열리면 dim 처리
            display: currentIndex === 0 ? 'flex' : 'none',
          }}
          onTouchStart={() => {
            bottomSheetRef.current?.close();
          }}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    flex: 1,
  },
  orderList: {
    flex: 1,
    paddingTop: 26,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 11,
    paddingBottom: 11,
    maxHeight: 50,
  },
  headerText: {
    color: '#181818',
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    backgroundColor: '#1CD7AE',
  },
  radioText: {
    marginLeft: 10,
  },
  picker: {
    width: '100%',
  },
  selectBox: {
    height: 47,
    width: '100%',
    backgroundColor: '#white',
    borderWidth: 1,
    borderColor: '#E6EAED',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  selectBoxText: {
    color: '#B1BAC0',
    fontSize: 14,
    fontFamily: 'Pretendard-Regular',
  },
});

export default DeliveryCreateScreen;
