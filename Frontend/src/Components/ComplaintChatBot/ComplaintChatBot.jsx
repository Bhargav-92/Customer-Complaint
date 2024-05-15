// ComplaintChatBot.js
import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

const BotRedirect = ({ to, message }) => {
  return (
    <div>
      <Link to={to}>{message}</Link>
    </div>
  );
};

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#F57C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#F57C00",
  botFontColor: "#fff",
  userBubbleColor: "#F57C00",
  userFontColor: "#fff"
};

const ComplaintChatBot = () => {
  const steps = [
    {
      id: "1",
      message: "Hello! I'm your Complaint Assistant.",
      trigger: "2"
    },
    {
      id: "2",
      message: "How can I assist you today?",
      trigger: "3"
    },
    {
      id: "3",
      message: "Please select an option:",
      trigger: "4"
    },
    {
      id: "4",
      options: [
        { value: 1, label: "FAQ", trigger: "5" },
        { value: 2, label: "How to raise a complaint", trigger: "6" },
        { value: 3, label: "See Complaint Status", trigger: "7" },
        { value: 4, label: "Update Profile", trigger: "8" }
      ]
    },
    {
      id: "5",
      component: (
        <BotRedirect
          to="/faq"
          message="Explore FAQ"
        />
      ),
      trigger: "end"
    },
    {
      id: "6",
      component: (
        <BotRedirect
          to="/complaint"
          message="Learn how to raise a complaint"
        />
      ),
      trigger: "end"
    },
    {
      id: "7",
      component: (
        <BotRedirect
          to="/mycomplaint"
          message="See the Complaint status"
        />
      ),
      trigger: "end"
    },
    {
      id: "8",
      component: (
        <BotRedirect
          to="/profile"
          message="Update Profile"
        />
      ),
      trigger: "end"
    },
    {
      id: "end",
      message: "Thank you for using our Complaint Assistant!",
      trigger: "1"
    }
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
};

export default ComplaintChatBot;
