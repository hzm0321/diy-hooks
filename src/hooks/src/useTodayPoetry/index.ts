import { useCallback, useEffect, useState } from 'react';
import * as jinrishici from 'jinrishici';
import { isNumber } from 'lodash';

export type PoetryType = {
  content: string;
  matchTags: string[];
  origin: any;
};

const useTodayPoetry = (intervalTime?: number) => {
  const [poetryData, setPoetryData] = useState<PoetryType>({
    content: '',
    matchTags: [],
    origin: {},
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let timer;
    init();
    if (isNumber(intervalTime) && intervalTime > 0) {
      timer = setInterval(() => {
        init();
      }, intervalTime);
    }
    return () => {
      clearInterval(timer);
    };
  }, [intervalTime]);

  const init = useCallback(() => {
    setLoading(true);
    jinrishici.load(
      (result) => {
        setLoading(false);
        if (result.status === 'success') {
          setPoetryData(result.data);
        }
      },
      (errData) => {
        setLoading(false);
        console.error(errData);
      },
    );
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
