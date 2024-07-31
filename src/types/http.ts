export interface ICommonResponse<T> {
    status: 'success' | 'failed';
    data: T;
}
