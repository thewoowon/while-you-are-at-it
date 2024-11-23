import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

type PassItemProps = {
  passItem: ContentsType;
  onPress: () => void;
};

export default function PassItem({passItem, onPress}: PassItemProps) {
  return (
    <Pressable style={styles.contents} onPress={onPress}>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: {
              passItOn: '#F8E9FC',
              deliverItTo: '#E9F9FC',
              recruitment: '#F9F7D7',
            }[passItem.category],
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 6,
            paddingRight: 6,
            borderRadius: 2,
          }}>
          {
            {
              passItOn: <Text style={{color: '#D395D6'}}>전달해주세요</Text>,
              deliverItTo: <Text style={{color: '#3CBACD'}}>전달해드려요</Text>,
              recruitment: <Text style={{color: '#C9A92C'}}>팀 모집해요</Text>,
            }[passItem.category]
          }
        </View>
        {
          {
            waiting: (
              <Text
                style={{
                  color: '#B5B5B5',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Regular',
                }}>
                대기중{' '}
                {passItem.participants &&
                  `${passItem.participants}/${passItem.TotalParticipants}`}
              </Text>
            ),
            processing: (
              <Text
                style={{
                  color: '#B5B5B5',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Regular',
                }}>
                모집마감{' '}
                {`${passItem.participants}/${passItem.TotalParticipants}`}
              </Text>
            ),
            completed: (
              <Text
                style={{
                  color: '#B5B5B5',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Regular',
                }}>
                모집중{' '}
                {`${passItem.participants}/${passItem.TotalParticipants}`}
              </Text>
            ),
          }[passItem.processStatus]
        }
      </View>
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 4,
        }}>
        <Text
          style={{
            color: '#8E979E',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#6E7881',
            }}>
            {passItem.from}
          </Text>
          에서{' '}
          <Text
            style={{
              color: '#6E7881',
              fontFamily: 'Pretendard-SemiBold',
            }}>
            {passItem.to}
          </Text>
          (으)로
        </Text>
        <Text
          style={{
            color: '#1F1F1F',
            fontSize: 17,
            fontFamily: 'Pretendard-SemiBold',
          }}>
          {passItem.title}
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 8,
        }}>
        {passItem.period && (
          <Text
            style={{
              color: '#192628',
              fontSize: 15,
              fontFamily: 'Pretendard-Medium',
            }}>
            기간{'  '}
            <Text
              style={{
                fontFamily: 'Pretendard-Regular',
              }}>
              {passItem.period}
            </Text>
          </Text>
        )}
        {passItem.enableTime && (
          <Text
            style={{
              color: '#192628',
              fontSize: 15,
              fontFamily: 'Pretendard-Medium',
            }}>
            수령{'  '}
            <Text
              style={{
                fontFamily: 'Pretendard-Regular',
              }}>
              {passItem.enableTime}
            </Text>
          </Text>
        )}
        {passItem.startTime && (
          <Text
            style={{
              color: '#192628',
              fontSize: 15,
              fontFamily: 'Pretendard-Medium',
            }}>
            출발시간{'  '}
            <Text
              style={{
                fontFamily: 'Pretendard-Regular',
              }}>
              {passItem.startTime}
            </Text>
          </Text>
        )}
        {passItem.pickUpLocation && (
          <Text
            style={{
              color: '#192628',
              fontSize: 15,
              fontFamily: 'Pretendard-Medium',
            }}>
            수령장소{'  '}
            <Text
              style={{
                fontFamily: 'Pretendard-Regular',
              }}>
              {passItem.pickUpLocation}
            </Text>
          </Text>
        )}
        {passItem.destination && (
          <Text
            style={{
              color: '#192628',
              fontSize: 15,
              fontFamily: 'Pretendard-Medium',
            }}>
            목적지{'  '}
            <Text
              style={{
                fontFamily: 'Pretendard-Regular',
              }}>
              {passItem.destination}
            </Text>
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contents: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
});
