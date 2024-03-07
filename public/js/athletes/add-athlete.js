const addAthlete = async (event) => {
    try {
        event.preventDefault();
        const formData = new FormData();
        formData.append('prenom', document.getElementById('prenom').value);
        formData.append('nom', document.getElementById('nom').value);
        formData.append('date_naissance', document.getElementById('date_naissance').value);
        formData.append('sexe', document.getElementById('sex').value);
        formData.append('pays_id', document.getElementById('pays_id').value);
        formData.append('sport_id', document.getElementById('sport_id').value);
        formData.append('photo', document.getElementById('photo').files[0]);
        const url = '/api/admin/athletes';
        const options = {
            method: 'POST',
            body: formData,
        }

        const res = await fetch(url, options);
        const result = await res.json();
        
        if (result.status === 'success') {
            let success = document.createElement('div');
            success.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700', 'px-4', 'py-3', 'rounded', 'relative', 'mb-4');
            success.innerHTML = 'Athlete added successfully';
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
        
