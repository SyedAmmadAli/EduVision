var adm_page = document.getElementById('adm_page')  

const admData = async () => {

    

    try {
        
        let res = await fetch ("./admission.json");
        let data = await res.json()
        console.log(data); 
        var adm_page = document.getElementById('adm_page')
        // const Unidata = () => {
            let uni_data = data.forEach(element => {

                adm_page.innerHTML +=
                `<div class="col-lg-3 col-12" >
                <div class="card" >
                <img src="${element.logo}" class="card-img-top img-fluid" alt="..." style="width: 200px; height: 200px;">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="${element.link}" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              </div>`
            });
        // }




    } catch (error) {
        console.log(error)
    }

}

admData()

  