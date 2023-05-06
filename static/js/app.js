
const data = [
    {   
        id : 1,
        image : "./static/images/discover_section_images/john-mcarthur-703645-unsplash.png",
        title : "FLIGHT BOOK",
        paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
    },
    {
        id :  2,
        image : "./static/images/discover_section_images/shawn-lee-785068-unsplash.png",
        title : "HOTEL & RESORT BOOKING",
        paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",

    },
    {
        id : 3,
        image : "./static/images/discover_section_images/natalya-zaritskaya-144626-unsplash.png",
        title : "FAMILY TRIP PLANNER",
        paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",

    },
    {
        id : 4,
        image : "./static/images/discover_section_images/vidar-nordli-mathisen-559120-unsplash.png",
        title : "CRUISE TOUR",
        paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",

    },
    {
        id : 5,
        image : "./static/images/discover_section_images/robson-hatsukami-morgan-178532-unsplash.png",
        title : "FIRE CAMP",
        paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",

    },
    {
        id : 6,
        image : "./static/images/discover_section_images/mimi-thian-737711-unsplash.png",
        title : "CORPORATE HOLIDAY",
        paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",

    },
];



const wrapper = document.querySelector('.wrapper');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-wrapper span');

// Add event listener to close modal button
closeModal.addEventListener('click', () => {
    modalWrapper.classList.remove('open');
});

// Call renderData function to render cards
renderData(data, wrapper);

// Render data into HTML cards
function renderData(arr, wrapper) {
    arr.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');

        const discoverCard = `
            <div>
                <img src="${element.image}" alt="plane">
                <h3>${element.title}</h3>
                <p>${element.paragraph}</p>
            </div>
        `;

        card.innerHTML += discoverCard;
        wrapper.append(card);

        // Add event listener to each card to show the modal
        card.addEventListener('click', () => {
            modalImg.setAttribute('src', element.image);
            modalTitle.textContent = element.title;
            modalParagraph.textContent = element.paragraph;
            modalWrapper.classList.add('open');
        });
    });
}

// Handle modal
const modalImg = document.createElement('img');
modalImg.classList.add('popupImg');

const modalTitle = document.createElement('h3');
modalTitle.classList.add('popuptitle');

const modalParagraph = document.createElement('p');
modalParagraph.classList.add('popupParagraph');

modal.append(modalImg, modalTitle, modalParagraph);


