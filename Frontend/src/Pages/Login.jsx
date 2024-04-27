import { Grid, TextField, Stack, Typography, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import SignImg from '../assets/login.png'
import { Link, useNavigate } from 'react-router-dom'

const ButtonStyle = {
  fontSize: '20px',
  color: '#fff',
  padding: '.5rem',
  marginTop: '2rem',
  borderRadius: '.3rem',
  border: 'none',
  background: 'rgb(38, 23, 177)'

}

const inputStyles = {
  justifyContent: { md: 'normal', sm: 'center', xs: 'center' },
  marginTop: { md: '0', sm: '8rem', xs: '8rem' },
  boxShadow: { md: 'none', sm: '3px 3px 3rem rgba(0,0,0,0.3)', xs: '3px 3px 3rem rgba(0,0,0,0.3)' },
  borderRadius: { md: 'none', sm: '1rem' }
}

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState ("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");

  // useEffect(() => {
  //   let login = localStorage.getItem("login");
  //   if (login) {
  //     navigate("/home");
  //   }
  //   let loginStatus = localStorage.getItem("loginStatus");
  //   if (loginStatus) {
  //     setError(loginStatus);
  //     setTimeout(function () {
  //       localStorage.clear();
  //       window.location.reload();
  //     }, 300)
  //   }
  //   setTimeout(() => {
  //     setMsg("");
  //   }, 500);
  // }, [msg])



  const handleChange = (e, type) => {
    switch (type) {
      case "name":
        setError("");
        setName(e.target.value);
        if (e.target.value === "") {
          setError("Username has left Blank!");
        }
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has left Blank!");
        }
        break;

      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password has left Blank!");
        }
        break;
      default:
        break;
    }

  };
//   function loginSubmit(e) {
//     e.preventDefault();
//     if (email !== "" && pass !== "" && name !== "") {
//       var url = "http://localhost/pharma-buddy-backend/Login.php";
//       var headers = {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       };
//       var Data = {
//         email: email,
//         name: name,
//         pass: pass
//       }
//       fetch(url, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(Data)
//       }).then((response) => response.json())
//         .then((response) => {
//           if (response[0].result === "Invalid Email!" || response[0].result === "Invalid Password!" || response[0].result === "Invalid Username") {
//             setError(response[0].result);
//           }
//           else {
//             setMsg(response[0].result);
//             setTimeout(() => {
//               localStorage.setItem("login", true);
//               localStorage.setItem("user", email)
//               localStorage.setItem("pass", pass)
//               localStorage.setItem("name",name);
//               navigate("/home");
//             }, 1);
//           }
//         }).catch((err) => {
//           setError(err);
//           console.log(err);
//         });
//     }
//     else {
//       setError("All Field are Required");
//     }
//   }



  return (
    <>
      <Grid container p={12} alignItems={'center'} justifyContent={'center'} sx={{ marginLeft:{md:'none' ,xs:'-30px'}}}>
        <Grid item md={5} xs={12}
          sx={{ ...inputStyles }}>
          <Box sx={{ padding: { md: 'none', xs: '30px' }}}>
            <Typography variant='h4' fontWeight={700}>Sign In</Typography>
            <Typography fontWeight={400} color={'#666'} marginTop={'10px'}>to Continue to Complaint System </Typography>
            <form>
              <Stack direction={'column'} spacing={3} mt={2}>
                <TextField
                  required
                  variant="standard"
                  type="text"
                  label="Name"
                  name='name'
                />
                <TextField
                  required
                  variant="standard"
                  type="text"
                  label="Email"
                  name='email'
                />
                <TextField
                  required
                  variant="standard"
                  type="Password"
                  name='password'
                  label="Password"
                />
                <input
                  type='submit'
                  defaultValue={'Continue'}
                  style={{ ...ButtonStyle }}
                />
                <Stack direction={'row'} spacing={5}>
                  <Typography>No Account ? <Link to='/register' style={{ textDecoration: 'none', color: '#666' }}><span>Sign Up</span></Link></Typography>
                  <div >
                    {
                      msg !== "" ?
                        <Typography style={{ color: 'green' }}>{msg}</Typography> :
                        <Typography style={{ color: 'crimson', fontWeight: 700 }}>{error}</Typography>
                    }
                  </div>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Grid>
        <Grid item md={5} sx={{ display: { md: 'block', xs: 'none', sm: 'none' } }}>
          <img src={SignImg} alt="Sign Up" height={400} width={600} />
        </Grid>
      </Grid>
    </>
  )
}

export default Login
