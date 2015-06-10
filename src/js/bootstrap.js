(function() {
    'use strict';

    //Bootstrap Hello React component to "app" HTML element
    React.render(
        React.createElement(DI.App.Hello, {place: 'World'}),
        document.getElementById('app')
    );

})();
