const loadPhone = async(searchText) =>  {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data= await res.json();
    const phones = data .data;
    // console.log(phones);
    displayPhones(phones);
}
//  loadPhone();

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    phones.forEach(phone => {
        // console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `mx-auto my-8 card card-side bg-gray-100 p-5 shadow-xl`;
        phoneCard.innerHTML = `
        <div class="mx-auto my-8 card card-side bg-gray-100 shadow-xl">
                    <figure><img src="${phone.image}" alt="Movie"/></figure>
                    <div class="card-body">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>Click the button to watch on Jetflix app.</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">BUY NOW</button>
                      </div>
                    </div>
                  </div> 
        `;
        phoneContainer.appendChild(phoneCard);
    })
}

// handle search button 
const handleSearch = () =>{
    // console.log('search handle')
    const  searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText);
    
}