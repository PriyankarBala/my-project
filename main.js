const flashcardsData = [
    {
      word: 'sumArray([1, 2, 3, 4, 5])',
      meaning: 'Output: 15',
    },
    {
      word: 'findMaxNumber([10, 5, 8, 20, 3])',
      meaning: 'Output: 20',
    },
    {
      word: 'filterOddNumbers([1, 2, 3, 4, 5])',
      meaning: 'Output: [1, 3, 5]',
    },
    {
      word: 'isPalindrome(radar)',
      meaning: 'Output: true',
    },
    {
      word: 'findMissingNumber([1, 2, 3, 5, 6])',
      meaning: 'Output: 4',
    },
    {
      word: 'findDuplicates([1, 2, 3, 2, 4, 5, 4, 6])',
      meaning: 'Output: [2, 4]',
    },
    
  ];
  
  const cardContainer = document.getElementById('card-container');
  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  
  const handleStart = () => {
    flashcardsData.forEach((item) => {
      //* Card add section
      const cardElement = document.createElement('div');
      cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full';
      cardElement.innerText = item.word;
      cardContainer.appendChild(cardElement);
  
      //* Card click event
      cardElement.addEventListener('click', () => {
        console.log(item.word);
        cardElement.classList.add('border-red-500');
        cardElement.innerText = item.meaning;
      });
    });
  
    resetButton.classList.remove('hidden');
    startButton.classList.add('hidden');
  };
  
  const handleReset = () => {
    cardContainer.innerHTML = '';
  
    startButton.classList.remove('hidden');
    resetButton.classList.add('hidden');
  };