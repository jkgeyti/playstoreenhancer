Play Store Enhancer
=================

A bookmarklet for viewing installed/bougt apps. Adds the following features to [your account page](https://play.google.com/store/account):

- Fetch *all* apps automatically
- Search, sort, and filter all columns
- Show paid apps only

No login required, no app installation, no spooky permissions - just a simple bookmarklet spicing up your account page!

## Installation and Usage

1. Drag the link below to your bookmarks bar:

----------
> # [Play Store Enhancer](javascript:(function(){$('head').append('%3Cscript%20src=%22https://raw.github.com/jkgeyti/playstoreenhancer/gh-pages/bookmarklet.js%22%3E%3C/script%3E');})();)

----------    

2. Go to [your account page](https://play.google.com/store/account).
3. Click your new bookmarklet.

### Installation for the paranoid
The bookmarklet above fetches the play store enhancer scripts directly from github, and injects it into the play store page. That way, you always have the newest version available. Alternatively, you generate an "offline" bookmarklet yourself by copying the [source](https://github.com/jkgeyti/playstoreenhancer/blob/gh-pages/bookmarklet.js) into [bookmarkleter](http://chriszarate.github.io/bookmarkleter/).

### Supported browsers

The bookmarklet has been tested in 

- Opera 18
- Chrome 31
- Firefox 25