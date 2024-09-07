
export const checkValidData = (name,email, password) => {
    
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const  isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    let isNameValid = true;
    if (name) {
        isNameValid = /^[A-Za-z]{3,16}(?:\s[A-Za-z]{3,16}){0,3}$/.test(name);
 
        if (!isNameValid) {
            return "Name is not valid";
        }
    }

    if(!isEmailValid)
        return "Email ID is not valid";
    if(!isPasswordValid)
        return "Password is not valid";
    return null;

}