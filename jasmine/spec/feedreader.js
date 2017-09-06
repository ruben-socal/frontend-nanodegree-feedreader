/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is the second test - it loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        function checkURLs(feed) {
            it('allFeed url is defined', function() {
                // This covers all truthiness, including url.length === 0 and url === undefined!
                expect(feed.url).toBeTruthy();
            });
        }

        allFeeds.forEach(checkURLs);


        /* This is the third test - it loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         function checkNames(feed) {
            it('allFeed name is defined', function() {
                expect(feed.name).toBeTruthy();
            });
        }

        allFeeds.forEach(checkNames);
    });


    /* This test suite is named "The menu" */
    describe('The Menu', function() {

        /* This is the fourth test - it ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('default hide menu is defined', function() {
            // css hides menu when menu-hidden and slide-menu are visible
            var isHidden = $('body').hasClass('menu-hidden');
            expect(isHidden).toBe(true);
        });

         /* This is the fifth test - it ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('toggle shows/hides menu is defined', function() {
            // .click() is shorthand for .trigger('click')
            $('.menu-icon-link').click();
            var isVisible = $('body').hasClass( "menu-hidden" );
            expect(isVisible).toBe(false);
            $('.menu-icon-link').click();
            isVisible = $('body').hasClass( "menu-hidden" );
            expect(isVisible).toBe(true);
        });
    });

    /* This test suite is named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This is the sixth test - it ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // var feedEntry;
        beforeEach(function(done) {
            loadFeed(0,done);
        });
        it('loadFeed function completes with a single entry in feed comtainer', function() {
            var feedEntry = $('.feed .entry').length;
            expect(feedEntry).toBeGreaterThan(0);
        });
    });

    /* This test suite named is "New Feed Selection"
       I was able to complete this problem from the help of the
       Udacity forum at the following link:
       https://discussions.udacity.com/t/p6-new-feed-selection-test-question-problem/15562/2
    */
    describe('New Feed Selection', function() {
        /* This is the seventh test - it ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var oldFeed, newFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeed = $('.feed').html();
                done();
            });
        });
        it('loadFeed function changes content on feed', function(done) {
            loadFeed(1, function() {
                newFeed = $('.feed').html();
                expect(newFeed).not.toBe(oldFeed);
                done();
            });
        });
    });

}());
