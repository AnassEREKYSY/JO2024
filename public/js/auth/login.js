const login = async (event) => {
    try{
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const res = await fetch('/api/admin/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    
    if (data.status == 'fail' && data.message) {
      let error = document.createElement('div');
      error.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'relative', 'mb-4');
      error.innerHTML = data.message;
      
      if (!document.querySelector('.bg-red-100')) {
        document.querySelector('form').appendChild(error);
      }
    } else {
      window.location.href = '/';
    }
   
  }catch(e){
    console.log(e);
  }
}