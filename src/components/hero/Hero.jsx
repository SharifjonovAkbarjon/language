// import React from 'react'

// const Hero = () => {
//     return (
//         <div className='container hero'>
//             <div>
//                 <div>
//                     <p>New Arrival</p>
//                     <h2>Discover Our New Collection</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
//                 </div>
//                 <div>
//                     <button>BUY Now</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero

import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container flex justify-end  ">
                <div className="bg-[rgb(255,243,227)] w-[643px] px-[40px] py-[62px]">
                    <p >New Arrival</p>
                    <h1 className="text-[52px] leading-[65px] font-bold text-[rgb(184,142,47)] mb-4">Discover Our New Collection</h1>
                    <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <a href="#shop" className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-semibold">Shop Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
