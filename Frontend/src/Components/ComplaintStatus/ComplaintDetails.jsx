import img1 from "../../assets/figma/ProfilePic.png";

const complaintsData = [
    {
        "id": "1",
        "img": img1,
        "customer": "John Doe",
        "phone": "123-456-7890",
        "complaint": "Internet connection issue",
        "status": "Pending",
        "date": "2024-04-14",
        "state": "California",
        "city": "Los Angeles",
        "sector": "Residential",
        "type": "Technical"
    },
    {
        "id": "2",
        "img": img1,
        "customer": "Jane Smith",
        "phone": "987-654-3210",
        "complaint": "Slow internet speed",
        "status": "Pending",
        "date": "2024-04-15",
        "state": "New York",
        "city": "New York City",
        "sector": "Commercial",
        "type": "Service"
    },
    {
        "id": "3",
        "img": img1,
        "customer": "Alice Johnson",
        "phone": "456-789-0123",
        "complaint": "Billing discrepancy",
        "status": "Completed",
        "date": "2024-04-16",
        "state": "Texas",
        "city": "Houston",
        "sector": "Residential",
        "type": "Billing"
    },
    {
        "id": "4",
        "img": img1,
        "customer": "Bob Wilson",
        "phone": "789-012-3456",
        "complaint": "TV signal disruption",
        "status": "Completed",
        "date": "2024-04-17",
        "state": "Florida",
        "city": "Miami",
        "sector": "Residential",
        "type": "Technical"
    }
];

function ComplaintDetailsData(id) {
    let complaintData = complaintsData.find(complaint => complaint.id === id);

    if (!complaintData) {
        console.log("Complaint Data does not exist for Id: " + id);
        return undefined;
    }

    return complaintData;
}

export { complaintsData, ComplaintDetailsData };
