import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { styles } from "../styles/styles";
import { AboutUs } from "./AboutUs";
import { Enroll } from "./Enroll";


function Index() {
  return (
    <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<AboutUs />}/>
  <Route path="/enroll" element={<Enroll />}/>
  {/* <Route path="/users" element={<ProtectedRoute element={<UsersList/>}/>}/>
  <Route path="/user/:userId" element={<ProtectedRoute element={<UserDetails/>}/>}/>   */}
  <Route path="*" element={<p className={styles.mainSectionContiner}>NOT FOUND!!!</p>}/>
 </Routes>
    </BrowserRouter>
  );
}

export default Index;
