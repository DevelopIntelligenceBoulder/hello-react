(function() {
    'use strict';

    /**
     * Defining Hello React Component. This is syntactic sugar for
     *   a JavaScript Object Constructor Function.
     * @param Object Literal of Component properties
     */
    DI.App.Hello = React.createClass({
        //Used for debugging purposes
        // If using JSX this will be set automatically
        displayName: 'DI.App.Hello',
        /**
         * React life-cycle method used to return this component.
         *  Utilizes the properties and state placed into it.
         */
        render: function() {
            //Creating the React component as an <H1> element
            //Creating the Text of the H1 element as "Hello "
            //Injecting the "place" property into the Hello Component
            return React.createElement('h1', null, 'Hello ', this.props.place);
        }
    });


})();