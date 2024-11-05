  document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Get form data
      const name = document.getElementById('name_form').value;
      const email = document.getElementById('email_form').value;
      const number = document.getElementById('number_form').value;
      const message = document.getElementById('message_form').value;



      const formData = {
          "name": name,
          "email": email,
          "number": number,
          "message": message
  };

  

  console.log(formData);

});



// Use SMTP.js to send email
Email.send({
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "tech@kanakdrishtiinfo.com", // Replace with your Elastic Email username
      Password: "67EDB199BEA6AA252A2161F17F97ABFAFD79", // Replace with your Elastic Email SMTP password
      To: 'tech@kanakdrishtiinfo.com', // Replace with the recipient's email
      From: "tech@kanakdrishtiinfo.com", // Replace with your verified sender email
      Body: formData
  }).then(
    message => {
      alert("Email sent successfully!");
      // Reset the form fields after successful submission
      document.getElementById("myForm").reset();
    }    
  ).catch(error => {
    console.error("Email sending error: ", error);
    alert("There was an error sending the email.");
  });
  

     

  



