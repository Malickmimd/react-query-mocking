import { createContext, ReactElement } from "react";
import { QueryClient } from "./QueryClient";

type QueryProviderProps = {
    children : ReactElement
}

const QueryContext = createContext<QueryClient | null>(null)

export default function QueryProvider({ children } : QueryProviderProps) {
    
    return (
    <QueryContext.Provider value={new QueryClient}>
      {children}
    </QueryContext.Provider>
    )

}