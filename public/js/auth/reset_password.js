const reset_password = async event => {
  try {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const pin_code = document.getElementById('code_pin').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/admin/auth/reset-password', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pin_code, password }),
    });

    const data = await response.json();
    if (data.status === 'success') {
      let success = document.createElement('div');
      success.classList.add(
        'bg-green-100',
        'border',
        'border-green-400',
        'text-green-700',
        'px-4',
        'py-3',
        'rounded',
        'relative',
        'mb-4'
      );
      success.innerHTML = data.message;

      const existingAlert = document.querySelector('.bg-green-100');
      if (existingAlert) {
        existingAlert.remove();
      }
      document.querySelector('form').appendChild(success);

      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } else {
      let error = document.createElement('div');
      error.classList.add(
        'bg-red-100',
        'border',
        'border-red-400',
        'text-red-700',
        'px-4',
        'py-3',
        'rounded',
        'relative',
        'mb-4'
      );
      error.innerHTML = data.message;

      const existingAlert = document.querySelector('.bg-red-100');
      if (existingAlert) {
        existingAlert.remove();
      }
      document.querySelector('form').appendChild(error);
    }
  } catch (error) {
    let error_div = document.createElement('div');
    error_div.classList.add(
      'bg-red-100',
      'border',
      'border-red-400',
      'text-red-700',
      'px-4',
      'py-3',
      'rounded',
      'relative',
      'mb-4'
    );
    error_div.innerHTML = error.message;

    const existingAlert = document.querySelector('.bg-red-100');
    if (existingAlert) {
      existingAlert.remove();
    }
    document.querySelector('form').appendChild(error_div);
  }
}
