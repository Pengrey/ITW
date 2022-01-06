define(['durandal/app'], function (app) {
    var vm = function () {
        console.log('ViewModel initiated...');
        //---Variáveis locais
        var self = this;
        var baseUri = 'http://ieeta-cloudpt.web.ua.pt/itw/pokemons/api/PokemonSpecies/GetPage';
        self.displayName = 'Pokemón Species List';
        self.error = ko.observable('');
        self.pagesize = 20;
        self.passingMessage = ko.observable('');
        self.records = ko.observableArray([]);
        //self.totalRecords = ko.observable(-1);
        self.totalRecords = ko.observable(250);
        self.currentPage = ko.observable(1);
        self.previousPage = ko.computed(function () {
            return self.currentPage() * 1 - 1;
        }, self);
        self.nextPage = ko.computed(function () {
            return self.currentPage() * 1 + 1;
        }, self);
        self.fromRecord = ko.computed(function () {
            return self.previousPage() * self.pagesize + 1;
        }, self);
        self.toRecord = ko.computed(function () {
            return Math.min(self.currentPage() * self.pagesize, self.totalRecords());
        }, self);
        self.totalPages = ko.computed(function () {
            return Math.ceil(self.totalRecords() / self.pagesize);
        }, self);
        self.pageArray = function () {
            var list = [];
            var size = Math.min(self.totalPages(), 9);
            var step;
            if (size < 9 || self.currentPage() === 1)
                step = 0;
            else if (self.currentPage() >= self.totalPages() - 4)
                step = self.totalPages() - 9;
            else
                step = Math.max(self.currentPage() - 5, 0);

            for (var i = 1; i <= size; i++)
                list.push(i + step);
            return list;
        };
        self.ordemID = function()  {
            $(idlol).addClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(generation).removeClass("mySelected");
            $(color).removeClass("mySelected");
            console.log('CALL: getSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/itw/pokemons/api/PokemonSpecies/GetPage';
            var composedUri = baseUri + "?page=1" + "&pageSize=" + 807;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data.Species);
                self.totalRecords(data.Total);
            });
        };
        self.ordemAlpha = function()  {
            $(alpha).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(color).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/GetAlpabeticalPage';
            var composedUri = baseUri + "?page=1" + "&pageSize=" + 807;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data.Species);
                self.totalRecords(data.Total);
            });
        };
        self.ordemBlack = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getBlackSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=black';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemYellow = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getYellowSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=yellow';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemWhite = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getWhiteSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=white';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemRed = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getRedSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=red';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemPurple = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getPurpleSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=purple';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemPink = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getPinkSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=pink';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGreen = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGreenSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=green';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemBlue = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getBlueSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=blue';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemBrown = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getBrownSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=brown';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGray = function()  {
            $(color).addClass("mySelected");
            $(generation).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGraySpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByColor?color=gray';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGenI = function()  {
            $(generation).addClass("mySelected");
            $(color).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGenISpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByGeneration?name=generation-i';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGenII = function()  {
            $(generation).addClass("mySelected");
            $(color).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGenIISpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByGeneration?name=generation-ii';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGenIII = function()  {
            $(generation).addClass("mySelected");
            $(color).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGenIIISpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByGeneration?name=generation-iii';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGenIV = function()  {
            $(generation).addClass("mySelected");
            $(color).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGenIVSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByGeneration?name=generation-iv';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGenV = function()  {
            $(generation).addClass("mySelected");
            $(color).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGenVSpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByGeneration?name=generation-v';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGenVI = function()  {
            $(generation).addClass("mySelected");
            $(color).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGenVISpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByGeneration?name=generation-vi';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        self.ordemGenVII = function()  {
            $(generation).addClass("mySelected");
            $(color).removeClass("mySelected");
            $(alpha).removeClass("mySelected");
            $(idlol).removeClass("mySelected");
            console.log('CALL: getGenVIISpecies...');
            var baseUri = 'http://ieeta-cloudpt.web.ua.pt/pokemons/api/PokemonSpecies/SpeciesByGeneration?name=generation-vii';
            var composedUri = baseUri;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data);
            });
        };
        //--- Page Events
        self.activate = function (id) {
            // Activation code here
            if (id)
                self.currentPage(id);
            console.log('CALL: getSpecies...');
            var composedUri = baseUri + "?page=" + self.currentPage() + "&pageSize=" + 807;
            ajaxHelper(composedUri, 'GET').done(function (data) {
                self.records(data.Species);
                self.totalRecords(data.Total);
            });
        };
        //--- Internal functions
        function ajaxHelper(uri, method, data) {
            self.error(''); // Clear error message
            return $.ajax({
                type: method,
                url: uri,
                dataType: 'json',
                contentType: 'application/json',
                data: data ? JSON.stringify(data) : null,
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log("AJAX Call[" + uri + "] Fail...");
                    self.error(errorThrown);
                }
            });
        }
    };

    return vm;
});

