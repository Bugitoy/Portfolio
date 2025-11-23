export const forLoopFile = {
    'forLoop': {
        type: 'file',
        title: 'For Loop Example',
        lines: [
          {
            code: 'for (i = 0; i < 5; i++)',
            breakdown: [
              { part: 'for', explanation: 'Specifies the beginning of a for loop' },
              { part: 'i = 0', explanation: 'Initialises the counter i' },
              { part: 'i < 5', explanation: 'Means the for loop can repeat 5 times' },
              { part: 'i++', explanation: 'Specifies post increment meaning the counter variable is incremented after each iteration' },
            ],
          },
          {
            code: 'console.log(i);',
            breakdown: [
              { part: 'console.log()', explanation: 'Prints output to the browser console' },
              { part: 'i', explanation: 'The current value of the counter variable' },
            ],
          },
        ],
      },
};