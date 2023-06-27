import { defineStore } from 'pinia';
// 引入其他仓库
import { store_login } from './login.js';

export const store_main = defineStore('main', {
    state: () => {
        return {
            sayMsg: 'vue',
            count: 0,
            phone: 13487197725,
            user: store_login().username,
        };
    },
    // 监视状态
    getters: {
        setPhone() {
            console.log(this.phone);
            //   替换中间四个字符
            return this.phone
                .toString()
                .replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
        },
        setMsg() {
            return (this.sayMsg = 'hello ' + this.sayMsg);
        },
    },

    actions: {
        setState() {
            (this.sayMsg = 'vue' ? 'react' : 'vue'), this.count++;
        },
    },
});
