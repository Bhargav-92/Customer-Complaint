import React, { useState, useEffect } from 'react';
import { Grid, TextField, Stack, Typography, Box } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import signupimg from '../assets/signup.png';
import validator from 'validator';

const ButtonStyle = {
  fontSize: '20px',
  color: '#fff',
  padding: '.6rem 0rem',
  borderRadius: '.3rem',
  border: 'none',
  background: 'rgb(38, 23, 177)',
};

const inputStyles = {
  justifyContent: { md: 'normal', sm: 'center', xs: 'center' },
  marginTop: { md: '0', sm: '8rem', xs: '8rem' },
  boxShadow: { md: 'none', sm: '3px 3px 3rem rgba(0,0,0,0.3)', xs: '3px 3px 3rem rgba(0,0,0,0.3)' },
  borderRadius: { md: 'none', sm: '1rem' },
};

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConpass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 15000)
  }, [msg])


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
      case "phone":
        setError("");
        setPhone(e.target.value);
        if (e.target.value === "") {
          setError("Phone Number has left Blank!");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value === "") {
          setError("Password has left Blank!");
        }
        break;
      case "conpass":
        setError("");
        setConpass(e.target.value);
        if (e.target.value === "") {
          setError("Confirm Password has left Blank!");
        }
        else if (e.target.value !== pass) {
          setError("Password Doesn't Matched");
        }
        break;

      default:
        break;
    }

  };
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (name !== "" && email !== "" && phone !== "" && pass !== "" && conpass !== "") {
//       var url = "http://localhost/pharma-buddy-backend/insert.php";
//       var headers = {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       };
//       var Data = {
//         name: name,
//         email: email,
//         phone: phone,
//         pass: conpass
//       }
//       fetch(url, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(Data)
//       }).then((response) => response.json())
//         .then((response) => {
//           setMsg(response[0].result);
//         }).catch((err) => {
//           setError(err);
//           console.log(err);
//         });
//         navigate("/signin");
//         localStorage.setItem("user", email)
//         localStorage.setItem("name", name)
//         localStorage.setItem("pass", pass)
//         localStorage.setItem("phone", phone)
//       setName("");
//       setEmail("");
//       setPhone("");
//       setPass("");
//       setConpass("");
//     }
//     else {
//       alert("All Fields are required !");
//     }
//   }
//   function checkUser() {
//     var url = "http://localhost/pharma-buddy-backend/checkUser.php";
//     var headers = {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     };
//     var Data = {
//       name: name,
//     }
//     fetch(url, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(Data)
//     }).then((response) => response.json())
//       .then((response) => {
//         setError(response[0].result);
//       }).catch((err) => {
//         setError(err);
//         console.log(err);
//       });

//   }
//   function checkEmail() {
//     var url = "http://localhost/pharma-buddy-backend/checkEmail.php";
//     var headers = {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     };
//     var Data = {
//       email: email,
//     }
//     fetch(url, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(Data)
//     }).then((response) => response.json())
//       .then((response) => {
//         setError(response[0].result);
//       }).catch((err) => {
//         setError(err);
//         console.log(err);
//       });
//   }

  const checkPass = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setError('Is Strong Password')
    } else {
      setError('Is Not Strong Password')
    }
  }

  return (
    <>
      <Grid container p={9} alignItems={'center'} justifyContent={'center'}>
        <Grid item md={6} sx={{ display: { md: 'block', xs: 'none', sm: 'none' } }} >
          <img src={signupimg} alt="Sign Up" height={400} width={550} />
        </Grid>
        <Grid item md={5} xs={12} sx={{ ...inputStyles }}>
          <Box sx={{ padding: { md: 'none', xs: '30px' } }}>
            <Typography variant='h5' fontWeight={700}>
              Sign Up
            </Typography>
            <Typography fontWeight={400} color={'#666'} marginTop={'10px'}>
              to Contine to Complaint System
            </Typography>

            <form >
              <Stack direction={'column'} spacing={2} mt={2}>
                <TextField
                  variant='standard'
                  type='text'
                  label='Name'
                  name='name'
                  value={name}
                  onChange={(e) => handleChange(e, "name")}
                />
                <TextField
                  required
                  variant='standard'
                  type='email'
                  label='Email'
                  name='email'
                  value={email}
                  onChange={(e) => handleChange(e, "email")}
                />
                <TextField
                  required
                  variant='standard'
                  type='text'
                  label='Phone'
                  name='phone'
                  value={phone}
                  onChange={(e) => handleChange(e, "phone")}
                />
                <TextField
                  required
                  variant='standard'
                  type='password'
                  label='Password'
                  name='password'
                  value={pass}
                  onChange={(e) => handleChange(e, "pass")}
                  onBlur={(e) => checkPass(e.target.value)}
                />
                <TextField
                  required
                  variant='standard'
                  type='password'
                  label='Confirm Password'
                  name='password'
                  value={conpass}
                  onChange={(e) => handleChange(e, "conpass")}
                />
                <input type='submit'
                  defaultValue={"Submit"}
                  style={{ ...ButtonStyle }}
                />
                <Stack direction={'row'} spacing={4}>
                  <Typography style={{ color: '#444' }}>
                    Do You Have Account??{' '}
                    <Link to='/signin' style={{ textDecoration: 'none', color: '#222' }}>
                      Sign In
                    </Link>
                  </Typography>
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
      </Grid>
    </>
  );
};

export default Register;
