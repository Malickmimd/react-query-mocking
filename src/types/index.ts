export type Query = {
    queryKey : string[]
    queryFn : () => void
    status : {
        isLoading : boolean
        isError : boolean
        data : []
    }
}