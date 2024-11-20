declare module '@env' {
  export const KAKAO_MAP_API_KEY: string;
  export const GOOGLE_MAP_API_KEY: string;
  export const NAVER_MAP_CLIENT_ID: string;
  export const NAVER_MAP_CLIENT_SECRET: string;
}

declare module '*.svg' {
  import {FC, SVGProps} from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

type ContentsCategory = 'passItOn' | 'deliverItTo' | 'recruitment';
type ProcessStatus = 'waiting' | 'processing' | 'completed';

type ContentsType = {
  id: string;
  from: string;
  to: string;
  title: string;
  period?: string;
  enableTime?: string;
  startTime?: string;
  pickUpLocation?: string;
  destination?: string;
  participants?: number;
  TotalParticipants?: number;
  category: ContentsCategory;
  processStatus: ProcessStatus;
};

type OrderType = {
  id: string;
  title: string;
  description: string;
  price: number;
  // 예상작업완료일
  dueDate: string;
};

type NotificationType = {
  id: string;
  title: string;
  description: string;
};

type SearchType = {
  id: string;
  // 상호
  name: string;
  type: string;
  // 1 회당 가격
  price: number;
  // 주소
  address: string;
  src: string;
};
