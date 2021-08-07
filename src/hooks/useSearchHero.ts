import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import api from "../services";
import { keys } from "../services/keys";
import { Data } from "../types/heroTypes";

export default function useSearchHero(heroId: string) {
  const [result, setResult] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLoad = useCallback(async () => {
    if (!heroId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);

      const { data: resultFind } = await api.get(
        `public/characters/${heroId}`,
        {
          params: {
            apikey: keys.apikey,
            ts: keys.ts,
            hash: keys.hash,
          },
          headers: {
            Accept: "*/*",
          },
        }
      );
      const { results } = resultFind.data;

      setResult(results ?? null);
    } catch (e) {
      toast.error("Houve um erro ao consultar este herói :(");
    } finally {
      setIsLoading(false);
    }
  }, [heroId]);

  return {
    result,
    isLoading,
    onLoad,
  };
}
