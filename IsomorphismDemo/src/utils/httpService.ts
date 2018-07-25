export function postData(address: string, obj: any) {
    return fetch(address, {
        method: 'post',
        body: JSON.stringify(obj)
    }).catch(reason => {
        console.error(reason);
    })
}