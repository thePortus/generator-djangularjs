(function() {

'use strict';

(function() {
    describe('<%= camelizedName %> filter Spec', function() {
        // Initialize global variables
        var <%= camelizedName %>
        Filter;

        beforeEach(module(ApplicationConfiguration.name));

        beforeEach(inject(<%= camelizedName %>FilterInject));

        function <%= camelizedName %>FilterInject(_ <%= camelizedName %>
            Filter_) {
            <%= camelizedName %>
            Filter = _ <%= camelizedName %>
            Filter_;

            it('should be testable', inject(function() {
                expect(<%= camelizedName %>Filter).toBeDefined();
            }));

        }
    });
}());

})();
