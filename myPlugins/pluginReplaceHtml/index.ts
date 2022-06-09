const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        `Vite App`,
        `hello world`
      )
    }
  }
}
export default htmlPlugin