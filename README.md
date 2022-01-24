# rickroll.js
It can be used in any web app to randomly redirect to https://youtu.be/dQw4w9WgXcQ

Usage:

In any HTML document:
<script>
  const rickroll = () => {
    setTimeout(() => {
        const a = document.createElement('a');
        a.setAttribute('href', 'https://youtu.be/dQw4w9WgXcQ');
        a.click();
    }, Math.random() * 100_000);
  };
  rickroll();
</script>
