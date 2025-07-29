import {usePuterStore} from "~/lib/puter";

export const meta = () => ([
  { title: 'Resumiz | Auth' },
  { name: 'description', content: 'Log into your account' },

])

import React from 'react';

const Auth = () => {
     const { isLoading, auth } = usePuterStore();
  return (
         <main className="bg-[url('/images/bg-auth.svg')] bg-cover min h-screen flex items-center justify-center ">
            <div className="gradient-border shadow-lg">
              <section className={"flex flex-col gap-8 bg-white rounded-2xl p-10"}>
                <div className={"flex flex-col items-center gap-2 text-center"}>
                  <h1>Welcome</h1>
                  <h2>Log in to polish your resume </h2>
                </div>
                <div>
                  {isLoading ? (
                       <button className="auth-button animate-pulse">
                         <p>Signing you in ...</p>
                       </button>
                  ) : (
                      <>
                        {auth.isAuthenticated ? (
                            <button className="auth-button" onClick={auth.signOut}>
                              <p>Log Out</p>
                            </button>

                        ) : (
                                  <button className="auth-button" onClick={auth.signIn}>
                                    <p>Log In</p>
                                  </button>



                        )}

                      </>
                  )}
                </div>


              </section>

            </div>
         </main>

        )
}

export default Auth
