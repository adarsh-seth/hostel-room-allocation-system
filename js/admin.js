const totalCount = document.getElementById('total-count');
const applicationContainer = document.getElementById('applications-container');
const searchValue = document.getElementById('search-id');
const runAllocationButton = document.getElementById("run-allocation");
const runResetButton = document.getElementById("reset-btn");
const loadDataButton = document.getElementById("load-btn");


const savedApplications = localStorage.getItem("hostelApplications");

const applications = savedApplications ? JSON.parse(savedApplications) : [];

const statusFilter = document.getElementById('status-filter');

totalCount.textContent = applications.length;

function renderApplications(applicationsToRender) {
    applicationContainer.innerHTML = "";

    [...applicationsToRender].reverse().forEach(application => {

        const statusClass = getStatusClass(application.status);

        const card = document.createElement("div");

        card.classList.add("application-card");

        card.innerHTML = `
            <div class="card-info">
                <h3>${application.applicationId}</h3>
                <p>${application.fullName}</p>
                <p>${application.rollNumber}</p>
                <p>Year: ${application.year}</p>
        
                <p>${application.email}</p>
                <p>${application.phone}</p>
            </div>

            <div class="card-status">
                <label>Application Status</label>
                <select class="application-status ${statusClass}"
                    data-application-id="${application.applicationId}">
                    <option value="Submitted" ${application.status === "Submitted" ? "selected" : ""}>Submitted</option>
                    <option value="Under Review" ${application.status === "Under Review" ? "selected" : ""}>Under Review</option>
                    <option value="Approved" ${application.status === "Approved" ? "selected" : ""}>Approved</option>
                    <option value="Rejected" ${application.status === "Rejected" ? "selected" : ""}>Rejected</option>
                </select>
            </div>
        `;

        
        if (application.allocation?.status === "Allocated") {

            card.innerHTML += `
                <div class="allocation-details">
                    <div class="status-header">
                        <h3>Room Allocation</h3>
                        <p>Your room has been allocated successfully.</p>
                    </div>

                    <div class="status-details">
                        <div class="status-item">
                            <span>Hostel</span>
                            <strong>${application.allocation.hostelId}</strong>
                        </div>

                        <div class="status-item">
                            <span>Room No.</span>
                            <strong>${application.allocation.roomNumber}</strong>
                        </div>

                        <div class="status-item">
                            <span>Bed No.</span>
                            <strong>${application.allocation.bedNumber}</strong>
                        </div>
                    </div>
                </div>
            `;

        } else if (application.allocation?.status === "Unallocated") {

            card.innerHTML += `
                <div class="allocation-pending">
                    <p>Room could not be allocated.</p>
                </div>
            `;

        } else if (application.status === "Approved") {

            card.innerHTML += `
                <div class="allocation-pending">
                    <p>Room allocation is pending.</p>
                </div>
            `;
        }

        applicationContainer.appendChild(card);
    });
}
renderApplications(applications);

searchValue.addEventListener("input", () => {
    applyFilters();
})

applicationContainer.addEventListener("change", (event) => {
    if (event.target.classList.contains("application-status")) {
        const application = applications.find((application) => {
            return event.target.dataset.applicationId === application.applicationId
        })
        application.status = event.target.value
        const newStatusClass = getStatusClass(application.status)

         event.target.classList.remove(
            "status-submitted",
            "status-review",
            "status-approved",
            "status-rejected"
        );

        event.target.classList.add(newStatusClass);

        localStorage.setItem(
            "hostelApplications",
            JSON.stringify(applications)
        )
    }


})

statusFilter.addEventListener("change", () => {
    applyFilters();
})

function applyFilters() {
    const filteredApplications = applications.filter((application) => {
        return application.applicationId.includes(searchValue.value) && (statusFilter.value === application.status || statusFilter.value === "all")
    })
    applicationContainer.innerHTML = "";
    if(filteredApplications.length === 0){
        const emptyCard = document.createElement('div')
        emptyCard.classList.add("empty-card")
        emptyCard.innerHTML = `
        <h4>No Applications Found</h4>
        <p>Try changing your search or status filter.</p>`

        applicationContainer.appendChild(emptyCard);
    }
    else{
    renderApplications(filteredApplications)
    }
}

function getStatusClass(status) {
    if (status === "Approved") {
        return "status-approved";
    } 
    else if (status === "Under Review") {
        return "status-review";
    } 
    else if (status === "Submitted") {
        return "status-submitted";
    } 
    else {
        return "status-rejected";
    }
}

runAllocationButton.addEventListener("click", () => {
    allocateRooms();
});

runResetButton.addEventListener("click", () => {
    if(confirm("Are you sure you want to reset all demo data? This will remove all applications and room allocations. This action cannot be undone.")){
        localStorage.removeItem("hostelApplications");
        localStorage.removeItem("hostelData");
        location.reload();
    }
})

loadDataButton.addEventListener("click", () => {
    console.log("Loading demo data...");
    if(confirm("Are you sure you want to load demo data? This will overwrite any existing applications and room allocations. ")){
        localStorage.setItem("hostelApplications", JSON.stringify(demoApplications));
        localStorage.removeItem("hostelData");
        location.reload();
    }
});
        
