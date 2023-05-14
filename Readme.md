# Todo App

## Features

- Create new data
- Update existing data
- Delete data
- Display data
- Download File

## Technologies Used

- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js, Express.js, MongoDB

## Usage

1. When you fork project, you must create env file into server folder and enter JWT_KEY, MONGO_URI and API_PORT.
2. Open your web browser and navigate to http://localhost:3000
3. Create new account Sign In Page. You can see in Navigation 
4. When Create new account automaticaaly redirect todos list page (home)
5. Press add todo button and show add todo form
6. When create todo you can see todo list on main page
7. You can press arrow button right side to delete todo, update todo, download todo file

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```
# Database Creation

You can use MongoDB's Atlas, which has a free tier, albeit more powerful.

Here are the steps to set up a MongoDB account and Atlas cluster to use with the Todo App project:

1.  Go to https://www.mongodb.com/atlas/database and click the Try Free button (or Sign In if you already have an account)
2.  Create your MongoDB user account.
3.  You will then be prompted to create a cluster. Select the far right Shared Free tier cluster option and click the Create button.
4.  Leave all free tier options selected - AWS, North America: N. Virginia, etc. Click the Create Cluster button.
5.  You will then be prompted with a security configuration screen. Enter a Username and click the Autogenerate Secure Password button. Copy this password to a safe place as you will need it a few steps from now.
6.  The cluster will take a few minutes or more to generate. Eventually, you should see a green circle to the left of the cluster name. Once you see the circle, click the Connect button.
7.  Create a Database with users collection
8.  Select Connect Your Application
9.  Copy the full connection string and click the Close button. Head back over to your local Todo application.
10.  In your .env file create the MONGO_URI key-value pair if you haven't already done so.
11. Add the connection string by pasting the entire address string you copied from the screen before. MONGO_URI: 'COPY_THE_SRV_ADDRESS_STRING_HERE'

We can use mongoose orm to connect database. This connection codes located on index.ts in server file.

# Models Schemas
![Ekran Resmi 2023-05-14 11 41 16](https://github.com/emrecolak-23/express-react-todos/assets/76963353/ced58d22-5c6c-4d2e-9caa-fe2b4571c16d)

![Ekran Resmi 2023-05-14 11 43 30](https://github.com/emrecolak-23/express-react-todos/assets/76963353/ed8010c1-3585-4ebb-af81-4ea87102e961)

# Application Review

![Ekran Resmi 2023-05-14 11 49 13](https://github.com/emrecolak-23/express-react-todos/assets/76963353/7a2da953-87e2-416c-949e-27262bfca9ea)






