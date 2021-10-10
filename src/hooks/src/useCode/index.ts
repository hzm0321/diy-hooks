import { useEffect, useState } from 'react';

const cachedCodes = new Map();

const useCode = (
  code: string,
  queryCode: (arg0: string) => any,
  refresh?: boolean,
) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let cacheData = cachedCodes.get(code);
    if (!code) return;
    if (!cacheData || refresh) {
      queryCode(code).then((data) => {
        setData(data);
        cachedCodes.set(code, data);
      });
      return;
    }
    if (cacheData) {
      setData(cacheData);
    }
  }, [code]);

  return data;
};
export default useCode;
