const handleCategory = async() =>{
    const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();

    const tabContainer = document.getElementById('tab-container');

    data.data.forEach((category)  =>{
        const tabContainerDiv = document.createElement('div');
        tabContainerDiv.innerHTML = `
        <a class="tab">${category.category}</a> 
        `;

        tabContainer.appendChild(tabContainerDiv);
    });

    console.log(data.data);
}

handleCategory();