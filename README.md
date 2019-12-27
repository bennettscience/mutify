The [Spotify Web Player](https://open.spotify.com) injects ads periodically while you're listening. Normal ad blockers will prevent banner ads from appearing, but they do not catch the injected audio.

When an ad is playing, the tab title changes to "Advertisement - ...". This can be taken advantage of. The extension polls the Spotify tab every five seconds and reacts to the title. If the word "Advertisement" is present, the tab is automatically muted. The tab will un-mute automatically when the ads are finished, getting you back to your music.

## Inspiration

The ads injected by Spotify have a _way_ higher volume than the music we're usually listening to at home, which means we'd be diving for the volume controls. That was really obnoxious. This extension solves that problem.

This project is pure proof of concept and works as of December 2019. If it breaks, I might not work on fixing it.

[Here's a blog post with more details](https://blog.ohheybrian.com/2019/12/mutify-a-simple-ad-blocker/) if you're so inclined.

## Install

This isn't published in the Chrome Web Store. To install:

1. Use the green **Clone or download** button on the right and download the ZIP file.
2. Extract it somewhere.
3. Open a new Chrome tab and type in `chrome:extensions`
4. If **Developer Mode** isn't enabled, turn it on.
5. Click on **Load Unpacked**
6. Select the folder you just unzipped.

If Spotify is already playing, you'll need to reload the tab to activate the extension.

## Configuration options

There are none.

## What data can this extension see?

Nothing. It only runs on URLs matching `https://*.spotify.com/*` and doesn't track, store, or send inforamtion anywhere.

## Extensions have icons. Where is the icon for this?

Because there is no interaction needed on your part, there is no browser icon. There's nothing to click, nothing to see. Mutify runs in the background happily. You didn't do anthing wrong.

## Who made the icon?
The icon is ["Mute" by Thays Malcher](https://thenounproject.com/search/?q=mute&i=495279) from the [Noun Project](https://nounproject.com)

## I love this. Can I pay you?

Absolutely.