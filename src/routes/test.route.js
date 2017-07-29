module.exports = {
  apply: (app) => {
    app
      .route('/test')
      /**
       * @api {get} /test Test connection
       * @apiName TestConnection
       * @apiGroup Test
       *
       * @apiSuccess {String} Success message.
       */
      .get((req, res) => res.end('Test connection'));
  },
};
