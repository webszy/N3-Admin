export interface CommonResponse<T> {
    status: 'success' | 'failed';
    data: T;
}
