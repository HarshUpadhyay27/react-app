import React from "react";

const Main = () => {
  return (
    <div className="containers">
      <div className="container">
        <div className="part1">
          <h1>Banking on the go</h1>
          <h2>Earn 1.20% on Deposits & 5% Cashback</h2>
          <p>
            A modern checking account for hard working professionals that
            provides higher savings, faster support and peace of mind.
          </p>
          <form>
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <p>Enter Email Address</p>
            <button>Apply Now</button>
          </form>
        </div>
        <div className="part2">
          <img
            src="https://cdn.onjuno.com/home/landing_hero_image%403x.png"
            alt="..."
          />
        </div>
      </div>
      <div className="brands">
        <p>AS SEEN ON</p>
        <img
          src="https://cdn.onjuno.com/remittance/publicaation.svg"
          alt="..."
        />
      </div>
      <div className="globle">
        <ul>
          <li>
            <img src="https://cdn.onjuno.com/home/shield.svg" alt="..." />
            <h2>No Credit Checks</h2>
            <p>Opening an account does not affect your credit score</p>
          </li>
          <li>
            <img src="https://cdn.onjuno.com/home/globe.svg" alt="..." />
            <h2>Immigrant Friendly</h2>
            <p>Open an account in under 5 mins with SSN and Passport</p>
            <h4 className="learn">
              Learn More
              <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </h4>
          </li>
          <li>
            <img src="https://cdn.onjuno.com/home/smartphone.svg" alt="..." />
            <h2>Contactless</h2>
            <p>Use a virtual card instantly with Apple Pay® and Google Pay®</p>
          </li>
        </ul>
      </div>
      <div className="cards">
        <div className="card1">
          <img
            src="	https://cdn.onjuno.com/home/bonus-section-image.jpg"
            alt="..."
          />
          <button className="price price1">+$125</button>
          <button className="cost cost1">Bonus Earned</button>
        </div>
        <div className="card2">
          <h1>Earn 1.20% Bonus on Your Checking Account</h1>
          <p>
            You work hard to earn your paycheck, we work harder to make it grow
            faster.
          </p>
          <p>
            <img src="https://cdn.onjuno.com/home/check.svg" alt="..." />
            No Minimum Balance
          </p>
          <p>
            <img src="https://cdn.onjuno.com/home/check.svg" alt="..." />
            No Hidden Fees
          </p>
          <p>
            <img src="https://cdn.onjuno.com/home/check.svg" alt="..." />
            Withdraw Money Anytime
          </p>
          <button>Apply Now</button>
          <h3>Bonus Rate Disclosure</h3>
        </div>
      </div>
      <div className="cards">
        <div className="card3">
          <h1>5% Cashback With Our Premium Metal Card</h1>
          <p>
            Choose 5 brands to earn 5% cashback - be it shopping at Walmart or
            riding with Uber, you decide!
          </p>
          <img
            src="https://cdn.onjuno.com/home/nri-brand-logos.png"
            alt="..."
          />
          <p className="view">
            <button>Apply Now</button>
            <span>View all brands</span>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </p>
        </div>
        <div className="card1">
          <img
            src="https://cdn.onjuno.com/home/cashback-section-with-info-image.jpg"
            alt="..."
          />
          <button className="price price2">+$10.99</button>
          <button className="cost cost2">
            Cashback from
            <img src="https://cdn.onjuno.com/amazon.svg" alt="..." />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
