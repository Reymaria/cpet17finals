
import Link from "next/link";
import styles from '@/styles/signup.module.css'
import Head from 'next/head'
import {useRouter} from 'next/router';
import {useRef, useState} from 'react';
import {withSessionSsr} from '../lib/config/withSession';
import {withIronSessionApiRoute, withIronSessionSsr} from 'iron-session/next';
import {ironOptions} from '../lib/config/iron-config';

export const getServerSideProps = withSessionSsr(async (context) => {
  const user = context.req.session.user;
  
  if (!!user) {
    return {
      redirect: {
        destination: '/forgotpass',
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
});


function SignUp(){

    const router = useRouter();
  
    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    
    // modify dom to display a message
    const [displayIncorrectInputMessage, toggleIncorrectInputMessage] = useState(false);
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      const name = nameInput.current.value;      
      const email = emailInput.current.value;
      const password = passwordInput.current.value;
      
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email,  password})
      });
      
      if (res.ok) {
        // login immediately after creating an account
        console.log("signup success"); // /!\ outputs to browser console /!\
      }
    }
    
    return ( 
        <>
            <Head>
                <title>Create Account</title>
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
                        <div className= {styles.SignupBox}>
                            <div className= {styles.SUMain}>
                            Create Your Account
                            </div>
                            <form className={styles.SUForm} onSubmit={handleSubmit} >
                                <div className= {styles.SUFormDetails}>
                                    <div className={styles.SUDetails}>
                                        <div className={styles.SULabels}>Name:
                                        </div>
                                        <input type="text" className={styles.SUInputs} name="name" required ref={nameInput}/>
                                    </div>
                                    <div className={styles.SUDetails}>
                                        <div className={styles.SULabels}>Email:
                                        </div>
                                        <input type='email' className={styles.SUInputs} name="email" required ref={emailInput}/>
                                    </div>
                                    
                                    <div className={styles.SUDetails}>
                                        <div className={styles.SULabels}>Password: </div>
                                        <input type= 'password' className={styles.SUInputs} name="password" required ref={passwordInput}/>
                                    </div>
                                </div>
                                <input type='submit' value= 'Sign Up' className={styles.submitbttn}/>

                                
                            </form>
                        </div>
                        <div className= {styles.DetailsBox}>
                            <div className={styles.DetailsHead}>One of Us?</div>
                            <div className={styles.DetailsInfo}>If you already have your own account, just log in.
                            </div>
                            <Link href="/signin">
                                <button className={styles.HrefDir}>
                                    Sign In
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
 
export default SignUp ;