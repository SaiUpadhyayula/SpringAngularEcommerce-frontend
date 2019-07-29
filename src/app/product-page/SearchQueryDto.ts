export class SearchQueryDto{
    textQuery: String;
    filters: Array<Filter>
}

export class Filter {
    key: String;
    value: String;
    from?: String;
    to?: String;
}