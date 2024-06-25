import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Time, setTime] = useState("");
  const [Date, setDate] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateInputs = () => {
    if (FirstName.length < 3) {
      toast.error("First Name must contain at least 3 characters");
      return false;
    }
    if (LastName.length < 3) {
      toast.error("Last Name must contain at least 3 characters");
      return false;
    }
    if (!validateEmail(Email)) {
      toast.error("Provide a valid email");
      return false;
    }
    if (Phone.length !== 10) {
      toast.error("Phone number must contain exactly 10 digits");
      return false;
    }
    return true;
  };

  const handledReservation = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        { FirstName, LastName, Email, Phone, Date, Time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="reservation" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handledReservation}>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Phone No"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Time"
                  value={Time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Date"
                  value={Date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button type="submit">
                RESERVE NOW
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
