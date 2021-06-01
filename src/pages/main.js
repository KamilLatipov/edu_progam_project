function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context('../style', true, /\.js$|\.scss$/));
importAll(require.context('../blocks', true, /\.js$|\.scss$/));
importAll(require.context('../pages', true, /\.js$|\.scss$/));