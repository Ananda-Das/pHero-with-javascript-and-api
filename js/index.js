const handleCategory = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await res.json();

  const tabContainer = document.getElementById("tab-container");

  data.data.forEach((category) => {
    const tabContainerDiv = document.createElement("div");
    tabContainerDiv.innerHTML = `
        <a class="tab text-2xl tab-boxed " onclick="handleDataLoad('${category.category_id}')">${category.category}</a> 
        `;

    tabContainer.appendChild(tabContainerDiv);
  });

  // console.log(data.data);
};


let cardData = [];

const handleDataLoad = async(categoryId) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
  const data = await res.json();

  cardData = data.data;

  handleCategoryItem(cardData);
}

const handleCategoryItem = (data) => {
  // const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

  // const data = await res.json();

  // console.log(data.data);

  const cardContainer = document.getElementById("card-container");

  // if (data.length > 0) {
    cardContainer.innerText = "";
    data.forEach((video) => {

      const cardContainerDiv = document.createElement("div");

      const postTime = video?.others?.posted_date;
      const totalMinutes = Math.floor(postTime / 60);

      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      //   const postMinute =
      cardContainerDiv.innerHTML = `
        <div class="card w-72 bg-base-100 shadow-xl">
          <figure class="">
            <img class="w-auto h-[250px] p-3 rounded-sm relative" src="${video.thumbnail}" alt="Shoes" />
            <p class="absolute mb-[-160px] ml-[89px]">${
              postTime ? `<button class="bg-[#171717] text-white p-2 rounded-md">${hours} hrs ${minutes} min ago </button>` : ""
            }</p>
          </figure>
          <div class="card-body px-1 py-8 flex-row">
            <div class="card-footer flex justify-between mt-1 gap-2">
              <div class="flex">
                <div>
                  <div class="avatar">
                    <div class="w-14 rounded-full">
                      <img
                        src="${video.authors[0]?.profile_picture}"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-detaild-btn">
                <h6 class="text-[#171717] font-bold text-xl">${video.title}</h6>
                <div class="flex justify-start gap-2 mt-2">
                  <div class="">
                    <p class="text-gray-400 font-normal text-xl">${video?.authors[0]?.profile_name}</p>
                  </div>
                  <div class="">
                  ${
                    video.authors[0].verified
                      ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <g clip-path="url(#clip0_11_34)">
                        <path
                          d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z"
                          fill="#2568EF"
                        />
                        <path
                          d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z"
                          fill="#FFFCEE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_11_34">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>`
                      : ""
                  }
                  </div>
                </div>
                <p class="text-gray-400 font-normal text-xl text-left">${video?.others?.views} views</p>
                
              </div>
            </div>
          </div>
        </div>
        `;
      cardContainer.appendChild(cardContainerDiv);
    });
  // } else {
  //   // cardContainer.removeAttribute()
  //   // cardContainer.classList.add('grid-cols-1');
  //   cardContainer.innerHTML = `
  //   <div class="flex justify-center items-center w-full flex-col col-span-4 max-h-full">
  //       <img src="Icon.png" alt="">
  //       <p class="text-[#171717] font-bold text-2xl mt-6">Oops!! Sorry, There is no content here</p>
  //   </div>
  //   `;
  // }
};


// const sorting =  (newData) => {

//   const singleData = newData.map(element => {
//     const viwes = element.others.views
//     let viwesWithoutK = viwes.replace(/K/g, '')
//     const viwesNumber = parseFloat(viwesWithoutK)
//     const sort = sorting(tube)

//   })
//   singleData.sort((a, b) => {
//     return b - a
//   })
//   let sortedViewValues = singleData.forEach(parsedValue => {
//     const value = parsedValue + 'k'

//   })
//   return singleData;
// }

// const dataSort = async () => {
//   const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
//   const data = await res.json();

//   // console.log(data.data.sort());
//   // console.log(data.data[0].others.views);
//   // data.sort((a, b) => parseInt(b.others.views) - parseInt(a.others.views))

//   const singleData = data.data.map((element) => {
//     const views = element.others.views;
//     let viwesWithoutK = views.replace(/K/g, "");
//     const viwesNumber = parseFloat(viwesWithoutK);
//     // const sort = sorting(tube);
//     return viwesNumber;
//   });
//   // console.log(singleData.sort());

//   // console.log(singleData.sort((a, b) => parseInt(b.others.views) - parseInt(a.others.views)));

//   singleData.sort((a, b) => {
//     return b - a;
//   });

//   // console.log(singleData);

//   // const dataSortButton = document.getElementById('data-sort');

//   // handleCategoryItem(singleData);

//   // data.data.forEach((video) => {
//   // const viewArray = data.data.map(video.others.views);
//   // console.log(video.others.views);
//   // console.log(viewArray);
//   // console.log(viewArray);
//   // video.others.views.sort();
//   // const singleData = data.data.map(element => {
//   //       const viwes = element.others.views;
//   //       // let viwesWithoutK = viwes.replace(/K/g, '')
//   //       // const viwesNumber = parseFloat(viwesWithoutK)
//   //       // const sort = sorting(tube)
//   //       return viwes;

//   //     })
//   // console.log(singleData);
//   // });

//   // for datasort test
//   const tube = data.data;
//   if (isSorted) {
//     const sort = tube.sort((a, b) => {
//       return a.others.views - b.others.views;
//     });
//     console.log(sort);
//     displayTube(tube);
//   }
//   console.log(tube);
// };

handleCategory();
handleDataLoad("1000");

function dataSort(){
  cardData.sort((a,b)=>{
    const viewsA = parseInt(a.others.views);
    const viewsB = parseInt(b.others.views);
    return viewsB - viewsA;
  });
  handleCategoryItem(cardData);
}
