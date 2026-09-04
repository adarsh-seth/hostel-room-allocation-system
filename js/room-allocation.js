const hostelsContainer = document.querySelector('.hostels-container');

const totalBeds = document.getElementById("total-beds");
const availableBeds = document.getElementById("available-beds");
const occupiedBeds = document.getElementById("occupied-beds");

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


// const hostel = window.hostels.find((hostel) => {
//     return hostel.hostelNumber === 8;
// })
// const room = hostel.rooms.find((room) => {
//     return room.roomNumber === 801;
// })
// const bed = room.beds.find((bed) => {
//     return bed.bedNumber === 1;
// })
// bed.status = "Occupied"
// updateBedStats()
function renderRooms(roomArray,hostelCard) {
    roomArray.forEach((room) => {
            const roomCard = document.createElement('div');
            roomCard.classList.add("room-card")
            roomCard.innerHTML = `
        <h5>Room ${room.roomNumber}</h5>
        <div class="beds-container"></div>
         `
            hostelCard.appendChild(roomCard)

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

    window.hostels.forEach((hostel) => {
        const hostelCard = document.createElement("div");
        hostelCard.classList.add("hostel-card");
        hostelCard.innerHTML = `
    <h4>Hostel ${hostel.hostelId}</h4>
    `
        hostelsContainer.appendChild(hostelCard);

        renderRooms(hostel.doubleRooms,hostelCard)

        if (hostel.singleRoomCount > 0) {
            renderRooms(hostel.singleRooms,hostelCard)
        }


    })
}
renderHostels();
