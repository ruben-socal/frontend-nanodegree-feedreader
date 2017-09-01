# Feed Reader Testing Project Using Jasmine

Jasmine is a Javascript Testing Framework [Jasmine documentation](http://jasmine.github.io). Jasmine was used to run tests on the Feed Reader application that will be listed below.

## Getting Started

1. Download the files from [link to github!](https://github.com/ruben-socal/frontend-nanodegree-feedreader)
2. Once the link is open, click on green button that says **clone or dowwload**
3. Once you click on the green button, choose **Download zip**
4. Once the zip file has been downloaded, click on zip file and extract files. [extract files on windows](https://support.microsoft.com/en-us/help/14200/windows-compress-uncompress-zip-files), [extract files on a Mac](http://support.topspinmedia.com/hc/en-us/articles/204262713-How-to-extract-a-zip-file-on-a-Mac)
2. Locate extracted files directory: **frontend-nanodegree-feedreader**
3. Open index.html file by double clicking on it
4. Once the index.html file is open its ready to use.
5. The list of tests that have completed and passed can be seen at the bottom of the webpage.

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

## New Feed Selection
8. Created test suite named `"New Feed Selection"`.
9. This test ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.



