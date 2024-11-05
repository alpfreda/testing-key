import './App.css';

import React from 'react';

const OtpForm = () => {
  // const inputRef = useRef(null);
  // const formRef = useRef(null);

  // useEffect(() => {
  //   const input = inputRef.current;
  //   if (!input) return;

  //   // Check if the credentials API and OTP transport are supported
  //   if (!navigator.credentials || !navigator.credentials.get) {
  //     console.warn("The navigator.credentials API is not supported in this browser.");
  //     return;
  //   }

  //   const ac = new AbortController();
  //   const form = formRef.current;

  //   const handleSubmit = () => {
  //     ac.abort();
  //   };

  //   if (form) {
  //     form.addEventListener('submit', handleSubmit);
  //   }

  //   navigator.credentials.get({
  //     otp: { transport: ['sms'] },
  //     signal: ac.signal
  //   }).then(otp => {
  //     input.value = otp.code;
  //     if (form) form.submit();
  //   }).catch(err => {
  //     console.log(err);
  //   });

  //   return () => {
  //     if (form) {
  //       form.removeEventListener('submit', handleSubmit);
  //     }
  //   };
  // }, []);

  return (
    // <form ref={formRef}>
    I changed it to normal
      <input type="text" autoComplete="one-time-code" inputMode="numeric" name="one-time-code" />
      // <button type="submit">Submit</button>
    // </form>
  );
};

export default OtpForm;
