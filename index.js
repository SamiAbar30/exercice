let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  },
];
const id=0;
function checkstatus(status) {
  if (status === "En validation") return "on-validation";
  if (status === "Validé") return "valide";
  if (status === "Rejeté") return "rejected";
}
function loadTableData(items) {
  const tablebody = document.getElementById("table-body-users");
  tablebody.innerHTML="";
  items.forEach((item) => {
    const status = checkstatus(item.status);
    const dateformat = new Intl.DateTimeFormat(["ban", "id"]).format(
      Date.parse(item.createdDate)
    );
    const tabledata =
      '<tr class="table-body-row" id="table-body-row-users-' +
      item.id +
      '">' +
      '<td class="table-data-body " id="table-data-body-ID-' +
      item.id +
      '">' +
      item.id +
      "</td>" +
      '<td class="table-data-body " id="table-data-body-createdDate-' +
      item.id +
      '">' +
      dateformat +
      "</td>" +
      '<td class="table-data-body " id="table-data-body-status-' +
      item.id +
      '"><div class="' +
      status +
      ' status" >' +
      item.status +
      "</div></td>" +
      '<td class="table-data-body " id="table-data-body-firstName-' +
      item.id +
      '">' +
      item.firstName +
      "</td>" +
      '<td class="table-data-body " id="table-data-body-lastName-' +
      item.id +
      '">' +
      item.lastName +
      "</td>" +
      '<td class="table-data-body " id="table-data-body-userName-' +
      item.id +
      '">' +
      item.userName +
      "</td>" +
      '<td class="table-data-body " id="table-data-body-registrationNumber-' +
      item.id +
      '">' +
      item.registrationNumber +
      "</td>" +
      '<td class="table-data-body " id="table-data-body-Action-' +
      item.id +
      '"><img class="badge-bin" src="icons-bin-48.png" alt="" srcset="" onclick="deleteuser('+item.id+')"></td>' +
      "</tr>";
    tablebody.innerHTML = tablebody.innerHTML + tabledata;
  });
}
function modal() {
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("add-button");

  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
function deleteuser(id){
  users.forEach((item,index) => {
if(item.id==id){
  users.splice(index);
  console.log(users);
  loadTableData(users);
}
  });

}
function adduser(){
var modal = document.getElementById("myModal");
const nom=document.getElementById("nom").value;
const prenom=document.getElementById("prenom").value;
const etat=document.getElementById("etat").value;
const nomuser=document.getElementById("nomuser").value;
const date_creation=document.getElementById("date-creation").value;
const matricule=document.getElementById("matricule").value;

if(nom!=""||prenom!=""||etat!=""||nomuser!=""||date_creation!=""||matricule!=""){
 
  users = [...users,{
    id: 112313213,
    createdDate: date_creation,
    status: etat,
    firstName: prenom,
    lastName: nom,
    userName: nomuser,
    registrationNumber: matricule,
  }];
  console.log(users);
  modal.style.display = "none";
  loadTableData(users);
}


}
modal();
loadTableData(users);
