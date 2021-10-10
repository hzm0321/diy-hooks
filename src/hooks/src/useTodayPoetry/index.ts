import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export type PoetryType = {
  content: string;
  matchTags: string[];
  origin: {};
};

const useTodayPoetry = () => {
  const [poetryData, setPoetryData] = useState<PoetryType>({
    content: '',
    matchTags: [],
    origin: {},
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    init();
  }, []);

  const init = useCallback(() => {
    setLoading(true);
    axios.get('https://v2.jinrishici.com/one.json').then((res) => {
      setLoading(false);
      if (res.status === 200 && res.data.status === 'success') {
        setPoetryData(res.data.data as PoetryType);
      }
    });
  }, []);

  return {
    content: poetryData.content,
    tags: poetryData.matchTags || [],
    origin: poetryData.origin,
    loading,
    allData: poetryData as any,
    update: init,
  };
};

export default useTodayPoetry;
