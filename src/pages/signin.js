
import Link from "next/link";
import styles from '@/styles/signin.module.css'
import Head from 'next/head'
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {withSessionSsr} from '../lib/config/withSession';


export const getServerSideProps = withSessionSsr(async (context) => {
  const user = context.req.session.user
  
  if (!!user) {
    return {
      redirect: {
        destination: '/images',
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
});


function SignIn(){
    const router = useRouter();

    const emailInput = useRef();
    const passwordInput = useRef();
    
    // modify dom to display a message
    const [displayIncorrectInputMessage, toggleIncorrectInputMessage] = useState(false);
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const email = emailInput.current.value;
      const password = passwordInput.current.value;
      
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      });
      
      if (res.ok) {
        return router.push('/dashboard');
      } else {
        toggleIncorrectInputMessage(true)
      }
    };
   
    return ( 
        <>
            <Head>
                <title>Log In</title>
                <meta name="description" content="Sign In" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.navbarcontainer}>
                    <div className={styles.navbar}>
                        <Link href= "/" className={styles.navbarcontent}>Team 5G</Link>
                        <Link href="/signin" className={styles.navbarcontent}>Sign In</Link>
                        <Link href= "/signup" className={styles.navbarcontent}>SignUp</Link>
                    </div>
                </div>
                <div className={styles.contentContainer} >
                    <div className= {styles.BoxContainer} >
                        <div className= {styles.SigninBox}>
                            <div className= {styles.SIMain}>
                            Login to Your Account
                            </div>
                            <form className={styles.SIForm} onSubmit={handleSubmit} >
                                <div className= {styles.SIFormDetails}>
                                    <div className={styles.SIDetails}>
                                        <div className={styles.SILabels}>Email:
                                        </div>
                                        <input type='email' className={styles.SIInputs} ref={emailInput} name = "email" required/>
                                    </div>
                                    <div className={styles.SIDetails}>
                                        <div className={styles.SILabels}>Password: </div>
                                        <input type= 'password' className={styles.SIInputs} required ref={passwordInput} name = "password"/>
                                    </div>
                                </div>
                                <Link href='/forgotpass' className= {styles.forgotpassHref}>
                                    Forgot Your Password?
                                </Link>
                                <input type='submit' value= 'Login' className={styles.submitbttn}/>

                                
                            </form>
                        </div>
                        <div className= {styles.DetailsBox}>
                            <div className={styles.DetailsHead}>New Here?</div>
                            <div className={styles.DetailsInfo}>Enter your personal information and  start your journey with us!
                            </div>
                            <Link href="/signup">
                                <button className={styles.HrefDir}>
                                    Sign Up
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
 
export default SignIn ;