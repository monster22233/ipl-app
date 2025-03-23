# Project: Web Application with Admin Panel and Home Page

## Description
This project is a web application built with React, Vite, Tailwind CSS, and TypeScript. It includes a home page for user predictions, an admin panel for managing predictions, and various components to support these features.

## Features
- **Home Page**: Users can make predictions for matches with a form and see an ad popup after submission.
- **Ad Space**: The ad space in the popup can be adjusted in size.
- **Admin Panel**: Accessible via routes, allows administrators to manage predictions and user data (under development).

## How to Change the Ad Space Size
To adjust the size of the ad space in the `AdPopup` component:

1. Open `src/components/AdPopup.tsx`.
2. Locate the `div` with the class `border-2 border-[#5C899D] h-[100px] mb-4 lg:mb-6 flex items-center justify-center`.
3. Modify the `h-[100px]` value to your desired height. For example, `h-[200px]` for double the height.
4. Save the file. The development server should automatically reload.
5. Test the AdPopup by making a prediction. The ad space should now have the updated size.
6. If necessary, adjust the QR code's size by modifying the `size` prop in the `QRCode` component. For example, `size={200}`.

## Accessing the Admin Panel
The admin panel is currently not linked in the user interface. To access it, you can:

- **Manually Route**: If the application uses client-side routing (e.g., React Router), you can manually enter the admin route (e.g., `/admin`) in the browser's address bar. However, the current code does not include a router, so this may not work.
- **Sidebar Integration**: The settings icon in the sidebar is intended to lead to the admin panel. However, the current code does not implement this functionality. You can add routing to the `AdminPanel` component by integrating a router like React Router.

For example, to set up React Router:

1. Install React Router:
   ```bash
   npm install react-router-dom
   ```

2. Update `App.tsx` to include routes:
   ```tsx
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import AdminLogin from './pages/AdminLogin';
   import AdminPanel from './pages/AdminPanel';
   // ... other imports

   function App() {
     return (
       <Router>
         <div className="min-h-screen ...">
           <Routes>
             <Route path="/admin" element={<AdminLogin />} />
             <Route path="/admin/panel" element={<AdminPanel />} />
             <Route path="/" element={/* Your main content */} />
           </Routes>
           {/* ... existing code ... */}
         </div>
       </Router>
     );
   }
   ```

3. Implement the `AdminLogin` and `AdminPanel` components.

Once routing is set up, you can navigate to `/admin` to access the admin login page and `/admin/panel` for the admin panel.

## Dependencies
- React
- Vite
- Tailwind CSS
- PostCSS
- TypeScript
- react-spring (for animations)
- lucide-react (for icons)
- react-qr-code (for QR code generation)

## Running the Project
1. Ensure you have Node.js and npm installed.
2. Clone the repository.
3. Navigate to the project directory.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
