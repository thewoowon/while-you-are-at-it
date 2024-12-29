import customAxios from '../../axios/customAxios';
import {
  setAccessToken,
  getAccessToken,
  setRefreshToken,
  getRefreshToken,
  deleteTokens,
} from './token';

// 로그인 및 토큰 저장
export const login = async ({
  access_token,
  refresh_token,
}: {
  access_token: string;
  refresh_token: string;
}): Promise<void> => {
  try {
    // Access 및 Refresh Token 저장
    await setAccessToken(access_token);
    await setRefreshToken(refresh_token);
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// 로그아웃 및 토큰 삭제
export const logout = async (): Promise<void> => {
  try {
    await deleteTokens();
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};

export const refreshAccessToken = async (): Promise<boolean> => {
  const refreshToken = await getRefreshToken();
  if (!refreshToken) return false;

  try {
    const response = await customAxios.post('/auth/refresh-token', {
      refresh_token: refreshToken,
    });
    await setAccessToken(response.data.access_token);
    return true;
  } catch (error) {
    console.error('Refresh token validation failed:', error);
    return false;
  }
};

export const validateAccessToken = async (): Promise<boolean> => {
  const accessToken = await getAccessToken();
  console.log('validateAccessToken accessToken:', accessToken);
  if (!accessToken) return false;

  try {
    const response = await customAxios.get('/auth/validate-token', {
      headers: {Authorization: `Bearer ${accessToken}`},
    });
    return response.status === 200;
  } catch (error) {
    console.error('Access token validation failed:', error);
    return false;
  }
};
