
function myFunction(){
    alert("Booking was succcessfully proceed to payment");
};
    
function submitButton(){
    alert("Message sent successfully, we will respond in 24hrs time")
};
document.getElementById("myForm").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    if (email === "") {
      e.preventDefault(); // stop the form from submitting
      alert("Please enter your email.");
      document.getElementById("myForm").addEventListener("submit", function (e) {
    const message = document.getElementById("message").value.trim();
    if (mesage === "") {
      e.preventDefault(); // stop the form from submitting
      alert("Please enter your email.");
    }
  });