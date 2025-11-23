export const fileSystem = {
    JavaScript: {
      type: 'folder',
      files: {
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
      },
    },
    Python: {
      type: 'folder',
      files: {
        'listComp': {
          type: 'file',
          title: 'List Comprehension',
          lines: [
            {
              code: 'squares = [x**2 for x in range(10)]',
              breakdown: [
                { part: 'squares =', explanation: 'Creates a variable named squares' },
                { part: '[x**2 for x in range(10)]', explanation: 'List comprehension that creates a list' },
                { part: 'x**2', explanation: 'Squares each number (x to the power of 2)' },
                { part: 'for x in range(10)', explanation: 'Iterates through numbers 0 to 9' },
              ],
            },
          ],
        },
        'dictAccess': {
          type: 'file',
          title: 'Dictionary Access',
          lines: [
            {
              code: "user = {'name': 'John', 'age': 30}",
              breakdown: [
                { part: 'user =', explanation: 'Creates a variable named user' },
                { part: '{}', explanation: 'Denotes a dictionary (key-value pairs)' },
                { part: "'name': 'John'", explanation: 'Key-value pair where name is the key and John is the value' },
                { part: "'age': 30", explanation: 'Key-value pair where age is the key and 30 is the value' },
              ],
            },
          ],
        },
      },
    },
    React: {
      type: 'folder',
      files: {
        'useState': {
          type: 'file',
          title: 'useState Hook',
          lines: [
            {
              code: 'const [count, setCount] = useState(0);',
              breakdown: [
                { part: 'const [count, setCount]', explanation: 'Destructures the state variable and its setter function' },
                { part: 'useState(0)', explanation: 'React hook that initializes state with a value of 0' },
                { part: 'count', explanation: 'The current state value' },
                { part: 'setCount', explanation: 'Function to update the count state' },
              ],
            },
          ],
        },
        'useEffect': {
          type: 'file',
          title: 'useEffect Hook',
          lines: [
            {
              code: 'useEffect(() => {',
              breakdown: [
                { part: 'useEffect', explanation: 'React hook for side effects' },
                { part: '() => {', explanation: 'Begins the effect function using arrow function syntax' },
              ],
            },
            {
              code: '  console.log("mounted");',
              breakdown: [
                { part: 'console.log()', explanation: 'Prints to the browser console' },
                { part: '"mounted"', explanation: 'Message printed when component mounts' },
              ],
            },
            {
              code: '}, []);',
              breakdown: [
                { part: '[]', explanation: 'Dependency array - empty means effect runs only on mount' },
                { part: '}, []', explanation: 'Closes the useEffect hook' },
              ],
            },
          ],
        },
      },
    },
  };