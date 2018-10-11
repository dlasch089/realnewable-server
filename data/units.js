'use strict';

const units = [{
  title: 'HTML Intro 1',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: ['www.google.com'],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Intro 1',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Pair Programming',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 30,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Semantics & A11y 1',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Functions & Scope',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays 1',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Objects',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Intro',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Styling',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Responsive Web Design',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Flexbox',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays .map + .reduce + .filter',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays .sort + .reverse + . splice',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Intro 2',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Intro 2',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS functions scope',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Intro 3',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Conditionals & Loops',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Semantics & A11y 2',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Codepen Arrays & Objects',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Layout',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Links',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Typography',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML + CSS Add Header & Footer',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Diagrams',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Role Play Debugger',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Diagram',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Diagram',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Role-Play Card Deck Arrays',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Array functions diagrams',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Role-Play Bubble Sort',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'History of the Web',
  mandatory: true,
  category: 'lessons',
  subCategory: 'talk',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Basics',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'pair-programming',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 4',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'pair-programming',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Intro 4',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'daily-exercise',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Functions & Arrays',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'daily-exercise',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 5',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'daily-exercise',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS all time movies 1',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'daily-exercise',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Intro 5',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Semantics & A11y 3',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 1',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 2',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone (CSS Responsive) 1',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Functions',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays 2',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Student Pages CSS',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS all time movies 2',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays 3',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 3',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone (CSS Responsive) 2',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Student Pages CSS Everything',
  mandatory: true,
  category: 'practice&reviews',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Welcome and Orientation',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'People & Stories',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Class Guidelines',
  mandatory: true,
  category: 'rituals',
  subCategory: 'deck',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Stand-Up + Kick-Off 1',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + Kick-off'
}, {
  title: 'Stand-Up + Kick-Off 2',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + Kick-Off'
}, {
  title: 'Stand-Up + Kick-Off 3',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + Kick-off'
}, {
  title: 'Stand-Up + Kick-Off 4',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + Kick-off'
}, {
  title: 'Stand-Up + Kick-Off 5',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + Kick-off'
}, {
  title: 'Course Overview',
  mandatory: true,
  category: 'rituals',
  subCategory: 'deck',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'BREAK 1',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 2',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 3',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 4',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 5',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 6',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 7',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 8',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 9',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 10',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 11',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 12',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 13',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 14',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 15',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 16',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 17',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 18',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 19',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 20',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}];

module.exports = units;
