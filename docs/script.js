document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var age = document.getElementById('age').value.trim();
    var maritalStatus = document.getElementById('maritalStatus').value;
    var education = document.getElementById('education').value;
    var countryPreference = document.getElementById('countryPreference').value;
    var serviceType = document.getElementById('serviceType').value;
    var query = document.getElementById('query').value.trim();
    
    var message = "New Query:\n" +
                  "Name: " + name + "\n" +
                  "Email: " + email + "\n" +
                  "Age: " + age + "\n" +
                  "Marital Status: " + maritalStatus + "\n" +
                  "Education: " + education + "\n" +
                  "Preferred Country: " + countryPreference + "\n" +
                  "Service Type: " + serviceType + "\n" +
                  "Query: " + query;

    var whatsappUrl = "https://wa.me/917814422369?text=" + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
});
