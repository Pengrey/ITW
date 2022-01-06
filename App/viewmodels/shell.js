define(['plugins/router', 'durandal/app'], function (router, app) {
    $("#searchtext").keypress()
    return {
        router: router,
        searchitem: ko.observable(""),
        search: function () {
            router.navigate("#search/" + this.searchitem())
        },
        activate: function () {
            router.map([
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'species', title: 'Species', moduleId: 'viewmodels/species', nav: true },
                { route: 'species(/:id)', title: 'Species', moduleId: 'viewmodels/species', hash: '#species', nav: false },
                { route: 'specieDetails(/:id)', title: 'Specie Details', moduleId: 'viewmodels/specieDetails', hash: '#specieDetails', nav: false },
                { route: 'pokemons', title: 'Pokemóns', moduleId: 'viewmodels/pokemons', nav: true },
                { route: 'pokemonDetails(/:id)', title: 'Pokemón Details', moduleId: 'viewmodels/pokemonDetails', hash: '#pokemonDetails', nav: false },                
                { route: 'search(/:id)', title: 'Pesquisar', moduleId: 'viewmodels/search', hash: '#search', nav: false },
                { route: 'compare', title: 'Compare', moduleId: 'viewmodels/compare', hash: '#compare', nav: false },
                { route: 'info(/:id)', title: 'Info', moduleId: 'viewmodels/info', hash: '#info', nav: true },
            
            ]).buildNavigationModel();
            
            return router.activate();
        },
        makeLight: function() {
            $("#lightToggle").css({"display":"none"});
            $("#darkToggle").css({"display":"block"});
            $(".dark").addClass("light").removeClass("dark")
            $(".darkLight").addClass("lightDark").removeClass("darkLight")
        },
        makeDark: function() {
            $("#darkToggle").css({"display":"none"});
            $("#lightToggle").css({"display":"block"});
            $(".light").addClass("dark").removeClass("light")
            $(".lightDark").addClass("darkLight").removeClass("lightDark")
        },
    };
});