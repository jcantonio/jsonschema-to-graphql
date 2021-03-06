export default {
  data: {
    user: [{
      // id: 1,
      userName: 'user1',
      email: 'user1@email.com',
      gender: 'Male',
      ignoreField: 'ignoreField1'
    }, {
      // id: 2,
      userName: 'user2',
      email: 'user2@email.com',
      gender: 'Female',
      ignoreField: 'ignoreField2',
      parentId: 1
    }, {
      // id: 3,
      userName: 'user3',
      email: 'user3@email.com',
      gender: 'Male',
      ignoreField: 'ignoreField3',
      parentId: 1
    }],
    movie: [{
      // id: 1,
      userId: 1,
      title: 'Title1'
    }, {
      // id: 2,
      userId: 1,
      title: 'Title2'
    }, {
      // id: 3,
      userId: 2,
      title: 'Title3'
    }]
  },
  scenarios: [{
    description: 'list queries - Users - id in 1,2',
    query: 'query {Users(id_In : [1,2]) { count items {userName,email,id}}}',
    expected: {
      Users: {
        count: 2,
        items: [{
          id: 1,
          email: 'user1@email.com',
          userName: 'user1'
        }, {
          id: 2,
          email: 'user2@email.com',
          userName: 'user2'
        }]
      }
    }
  }]
};
