import { Query, State } from "../types";

export function createQuery(queryKey: string[], queryFn: () => Promise<any>) {
    const query : Query = {
        queryKey,
        queryHash: JSON.stringify(queryKey),
        subscribers : [],
        fetchingFunction: null,
        state : {
            isFetching: true,
            isLoading : true,
            isError : false,
            data : undefined
        },
        subscribe: (subscriber) => {
            query.subscribers?.push(subscriber);
            return () => {
              query.subscribers =
                query.subscribers?.filter(
                  (s) => s !== subscriber
                );
            };
        },
        setState :  (newState : State) => {
            query.state = {...query.state, ...newState}
            query.subscribers?.forEach((subscriber) => subscriber.notify())
            },
        fetch : async () => {
            if (!query.fetchingFunction) {
                query.fetchingFunction = async () => {
                    query.setState({ isFetching: true, isError: false })
                    try {
                        const response = await queryFn()
                        query.setState({ isLoading: false, data: response })           
                    }
                    catch(err) {
                        query.setState({ isError: true })
                    }
                    finally{
                        query.fetchingFunction === null
                        query.setState({ isFetching: false })
                    }
                }
                query.fetchingFunction()
            }
            
        }     
    }
    return query
}