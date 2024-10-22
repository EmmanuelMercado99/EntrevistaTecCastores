// import React, { useState } from 'react';
// import { Link,useNavigate } from 'react-router-dom';
// import "./SignUp.css"
// import ReCAPTCHA from 'react-google-recaptcha';
// import CryptoJS from 'crypto-js';
// import { addUser } from '../../redux/slices/userSlices';
// import { useDispatch, useSelector } from 'react-redux';





// const SignUp = () => {
//     const navigate = useNavigate()
//     const dispatch = useDispatch();
//     const users = useSelector((state) => state.userData.users)
//     const [formData, setFormData] = useState({
//         name: "",
//         lastname: "",
//         user: "",
//         password: "",
//         email:""
//     })

//     const [passwordOk, setPasswordOk] = useState({
//         password2: ""
//     })

//     const [captcha, setCaptcha] = useState(null)

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setFormData({ ...formData, [name]: value })
//     }
//     const handleInputChangePassword = (e) => {
//         const { name, value } = e.target
//         setPasswordOk({ ...passwordOk, [name]: value })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const {email,user,password,name,lastname} = formData
//         const {password2} = passwordOk
//         if(email!=""&& user!=""&&password!="",name!=""&&lastname!=""&&password2!=""){
//             if (formData.password === passwordOk.password2) {
//                 const userExists = users.some(existingUser => existingUser.user === formData.user);

//                 if (userExists) {
//                     alert("Ya existe este usuario, favor de ingresar otro")
//                 }
//                 else {
//                     const hashedPassword = CryptoJS.MD5(formData.password).toString()
//                     alert("Usuario agregado correctamente")
//                     dispatch(addUser({ ...formData, password: hashedPassword }))
//                     navigate('/')
//                     setFormData({
//                         name: "",
//                         lastname: "",
//                         user: "",
//                         password: "",
//                         email:""
//                     })
//                     setPasswordOk({
//                         password2:""
//                     })

//                 }
//             }
//             else {
//                 alert("Las contraseñas no coinciden")
//             }
//         }
//         else{
//             alert('No se pueden dejar campos vaciós')
//         }

//     }


//     return (
//         <div className='signUpBody'>
//             <div class="bg"></div>
//             <div class="bg bg2"></div>
//             <div class="bg bg3"></div>

//             <div className='signUpBox'>
//             <p className='fw-bold fs-1'>Innovatube</p>
//                 <img className="logoSignUp"  src="castor3.png" alt="logo" />

//                 <form onSubmit={handleSubmit} className='signUpForm'>
//                     <input type="input" class="form-control inputText" value={formData.name} onChange={handleInputChange} id="name" name="name" placeholder="Nombre"></input>
//                     <input type="input" class="form-control inputText" value={formData.lastname} onChange={handleInputChange} id="lastname" name="lastname" placeholder="Apellidos"></input>
//                     <input type="input" class="form-control inputText" value={formData.user} onChange={handleInputChange} id="user" name="user" placeholder="Usuario"></input>
//                     <input type="input" class="form-control inputText" value={formData.email} onChange={handleInputChange} id="email" name="email" placeholder="Correo electrónico"></input>
//                     <input type="password" class="form-control inputText" value={formData.password} onChange={handleInputChange} id="password" name="password" placeholder="Ingrese su contraseña"></input>
//                     <input type="password" class="form-control inputText" value={passwordOk.password2} onChange={handleInputChangePassword} id="password2" name="password2" placeholder="Reingrese su contraseña"></input>
//                     <ReCAPTCHA
//                         sitekey="6LfMnWMqAAAAAJ6r1fXFv6pSSOt92f-cnVGU6ao5" 
//                         onChange={(value) => setCaptcha(value)} 
//                     />
//                     <button type="submit" class="btn btnSubmit">Crear</button>
//                 </form>

//                 <p>¿Ya tienes una cuenta?</p>
//                 <p>Ingresa aquí <Link to="/">Iniciar sesión</Link></p>
//             </div>

//         </div>
//     )
// }

