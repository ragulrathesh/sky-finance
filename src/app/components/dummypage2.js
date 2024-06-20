<>
      <div className="form">
        <div className="sub-form">
          <div className="overall-form">
            <div className="input-gap">
              <div className="input-form">
                <div>
                  <img src="/Images/user.svg" alt="userimage" />
                </div>
                <div className="line"></div>
                <div className="inputGroup">
                  <input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </div>
              <div className="input-form">
                <div>
                  <img src="/Images/user.svg" alt="userimage" />
                </div>
                <div className="line"></div>
                <div className="inputGroup">
                  <input
                    placeholder="Subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="input-gap">
              <div className="input-form">
                <div>
                  <img src="/Images/user.svg" alt="userimage" />
                </div>
                <div className="line"></div>
                <div className="inputGroup">
                  <input
                    placeholder="E-mail"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </div>
              <div className="input-form">
                <div>
                  <img src="/Images/user.svg" alt="userimage" />
                </div>
                <div className="line"></div>
                <div className="inputGroup">
                  <input
                    placeholder="Phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="input-form-message">
            <div className="inputGroup">
              <textarea
                placeholder="Message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input"
                required
              />
            </div>
          </div>
          {show ? (
            <div className="email-successfully" onClose={() => setShow(false)}>
              Email has been sent successfully
            </div>
          ) : (
            ""
          )}
          <div className="form-touch">
            <button onClick={sendMail} type="submit" className="button">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
