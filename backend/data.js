const flights = {
  SA231: [
    { id: "1A", isAvailable: true },
    { id: "1B", isAvailable: true },
    { id: "1C", isAvailable: true },
    { id: "1D", isAvailable: true },
    { id: "1E", isAvailable: true },
    { id: "1F", isAvailable: true },
    { id: "2A", isAvailable: true },
    { id: "2B", isAvailable: true },
    { id: "2C", isAvailable: true },
    { id: "2D", isAvailable: true },
    { id: "2E", isAvailable: true },
    { id: "2F", isAvailable: true },
    { id: "3A", isAvailable: true },
    { id: "3B", isAvailable: true },
    { id: "3C", isAvailable: true },
    { id: "3D", isAvailable: true },
    { id: "3E", isAvailable: true },
    { id: "3F", isAvailable: true },
    { id: "4A", isAvailable: true },
    { id: "4B", isAvailable: true },
    { id: "4C", isAvailable: true },
    { id: "4D", isAvailable: false },
    { id: "4E", isAvailable: true },
    { id: "4F", isAvailable: true },
    { id: "5A", isAvailable: true },
    { id: "5B", isAvailable: true },
    { id: "5C", isAvailable: true },
    { id: "5D", isAvailable: true },
    { id: "5E", isAvailable: true },
    { id: "5F", isAvailable: true },
    { id: "6A", isAvailable: true },
    { id: "6B", isAvailable: true },
    { id: "6C", isAvailable: true },
    { id: "6D", isAvailable: true },
    { id: "6E", isAvailable: true },
    { id: "6F", isAvailable: true },
    { id: "7A", isAvailable: true },
    { id: "7B", isAvailable: true },
    { id: "7C", isAvailable: true },
    { id: "7D", isAvailable: true },
    { id: "7E", isAvailable: true },
    { id: "7F", isAvailable: true },
    { id: "8A", isAvailable: true },
    { id: "8B", isAvailable: true },
    { id: "8C", isAvailable: true },
    { id: "8D", isAvailable: true },
    { id: "8E", isAvailable: true },
    { id: "8F", isAvailable: true },
    { id: "9A", isAvailable: true },
    { id: "9B", isAvailable: true },
    { id: "9C", isAvailable: true },
    { id: "9D", isAvailable: true },
    { id: "9E", isAvailable: true },
    { id: "9F", isAvailable: true },
    { id: "10A", isAvailable: true },
    { id: "10B", isAvailable: true },
    { id: "10C", isAvailable: true },
    { id: "10D", isAvailable: true },
    { id: "10E", isAvailable: true },
    { id: "10F", isAvailable: true },
  ],
  SA235: [
    { id: "1A", isAvailable: true },
    { id: "1B", isAvailable: true },
    { id: "1C", isAvailable: true },
    { id: "1D", isAvailable: true },
    { id: "1E", isAvailable: true },
    { id: "1F", isAvailable: true },
    { id: "2A", isAvailable: true },
    { id: "2B", isAvailable: true },
    { id: "2C", isAvailable: true },
    { id: "2D", isAvailable: true },
    { id: "2E", isAvailable: false },
    { id: "2F", isAvailable: false },
    { id: "3A", isAvailable: true },
    { id: "3B", isAvailable: true },
    { id: "3C", isAvailable: true },
    { id: "3D", isAvailable: true },
    { id: "3E", isAvailable: true },
    { id: "3F", isAvailable: true },
    { id: "4A", isAvailable: true },
    { id: "4B", isAvailable: true },
    { id: "4C", isAvailable: true },
    { id: "4D", isAvailable: true },
    { id: "4E", isAvailable: true },
    { id: "4F", isAvailable: true },
    { id: "5A", isAvailable: true },
    { id: "5B", isAvailable: true },
    { id: "5C", isAvailable: true },
    { id: "5D", isAvailable: true },
    { id: "5E", isAvailable: true },
    { id: "5F", isAvailable: true },
    { id: "6A", isAvailable: true },
    { id: "6B", isAvailable: true },
    { id: "6C", isAvailable: true },
    { id: "6D", isAvailable: true },
    { id: "6E", isAvailable: true },
    { id: "6F", isAvailable: true },
    { id: "7A", isAvailable: true },
    { id: "7B", isAvailable: true },
    { id: "7C", isAvailable: true },
    { id: "7D", isAvailable: true },
    { id: "7E", isAvailable: true },
    { id: "7F", isAvailable: true },
    { id: "8A", isAvailable: true },
    { id: "8B", isAvailable: true },
    { id: "8C", isAvailable: true },
    { id: "8D", isAvailable: true },
    { id: "8E", isAvailable: true },
    { id: "8F", isAvailable: true },
    { id: "9A", isAvailable: true },
    { id: "9B", isAvailable: true },
    { id: "9C", isAvailable: true },
    { id: "9D", isAvailable: true },
    { id: "9E", isAvailable: true },
    { id: "9F", isAvailable: true },
    { id: "10A", isAvailable: true },
    { id: "10B", isAvailable: true },
    { id: "10C", isAvailable: true },
    { id: "10D", isAvailable: true },
    { id: "10E", isAvailable: true },
    { id: "10F", isAvailable: true },
  ]
};

const reservations = [
  {
    id: "88a33c23-3332-4ef2-bd71-be7a6430485f",
    flight: "SA231",
    seat: "4D",
    givenName: "Henry",
    surname: "James",
    email: "henryjames@email.com",
  },  
  {
    id: "194565f0-2615-47ff-b119-a07b69bae3d8",
    flight: "SA235",
    seat: "2E",
    givenName: "Shirley",
    surname: "Jackson",
    email: "SJackson@email.com",
  },  
  {
    id: "26f401f2-57aa-4120-a542-f1b9666ce2f8", 
    flight: "SA235",
    seat: "2F",
    givenName: "Thomas ",
    surname: "Hardy",
    email: "THardy@email.com", 
  },
];

module.exports = { flights, reservations };
