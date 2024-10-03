export const Contact = () => {
  return (
    <section className="section-contact">
      <div className="container field-box ">
        <form action="" className="input-form">
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
      </div>
    </section>
  );
};
