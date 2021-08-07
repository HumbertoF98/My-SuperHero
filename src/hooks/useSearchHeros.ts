import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import api from "../services";
import { keys } from "../services/keys";
import { Data } from "../types/heroTypes";

export default function useSearchHeros(hero: string) {
  const [result, setResult] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLoad = useCallback(async () => {
    if (!hero) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);

      const { data: resultFind } = await api.get("public/characters", {
        params: {
          apikey: keys.apikey,
          ts: keys.ts,
          hash: keys.hash,
          nameStartsWith: hero,
        },
        headers: {
          Accept: "*/*",
        },
      });
      const { results } = resultFind.data;

      setResult(results ?? null);
    } catch (e) {
      toast.error("Houve um erro ao consultar esses heróis :(");
    } finally {
      setIsLoading(false);
    }
  }, [hero]);

  return {
    result,
    isLoading,
    onLoad,
  };
}
