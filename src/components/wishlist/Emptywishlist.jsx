import { useNavigate } from 'react-router-dom';
import reactLogo from '../../assets/heart.png';

const EmptyWishlist = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className='w-40 h-40 opacity-30'>
                <img src={reactLogo} alt="wishlist" className='' />                
            </div>
            <h1 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h1>
            <p className="text-gray-600 mb-6">
                Start adding items to your wishlist to keep track of your favorite products.
            </p>
            <button
                onClick={() => navigate('/shop')}
                className="px-6 py-3 bg-primary-bg text-white cursor-pointer rounded hover:bg-blue-600"
            >
                Browse Products
            </button>
        </div>
    );
}

export default EmptyWishlist;
