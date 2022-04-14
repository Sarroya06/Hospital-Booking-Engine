const form = document.querySelector('.form');
const patientName=document.querySelector('#patient-name');
const contact= document.querySelector('#contact');
const date= document.querySelector('#date');
const time= document.querySelector('#time');
const symptoms= document.querySelector('#symptoms');
const services= document.querySelector('#services');
const consultations=document.querySelector('#consultations');


form.addEventListener('submit', function (e) {
  e.preventDefault();
  showconsulation();
  form.reset();
})

function showconsulation(){
    let newConsultation = {
        patientname : patientName.value,
        
      contact : contact.value,
        date : date.value,
     time : time.value,
        symptoms : symptoms.value
    }
    
    const newlist=document.createElement("li");
    newlist.setAttribute('class','patientli')
    consultations.append(newlist)
    ;

    newlist.innerHTML = `
                         <h2 class="">Patient Details</h2>
                         <p class="font-weight-bold">Patient Name:  <span class="font-weight-normal">${patientName.value}<span></p>
                          <p class="font-weight-bold">Contact:  <span class="font-weight-normal">${contact.value}<span></p>
                         <p class="font-weight-bold">Date:  <span class="font-weight-normal">${date.value}<span></p>
                         <p class="font-weight-bold">Time:  <span class="font-weight-normal">${time.value}<span></p>
                         <p class="font-weight-bold">Symptoms:  <span class="font-weight-normal">${symptoms.value}<span></p>
                    `;
                    const del=document.createElement("button");
                    del.setAttribute('class','delbtn')
                    del.textContent='Delete';
                    newlist.append(del);
                    del.addEventListener('click',function(){
                        newlist.remove();
                        console.log(del);
                    })


    
}

