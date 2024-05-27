import React from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Box sx={{ display: 'flex', flexGrow: 1, p: { xs: 4, md: 1 }, justifyContent: 'center' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} md={10} lg={12}>
          <Box sx={{ p: 2, mt: 4, mb: 0, position: 'fixed', overflow: 'auto', height: '100%' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Frequently Asked Questions
            </Typography>
            {/* Accordion 1 */}
            <Accordion sx={{ mb: 2, mt: 4 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  What Is Consumer Complaint System?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A Consumer Complaint System is a structured mechanism designed to receive, process, and resolve complaints from consumers about products, services, or businesses. The primary goal of such a system is to ensure that consumers' grievances are addressed effectively and efficiently, promoting consumer protection and enhancing customer satisfaction.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Accordion 2 */}
            <Accordion sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  How to File a Complaint?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  1) Register yourself on the platform using the registration form. <br />
                  2) Login with credentials and on the dashboard click on the "Complaint" button. <br />
                  3) Fill out the complaint form and submit it. <br />
                  4) You will receive a confirmation email, and your complaint will be registered.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Accordion 3 */}
            <Accordion sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  What are Consumer Rights?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Consumer rights are a set of protections and entitlements designed to safeguard buyers of goods and services against unfair practices. These rights ensure that consumers can make informed decisions, receive fair treatment, and have avenues for redress in case of disputes.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Accordion 4 */}
            <Accordion sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  What is RTE?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This refers to the legal guarantee for the right to free and compulsory education for children. For example, in India, the Right to Education Act (RTE) of 2009 mandates free and compulsory education for children aged 6 to 14 years.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Accordion 5 */}
            <Accordion sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  Emergency Numbers
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  - Police Emergency: 100 <br />
                  - Women Helpline (All India): 1091 <br />
                  - Abhyam For Women Help: 181 <br />
                  {/* Add more emergency numbers as needed */}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;
