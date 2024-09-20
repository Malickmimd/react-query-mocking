import { Observer } from "../types";
import { QueryClient } from "./QueryClient";
import { QueryContext } from "./QueryClientProvider"
import { useContext, useEffect, useRef, useState } from "react"

const createQueryObserver = (
    queryClient : QueryClient,
    query: { queryKey: string[], queryFn: () => Promise<any> }
  ) => {
    const searchedQuery = queryClient.getQuery(query.queryKey, query.queryFn);
  
    const observer : Observer = {
      notify: () => {},
      subscribe: (rerender) => {
        const unsubscribe = searchedQuery.subscribe(observer);
        observer.notify = rerender;
        searchedQuery.fetch();
        return unsubscribe;
      },
      getQueryState: () => searchedQuery.state,
    };
  
    return observer;
  };

export function useQuery(query : { queryKey: string[], queryFn: () => Promise<any> }) {
   const queryClient = useContext(QueryContext)
   const observer = useRef(createQueryObserver(queryClient, query));

    const [, setCount] = useState(0);
    const rerender = () => setCount((c) => c + 1);

  useEffect(() => {
    return observer.current.subscribe(rerender);
  }, []);

  return observer.current.getQueryState();

}