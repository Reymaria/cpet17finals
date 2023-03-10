
import Head from 'next/head'
import styles from '@/styles/forgotpass.module.css'
import Link from 'next/link'

function ForgotPass() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.contentbody}>
            <div className= {styles.top} >
            Forgot Your Password?
            </div>
            <div className= {styles.middle}>
            You can reset your password by proving your email address.
            </div>
            <div className= {styles.low} >
                <form className= {styles.FormDetails}>
                    <div className={styles.FPDetails}>
                        <div className={styles.FPLabels}>
                        Email:
                        </div>
                        <input type="email" className={styles.FPInputs} required/>
                    </div>
                    <div className= {styles.lowerpart} >
                        <div className= {styles.lowpart}>
                            <input type='submit' value= 'Sign Up' className={styles.submitbttn}/>
                        </div>
                        <Link href="/signin" className= {styles.lowpart} >
                            <button className= {styles.HrefDir}>
                               or Return to Login
                            </button>

                        </Link>
                    </div>
                </form>
            </div>
        </div>
      </main>
    </>
  )
}
export default ForgotPass