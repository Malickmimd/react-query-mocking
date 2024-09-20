import { createContext, ReactElement } from "react";
import { QueryClient } from "./QueryClient";

type QueryClientProviderProps = {
    children : ReactElement
    client : QueryClient
}

export const QueryContext = createContext<QueryClient>(new QueryClient())

export default function QueryClientProvider({ client, children } : QueryClientProviderProps) {
    
    return (
    <QueryContext.Provider value={client}>
      {children}
    </QueryContext.Provider>
    )

}