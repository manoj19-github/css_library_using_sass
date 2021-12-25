import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    color: 'inherit',
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }]
  },
  body: {
    fontFamily: 'Poppins'
  },
  ul: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    listStyleType: 'none'
  },
  'a': {
    textDecoration: 'none'
  },
  hr: {
    border: [{ unit: 'px', value: 0 }],
    borderTop: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'dotted' }, { unit: 'string', value: '#efefef' }]
  },
  img: {
    maxWidth: [{ unit: '%H', value: 1 }]
  }
});
