exports = {
  onTicketCreateHandler: function (args) {
    console.log(args['data']['ticket']['model_id']);
  },
  onTopicCreateCallback: function (payload) {
    console.log(payload.data.topic.id);
  },
  onForumUpdateCallback: function (payload) {
    console.log(payload.account_id);
  },
  onForumCategoryUpdateCallback: function (payload) {
    console.log(payload.data.forum_category.id);
  },
};
