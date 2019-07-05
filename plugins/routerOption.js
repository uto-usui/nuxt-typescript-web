export default ({ app, store }) => {
  app.router.afterEach((to, from) => {
    console.log('🚕 page move to', to.name)
    store.dispatch('global/setPageName', to.name)
  })
}
