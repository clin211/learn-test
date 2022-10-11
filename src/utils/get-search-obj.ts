const getSearchObj = () => {
    const { search } = window.location;
    const searchStr = search.slice(1);
    const paris = searchStr.split('&');
    const searchObj: Record<string, string> = {};

    paris.forEach(pair => {
        const [key, value] = pair.split('=');
        searchObj[key] = value;
    });

    return searchObj;
};

// 浏览器兼容性
// const getSearchObj = () => {
//     return Object.fromEntries(
//         new URLSearchParams(window.location.search).entries()
//     );
// };

export default getSearchObj;
