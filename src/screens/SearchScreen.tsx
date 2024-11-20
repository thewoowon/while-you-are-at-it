import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LeftChevronIcon from '../components/Icons/LeftChevronIcon';
import {
  EngravingIcon,
  AcrylIcon,
  HammerIcon,
  OthersIcon,
  PaintIcon,
  PlasticIcon,
  PrintIcon,
  PrintingIcon,
  TreeIcon,
} from '../components/Icons/material';
import {useDebounce} from '../hooks';
import {SEARCH_DATA} from '../data';

export const imageMap: {
  [key: string]: any;
} = {
  'laser_1.png': require('../assets/images/laser_1.png'),
  'laser_2.png': require('../assets/images/laser_2.png'),
  'laser_3.png': require('../assets/images/laser_3.png'),
  'laser_4.png': require('../assets/images/laser_4.png'),
  'laser_5.png': require('../assets/images/laser_5.png'),
  'laser_6.png': require('../assets/images/laser_6.png'),
  'laser_7.png': require('../assets/images/laser_7.png'),
};

const materialIcons: {
  [key: string]: (attr: {
    width?: number;
    height?: number;
    color?: string;
  }) => JSX.Element;
} = {
  금속가공: HammerIcon,
  목재가공: TreeIcon,
  '3D프린팅': PrintingIcon,
  아크릴가공: AcrylIcon,
  인쇄: PrintIcon,
  각인: EngravingIcon,
  도색: PaintIcon,
  플라스틱가공: PlasticIcon,
  '그 외': OthersIcon,
};

const SearchScreen = ({navigation, route}: any) => {
  const [searchString, setSearchString] = useState('');
  const [searchResult, setSearchResult] = useState<SearchType[]>([]);

  const debouncedSearchString = useDebounce(searchString, 500);

  useEffect(() => {
    if (debouncedSearchString.length > 0) {
      const result = SEARCH_DATA.filter(item =>
        item.type.includes(debouncedSearchString),
      );
      setSearchResult(result);
    } else {
      setSearchResult([]);
    }
  }, [debouncedSearchString]);

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

          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <LeftChevronIcon />
          </Pressable>
          <View
            style={{
              flex: 1,
            }}>
            <TextInput
              style={styles.input}
              placeholder="내 주변 전달 검색"
              placeholderTextColor={'#8E979E'}
              value={searchString}
              onChangeText={setSearchString}
            />
          </View>
        </View>

        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white',
            padding: 20,
            gap: 34,
          }}>
          {searchString.length > 0 && searchResult.length > 0 && (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 34,
              }}>
              {searchResult.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 14,
                    }}>
                    <Image
                      source={imageMap[item.src]}
                      style={{width: 64, height: 64}}
                      alt={item.name}
                    />
                    <View>
                      <Text>{item.name}</Text>
                      <Text>{item.type}</Text>
                      <Text>{item.address}</Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
          {searchString.length > 0 && searchResult.length === 0 && (
            <View
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>검색 결과가 없습니다.</Text>
            </View>
          )}
          {searchString.length === 0 && (
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                padding: 11,
              }}>
              <Text
                style={{
                  fontFamily: 'Pretendard-Bold',
                  fontSize: 17,
                  color: '#394245',
                }}>
                소재
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-start',
                  columnGap: 29,
                  rowGap: 22,
                }}>
                {Object.keys(materialIcons).map((key, index) => {
                  const Icon = materialIcons[key];
                  return (
                    <Pressable
                      key={index}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 8,
                      }}
                      onPress={() => {
                        setSearchString(key);
                      }}>
                      <Icon />
                      <Text
                        style={{
                          fontFamily: 'Pretendard-Medium',
                          fontSize: 12,
                        }}>
                        {key}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          )}
        </ScrollView>
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
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingRight: 20,
    paddingLeft: 16,
    maxHeight: 50,
    alignItems: 'center',
    gap: 10,
  },
  headerText: {
    color: '#C7CDD1',
    fontSize: 20,
    fontFamily: 'Pretendard-ExtraBold',
  },
  input: {
    flex: 1,
    height: 44,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 19,
    paddingRight: 19,
    borderRadius: 6,
    backgroundColor: '#F2F4F6',
    fontSize: 16,
    width: '100%',
  },
});

export default SearchScreen;
