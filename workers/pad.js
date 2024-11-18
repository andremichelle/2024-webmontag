importScripts("../lib/pad.js");

let pad = null;

onmessage = event => {
    const data = event.data;
    const action = data.action;
    const value = data.value;
    if (action === 'init') {
        pad = new Pad(value.fftSize, value.sampleRate, value.frequencies);
    } else if (null !== pad && action === 'update') {
        postMessage(pad.update(value));
    }
};