import { useEffect, useState } from 'react';

interface RequestFunction<T> {
  (): Promise<T>;
}

function useRequest<T>(request: RequestFunction<T>): [T | null, boolean, string] {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);

    request()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [request]);

  return [data, isLoading, error];
}

export default useRequest;
