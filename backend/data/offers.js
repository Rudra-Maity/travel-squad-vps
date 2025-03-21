const offerData = [
  { 
    image: "/uploads/offers.jpeg",
    title: "10% Off on Sedan Rentals",
    description: "Enjoy a 10% discount on all sedan rentals for your weekend trips.",
    discount: 10,
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-08-31"),
    relatedTo: "Cab",
    //relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "20% Off on SUV Bookings",
    description: "Book an SUV today and get 20% off on your total fare. Perfect for family outings!",
    discount: 20,
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-09-15"),
    relatedTo: "Cab",
    //relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "Flat $50 Off on Airport Transfers",
    description: "Get a flat $50 discount on all airport transfer bookings made this month.",
    discount: 50,
    startDate: new Date("2024-08-10"),
    endDate: new Date("2024-08-31"),
    relatedTo: "Cab",
    //relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "5% Cashback on Hatchback Rentals",
    description: "Rent a hatchback and receive 5% cashback on your booking. Ideal for city commutes!",
    discount: 5,
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-09-30"),
    relatedTo: "Cab",
    //relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "25% Off on Luxury Suites",
    description: "Stay in our luxury suites and enjoy a 25% discount on your booking.",
    discount: 25,
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-09-15"),
    relatedTo: "Hotel",
   // relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "Free Breakfast with Every Booking",
    description: "Book any room and get complimentary breakfast for your entire stay.",
    discount: 0, // Set discount to 0 since it's a complimentary service
    startDate: new Date("2024-08-20"),
    endDate: new Date("2024-09-20"),
    relatedTo: "Hotel",
    //relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "15% Off on Weekend Stays",
    description: "Book your stay over the weekend and receive a 15% discount.",
    discount: 15,
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-09-30"),
    relatedTo: "Hotel",
    //relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "Stay 3 Nights, Pay for 2",
    description: "Book 3 nights at our hotel and pay only for 2. One night is on us!",
    discount: 33.33, // This represents a 33.33% discount, which is equivalent to one free night out of three
    startDate: new Date("2024-08-25"),
    endDate: new Date("2024-09-25"),
    relatedTo: "Hotel",
    //relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "30% Off on Adventure Tours",
    description: "Join our adventure tours and get 30% off on your booking.",
    discount: 30,
    startDate: new Date("2024-08-15"),
    endDate: new Date("2024-09-15"),
    relatedTo: "Tour",
   // relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "Free City Tour with Every Booking",
    description: "Book any tour and get a complimentary city tour included.",
    discount: 0, // Set discount to 0 since it's a complimentary service
    startDate: new Date("2024-08-20"),
    endDate: new Date("2024-09-20"),
    relatedTo: "Tour",
    //relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "15% Off on Cultural Tours",
    description: "Experience our cultural tours with a 15% discount.",
    discount: 15,
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-09-30"),
    relatedTo: "Tour",
   // relatedId: 1,
  },
  {
    image: "/uploads/offers.jpeg",
    title: "Buy 1 Get 1 Free on Group Tours",
    description: "Book a group tour and get another group tour free.",
    discount: 50, // This represents a 50% discount, which is equivalent to a "Buy 1 Get 1 Free" offer
    startDate: new Date("2024-08-25"),
    endDate: new Date("2024-09-25"),
    relatedTo: "Tour",
   // relatedId: 1,
  },
];

export default offerData;
