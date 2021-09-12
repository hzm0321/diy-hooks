import { useEffect, useState } from 'react';

const cachedCodes = new Map();

const memorizedCode = async (code: string, queryCode: (arg0: string) => any, refresh = false) => {
  if (!code) return [];
  if (!cachedCodes.get(code) || refresh) {
    const data = await queryCode(code);
    cachedCodes.set(code, data);
    return data;
  }
  return cachedCodes.get(code);
};

const useCode = (code: string, queryCode: (arg0: string) => any, refresh = false) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    memorizedCode(code, queryCode, refresh).then((res) => setData(res));
  }, [code]);

  return data;
};
export default useCode;
