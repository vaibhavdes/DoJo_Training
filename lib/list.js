//Inheritance (dojo.declare uses mixins to build a constructor from several bases.)
var Person = dojo.declare(null, {
    constructor: function (args) {
        this.name = args.name;
        this.age = args.age;
        this.currentResidence = args.currentResidence;
    },
    //  methods
    addNo: function (args) {
        //statements
    }
});
var Employee = dojo.declare(Person, {
    constructor: function (args) {
        // Remember, Person constructor is called automatically
        // before this constructor.
        this.password = "";
        this.position = args.position;
    },
    //Overiding Method
    addNo: function (args, constant) {
        // call base class method
        this.inherited(args);
    }
});

//Multiple Inheritance
dojo.declare("one", null, {
    constructor: function () { console.debug("mixing in Vanilla"); }
});

dojo.declare("two", null, {
    constructor: function () { console.debug("mixing in MandM's"); },
    kind: "plain"
});

dojo.declare("three", null, {
    chunkSize: "medium"
});

dojo.declare("four", [one, two, three], {
    constructor: function () {
        console.debug("A blizzard with " +
            this.kind + " M and Ms and " +
            this.chunkSize + " chunks of cookie dough."
        );
    }
});


//constructor chaining  (can use this.inherited(arguments); inside constructor)
var A = dojo.declare(null,
    constructor: function () { console.log("A"); }
  };
var B = dojo.declare(A,
    constructor: function () { console.log("B"); }
  };
var C = dojo.declare(B,
    constructor: function () { console.log("C"); }
  };
new C();



//Overiding 
var A = dojo.declare(null, {
    m1: function () {
        // ...
    }
});

A.extend({
    m1: function () {
        // this method will replace the original method
        // ...
    },
    m2: function () {
        // ...
    }
});
var x = new A();
a.m1();
a.m2();