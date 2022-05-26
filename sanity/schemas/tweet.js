export default {
  name: 'tweet',
  title: 'tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
  {
    name:'blockTweet',
    title:'Block Tweet',
    description:'Admin Controls: Toggle if tweet is deemed inapproperiate',
    type:'boolean',
  },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'tweet image',
      type: 'string',
    },
]}
