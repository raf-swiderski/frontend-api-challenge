// postPeep = document.getElementById("post-peep")

allPeeps = document.getElementById("all_peeps");
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
    .then(res => res.json())
    .then(peeps => {
        peeps.forEach(peep => {
            allPeeps.innerHTML +=
            `<h3>-----------</h3>
            <p> ${peep.body} </p>
            <h4> ${peep.user.handle} </h4>`
        })
    })

function createNewPeep() {
    newPeep = document.getElementById("new_peep").value 
    storeNewPeepOnAPI(newPeep)
}

const storeNewPeepOnAPI = (note) => {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps'), {
        method: 'POST',
        
    }

}