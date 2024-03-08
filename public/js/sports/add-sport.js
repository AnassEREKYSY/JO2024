const addSport = async (event) => {
    try {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', document.getElementById('sport').value);
        formData.append('image', document.getElementById('image').files[0]);
        
        const url = '/api/admin/sports';
        const options = {
            method: 'POST',
            body: formData
        }

        const res = await fetch(url, options);
        const result = await res.json();
        if (result.status === 'success') {
            let success = document.createElement('div');
            success.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700', 'px-4', 'py-3', 'rounded', 'relative', 'mb-4');
            success.innerHTML = 'Sport added successfully';
            if (!document.querySelector('.bg-green-100')) {
                document.querySelector('form').appendChild(success);
            }
        } else {
            let error = document.createElement('div');
            error.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'relative', 'mb-4');
            error.innerHTML = result.message;
            if (!document.querySelector('.bg-red-100')) {
                document.querySelector('form').appendChild(error);
            }
        }
    }
    catch (e) {
        console.log(e);
    }
}

        

