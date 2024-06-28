
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-[#2f803f] font-great mt-5 text-4xl sm:text-5xl md:text-6xl text-center mt-16">Contacts</h2>
      <h3 className="font-bold uppercase font-lato text-3xl sm:text-4xl md:text-5xl text-center">HOW TO FIND US</h3>
      <div className="w-[95%] sm:w-[90%] mx-auto">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.6780188366597!2d74.32926637476858!3d31.478042249233603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919041ed3297ff5%3A0x5dc6e314d32e96eb!2s109%2C%20Block%20H%20Model%20Town%2C%20Lahore%2C%20Punjab%2054000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1719404670273!5m2!1sen!2s" 
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] my-10"
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
}

export default Contact;
