document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : 'Not specified';
    const country = document.getElementById('country').value;
    const feedback = document.getElementById('feedback').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Survey Results</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>`
    ;

});

