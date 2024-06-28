import React from 'react';

const Footer = () => {
  return (
<>


      <div className="flex py-7 flex-col md:flex-row justify-around items-center">
        <div className="text-center mb-8 md:mb-0">
          <h3 className="font-bold text-lg font-lato">OFFICE</h3>
          <p className=' font-lato'>Kīšezera iela 7, Rīga, LV-1026, Latvija.</p>
          <p><span className="font-bold font-lato">Telephone:</span> +371 67 367 889</p>
          <p><span className="font-bold font-lato">E-mail:</span> info@banalat.eu</p>
        </div>
        <div className="text-center mb-8 md:mb-0">
          <h3 className="font-bold text-lg font-lato">WAREHOUSE</h3>
          <p className='font-lato'>Lubānas iela 82, Rīga, LV-1082, Latvija.</p>
          <p><span className="font-bold font-lato">Telephone:</span> +371 67 704 999</p>
          <p><span className="font-bold font-lato">E-mail:</span> info@banalat.eu</p>
        </div>
        <div className="text-center mb-8 md:mb-0 font-lato">
          <h3 className="font-bold text-lg font-lato">BANK ACCOUNT</h3>
          <p><span className="font-bold font-lato">Bank name:</span> AS Swedbank</p>
          <p><span className="font-bold font-lato">BIC/S.W.I.F.T.:</span> HABA LV 22</p>
          <p><span className="font-bold font-lato">Account:</span> LV70 HABA 0551 0268 9035 8</p>
        </div>
      </div>
      <div className="bg-cover bg-center h-64 bg2-img"></div>
      <div className="bg-black text-[#5E5A54]   opacity-85  px-12 py-4">
        <p className='font-lato'>Copyright © 2023 Banalat SIA - All Rights Reserved.</p>
      </div>
      </>
  
  );
};

export default Footer;
