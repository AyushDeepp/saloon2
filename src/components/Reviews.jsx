import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      stars: 5,
      text: "Aurelia Salon is outstanding! The ambiance is incredibly peaceful and luxurious, and the staff's attention to detail is remarkable. My stylist executed a flawless balayage. Highly recommended!",
      author: "Eleanor Vance",
      role: "Regular Client",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      stars: 5,
      text: "Absolutely the best gentlemen's cut I've had in years. The hot towel shave is a pure therapeutic experience. They treat grooming like a craft here, and it really shows.",
      author: "Julian Vance",
      role: "VIP Guest",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      stars: 5,
      text: "Got my bridal makeup and hair trial done here. The team was incredibly patient and talented. They designed a stunning, glowing layout that photographed beautifully.",
      author: "Sophia Martinez",
      role: "Bride-to-be",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      stars: 5,
      text: "Their wash-and-fold service saves me a lot of time. Even after repeated washes, my clothes are handled carefully and returned in great condition.",
      author: "Saurabh",
      role: "Working Professional",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 5,
      stars: 5,
      text: "Very convenient service for busy schedules. Pickup was smooth, delivery was on time, and the clothes came back clean, soft, and well packed.",
      author: "Sheetal Surve",
      role: "Purchase Manager",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 6,
      stars: 5,
      text: "What I liked most was the consistency. Every order has been neatly finished, and the team is polite, responsive, and easy to coordinate with.",
      author: "Jyoti Jonwal",
      role: "Sr. Investment Advisor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill="#FFCC00" 
        stroke="#FFCC00" 
        strokeWidth="1" 
        style={{ marginRight: '3px' }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  // Duplicate the list to create a seamless infinite marquee effect
  const marqueeList = [...reviewsData, ...reviewsData];

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle gold-text">Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">We prioritize building trust and delivering standard results for all guests.</p>
        </div>
      </div>
      
      <div className="reviews-marquee-container">
        <div className="reviews-marquee-track">
          {marqueeList.map((review, index) => (
            <div className="review-card" key={`${review.id}-${index}`}>
              <div className="review-card-header">
                <div className="review-avatar-container">
                  <img src={review.avatar} alt={review.author} className="review-avatar" />
                </div>
                <div className="review-author-meta">
                  <h4 className="review-author-name">{review.author}</h4>
                  <span className="review-author-role">{review.role}</span>
                </div>
              </div>
              <div className="review-card-stars">
                {renderStars(review.stars)}
              </div>
              <p className="review-card-text">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
