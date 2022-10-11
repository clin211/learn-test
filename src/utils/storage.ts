const KEY_NAME = 'my-app-';

const set = (key: string, value: string) => {
    localStorage.setItem(KEY_NAME + key, value);
};

const get = (key: string, value: string) => {
    return localStorage.getItem(KEY_NAME + key);
};

const storage = {
    get,
    set,
};

export default storage;
