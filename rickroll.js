const rickroll = () => {
    setTimeout(() => {
        const a = document.createElement('a');
        a.setAttribute('href', 'https://youtu.be/dQw4w9WgXcQ');
        a.click();
    }, Math.random() * 100_000);
}
