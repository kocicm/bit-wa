export const displayShow = (obj) => {
    document.querySelector('div').innerHTML = `<img src="${obj.url}" alt="${obj.name}"/>`;
    return obj;
}

export const getData = () => {
    return document.querySelector('#search-box').value;
}