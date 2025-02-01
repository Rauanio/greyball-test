export interface Filters {
    page: number,
    limit: number,
    search: string,
    sort: 'asc' | 'desc'
}

export type FiltersState = Filters