// export default SignUp;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
import ReCAPTCHA from 'react-google-recaptcha';
import CryptoJS from 'crypto-js';
import { addUser } from '../../redux/slices/userSlices';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userData.users);

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        user: "",
        password: "",
        email: ""
    });

    const [passwordOk, setPasswordOk] = useState({
        password2: ""
    });

    const [captcha, setCaptcha] = useState(null);

    const [errors, setErrors] = useState({
        userError: false,
        emailError: false,
        passwordError: false,
        passwordMatchError: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name + 'Error']: false });
    };

    const handleInputChangePassword = (e) => {
        const { name, value } = e.target;
        setPasswordOk({ ...passwordOk, [name]: value });
        setErrors({ ...errors, [name + 'Error']: false });
    };

    const validateForm = () => {
        const { email, user, password, name, lastname } = formData;
        const { password2 } = passwordOk;
        let valid = true;

        const userRegex = /^.{7,}$/;
        if (!userRegex.test(user)) {
            setErrors(prev => ({ ...prev, userError: true }));
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors(prev => ({ ...prev, emailError: true }));
            valid = false;
        }

        if (!userRegex.test(password)) {
            setErrors(prev => ({ ...prev, passwordError: true }));
            valid = false;
        }

        if (password !== password2) {
            setErrors(prev => ({ ...prev, passwordMatchError: true }));
            valid = false;
        }

        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const { email, user, password, name, lastname } = formData;
            const { password2 } = passwordOk;

            const userExists = users.some(existingUser => existingUser.user === user);

            if (userExists) {
                setErrors(prev => ({ ...prev, userError: true }));
            } else {
                const hashedPassword = CryptoJS.MD5(password).toString();
                dispatch(addUser({ ...formData, password: hashedPassword }));
                alert("Usuario agregado correctamente");
                navigate('/');
                setFormData({
                    name: "",
                    lastname: "",
                    user: "",
                    password: "",
                    email: ""
                });
                setPasswordOk({ password2: "" });
            }
        }
    };

    return (
        <div className='signUpBody'>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>

            <div className='signUpBox'>
                <p className='fw-bold fs-1'>Innovatube</p>
                <img className="logoSignUp" src="castor3.png" alt="logo" />
                <div className='formInstruccions'>
                    <div>
                        <form onSubmit={handleSubmit} className='signUpForm'>
                            <input
                                type="input"
                                className={`form-control inputText ${errors.nameError ? 'border border-danger' : ''}`}
                                value={formData.name}
                                onChange={handleInputChange}
                                id="name"
                                name="name"
                                placeholder="Nombre"
                            />

                            <input
                                type="input"
                                className={`form-control inputText ${errors.lastnameError ? 'border border-danger' : ''}`}
                                value={formData.lastname}
                                onChange={handleInputChange}
                                id="lastname"
                                name="lastname"
                                placeholder="Apellidos"
                            />

                            <input
                                type="input"
                                className={`form-control inputText ${errors.userError ? 'border border-danger' : ''}`}
                                value={formData.user}
                                onChange={handleInputChange}
                                id="user"
                                name="user"
                                placeholder="Usuario"
                            />
                            {errors.userError && <div className="text-danger">El usuario inválido o existente</div>}

                            <input
                                type="input"
                                className={`form-control inputText ${errors.emailError ? 'border border-danger' : ''}`}
                                value={formData.email}
                                onChange={handleInputChange}
                                id="email"
                                name="email"
                                placeholder="Correo electrónico"
                            />
                            {errors.emailError && <div className="text-danger">Correo electrónico inválido.</div>}

                            <input
                                type="password"
                                className={`form-control inputText ${errors.passwordError ? 'border border-danger' : ''}`}
                                value={formData.password}
                                onChange={handleInputChange}
                                id="password"
                                name="password"
                                placeholder="Ingrese su contraseña"
                            />
                            {errors.passwordError && <div className="text-danger">La contraseña inválido</div>}

                            <input
                                type="password"
                                className={`form-control inputText ${errors.passwordMatchError ? 'border border-danger' : ''}`}
                                value={passwordOk.password2}
                                onChange={handleInputChangePassword}
                                id="password2"
                                name="password2"
                                placeholder="Reingrese su contraseña"
                            />
                            {errors.passwordMatchError && <div className="text-danger">Las contraseñas no coinciden.</div>}

                            <button type="submit" className="btn btnSubmit">Crear</button>
                        </form>
                    </div>

                    <div className='intruccciones'>
                        <p>Todos los campos son obligatorios👀</p>
                        <p>El usuario y la contraseña deben tener:</p>
                        <p> ✦8 carácteres </p>
                        <p> ✦1 número por lo menos</p>
                        <p></p>
                    </div>

                </div>



                <p>¿Ya tienes una cuenta?</p>
                <p>Ingresa aquí <Link to="/">Iniciar sesión</Link></p>
            </div>
        </div>
    );
}

export default SignUp;

