module.exports = function (plop) {
  plop.setHelper('lowercase', (str) => {
    if (str && typeof str === 'string') {
      return str.toLowerCase();
    }
    return '';
  });

  plop.setGenerator('component', {
    description: 'react component (eg. a button)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please (eg. CustomButton)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.tsx',
        templateFile: 'plop-templates/component.hbs',
      },
    ],
  });
};
