import { FaShippingFast, FaHeadset, FaShoppingCart } from 'react-icons/fa';

const incentives = [
  {
    name: 'Free Shipping Above ₹500',
    description: "Enjoy free shipping on all orders above ₹500! Shop more, save more, and get your favorite products delivered to your doorstep without extra charges.",
    icon: <FaShippingFast size={32} className="text-white" />,
  },
  {
    name: '24/7 Customer Support',
    description: "We’re here for you, anytime! Our dedicated support team is available 24/7 to assist with your queries, ensuring a smooth and hassle-free shopping experience.",
    icon: <FaHeadset size={32} className="text-white" />,
  },
  {
    name: 'Lightning-Fast Checkout',
    description: "Say goodbye to long waits! Our optimized checkout process ensures you can complete your purchase in just a few clicks, so you get your products faster.",
    icon: <FaShoppingCart size={32} className="text-white" />,
  },
];

export default function Incentive() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We’re committed to making your shopping experience seamless, fast, and enjoyable. Here’s how we stand out:
          </p>
        </div>

        {/* Incentives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {incentives.map((incentive, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-2 transition-transform"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-500 mb-6">
                {incentive.icon}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-gray-900">{incentive.name}</h3>
              <p className="mt-4 text-base text-gray-600">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}