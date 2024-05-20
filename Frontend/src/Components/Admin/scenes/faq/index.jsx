import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {/* Accordion 1 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What Is Consumer Complaint system ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A Consumer Complaint System is a structured mechanism designed to receive, process, and resolve complaints from consumers about products, services, or businesses. The primary goal of such a system is to ensure that consumers' grievances are addressed effectively and efficiently, promoting consumer protection and enhancing customer satisfaction.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Accordion 2 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How to File a Complaint ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            1) Register yourself on the platform using register form. <br />
            2) Login With Credentails and on the dashboard click on the file "Complaint" button. <br />
            3) Fill the complaint form and submit it.  <br />
            4) You will get a confirmation email and your complaint will be registered. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are Consumer Rights ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Consumer rights are a set of protections and entitlements designed to safeguard buyers of goods and services against unfair practices. These rights ensure that consumers can make informed decisions, receive fair treatment, and have avenues for redress in case of disputes. The concept of consumer rights is fundamental in promoting a fair and just marketplace. Here are the primary consumer rights: <br /> <br />

            1. <b>Right to Safety:</b>
            - Consumers have the right to be protected against products, production processes, and services that are hazardous to their health or life.
            <br />

            2. <b>Right to be Informed:</b>
            - Consumers have the right to receive accurate information about products and services before making a purchase, allowing them to make informed decisions.
            <br />

            3. <b>Right to Choose:</b>
            - Consumers have the right to choose from a variety of products and services at competitive prices.
            <br />
            4. <b>Right to be Heard:</b>
            - Consumers have the right to voice their opinions, complaints, and concerns regarding products and services, and expect that these will be considered in government policy and business practices.
            <br />
            5. <b>Right to Redress:</b>
            - Consumers have the right to seek redress and compensation for unfair practices or unsatisfactory products and services.
            <br />

            6. <b>Right to Consumer Education</b>:
            - Consumers have the right to acquire knowledge and skills to make informed, confident choices about goods and services while being aware of their basic consumer rights and responsibilities.
            <br />
            7. <b>Right to a Healthy Environment:</b>
            - Consumers have the right to live and work in an environment that is non-threatening to the well-being of present and future generations.
            <br /><br />
            <b>Importance of Consumer Rights:</b> <br />
            - Empowerment: Ensures consumers can make informed decisions.
            - Protection: Safeguards against fraudulent and unfair practices.
            - Fairness: Promotes fair trade, competition, and accurate information in the marketplace.
            - Redress: Provides mechanisms for resolving complaints and obtaining compensation.
            - Health and Safety: Protects consumers from harmful products and practices.
            <br /><br />
            <b>Global Perspective:</b>  <br />
            Different countries have specific laws and regulations to enforce these rights. For instance:<br />
            - The United States has the Consumer Bill of Rights, which includes the right to safety, the right to be informed, the right to choose, and the right to be heard.
            - Support Fair Practices: Choose businesses that follow fair and ethical practices.

            By understanding and exercising their rights, consumers can contribute to a more equitable and trustworthy marketplace.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is RTE ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This refers to the legal guarantee for the right to free and compulsory education for children. For example, in India, the Right to Education Act (RTE) of 2009 mandates free and compulsory education for children aged 6 to 14 years. This act emphasizes the importance of providing quality education to every child and includes provisions for the establishment of schools, ensuring minimum infrastructure standards, and setting teacher-student ratios.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            EmergencyNumbers
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

            - Police Emergency: 100 <br />
            - Women Helpline (All India): 1091<br />
            - Abhyam For Women Help: 181<br />
            - Child helpline: 1098<br />
            - Senior Citizen Helpline: 1090<br />
            - Railway Police Helpline: 182<br />
            - Traffic Police Helpline: 1095<br />
            - Cyber Crime Helpline: 1930<br />
            - Police Control Room: 112<br />
            - Missing Person Helpline Number: 1094<br />
            - Anti-Extortion Helpline: 1860327<br />
            - Child helpline number: 1098<br />
            - Tourist Police Helpline: 1800-11-1363<br />
            - Anti Ragging Helpline: 155222<br />
            - IRDA (For Insurance inquiry): 155222<br />
            - AIDS Helpline (All over India): 1097<br />
            - Central Enquiry: 139<br />
            - Reservation: 139<br />
            - Morning Alarm: 116<br />
            - All India Helpline: 1512<br />
            - ITDC: 23348745<br />
            - Tourist Information Services: 1280<br />
            - National call center of Thomas Cook (Ind): 18002099100<br />
            - Toll Free: 18001801407<br />

          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
