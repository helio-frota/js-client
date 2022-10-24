export = listeners;
declare function listeners(protocol: any): {
    removeListeners: (listenerId: any) => void;
    findConnectionListener: (listenerId: any) => any;
    addRemoteListener: (transport: any, ctx: any, event: any, listener: any, opts: any) => any;
    addLocalListener: (ctx: any, event: any, listener: any, opts: any) => any;
    dispatchEvent: (event: any, listenerId: any, bytebuf: any, emitFunc: any) => () => any;
    getListenersAt: (addr: any) => any;
};
