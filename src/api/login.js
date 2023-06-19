import service from '@/utils/service';

export const api_login = (data) => {
    return service({
        url: '/www/login',
        method: 'post',
        data,
    });
};

export const api_register = (data) => {
    return service({
        url: '/www/register',
        method: 'post',
        data,
    });
};
