import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};
const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#FFBFB5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColor: "#FFBFB5",
  userFontColor: "#fff"
};
const ComplaintChatBot = () => {
  const steps = [
    {
      id: "1",
      message: "Hello, Welcome to Complaint Chatbot. How can I help you?",
      trigger: "2"
    },
    {
      id: "2",
      user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Please select a category",
      trigger: "4"
    },
    {
      id: "4",
      options: [
        { value: 1, label: "Health & wellness", trigger: "5" },
        { value: 2, label: "BFSI", trigger: "5" },
        { value: 3, label: "Banking", trigger: "5" },
        { value: 4, label: "Education", trigger: "5" },
        { value: 5, label: "Farmer", trigger: "5" },
        { value: 6, label: "General", trigger: "5" },
        { value: 7, label: "Manufacturing", trigger: "5" },
        { value: 8, label: "Retail", trigger: "5" },
        { value: 9, label: "Transport", trigger: "5" },
        { value: 10, label: "Others", trigger: "5" }
      ]
    },
    {
      id: "5",
      message: "Please select a subcategory",
      trigger: "6"
    },
    {
      id: "6",
      options: [
        { value: 1, label: "Complaints", trigger: "7" },
        { value: 2, label: "Queries", trigger: "7" },
        { value: 3, label: "Suggestions", trigger: "7" }
      ]
    },
    {
      id: "7",
      message: "Please enter your complaint here",
      trigger: "8"
    },
    {
      id: "8",
      user: true,
      trigger: "9"
    },
    {
      id: "9",
      message: "Thank you",
      trigger: "10"
    },
    {
      id: "10",
      message: "I will get back to you soon",
      trigger: "11"
    },
    {
      id: "11",
      options: [
        { value: 1, label: "Yes", trigger: "12" },
        { value: 2, label: "No", trigger: "13" }
      ]
    },
    {
      id: "12",
      message: "Thank you",
      end: true
    },
    {
      id: "13",
      message: "Thank you",
      end: true
    },
    {
      id: "14",
      message: "I will get back to you soon",
      end: true
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