import { GiRoyalLove, GiLovers, GiRose } from 'react-icons/gi';

const Footer = () => {
    return (
        <footer className="footer footer-center mt-36 h-[300px] p-8 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
         <GiLovers className="text-red-600 text-4xl"></GiLovers>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
          <GiRoyalLove className='text-2xl text-red-600'></GiRoyalLove>
          <GiRose className='text-2xl text-red-600'></GiRose>
          <GiRoyalLove className='text-2xl text-purple-600'></GiRoyalLove>
          <GiRose className='text-2xl text-purple-600'></GiRose>
          </div>
        </nav> 
        <aside>
          <p className='pb-16'>Copyright © 2023 - All rights reserved.</p>
        </aside>
      </footer>
    );
};

export default Footer;