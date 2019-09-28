export default {
  'request_url': 'https://api.xx.com/people/123',
  'title': {
    'name': 'Basic Info',
    'index': 'people.basic_info'
  },
  'columns': [
    {
      'name': 'User Id',
      'value': '1',
      'index': 'uid',
      'type': 'string'
    },
    {
      'name': 'Name',
      'value': '小亦',
      'index': 'name',
      'type': 'string',
      'require': true
    },
    {
      'name': 'Type',
      'value': 'Researcher',
      'index': 'type',
      'type': 'enum',
      'options': ['Researcher', 'Administration', 'Visitor', 'Postdoctoral', 'Student']
    },
    {
      'name': 'Status',
      'value': 'Normal',
      'index': 'status',
      'type': 'enum',
      'options': ['Normal', 'On vacation', 'Dismissed', 'Abnormal']
    },
    {
      'name': 'Identity Type',
      'value': 'ID Card',
      'index': 'identity_type',
      'type': 'enum',
      'options': ['ID Card', 'Passport']
    },
    {
      'name': 'Identity Number',
      'value': '123',
      'index': 'identity_no',
      'type': 'string'
    },
    {
      'name': 'Birth Date',
      'value': '1971-04-01',
      'index': 'birth_date',
      'type': 'date'
    },
    {
      'name': 'Contact',
      'value': '9309',
      'index': 'phone',
      'type': 'string',
      'editable': true
    },
    {
      'name': 'Email',
      'value': 'hhh@hhh.com',
      'index': 'email',
      'type': 'string',
      'editable': true
    },
    {
      'name': 'Political Status',
      'value': '群众',
      'index': 'political_status',
      'type': 'enum',
      'options': ['群众', '党员', '团员']
    },
    {
      'name': 'Entry Date',
      'value': '2015-09-01',
      'index': 'entry_date',
      'type': 'date'
    },
    {
      'name': 'Departure Date',
      'value': '2022-06-01',
      'index': 'departure_date',
      'type': 'date'
    },
    {
      'name': 'Gender',
      'value': 'Male',
      'index': 'gender',
      'type': 'enum',
      'options': ['Male', 'Female', 'Unknown']
    },
    {
      'name': 'Lab',
      'value': 'Xintong',
      'index': 'lab',
      'type': 'reference',
      'option_url': '/options/lab',
      'editable': true
    },
    {
      'name': 'Describe',
      'value': 'Hello World',
      'index': 'describe',
      'type': 'text',
      'editable': true
    }
  ]
}
