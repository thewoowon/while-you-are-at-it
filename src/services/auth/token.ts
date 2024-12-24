import * as Keychain from 'react-native-keychain';

const TOKEN_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
};

// Access Token 저장
export const setAccessToken = async (token: string): Promise<void> => {
  try {
    await Keychain.setGenericPassword(TOKEN_KEYS.ACCESS_TOKEN, token);
  } catch (error) {
    console.error('Failed to store access token securely:', error);
    throw new Error('Failed to store access token');
  }
};

// Access Token 가져오기
export const getAccessToken = async (): Promise<string | null> => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials && credentials.username === TOKEN_KEYS.ACCESS_TOKEN) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Failed to retrieve access token securely:', error);
    throw new Error('Failed to retrieve access token');
  }
};

// Refresh Token 저장
export const setRefreshToken = async (token: string): Promise<void> => {
  try {
    await Keychain.setGenericPassword(TOKEN_KEYS.REFRESH_TOKEN, token);
  } catch (error) {
    console.error('Failed to store refresh token securely:', error);
    throw new Error('Failed to store refresh token');
  }
};

// Refresh Token 가져오기
export const getRefreshToken = async (): Promise<string | null> => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials && credentials.username === TOKEN_KEYS.REFRESH_TOKEN) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Failed to retrieve refresh token securely:', error);
    throw new Error('Failed to retrieve refresh token');
  }
};

// Access 및 Refresh Token 삭제
export const deleteTokens = async (): Promise<void> => {
  try {
    await Keychain.resetGenericPassword();
  } catch (error) {
    console.error('Failed to delete tokens securely:', error);
    throw new Error('Failed to delete tokens');
  }
};
