import { MdCheckCircle } from "react-icons/md";
// import {framer} from "framer-motion"
import { useState } from "react";

export const Contact = () => {

    const [isSubmitted, setISSubmitted] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
       const formdataObject = Object.fromEntries(formData.entries());
       console.log(formdataObject);

       setISSubmitted(true);

       setTimeout(() => {
        setISSubmitted(false);
      }, 3000);

       event.target.reset();


    }
    return (
        <section className="section-contact">
            <div className="container grid grid-two--cols">
            <div className="field-box ">
                <form onSubmit={handleFormSubmit} className="input-form">
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="mobile"
                            id="mobile"
                            minLength="10"
                            maxLength="10"
                            placeholder="Enter your mobile number"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Enter the subject"
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Write your message here"
                            rows="5"
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {isSubmitted && (
                    <div className="success-message container">
                        <p className="success-text">
                            <MdCheckCircle className="success-icon" />
                            Data has been submitted successfully!
                        </p>
                    </div>
                )}
            </div>
            <div className="contact-image">
                <img src="/Images/contact.png" alt="Contact Image" />
            </div>
            </div>
        </section>
    );
};
