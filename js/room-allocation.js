const hostelsContainer = document.querySelector('.hostels-container');

const totalBeds = document.getElementById("total-beds");
const availableBeds = document.getElementById("available-beds");
const occupiedBeds = document.getElementById("occupied-beds");

const hostelFilter = document.getElementById("hostel-filter");

const savedApplications = localStorage.getItem("hostelApplications");

const applications = savedApplications
    ? JSON.parse(savedApplications)
    : [];

function updateBedStats() {

    let total = 0
    let available = 0
    let occupied = 0

    window.hostels.forEach((hostel) => {

        hostel.doubleRooms.forEach((doubleRoom) => {
            doubleRoom.beds.forEach((bed) => {
                if (bed.status === "Available") {
                    available++;
                }
                else if (bed.status === "Occupied") {
                    occupied++;
                }
                total++;

            });

        });
        if (hostel.singleRoomCount > 0) {
            hostel.singleRooms.forEach((singleRoom) => {
                singleRoom.beds.forEach((bed) => {
                    if (bed.status === "Available") {
                        available++;
                    }
                    else if (bed.status === "Occupied") {
                        occupied++;
                    }
                    total++;

                });

            });
        }

    });
    occupiedBeds.innerText = occupied;
    availableBeds.innerText = available;
    totalBeds.innerText = total;

}

updateBedStats();

function getApplicationById(applicationId) {

    return applications.find((application) => {
        return application.applicationId === applicationId;
    });

}


function renderRooms(roomArray, roomsGrid) {
    roomArray.forEach((room) => {
        
        const roomCard = document.createElement('div');
        roomCard.classList.add("room-card")
        roomCard.innerHTML = `
        <h5>Room ${room.roomNumber}</h5>
        <div class="beds-container"></div>
         `
        roomsGrid.appendChild(roomCard)

        const bedsContainer = roomCard.querySelector(".beds-container");


        room.beds.forEach((bed) => {

            const bedCard = document.createElement("div");

            let statusClass;

            if (bed.status === "Available") {
                statusClass = "status-available";
            } else {
                statusClass = "status-occupied";
            }

            bedCard.classList.add("bed-card");
            bedCard.classList.add(statusClass);

            bedCard.innerHTML = `
                <h5>Bed ${bed.bedNumber}</h5>
                <h5>${bed.status}</h5>
            `;

            bedsContainer.appendChild(bedCard);
        })
    })
}

function renderHostels() {
    hostelsContainer.innerHTML = "";

    const selectedHostel = hostelFilter.value;

    window.hostels.forEach((hostel) => {
        if (selectedHostel !== "all" &&
            hostel.hostelId !== selectedHostel) {
            return;
        }
        const hostelCard = document.createElement("div");
        hostelCard.classList.add("hostel-card");
        hostelCard.innerHTML = `
    <h4>Hostel ${hostel.hostelId}</h4>
    <div class="rooms-grid"></div>
    `
        hostelsContainer.appendChild(hostelCard);
        const roomsGrid = hostelCard.querySelector(".rooms-grid");
        renderRooms(hostel.doubleRooms, roomsGrid);

        if (hostel.singleRoomCount > 0) {
            renderRooms(hostel.singleRooms, roomsGrid);
        }


    })
}

function populateHostelFilter() {

    window.hostels.forEach((hostel) => {

        const option = document.createElement("option");

        option.value = hostel.hostelId;
        option.textContent = hostel.hostelId;

        hostelFilter.appendChild(option);
    });
}

populateHostelFilter();
renderHostels();


hostelFilter.addEventListener("change", () => {
    renderHostels();
});

yearFilter.addEventListener("change", () => {
    renderHostels();
});