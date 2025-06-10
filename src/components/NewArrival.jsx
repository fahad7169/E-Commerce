import React from 'react';

const cards = [
  {
    title: 'PlayStation 5',
    desc: 'Black and White version of the PS5 coming out on sale.',
    img: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/2e2c58e4458b4a5bc9aef12640add3521dc1a5e1.png',
    big: true,
    link: '#',
  },
  {
    title: "+ Women's Collections",
    desc: 'Featured woman collections that give you another vibe.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    big: false,
    link: '#',
  },
  {
    title: 'Speakers',
    desc: 'Amazon wireless speakers',
    img: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=400&q=80',
    big: false,
    link: '#',
  },
  {
    title: 'Perfume',
    desc: 'GUCCI INTENSE OUD EDP',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    big: false,
    link: '#',
  },
];

const features = [
  {
    icon: (
      <span className="material-symbols-outlined text-3xl">local_shipping</span>
    ),
    title: 'FREE AND FAST DELIVERY',
    desc: 'Free delivery for all orders over $140',
  },
  {
    icon: (
      <span className="material-symbols-outlined text-3xl">support_agent</span>
    ),
    title: '24/7 CUSTOMER SERVICE',
    desc: 'Friendly 24/7 customer support',
  },
  {
    icon: (
      <span className="material-symbols-outlined text-3xl">verified_user</span>
    ),
    title: 'MONEY BACK GUARANTEE',
    desc: 'We return money within 30 days',
  },
];

export default function NewArrival() {
  return (
    <div className="w-full my-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-6 w-1 bg-red-500 rounded-full"></div>
        <span className="text-red-500 text-sm font-medium">Featured</span>
      </div>
      <h2 className="text-3xl font-bold mb-8">New Arrival</h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {/* Big Card */}
        <div className="md:row-span-2 md:col-span-2 bg-black rounded-xl overflow-hidden relative flex items-end min-h-[320px]">
          <img src={cards[0].img} alt={cards[0].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">{cards[0].title}</h3>
            <p className="text-sm mb-4">{cards[0].desc}</p>
            <a href={cards[0].link} className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium text-sm hover:bg-gray-200 transition">Shop Now</a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        {/* Right Top Card */}
        <div className="bg-black rounded-xl overflow-hidden relative flex items-end min-h-[150px]">
          <img src={cards[1].img} alt={cards[1].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Women's Collections</h3>
            <p className="text-xs mb-4">{cards[1].desc}</p>
            <a href={cards[1].link} className="inline-block bg-white text-black px-3 py-1.5 rounded-md font-medium text-xs hover:bg-gray-200 transition">Shop Now</a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        {/* Right Bottom Cards */}
        <div className="bg-black rounded-xl overflow-hidden relative flex items-end min-h-[150px]">
          <img src={cards[2].img} alt={cards[2].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">{cards[2].title}</h3>
            <p className="text-xs mb-4">{cards[2].desc}</p>
            <a href={cards[2].link} className="inline-block bg-white text-black px-3 py-1.5 rounded-md font-medium text-xs hover:bg-gray-200 transition">Shop Now</a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="bg-black rounded-xl overflow-hidden relative flex items-end min-h-[150px]">
          <img src={cards[3].img} alt={cards[3].title} className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div className="relative z-10 p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">{cards[3].title}</h3>
            <p className="text-xs mb-4">{cards[3].desc}</p>
            <a href={cards[3].link} className="inline-block bg-white text-black px-3 py-1.5 rounded-md font-medium text-xs hover:bg-gray-200 transition">Shop Now</a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 mb-2">
              {f.icon}
            </div>
            <div className="font-bold text-sm md:text-base">{f.title}</div>
            <div className="text-xs text-gray-500 max-w-[180px]">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 