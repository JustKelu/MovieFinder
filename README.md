# MovieFinder

A modern React application for searching and discovering movies using the OMDB API.

## 🚀 Installation and Setup

### Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A code editor (recommended: VS Code)

### 1. Clone the Repository

```bash
git clone https://github.com/JustKelu/MovieFinder.git
cd MovieFinder
```

### 2. Install Dependencies

Run one of the following commands to install all required Node.js modules:

**With npm:**
```bash
npm install
```

**With yarn:**
```bash
yarn install
```

> **Note:** The `node_modules` folder is not included in the repository as it's listed in `.gitignore`. You must install dependencies locally.

### 3. API Key Configuration

This project uses the OMDB API to fetch movie data. Follow these steps to get and configure your API key:

#### Get Your OMDB API Key

1. **Register on OMDB:**
   - Go to [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
   - Choose the FREE plan (1000 daily requests)
   - Enter your email and register
   - Check your email to receive the API key

2. **Create the .env file:**
   
   Create a `.env` file in the root directory of the project:
   ```bash
   touch .env
   ```

3. **Add your API key:**
   
   Open the `.env` file and add your OMDB API key:
   ```env
   VITE_OMDB_API_KEY=your_api_key_here
   ```

   **Example:**
   ```env
   VITE_OMDB_API_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```

   ⚠️ **Important:** Replace `your_api_key_here` with your actual API key!

> **Note:** The `.env` file is not included in the repository as it's listed in `.gitignore` to protect sensitive information.

### 4. Start the Application

Once the configuration is complete, start the application in development mode:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will be available at [http://localhost:5173](http://localhost:5173) (Vite's default port).

## 🔧 Available Scripts

In the `package.json` file, you'll find the following scripts:

- `npm run dev` - Start the app in development mode
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
MovieFinder/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   └── SearchBar.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env                 # Your environment variables (not in repository)
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## ✨ Features

- **Movie Search**: Search for movies by title using the OMDB API
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Search**: Get instant results as you type
- **Movie Details**: View comprehensive movie information
- **Clean UI**: Modern and intuitive user interface

## 🔒 Security

- The `.env` file is included in `.gitignore` to prevent accidentally committing your API keys
- Never share your API keys publicly
- For production deployments, configure environment variables through your hosting provider's control panel

## 🚨 Troubleshooting

### Error: "Module not found"
```bash
# Delete node_modules and package-lock.json, then reinstall
rm -rf node_modules package-lock.json
npm install
```

### Error: "API key not working"
- Verify that the API key is correct in the `.env` file
- Make sure there are no extra spaces in the key
- Check that the API key is active on the OMDB website
- Ensure the variable name is exactly `VITE_OMDB_API_KEY`

### Error: "CORS policy"
- This error is common during development
- The application should work correctly in production

### Error: "Cannot read properties of undefined"
- This usually means the API didn't return expected data
- Check your internet connection
- Verify your API key is valid and has remaining requests

## 🌐 API Information

This application uses the [OMDB API](http://www.omdbapi.com/) (Open Movie Database):
- **Free Tier**: 1000 requests per day
- **Rate Limit**: Be mindful of the daily request limit
- **Data Source**: IMDb database

## 📝 Environment Variables

The application requires the following environment variable:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OMDB_API_KEY` | Your OMDB API key | Yes |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter issues during installation or configuration:

1. Make sure you've followed all the steps
2. Check the browser console for any errors
3. Verify that all dependencies are installed correctly
4. Ensure your API key is valid and active
5. Check that the `.env` file is in the root directory

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy movie searching! 🎬**
