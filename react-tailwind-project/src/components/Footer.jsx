import React from "react";
import Button from "./Button";

const Footer = () => {
 

  return (
    <div className="max-w-6xl w-full mx-auto m-10">
      {/* Invitation Section */}
      <section className="bg-custom-brown w-full py-24 text-center text-white">
        <h2 className="text-4xl font-bold">Invite me to your restaurant.</h2>
        <p className="text-4xl font-bold mt-2">Get exposure of millions of food lovers.</p>
        <p className="text-lg mt-6 max-w-2xl mx-auto">
          Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer amet eget blandit
          phasellus est natoque blandit facilisi eleifend.
        </p>
        <div className="mt-5">
        <Button text="Let's Talk" bgcolor="bg-white" textcolor="text-custom-brown" />
        </div>
      

      </section>
      
   
    </div>
  );
};

export default Footer;
