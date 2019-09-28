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
      'value': 'Xintong',
      'editable': true
    }, {
      'name': 'Relationship',
      'index': 'relationship',
      'type': 'enum',
      'options': ['父母', '子女', '配偶'],
      'value': '子女',
      'editable': true
    }, {
      'name': 'Contact',
      'index': 'phone',
      'type': 'string',
      'value': '0530',
      'editable': true
    }
  ]
}
