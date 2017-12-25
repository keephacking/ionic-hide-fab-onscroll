export default [{
        input: "./build/es5/ionic-hide-fab-onscroll.js",
        output: [{
            file: "./dist/ionic-hide-fab-onscroll.es5.js",
            format: "es"
        }]
    },
    {
        input: "./build/es2015/ionic-hide-fab-onscroll.js",
        output: [{
            file: "./dist/ionic-hide-fab-onscroll.es2015.js",
            format: "es",
            name: "ionicHideFabOnscroll"
        }]
    },
    {
        input: "./build/es2015/ionic-hide-fab-onscroll.js",
        output: [{
            file: "./dist/ionic-hide-fab-onscroll.umd.js",
            format: "umd",
            name: "ionicHideFabOnscroll"
        }]
    }
];