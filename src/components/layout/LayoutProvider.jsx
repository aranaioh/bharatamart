import FooterMenu from './FooterMenu';
import { LeftMenu, TopNavbar, BottomNavbar, Footer } from './index';
import TopNavbar1024 from './Navbar1024';

const LayoutProvider = ({ children }) => {
  return (
    <div className='relative w-full flex'>
      <div className='fixed w-16 h-full z-20 lg:flex hidden'>
        <LeftMenu />
      </div>

      <div className='w-full lg:pl-16 relative'>
        <div className="lg:hidden flex">
          <TopNavbar1024 />
        </div>
        <div className="lg:flex hidden" >
          <TopNavbar />
        </div>
        <BottomNavbar />
        <div>
          <div>
            {children}
          </div>
          <Footer />
        </div>

        <div className='fixed w-full lg:hidden flex bottom-0 right-0 lg:pl-16'>
          <FooterMenu />
        </div>
      </div>
    </div>
  );
};

export default LayoutProvider; 