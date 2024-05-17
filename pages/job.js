var job_page = document.getElementById('job_page')  

const admData = async () => {

    

    try {
        
        let res = await fetch ("./jobs.json");
        let data = await res.json()
        console.log(data); 
        var job_page = document.getElementById('job_page')
        // const Unidata = () => {
            let job_data = data.forEach(element => {

                job_page.innerHTML +=
                `<div class="col-lg-3 col-12" >
                <div class="card mt-4" >
                <img src="${element.logo}" class="card-img-top img-fluid" alt="..." style="width: 200px; height: 200px;">
                <div class="card-body">
                  <h5 class="card-title">${element.job_title}</h5>
                  <p class="card-text fs-6"><b>Job Type:</b> ${element.type}</p>
                  <p class="card-text fs-5"><b>Sector:  </b>${element.Sector}</p>
                  <p class="card-text fs-5"><b>Announced:  </b>${element.Announced}</p>
                  <p class="card-text fs-5 text-danger"><b>Last Date:  </b>${element.Deadline}</p>
                  <a href="${element.link}" class="btn btn-success">Apply Now</a>
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

  