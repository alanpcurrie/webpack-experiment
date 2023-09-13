module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
    rules: {
      'number-leading-zero': null,
      'rule-empty-line-before': [
        'always-multi-line',
        {
          except: ['first-nested'],
          ignore: ['after-comment'],
        },
      ],
    },
  };
