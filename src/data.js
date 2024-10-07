export const initialData = {
    columns: {
      todo: {
        id: 'todo',
        title: 'To Do',
        items: [
          {
            id: '1',
            title: 'Design UI for Food Delivery App',
            description: 'Create a user-friendly interface using Figma/XD for a food delivery application.'
          },
          {
            id: '2',
            title: 'Update Website Content',
            description: 'Ensure all content is accurate and filled in for the digital marketing website.'
          },
        ],
      },
      inProgress: {
        id: 'inProgress',
        title: 'In Progress',
        items: [
          {
            id: '3',
            title: 'Test Website Functionality',
            description: 'Conduct thorough testing of the functionality of the Apartment Web Portal.'
          },
        ],
      },
      testing: {
        id: 'testing',
        title: 'Testing',
        items: [
          {
            id: '4',
            title: 'Review Apartment Web Portal',
            description: 'Re-check the UI and functionality of the Apartment Web Portal for any issues.'
          },
        ],
      },
      done: {
        id: 'done',
        title: 'Completed',
        items: [
          {
            id: '5',
            title: 'Fix Responsive Design Issues',
            description: 'Resolve all responsive design issues on the Accounting website for better user experience.'
          },
        ],
      },
    },
    columnOrder: ['todo', 'inProgress', 'testing', 'done'],
  };
  