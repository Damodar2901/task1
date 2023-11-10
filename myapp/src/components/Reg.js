import React from 'react'
import'./Reg.css'

const Reg = () => {
  return (
    <div class="container">
    <h2>Registration Form</h2>
    <form action="registration_process.php" method="post">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label for="confirm_password">Confirm Password:</label>
        <input type="password" id="confirm_password" name="confirm_password" required />

        <input type="submit" value="Register" />
    </form>
</div>
  )
}

export default Reg