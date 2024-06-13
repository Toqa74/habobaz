document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Name:', name);
    console.log('ID:', id);
    console.log('Email:', email);
    console.log('Password:', password);

    // Add further processing as needed
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action for demo
    alert('Forgot Password functionality is not implemented yet.');
});
