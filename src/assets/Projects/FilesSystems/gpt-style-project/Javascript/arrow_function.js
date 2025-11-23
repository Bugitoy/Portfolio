export const arrowFunctionFile = {
    'arrowFunction': {
        type: 'file',
        title: 'Arrow Function',
        lines: [
          {
            code: 'const handleClick = (event) => {',
            breakdown: [
              { part: 'const', explanation: 'Declares a constant variable that cannot be reassigned' },
              { part: 'handleClick', explanation: 'The name of the function' },
              { part: '(event)', explanation: 'Parameter that receives the click event object' },
              { part: '=>', explanation: 'Arrow function syntax, shorthand for function declaration' },
            ],
          },
          {
            code: '  console.log(event);',
            breakdown: [
              { part: 'console.log()', explanation: 'Prints output to the browser console' },
              { part: 'event', explanation: 'The event object passed as a parameter' },
            ],
          },
          {
            code: '};',
            breakdown: [
              { part: '};', explanation: 'Closes the function declaration' },
            ],
          },
        ],
      },
}