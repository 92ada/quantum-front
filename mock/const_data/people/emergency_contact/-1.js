export default {
  'title': {
    'name': 'Emergency Contact',
    'index': 'people.emergency_contact'
  },
  'columns': [
    {
      'name': 'Name',
      'index': 'name',
      'type': 'string',
      'editable': true
    }, {
      'name': 'Relationship',
      'index': 'relationship',
      'type': 'enum',
      'options': ['父母', '子女', '配偶'],
      'editable': true
    }, {
      'name': 'Contact',
      'index': 'phone',
      'type': 'string',
      'editable': true
    }
  ]
}

