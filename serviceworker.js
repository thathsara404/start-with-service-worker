console.log('we are service workers');
// changing this comment will cause to update the browser service woker (version: 1)
try {
    importScripts('./script_one.js');
} catch (e) {
    console.error(e);
}

self.addEventListener('install', event => {
    console.log('install event');
});

self.addEventListener('activate', event => {
    console.log('activate event');
});