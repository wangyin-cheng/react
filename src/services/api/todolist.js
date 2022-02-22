import request from '../request';

export function getList(data) {
    return request('/get/tableList', {
        method: 'get',
        data
    })
}