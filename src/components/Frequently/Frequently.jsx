import React, { useState } from "react";
import "./Frequently.css"

const Frequently = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const Frequently = [
    { 
        question: "What are my payment option?", 
        answer: "After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding." },
    {
      question: "How can I invite collaborator to platform?",
      answer: "After creating your account, you can create your first project and associate it with the collaborator's email. An invitation will be sent automatically. The invited user will then confirm their account via email and complete onboarding.",
    },
    { 
        question: "Can I upgrade my plan?", 
        answer: "After creating your account, you can create your first project and associate it with the collaborator's email. An invitation will be sent automatically. The invited user will then confirm their account via email and complete onboarding." },
    { 
        question: "Can I cancel my plan at anytime?", 
        answer: "After creating your account, you can create your first project and associate it with the collaborator's email. An invitation will be sent automatically. The invited user will then confirm their account via email and complete onboarding." 
    },
  ];

  return (
    <div>
        <div className="Frequently">
            <div className="container">
                <h1>
                    Frequently asked question
                </h1>
                <p>
                    Something is not clear? You need help? Check our FAQ section
                </p>
                <div className="AddAndClosa">
                    {Frequently.map((item, index) => (
                    <div className="AddAndClosaBox" key={index}>
                        <div className="AddAndClosaText"
                            onClick={() => toggleQuestion(index)}
                        >
                            <span>{openQuestion === index ? "−" : "+"}</span>
                            <p>{item.question}</p>
                        </div>
                        {openQuestion === index && (
                        <div className="AddAndClosaTexts">
                            {item.answer}
                        </div>
                        )}
                    <div className="line"></div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Frequently;