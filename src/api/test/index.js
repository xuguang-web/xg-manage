import request from '../../utils/request.ts';
import {BASE_SERVICE } from "../constant.js"
 
export const testApi = {
     test(params) {
        return request.post(
            `${BASE_SERVICE}/login`,
            params
        ).then((res) => res.data);
     }
};