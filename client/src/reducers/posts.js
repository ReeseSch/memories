/* eslint-disable import/no-anonymous-default-export */
export default (posts = [], action) => {
  // if(action.type === 'CREATE') {
  //     return
  // }
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
