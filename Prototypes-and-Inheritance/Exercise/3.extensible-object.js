function extend() {
    let proto = {};
    let inst = Object.create(proto);

    inst.extend = function (templates){
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                inst[key] = value;
            }
        })
    }

    return inst;
}