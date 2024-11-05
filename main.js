document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Capture the form data
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    message: document.getElementById("message").value,
    services: document.getElementById("services").value
  };




  

  // Use SMTP.js to send email
  Email.send({
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "tech@kanakdrishtiinfo.com", // Replace with your Elastic Email username
      Password: "67EDB199BEA6AA252A2161F17F97ABFAFD79", // Replace with your Elastic Email SMTP password
      To: 'tech@kanakdrishtiinfo.com', // Replace with the recipient's email
      From: "tech@kanakdrishtiinfo.com", // Replace with your verified sender email
      Subject: `Contact Us Form Submission: ${formData.services}`,
      Body: ` <b>First name:</b> ${formData.name}
      <br/>
      <br/>
      <b>Email:</b> ${formData.email}
      <br/>
      <b>Phone:</b> ${ formData.mobile}
      <br/>
      <b>Message:</b> ${formData.message}
      <br/>
      <b>Services:</b> ${formData.services}`
  }).then(
    message => {
      alert(message);
      // Reset the form fields after successful submission
      document.getElementById("myForm").reset();
    }    
  ).catch(error => {
    console.error("Email sending error: ", error);
    alert("There was an error sending the email.");
  });
});
