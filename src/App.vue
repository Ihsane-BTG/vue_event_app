<template>
  <p>Simple text</p>
</template>

<script>
export default {
  data() {
    return {
      activePages: 0,
      pages: [
        {
          link: {text: 'home', url: 'index.html'},
          pageTitle: 'Home Page',
          content: 'This is home content.'
        },
        {
          link: {text: 'about', url: 'about.html'},
          pageTitle: 'About Page',
          content: 'This is about content.'
        },
        {
          link: {text: 'contact', url: 'contact.html'},
          pageTitle: 'Contact Page',
          content: 'This is contact content.'
        }
      ]
    }
  }
}
</script>