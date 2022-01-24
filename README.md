# rickroll.js

rickroll.js is a simple javascript function used to randomly rickroll someone in a page.

## Usage

```javascript
const rickroll = () => {
    setTimeout(() => {
        const a = document.createElement('a');
        a.setAttribute('href', 'https://youtu.be/dQw4w9WgXcQ');
        a.click();
    }, Math.random() * 100_000);
}
