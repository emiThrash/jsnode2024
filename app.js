document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById('category');
    
    fetch('https://api.escuelajs.co/api/v1/categories', { method: 'GET', headers: { accept: 'application/json' } })
        .then(response => response.json())
        .then(categories => {
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.textContent = category.name;
                categorySelect.appendChild(option);
            });
        })
        .catch(err => console.error(err));
});