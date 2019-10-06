dojo.declare("VanillaSoftServe", null, {
    constructor: function () { console.debug("mixing in Vanilla"); }
});

dojo.declare("MandMs", null, {
    constructor: function () { console.debug("mixing in MandM's"); },
    kind: "plain"
});

dojo.declare("CookieDough", null, {
    chunkSize: "medium"
});

dojo.declare("Blizzard", [VanillaSoftServe, MandMs, CookieDough], {
    constructor: function () {
        console.debug("A blizzard with " +
            this.kind + " M and Ms and " +
            this.chunkSize + " chunks of cookie dough."
        );
    }
});