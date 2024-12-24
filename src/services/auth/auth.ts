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
    // 서버에 로그아웃 요청 (선택 사항)
    // 로그아웃 시간 기록 등
    // await fetch('https://api.example.com/logout', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    // });

    // 로컬 저장소에서 토큰 삭제
    await deleteTokens();
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};

// Access Token 갱신
export const refreshAccessToken = async (): Promise<void> => {
  try {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) throw new Error('Refresh token not found');

    // 서버에 Access Token 갱신 요청
    const response = await fetch('https://api.example.com/token/refresh', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({refresh_token: refreshToken}),
    });

    if (!response.ok) throw new Error('Failed to refresh access token');

    const {access_token} = await response.json();

    // 새 Access Token 저장
    await setAccessToken(access_token);
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

// API 호출에 Access Token 사용
export const fetchWithAuth = async (
  url: string,
  options: RequestInit = {},
): Promise<Response> => {
  try {
    let accessToken = await getAccessToken();

    // Access Token이 없으면 갱신 시도
    if (!accessToken) {
      await refreshAccessToken();
      accessToken = await getAccessToken();
    }

    if (!accessToken) throw new Error('Unable to get access token');

    // API 요청
    return await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
