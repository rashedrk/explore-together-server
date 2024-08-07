# Explore Together Website (Server)

Explore Together Website Server is a web application designed to facilitate connecting travelers with potential travel buddies based on their trips and preferences. This project leverages a modern technology stack to provide a robust and efficient solution for users to plan trips, find companions, and manage travel buddy requests.


### Live URL

The Backend server is hosted in Vercel and the database is in Railway. 
 [Live Server](https://travel-buddy-matching-server.vercel.app/).

## Endpoints

- **User Registration:** Endpoint to register a new user.
- **User Login:** Endpoint for user authentication and login.
- **Create a Trip:** Endpoint for creating a new trip.
- **Get Paginated and Filtered Trips:** Endpoint to retrieve trips with pagination and filtering options.
- **Send Travel Buddy Request:** Endpoint to send a travel buddy request for a specific trip.
- **Get Potential Travel Buddies For a Specific Trip:** Endpoint to retrieve potential travel buddies for a given trip.
- **Respond to Travel Buddy Request:** Endpoint to respond to a travel buddy request (approve or reject).
- **Get User Profile:** Endpoint to get the details of a user's profile.
- **Update User Profile:** Endpoint to update the details of a user's profile.

## Technology Stack

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Object Relational Mapping (ORM)** Prisma
- **Database:** PostgreSQL
- **Build Tool:** Vite

## Getting Started

To set up the Backend locally, follow these steps:

1. **Clone the Repository:**


```bash
git clone https://github.com/rashedrk/explore-together-server.git
```

2. **Install dependencies**
```bash
cd explore-together-server
npm install

```

3. **Run the Application**
```bash
npm run dev
```

5. **Access the Application:**
Open your web browser and navigate to `http://localhost:3000` to access the application.

## API Documentation

For detailed API documentation and request examples, refer to the [Postman Collection](https://documenter.getpostman.com/view/24260220/2sA3QqfY7m).

## Feedback and Contributions

We welcome your feedback and contributions to enhance the Eyeglass Sales and User Authentication System. Feel free to open issues, submit pull requests, or reach out to us with your suggestions.

## License

This project is licensed under the [MIT License](LICENSE).

