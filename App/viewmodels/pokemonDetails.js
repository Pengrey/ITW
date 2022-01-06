define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = 'http://ieeta-cloudpt.web.ua.pt/itw/pokemons/api/Pokemons/';
        self.displayName = 'Pokemón Details';
    };

    return vm;
});