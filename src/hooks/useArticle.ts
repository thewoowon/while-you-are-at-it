import axios from 'axios';
import customAxios from '../axios/customAxios';
import {getAccessToken} from '../services/auth/token';

const useArticle = () => {
  const findOneArticle = async (id: string) => {
    try {
      const accessToken = await getAccessToken();
      const response = await customAxios.get(`/articles/one`, {
        params: {id},
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status !== 200) {
        throw new Error('게시글 조회 실패');
      }
      return response.data;
    } catch (error) {
      console.error('게시글 조회 오류:', error);
    }
  };

  /*
   * 내 위치 기준 10km 이내의 게시글 목록을 조회하는 함수
   **/
  const findArticles = async () => {
    try {
      const accessToken = await getAccessToken();
      console.log('findArticles accessToken', accessToken);
      const response = await customAxios.get('/articles/all', {
        params: {
          latitude: 37.5665,
          longitude: 126.978,
          distance: 10,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log('findArticles response', response);
      if (response.status !== 200) {
        throw new Error('게시글 목록 조회 실패');
      }
      return response.data;
    } catch (error: any) {
      console.error('게시글 목록 조회 오류:', error);
      return [];
    }
  };

  const createArticle = async (article: {title: string; content: string}) => {
    try {
      const accessToken = await getAccessToken();
      const response = await customAxios.post('/articles', article, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      if (response.status !== 201) {
        throw new Error('게시글 생성 실패');
      }
      return response.data;
    } catch (error) {
      console.error('게시글 생성 오류:', error);
    }
  };

  const updateArticle = async (
    id: string,
    article: {title: string; content: string},
  ) => {
    try {
      const accessToken = await getAccessToken();
      const response = await customAxios.put(`/articles/${id}`, article, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      if (response.status !== 200) {
        throw new Error('게시글 수정 실패');
      }
      return response.data;
    } catch (error) {
      console.error('게시글 수정 오류:', error);
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      const accessToken = await getAccessToken();
      const response = await customAxios.delete(`/articles/${id}`, {
        headers: {Authorization: `Bearer ${accessToken}`},
      });
      if (response.status !== 204) {
        throw new Error('게시글 삭제 실패');
      }
      return response.data;
    } catch (error) {
      console.error('게시글 삭제 오류:', error);
    }
  };

  return {
    findOneArticle,
    findArticles,
    createArticle,
    updateArticle,
    deleteArticle,
  };
};

export default useArticle;
