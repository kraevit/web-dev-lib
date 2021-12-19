import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

// function App() {
//   return (
//     <div>
//       <nav>
//         <h1>My Navbar</h1>
//         <ul>
//           <li>Thing 1</li>
//           <li>Thing 2</li>
//           <li>Thing 3</li>
//         </ul>
//       </nav>
//       <main>
//         <p>This is where most of my content will go...</p>
//       </main>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;