export default [{
        input: "./build/ionic-hide-fab-onscroll.es5.js",
        output: [{
            file: "./dist/ionic-hide-fab-onscroll.es5.js",
            format: "es"
        }]
    },
    {
        input: "./build/ionic-hide-fab-onscroll.es2015.js",
        output: [{
            file: "./dist/ionic-hide-fab-onscroll.es2015.js",
            format: "es",
            name: "ionicHideFabOnscroll"
        }]
    },
    {
        input: "./build/ionic-hide-fab-onscroll.es2015.js",
        output: [{
            file: "./dist/ionic-hide-fab-onscroll.umd.js",
            format: "umd",
            name: "ionicHideFabOnscroll"
        }]
    }
];