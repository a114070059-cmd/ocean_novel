export interface Book {
  id: string;
  title: string;
  tags: string[];
  status: 'completed' | 'ongoing';
  summary: string;
  rating: number;
  url: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: '深海尋秘',
    tags: ['玄幻', '冒險'],
    status: 'completed',
    summary: '在這片未知的海洋中，隱藏著古老的文明與強大的力量，主角踏上尋找真相的旅程。',
    rating: 4.8,
    url: '#',
  },
  {
    id: '2',
    title: '都市之海',
    tags: ['都市', '異能'],
    status: 'ongoing',
    summary: '在現代都市的喧囂下，一場改變世界的風暴即將來臨，而他，是唯一的守護者。',
    rating: 4.5,
    url: '#',
  },
  {
    id: '3',
    title: '星辰彼岸',
    tags: ['仙俠', '言情'],
    status: 'completed',
    summary: '跨越星系的愛戀，從塵埃中綻放的希望，他們能否在彼此的懷中找到歸宿？',
    rating: 4.9,
    url: '#',
  },
];
