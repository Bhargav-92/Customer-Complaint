import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

// Data for popular questions and emergency numbers
const data = {
  popularQuestions: [
    {
      id: 'root1',
      name: 'What Is Consumer Complaint system ? ',
      children: [
        {
          id: '1',
          name: 'lorem ',
        },
      ],
    },
    {
      id: 'root2',
      name: 'How to Do Complaint ?',
      children: [
        {
          id: '2',
          name: 'Alorem',
        },
      ],
    },
    {
      id: 'root3',
      name: 'What are Consumer Rights ?',
      children: [
        {
          id: '3',
          name: 'Another FAQ question for Root 2',
        },
      ],
    },
    {
      id: 'root4',
      name: 'What is RTE ?',
      children: [
        {
          id: '4',
          name: 'Another FAQ question for Root 2',
        },
      ],
    },
    {
      id: 'root5',
      name: 'Consumer Complaint  Login ',
      children: [
        {
          id: '5',
          name: 'Another FAQ question for Root 2',
        },
      ],
    },
    {
      id: 'root6',
      name: 'Language Support',
      children: [
        {
          id: '6',
          name: 'Another FAQ question for Root 2',
        },
      ],
    },

    // Add more popular questions as needed
  ],
  emergencyNumbers: [
    {
      id: 'root7',
      name: 'Police Services',
      children: [
        {
          id: '7',
          name: 'Police Emergency :- 100',
        },
        {
          id: '8',
          name: 'Women Helpline (All India):- 1091',
        },
        {
          id: '9',
          name: 'Abhyam For Women Help:- 181',
        },
        {
          id: '10',
          name: 'Child helpline:- 1098',
        },
        {
          id: '11',
          name: 'Senior Citizen Helpline:- 1090',
        },
        {
          id: '12',
          name: 'Railway Police Helpline:- 182',
        },
        {
          id: '13',
          name: 'Traffic Police Helpline:- 1095',
        },
        {
          id: '14',
          name: 'Cyber Crime Helpline:- 1930',
        },
        {
          id: '15',
          name: 'Police Control Room:- 112',
        },
        {
          id: '16',
          name: 'Missing Person Helpline Number:- 1094',
        },
        {
          id: '17',
          name: 'Anti-Extortion Helpline:- 1860327',
        },
        {
          id: '18',
          name: 'Child helpline number :- 1098',
        },
        {
          id: '19',
          name: 'Tourist Police Helpline:-  :- 1800-11-1363',
        },
        {
          id: '20',
          name: 'Anti Ragging Helpline:-155222',
        },
        {
          id: '21',
          name: 'IRDA ( For Insurance inquiry):-155222',
        },
        {
          id: '22',
          name: 'AIDS Helpline (All over India):-1097',
        },

      ],
    },
    {
      id:'root8',
      name:'Railway',
      children:[
        {
          id:'21',
          name:'Central Enquiry :- 139',
        },
        {
          id:'22',
          name:'Reservation :- 139',
        },
        {
          id:'23',
          name:'Morning Alram:- 116',
        },
        {
          id:'24',
          name:'All India Helpline:-  1512',
        },
      ]  
    },
    {
      id:'root9',
      name:'Tourist Enquiry',
      children:[
        {
          id:'25',
          name:'ITDC :- 23348745',
        },
        {
          id:'26',
          name:'Tourist Information Services :- 1280',
        },
        {
          id:'27',
          name:'National call center of thomas Cook   (Ind) :- 18002099100',
        },
        {
          id:'28',
          name:'Toll Free :-  18001801407',
        },
      ]  
    },
    {
      id:'root10',
      name:'Airpot Enquiry',
      children:[
        {
          id:'26',
          name:'Domestic :- 25675121',
        },
        {
          id:'27',
          name:'Indian RedCross Socity  :- 23711551',
        },      
        {
          id:'28',
          name:'Toll Free :-  1915',
        },
      ]  
    },
    {
      id:'root11',
      name:'Bus Services Enquiry',
      children:[
        {
          id:'27',
          name:'Road Accident Emergency Service (RAES):-1033',
        },
      ]  
    },
    {
      id:'root12',
      name:'Emergency Services',
      children:[
        {
          id:'28',
          name:'Police :-100',
        },
        {
          id:'29',
          name:'Ambulance :-108',
        },
        {
          id:'30',
          name:'Fire :-101',
        },
      ]  
    },
    // Add more emergency numbers as needed
  ],
};

const Faq = () => {  
  // Function to render tree nodes recursively with emergency numbers in row and column wise
  const renderTreeWithEmergencyNumbers = (nodes) =>
    nodes.map((root) => (
      <TreeItem key={root.id} nodeId={root.id} label={root.name}>
        {Array.isArray(root.children)
          ? root.children.map((node) => (
            <TreeItem key={node.id} nodeId={node.id} label={node.name} />
          ))
          : null}
      </TreeItem>
    ));


  return (
    <>
      {/* Header */}
      <Box p={15} textAlign="center">
        <Typography variant="h4" color="textSecondary">
          Frequently Asked Questions
        </Typography>
        <Typography>
          
            Home
          {' '}
         <span style={{color: '#F39C12'}}>&gt;</span>  Faq
        </Typography>
        <Typography pt={4}>
          Find answers to our most frequently asked questions below. If you can't find what <br />
          you're looking for please contact us and we'll get in touch within 24 hours.
        </Typography>
      </Box>

      {/* Questions */}
      <Box textAlign="center">
        <Grid container spacing={3}>
          {/* Popular Questions */}
          <Grid item md={6} xs={12}>
            <Typography variant="h5">Popular Questions</Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            {/* TreeView for popular questions */}
            <TreeView
              aria-label="popular-questions"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {renderTreeWithEmergencyNumbers(data.popularQuestions)}
            </TreeView>
          </Grid>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <hr style={{ margin: '1rem', width: '80%' }} />
        </div>

        {/* Emergency Numbers */}
        <Grid container spacing={3} pt={2}>
          <Grid item md={6} xs={12}>
            <Typography variant="h5">Emergency Numbers</Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            {/* TreeView for emergency numbers */}
            <TreeView
              aria-label="emergency-numbers"
              defaul
              tCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
            >
              {renderTreeWithEmergencyNumbers(data.emergencyNumbers)}
            </TreeView>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Faq;
