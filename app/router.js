'use strict';
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/seckill', controller.mainController.custonIndex);
  router.get('/init', controller.inintController.initCounter);
};
