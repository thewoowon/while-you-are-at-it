declare module '@env' {
  export const KAKAO_MAP_API_KEY: string;
}

declare module '*.svg' {
  import {FC, SVGProps} from 'react';
  const content: FC<SVGProps<SVGSVGElement>>;
  export default content;
}

type ContentsCategory = 'passItOn' | 'deliverItTo' | 'recruitment';
type ProcessStatus = 'waiting' | 'processing' | 'completed';

type ContentsType = {
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
