const totalCount = document.getElementById('total-count');
const applicationContainer = document.getElementById('applications-container');
const searchValue = document.getElementById('search-id');

const savedApplications = localStorage.getItem("hostelApplications");

const applications = savedApplications ? JSON.parse(savedApplications) : [];

const statusFilter = document.getElementById('status-filter');

totalCount.textContent = applications.length;

function renderApplications(applicationsToRender) {
    applicationContainer.innerHTML = ""
    applicationsToRender.forEach(application => {
        const card = document.createElement("div");
        card.classList.add("application-card");
        card.innerHTML = `
    <h3>${application.applicationId}</h3>
    <p>${application.fullName}</p>
    <p>${application.rollNumber}</p>
    <p>${application.email}</p>
    <p>${application.phone}</p>
    
    <label>Application Status</label>

    <select class="application-status"
        data-application-id="${application.applicationId}">
    <option value="Submitted" ${application.status === "Submitted" ? "selected" : ""}>Submitted</option>
    <option value="Under Review" ${application.status === "Under Review" ? "selected" : ""}>Under Review</option>
    <option value="Approved" ${application.status === "Approved" ? "selected" : ""}>Approved</option>
    <option value="Rejected" ${application.status === "Rejected" ? "selected" : ""}>Rejected</option>
</select>
   
`;
        applicationContainer.appendChild(card);
    });

}
renderApplications(applications);

searchValue.addEventListener("input", () => {
    applyFilters();
})

applicationContainer.addEventListener("change", (event) => {

    const application = applications.find((application) => {
        return event.target.dataset.applicationId === application.applicationId
    })
    application.status = event.target.value


    localStorage.setItem(
        "hostelApplications",
        JSON.stringify(applications)
    )
})



statusFilter.addEventListener("change", () => {
    applyFilters();
})



function applyFilters() {
    const filteredApplications = applications.filter((application) => {
        return application.applicationId.includes(searchValue.value) && (statusFilter.value === application.status || statusFilter.value === "all")
    })
    renderApplications(filteredApplications)

}