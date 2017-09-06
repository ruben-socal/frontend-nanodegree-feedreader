# Feed Reader Testing Project Using Jasmine

Jasmine is a Javascript Testing Framework [Jasmine documentation](http://jasmine.github.io). Jasmine was used to run tests on the Feed Reader application that will be listed below.

## Getting Started

1. Clone the files from github respository.
2. Open directory where you want to copy the files in git bash and copy and paste the following: **git clone https://github.com/ruben-socal/frontend-nanodegree-feedreader.git**
3. Change directory to **frontend-nanodegree-feedreader**
4. Open index.html file by double clicking on it
5. Once the index.html file is open its ready to use, the list of tests that have completed and passed can be seen at the bottom of the webpage.

## RSS Feeds Suite
1. Created test suite named `"RSS Feeds"`.
2. This test loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
3. This test loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

## The Menu Suite
3. Created Test suite named `"The menu"`.
4. This test ensures the menu element is hidden by default.
5. This test ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.

## Initial Entries Suite
6. Created test suite named `"Initial Entries"`.
7. This test ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

## New Feed Selection Suite
8. Created test suite named `"New Feed Selection"`.
9. This test ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.



