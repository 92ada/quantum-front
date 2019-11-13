export default {
  'request_url': 'https://api.xx.com/people/123',
  'title': {
    'name': 'Basic Info',
    'index': 'people.basic_info'
  },
  'columns': [
    {
      'name': 'User Id',
      'index': 'uid',
      'type': 'string',
      'editable': true
    },
    {
      'name': 'Name',
      'index': 'name',
      'type': 'string',
      'require': true,
      'editable': true
    },
    {
      'name': 'Type',
      'index': 'type',
      'type': 'enum',
      'options': ['Researcher', 'Administration', 'Visitor', 'Postdoctoral', 'Student'],
      'editable': true
    },
    {
      'name': 'Status',
      'index': 'status',
      'type': 'enum',
      'options': ['Normal', 'On vacation', 'Dismissed', 'Abnormal'],
      'editable': true
    },
    {
      'name': 'Identity Type',
      'index': 'identity_type',
      'type': 'enum',
      'options': ['ID Card', 'Passport'],
      'editable': true
    },
    {
      'name': 'Identity Number',
      'index': 'identity_no',
      'type': 'string',
      'editable': true
    },
    {
      'name': 'Birth Date',
      'index': 'birth_date',
      'type': 'date',
      'editable': true
    },
    {
      'name': 'Contact',
      'index': 'phone',
      'type': 'string',
      'editable': true
    },
    {
      'name': 'Email',
      'index': 'email',
      'type': 'string',
      'editable': true
    },
    {
      'name': 'Political Status',
      'index': 'political_status',
      'type': 'enum',
      'options': ['群众', '党员', '团员'],
      'editable': true
    },
    {
      'name': 'Entry Date',
      'index': 'entry_date',
      'type': 'date',
      'editable': true
    },
    {
      'name': 'Departure Date',
      'index': 'departure_date',
      'type': 'date',
      'editable': true
    },
    {
      'name': 'Gender',
      'index': 'gender',
      'type': 'enum',
      'options': ['Male', 'Female', 'Unknown'],
      'editable': true
    },
    {
      'name': 'Lab',
      'index': 'lab',
      'type': 'reference',
      'option_url': '/options/lab',
      'editable': true
    },
    {
      'name': 'Describe',
      'index': 'describe',
      'type': 'text',
      'editable': true
    }
  ]
}
