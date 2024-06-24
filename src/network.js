import fetch from 'node-fetch';
export const network=(msg) => {
    return fetch(`http://47.89.219.130:9091/api/gpt?text=${msg}`).then(
    (res) => {
       return res.json()
    }).then((res)=> {
        console.log('------大爆炸大爆炸大爆炸大爆炸大爆炸大爆炸------',msg,res.result);
        return res.result || '123'
    }).catch(e => {
        return '接口调用频繁，请稍后再试'
    })

}

