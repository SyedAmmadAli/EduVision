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
                <div class="card mt-4" >
                <img src="${element.logo}" class="card-img-top img-fluid" alt="..." style="width: 200px; height: 200px;">
                <div class="card-body">
                  <h5 class="card-title">${element.Educational_Institution}</h5>
                  <p class="card-text">${element.Degree_Level}</p>
                  <p class="card-text fs-5"><b>Last Date:  </b>${element.Last_Date}</p>
                  <a href="${element.link}" class="btn btn-primary">Apply Now</a>
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

  