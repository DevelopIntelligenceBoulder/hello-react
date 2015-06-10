(function() {
    'use strict';

    /**
     * Hello React Component.
     */
    DI.App.Hello = React.createClass({displayName: 'Hello',
        render: function() {
            return React.createElement('h1', null, 'Hello ', this.props.place);
        }
    });


})();