
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/list', controller.home.index.list);
  router.get('/intro', controller.intro.intro.index);
  router.get('/detail/:id', controller.home.index.detail);
  router.get('/csr', controller.home.index.csr);
  router.get('/node', controller.home.index.node);
  router.get('/test/async', controller.test.test.asyncRender);
  // my-start
  router.get('/my', controller.my.index.list);
  router.get('/mydtl/:id', controller.my.index.detail);
  // my-end
  router.get('/*', controller.home.index.ssr);
};
