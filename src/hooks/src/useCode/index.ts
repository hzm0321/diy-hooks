import { useEffect, useState } from 'react';

// 会在全局中保存缓存的值集
const cachedCodes = new Map();

/**
 * 获取值集
 * @param code 值集编码
 * @param queryCode 值集的查询方法
 * @param isCache 是否缓存值集(默认false)
 */
const useCode = (
  code: string,
  queryCode: (arg0: string) => any,
  isCache?: boolean,
) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let cacheData = cachedCodes.get(code);
    if (!code) return;
    if (!cacheData) {
      queryCode(code).then((data) => {
        setData(data);
        if (isCache) {
          cachedCodes.set(code, data);
        }
      });
      return;
    } else {
      setData(cacheData);
    }
  }, [code]);

  return data;
};
export default useCode;
