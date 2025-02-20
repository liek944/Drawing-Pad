
document.addEventListener('DOMContentLoaded', () => {
    // Get references to our DOM elements
    const container = document.querySelector('.container');
    const resetButton = document.querySelector('.reset-button');
    
    // Function to create the grid
    function createGrid() {
        // Calculate total number of squares needed (16x16 = 256)
        const totalSquares = 16 * 16;
        
        // Create each square and add it to the container
        for (let i = 0; i < totalSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            
            // Add event listener to maintain the colored state after hover
            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = '#3498db';
            });
            
            container.appendChild(square);
        }
    }
    
    // Function to reset the grid
    function resetGrid() {
        // Clear the color from all squares
        document.querySelectorAll('.grid-square').forEach(square => {
            square.style.backgroundColor = '';
        });
    }
    
    // Add click event listener to reset button
    resetButton.addEventListener('click', resetGrid);
    
    // Create the initial grid when the page loads
    createGrid();
});