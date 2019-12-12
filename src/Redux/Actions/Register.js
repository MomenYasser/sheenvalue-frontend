export const LOGEDIN = 'LOGEDIN';
export const LOGEDOUT = 'LOGEDOUT';


export function logedin(token) {
    localStorage.setItem("Token",token);
    return { 
             type: LOGEDIN, 
             token: token,
           };
  }
  export function logedout(token) {
    localStorage.removeItem("Token");
    return { 
             type: LOGEDOUT, 
           };
  }
