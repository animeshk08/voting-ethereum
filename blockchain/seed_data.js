const {addCandidate} = require('./w3/addEntities');
const {getCandidates, reset} = require('./w3/vote');

const faker = require('faker');
faker.locale = "en_IND";

const mysql = require('mysql');

let dbconn = mysql.createConnection({host: "codefundodbserver.mysql.database.azure.com", user: "codefundoadmin@codefundodbserver", password: "Codefundoblockchain1!", database: "codefundodb", port: 3306, ssl  : {rejectUnauthorized: false}});

dbconn.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + dbconn.threadId);
});

const constituencies = ['vadodara','surat','indore','ujjain', 'gwalior','bharuch','ahmedabad','mumbai','delhi','nagpur'];
const parties = ['BJP', 'Congress', 'AAP', 'Trinamool Congress', 'Shiv Sena', 'PDP'];
const elections = ['Lok Sabha Elections 2019', 'Gujarat Vidhan Sabha Elections 2018'];

constituencies.map((con, i) => {
    dbconn.query('replace into backend_constituency values (?,?)', [i+1, con])
});

// Inserting into election (id, name, description, start_date, end_date)
dbconn.query('replace into backend_election values (?,?,?,?,?)', [1,elections[0], 'This is the upcoming election for the largest democracy in the world. The lok sabha election is the general election where the Indian democracy chooses its next ruling party.', '2019-08-24','2019-08-28']);
dbconn.query('replace into backend_election values (?,?,?,?,?)', [2,elections[1], 'This is the election of the state of gujarat. The vidhan sabha election is the election where the public of Gujarat state chooses its next ruling party.', '2018-08-20','2018-08-25']);

// Inserting into party (id, name)
parties.map((party, i) => {
   dbconn.query('replace into backend_party values (?,?, null)', [i+1, party]);
});

//     Inserting into electionconstituency (id, constituency_id, election_id)

for(let i=1; i<=10; i++)
{
    dbconn.query('replace into backend_electionconstituency values (?,?,?)', [i,i,1]);
}
dbconn.query('replace into backend_electionconstituency values (?,?,?)', [11,1,2]);
dbconn.query('replace into backend_electionconstituency values (?,?,?)', [12,2,2]);
dbconn.query('replace into backend_electionconstituency values (?,?,?)', [13,6,2]);
dbconn.query('replace into backend_electionconstituency values (?,?,?)', [14,7,2]);

//     Inserting into aadharDetail (id, name, phoneNumber, aadharNum, fingerprint, age, gender, address, pincode, imageUrl, constituency_id)
for(let i=1;i<=30;i++)
    dbconn.query('replace into backend_aadhardetail values (?,?,?,?,?,?,?,?,?,?,?)', [i, faker.name.findName(), faker.phone.phoneNumber(), faker.phone.phoneNumber().slice(1,-1), faker.random.uuid(), 20, 'M', faker.address.streetAddress(), faker.address.zipCode(), 'images/placeholder.jpg' , i%10 + 1]);

//     Inserting into the partycandidate (id, aadhar_id, constituency_id, election_id, party_id)
dbconn.query('replace into backend_partycandidate values(?,?,?,?,?)', [1,3,1,1,1]);
dbconn.query('replace into backend_partycandidate values(?,?,?,?,?)', [2,7,1,1,2]);
dbconn.query('replace into backend_partycandidate values(?,?,?,?,?)', [3,11,1,1,3]);
dbconn.query('replace into backend_partycandidate values(?,?,?,?,?)', [4,16,1,1,4]);
dbconn.query('replace into backend_partycandidate values(?,?,?,?,?)', [5,24,1,1,5]);
dbconn.query('replace into backend_partycandidate values(?,?,?,?,?)', [6,27,1,1,6], (err,res,fields) => {
    if(err)
        console.log(err);
    else
        console.log(res);
});

// db.each('select bad.name as name, bp.name as party, bad.aadhar_num as aadhar_num from backend_partycandidate natural join backend_party as bp, backend_aadhardetail as bad where bad.id = aadhar_detail_id_id', async (err,row) => {
//
//     console.log(row.party+"_"+row.aadhar_num);
//     let candidateHash = row.party+"_"+row.aadhar_num;
//     // console.log(await addCandidate(candidateHash));
// });