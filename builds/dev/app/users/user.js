;(function() {
  'use strict';

  var listJson = [
    {
      "_id": "56485a274a4a0c34b7996668",
      "index": 0,
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Nona Mcconnell",
      "company": "MOLTONIC",
      "email": "nonamcconnell@moltonic.com",
      "about": "Deserunt nostrud deserunt id laborum labore ipsum. Do excepteur consequat pariatur do do laborum elit ullamco esse officia labore sunt. Lorem exercitation consectetur pariatur anim minim laborum quis deserunt nostrud. Ut ea aliquip culpa incididunt ipsum.\r\n",
      "registered": "2015-05-16T05:23:56 -07:00"
    },
    {
      "_id": "56485a27565da1360c87e2b8",
      "index": 1,
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Antonia Church",
      "company": "SUNCLIPSE",
      "email": "antoniachurch@sunclipse.com",
      "about": "Sit sint laborum tempor pariatur esse occaecat id eiusmod. Voluptate anim amet laborum dolore deserunt ad in ad in veniam nisi est. Incididunt deserunt exercitation incididunt id nisi. Et sunt laborum cillum ut non.\r\n",
      "registered": "2014-03-01T02:40:38 -07:00"
    },
    {
      "_id": "56485a27f0f768e50ec15154",
      "index": 2,
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Mona Elliott",
      "company": "RODEOLOGY",
      "email": "monaelliott@rodeology.com",
      "about": "Et magna veniam nulla minim officia magna ullamco ad. Pariatur officia in deserunt aliquip ullamco pariatur quis occaecat dolor nisi. Do incididunt minim irure et dolor eu cupidatat elit enim ea. Aliquip eu aliqua ipsum ex. Excepteur ut incididunt voluptate duis. Nulla consectetur et nulla reprehenderit.\r\n",
      "registered": "2014-09-10T03:19:38 -07:00"
    },
    {
      "_id": "56485a277b392d270ca7ca12",
      "index": 3,
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "name": "Latoya Cooke",
      "company": "BLEEKO",
      "email": "latoyacooke@bleeko.com",
      "about": "Proident deserunt proident proident duis est culpa qui minim deserunt do deserunt. Et esse eiusmod laboris veniam reprehenderit occaecat labore laboris anim officia deserunt reprehenderit et. Sint sint est ut officia eu sunt eu. Ad deserunt excepteur consectetur culpa adipisicing nulla eu. Sunt excepteur et cupidatat mollit officia ipsum elit consequat id in laboris.\r\n",
      "registered": "2015-08-11T01:23:13 -07:00"
    },
    {
      "_id": "56485a2733056370ba33d611",
      "index": 4,
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Angie Duran",
      "company": "DEEPENDS",
      "email": "angieduran@deepends.com",
      "about": "Esse commodo incididunt eiusmod est. Sit tempor ipsum excepteur non labore eu dolor in qui excepteur laboris nulla ad id. Duis cupidatat enim fugiat dolor deserunt. Cillum officia consectetur nostrud esse est ad exercitation ad veniam ipsum id minim dolor consectetur.\r\n",
      "registered": "2015-04-29T11:15:29 -07:00"
    },
    {
      "_id": "56485a2761769d574c2f5875",
      "index": 5,
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Beatrice Valentine",
      "company": "GEEKNET",
      "email": "beatricevalentine@geeknet.com",
      "about": "Consectetur consectetur laborum quis sint cillum laborum officia in eu laboris cupidatat nulla est. Minim fugiat enim ullamco culpa esse elit velit. Qui consequat amet amet in proident et enim ea quis ea. Ullamco cupidatat in ad cupidatat minim anim voluptate.\r\n",
      "registered": "2015-08-29T11:45:06 -07:00"
    },
    {
      "_id": "56485a27281f06407ae49961",
      "index": 6,
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Elvia Shelton",
      "company": "NEBULEAN",
      "email": "elviashelton@nebulean.com",
      "about": "Mollit ipsum elit consectetur pariatur tempor officia commodo consectetur laborum nulla incididunt est sunt sunt. Nisi elit ullamco commodo sunt dolore. Anim ex ut consequat ipsum pariatur nisi ullamco sit ipsum tempor est cupidatat. Deserunt deserunt nulla ut dolore voluptate dolore ullamco minim exercitation commodo enim tempor. Dolor ullamco adipisicing laborum consequat nostrud reprehenderit sint.\r\n",
      "registered": "2015-02-09T10:30:35 -07:00"
    },
    {
      "_id": "56485a2796a8be30f51939f5",
      "index": 7,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "name": "Hyde Stewart",
      "company": "ISOLOGICA",
      "email": "hydestewart@isologica.com",
      "about": "Sunt ut aliquip ex sint occaecat ad. Occaecat ea pariatur ex laboris ad ex ullamco esse. Aute sit Lorem tempor ullamco nisi labore veniam quis aliquip consequat. Quis aliquip mollit ipsum ipsum minim occaecat eu incididunt pariatur consequat.\r\n",
      "registered": "2015-07-05T07:02:29 -07:00"
    },
    {
      "_id": "56485a27c2ba08a271d7a7d5",
      "index": 8,
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "name": "Snyder Estes",
      "company": "HINWAY",
      "email": "snyderestes@hinway.com",
      "about": "Lorem duis pariatur mollit adipisicing qui ipsum. Dolore duis in aliqua tempor consectetur anim culpa ut pariatur. Elit do aute ea voluptate ullamco quis ut pariatur reprehenderit reprehenderit irure irure cillum. Ut mollit nulla voluptate cillum ipsum id in consectetur enim nostrud. In ex duis culpa occaecat adipisicing aliqua sint ad nisi.\r\n",
      "registered": "2015-02-08T10:26:07 -07:00"
    },
    {
      "_id": "56485a2723239586edca7cd2",
      "index": 9,
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Kim Schneider",
      "company": "BIOSPAN",
      "email": "kimschneider@biospan.com",
      "about": "Sint ex adipisicing quis ea. Deserunt excepteur velit nisi sint velit commodo incididunt occaecat adipisicing esse cillum. Esse cillum amet fugiat labore laborum dolor. Magna amet enim nisi nulla enim veniam nisi culpa.\r\n",
      "registered": "2014-02-12T08:52:49 -07:00"
    },
    {
      "_id": "56485a27803ac9416529d44f",
      "index": 10,
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Wilkerson Russo",
      "company": "IMAGINART",
      "email": "wilkersonrusso@imaginart.com",
      "about": "Officia eu occaecat incididunt enim consequat aute minim pariatur aliqua mollit aliquip ex velit amet. Pariatur eiusmod amet proident et magna cupidatat dolor eiusmod qui commodo ad. Qui veniam veniam sit Lorem tempor amet sunt tempor culpa aute elit.\r\n",
      "registered": "2015-09-08T12:47:04 -07:00"
    },
    {
      "_id": "56485a27e33fa4029e83a16d",
      "index": 11,
      "picture": "http://placehold.it/32x32",
      "age": 33,
      "name": "Patrice Francis",
      "company": "VIAGREAT",
      "email": "patricefrancis@viagreat.com",
      "about": "Consequat eiusmod sunt ex tempor dolore ex pariatur. Sunt officia et in anim sunt fugiat reprehenderit laboris aute. Mollit nulla veniam nulla eiusmod voluptate dolor minim exercitation culpa exercitation nisi. Laborum ad nulla sunt nulla qui eiusmod exercitation ipsum nulla labore. Ea ex sunt occaecat anim laborum duis officia in officia esse.\r\n",
      "registered": "2015-07-22T07:41:42 -07:00"
    },
    {
      "_id": "56485a27aa5ebcd507c47085",
      "index": 12,
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "name": "Nikki Alston",
      "company": "CUIZINE",
      "email": "nikkialston@cuizine.com",
      "about": "Et labore eiusmod officia voluptate nisi mollit in aute sunt. Quis eiusmod sit exercitation proident dolore fugiat minim sint ullamco consectetur. Tempor et duis qui enim labore qui aliqua enim velit velit.\r\n",
      "registered": "2015-09-13T01:24:18 -07:00"
    },
    {
      "_id": "56485a278d5b7c620452a54e",
      "index": 13,
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "name": "Aurora Jordan",
      "company": "ANDRYX",
      "email": "aurorajordan@andryx.com",
      "about": "Cupidatat culpa voluptate quis laboris esse ullamco id deserunt veniam nisi. Officia labore exercitation proident anim deserunt ullamco labore fugiat eu anim. Sunt cillum irure aliquip officia amet tempor. Sunt incididunt ex veniam labore ipsum ullamco. Ad sit incididunt sit proident Lorem cillum exercitation incididunt do. Ex consequat sunt culpa veniam aliqua laborum adipisicing sint.\r\n",
      "registered": "2015-04-07T02:50:44 -07:00"
    },
    {
      "_id": "56485a271431d702e186a1fa",
      "index": 14,
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Maldonado Singleton",
      "company": "UNIA",
      "email": "maldonadosingleton@unia.com",
      "about": "Culpa pariatur labore occaecat eiusmod Lorem dolore et ut nostrud amet quis non ea. Sit excepteur elit exercitation ea esse ullamco ipsum cupidatat proident et culpa ea. Labore exercitation tempor nulla est velit.\r\n",
      "registered": "2014-05-20T02:06:18 -07:00"
    },
    {
      "_id": "56485a270ca6c3e32ab9a8ae",
      "index": 15,
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Consuelo Salazar",
      "company": "GEOLOGIX",
      "email": "consuelosalazar@geologix.com",
      "about": "In deserunt ipsum consectetur minim ipsum consectetur cupidatat magna id. Dolor nostrud magna esse sit ad amet. Cupidatat fugiat id eiusmod aute aliqua sit tempor cupidatat elit cupidatat enim excepteur exercitation. Duis consectetur aliquip esse ut ullamco eiusmod ea non Lorem proident labore nulla veniam. Enim veniam irure ad veniam non Lorem dolore consectetur reprehenderit sunt.\r\n",
      "registered": "2015-05-07T04:37:39 -07:00"
    },
    {
      "_id": "56485a274239fdbe4b62f12d",
      "index": 16,
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "name": "Downs Bright",
      "company": "EARTHPLEX",
      "email": "downsbright@earthplex.com",
      "about": "Ipsum non sit anim qui minim cupidatat culpa. Laborum exercitation occaecat sint et cillum irure magna sit laborum cillum tempor proident ea. Enim ea laboris mollit Lorem et magna ea qui labore ea voluptate pariatur. Deserunt ea sit sunt dolore non culpa labore aliquip. Officia aliqua esse eiusmod aliquip nisi commodo labore deserunt et occaecat pariatur incididunt incididunt Lorem. Aute sint tempor eu amet.\r\n",
      "registered": "2014-08-18T10:10:34 -07:00"
    },
    {
      "_id": "56485a27d807c5eb66d0eae8",
      "index": 17,
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "name": "West Ray",
      "company": "MEDICROIX",
      "email": "westray@medicroix.com",
      "about": "Enim excepteur nostrud minim magna non laboris aute fugiat. Minim Lorem tempor incididunt veniam eiusmod id anim occaecat amet eu ipsum do excepteur dolor. Adipisicing cillum deserunt minim id amet qui. Pariatur culpa culpa non in reprehenderit.\r\n",
      "registered": "2014-01-06T02:29:34 -07:00"
    },
    {
      "_id": "56485a27c6930f7ca4f2bea0",
      "index": 18,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "name": "Wright Becker",
      "company": "STEELFAB",
      "email": "wrightbecker@steelfab.com",
      "about": "Ex aliquip occaecat est reprehenderit dolore. Dolore aute aliquip minim cillum sunt. Nisi minim eu et ullamco pariatur veniam occaecat cupidatat cillum. Sint enim elit elit ex esse eiusmod enim. Id Lorem mollit nisi culpa enim deserunt occaecat deserunt et nisi. Occaecat officia cillum Lorem esse quis. Duis ex aute excepteur qui magna mollit aliqua quis qui deserunt cillum.\r\n",
      "registered": "2015-04-10T05:45:22 -07:00"
    },
    {
      "_id": "56485a2752900dac975d71d1",
      "index": 19,
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "name": "Ava Mcfarland",
      "company": "MANTRIX",
      "email": "avamcfarland@mantrix.com",
      "about": "Dolor veniam veniam nisi officia aliqua eu excepteur irure cupidatat ullamco. Laborum laborum officia non sint laborum voluptate excepteur aliqua voluptate Lorem. Incididunt veniam ut laboris tempor mollit consectetur anim. Adipisicing sint ipsum elit ea et aliqua ad Lorem officia proident dolore aliquip. Veniam proident minim nulla eiusmod aliqua esse qui labore aute cupidatat. Minim quis officia reprehenderit nisi exercitation laborum exercitation est minim. Aute incididunt elit amet magna proident ad ad aliquip.\r\n",
      "registered": "2014-11-06T07:27:21 -07:00"
    },
    {
      "_id": "56485a27d2013f4dc6ea0dea",
      "index": 20,
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "name": "Socorro Merrill",
      "company": "UTARIAN",
      "email": "socorromerrill@utarian.com",
      "about": "Do fugiat commodo ea sit occaecat qui proident Lorem nisi. Magna mollit laboris cupidatat dolore amet. Pariatur id officia exercitation consequat culpa. Adipisicing magna eiusmod ex minim est nisi adipisicing minim velit est. Ea sunt reprehenderit irure sint exercitation deserunt in do irure et culpa labore aute.\r\n",
      "registered": "2015-05-13T06:41:04 -07:00"
    },
    {
      "_id": "56485a27671a99460c8b9582",
      "index": 21,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "name": "Irwin Torres",
      "company": "ISOTRACK",
      "email": "irwintorres@isotrack.com",
      "about": "Officia ullamco quis nisi ad velit duis deserunt pariatur aute. Excepteur do sint qui culpa nostrud aliquip exercitation culpa commodo ut in commodo. Quis velit in aute eiusmod non id pariatur cillum quis ipsum id ipsum quis qui. Magna in ad dolore incididunt elit nulla sint in velit proident non sint.\r\n",
      "registered": "2015-10-05T07:39:08 -07:00"
    },
    {
      "_id": "56485a2784001988ea502aa9",
      "index": 22,
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Newman Howe",
      "company": "INTRAWEAR",
      "email": "newmanhowe@intrawear.com",
      "about": "Minim duis in nisi exercitation reprehenderit magna sunt dolor eiusmod eiusmod. Voluptate duis id sint do ad. Tempor laborum nostrud incididunt voluptate quis ullamco commodo aliquip adipisicing minim velit laboris velit elit.\r\n",
      "registered": "2014-07-27T03:40:35 -07:00"
    },
    {
      "_id": "56485a270e1a2d40a268c007",
      "index": 23,
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "name": "Lynnette Nieves",
      "company": "SONIQUE",
      "email": "lynnettenieves@sonique.com",
      "about": "Sunt commodo ullamco aute deserunt nulla reprehenderit ipsum incididunt ad qui culpa dolor. Et ullamco commodo velit fugiat. Cupidatat elit et mollit ad mollit id fugiat Lorem. Incididunt et fugiat do id officia eu elit consequat aute eiusmod. Cupidatat irure ipsum adipisicing eiusmod sunt laboris esse ut.\r\n",
      "registered": "2015-03-28T10:29:15 -07:00"
    },
    {
      "_id": "56485a27cb93e2e391335cf9",
      "index": 24,
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "name": "Bishop Palmer",
      "company": "AUTOMON",
      "email": "bishoppalmer@automon.com",
      "about": "Do voluptate voluptate eiusmod cupidatat est officia do in. Laboris sint duis eiusmod sunt quis non incididunt consectetur. Cillum cillum ex cupidatat adipisicing irure voluptate ullamco non aute adipisicing deserunt irure ipsum velit. Adipisicing duis velit incididunt fugiat exercitation aliqua labore Lorem mollit eiusmod. Aliquip culpa cillum sint commodo sunt est consectetur exercitation et laborum. Dolore eiusmod dolore irure non cupidatat excepteur eiusmod ipsum duis eu dolore velit officia laboris. Ipsum fugiat sint laboris fugiat.\r\n",
      "registered": "2014-01-17T03:14:01 -07:00"
    },
    {
      "_id": "56485a2776d93c3224261897",
      "index": 25,
      "picture": "http://placehold.it/32x32",
      "age": 39,
      "name": "Cruz Cruz",
      "company": "GRONK",
      "email": "cruzcruz@gronk.com",
      "about": "Adipisicing dolore pariatur aute sunt deserunt ut occaecat aute officia fugiat. Officia eu ad Lorem ad ullamco exercitation commodo consequat elit. Elit non do cillum sint nostrud labore. Laborum occaecat proident in laborum irure incididunt consectetur cupidatat.\r\n",
      "registered": "2014-03-26T02:15:37 -07:00"
    }
  ];

  angular
    .module('fitness.users', [
      'ngRoute'
    ])
    .controller('UserCtrl', UserController)
    .config(UserConfig);

    function UserController() {
      var that = this;
      that.users = listJson;
    }


    function UserConfig($routeProvider) {
      $routeProvider
        .when( '/users', {
          templateUrl: 'app/users/list_users.html',
          controller: 'UserCtrl',
          controllerAs: 'uc'
        });
    }
})();