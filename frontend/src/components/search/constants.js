const fieldValue = {
  Method: [ 'TDD', 'BDD', 'pair programming', 'planning poker', 'daily standup meetings', 'story boards', 'user story mapping', 'continuous integration', 'retrospectives', 'burn down charts', 'requirements prioritisation', 'version control', 'code sharing'],
  Methodlogy: ['Scrum', 'Waterfall', 'Spiral', 'XP', 'Rational Unified Process', 'Crystal', 'Clean room', 'Feature Driven Development', 'Model Driven Development', 'Domain Driven Development', 'Formal methods', 'Problem Driven Development', 'Cloud computing', 'Service Oriented Development', 'Aspect Oriented Development', 'Valuse Driven Development' , 'Product Driven Development', 'Agile'],
  Benefit: ['Performance', 'Improve code quality'],
  Participants: ['undergraduate students', 'postgraduate students', 'practitioners']
}

const searchField = [
  'Method',
  'Methodlogy',
  'Benefit',
  'Participants',
]

const operator = [
  'contains',
  'does not contain',
  'is equal to'
]

export {
  fieldValue,
  operator,
  searchField,
}
