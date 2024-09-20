export type Query = {
    queryKey : string[]
    queryHash?: string
    subscribers? : Observer[]
    fetchingFunction?: (() => void) | null
    state: State,
    subscribe: (subscriber: Observer) => (() => void)
    setState : (newState: State) => void,
    fetch: () => void
}

export type Observer = {
    notify : () => void
    subscribe : (renderer : () => void) => (() => void) | undefined
    getQueryState: () => State
}

export type State = {
    isFetching?: boolean
    isLoading? : boolean
    isError? : boolean
    data? : any
}