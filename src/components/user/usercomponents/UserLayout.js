
import Navbar1 from "../../Navbar.js/NavbarDark";
import UserSidebar from "./UserSidebar";






function UserLayout({children,}) {
  // const isAuthenticated=useSelector(item=>item.auth)
  // if(!isAuthenticated){
  //   redirect('/')
  // }

    return (
      <>
        <Navbar1/>
        <section className="w-full   ">
            <div className="flex flex-col md:flex-row  w-full h-full ">
              <div className="md:w-1/5 bg-gray-100 rounded-md shadow-md py-4 h-full" style={{height:'calc(100vh - 4rem)',}}>
                {/* <NavbarUser/> */}
                <UserSidebar/>
              </div>
              <div className="md:w-4/5  rounded-md bg-white"style={{height:'calc(100vh - 4rem)',}}> {children}</div>
            </div>
        </section>
      </>
    );
  }
  export default  UserLayout;