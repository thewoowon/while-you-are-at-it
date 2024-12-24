import {getAccessToken} from '../auth/token';

export const fetchUserProfile = async (): Promise<void> => {
  try {
    const token = await getAccessToken();
    if (!token) throw new Error('No access token found');

    const response = await fetch('https://api.example.com/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error('Failed to fetch user profile');

    const data = await response.json();
    console.log('User profile:', data);
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
  }
};
