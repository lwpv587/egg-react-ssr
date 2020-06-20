
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
  router.get('/api/mydtl/:id', controller.my.index.detailApi);
  router.get('/user', controller.my.index.user);
  router.get('/api/user/add', controller.my.index.userAddApi);
  // my-end
  router.get('/*', controller.home.index.ssr);
};
