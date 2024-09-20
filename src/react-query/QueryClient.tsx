import { Query } from "../types"
import { createQuery } from "./createQuery"

export class QueryClient {
    queries : Query[]= []
    
    getQuery = (queryKey: string[], queryFn: () => Promise<any>) => {
        const queryHash = JSON.stringify(queryKey);

        let searchedQuery = this.queries.find(query => query.queryHash === queryHash)
        if (!searchedQuery) {
            searchedQuery = createQuery(queryKey, queryFn)
            this.queries.push(searchedQuery)
        }

        return searchedQuery   
    }
}