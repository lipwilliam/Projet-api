class Infos {
    constructor() {
        this.infosContainer = document.getElementById('content')
    }

    show(data) {
        this.infosContainer.innerHTML = `
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h5 class="card-title">${data.name} ${data.sys.country}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    Température minimale de <em style="color:blue;">${data.main.temp_min} degré</em>
                    et maximale de <em style="color:red;">${data.main.temp_max} degré.</em>
                </h6>
                <p class="card-text ">Les conditions météorologique sont décrites comme étant: <strong>${data.weather[0].description}</strong>.</p>
            </div>
        </div>
        `
    }
}

export default Infos