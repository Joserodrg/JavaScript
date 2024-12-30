function createObject(name, subs) {
    return {
        name: name,
        subscribers: subs,
        hash: name.length * subs,
        getStatus: function () {
            return "El canal de " + this.name + " tiene " + this.subscribers + " suscriptores";
        }
    };
}