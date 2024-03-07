const addPays = (event) => {
    try{
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
       fetch('/api/admin/pays', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then(resData => {
            if(resData.status === 'success'){
                let success = document.createElement('div');
                success.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700', 'px-4', 'py-3', 'rounded', 'relative', 'mb-4');
                success.innerHTML = 'Pays added successfully';
                if (!document.querySelector('.bg-green-100')) {
                    document.querySelector('form').appendChild(success);
                }
            } else {
                let error = document.createElement('div');
                error.classList.add('bg-red-100', 'border', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'relative', 'mb-4');
                error.innerHTML = resData.message;
                if (!document.querySelector('.bg-red-100')) {
                    document.querySelector('form').appendChild(error);
                }
            }
        });
    }catch(e){
        console.error(e);
    }
}