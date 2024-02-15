let data = [
    {"schoolName": "Globetek Science Foundation", "city": "Makati City", "schoolID": 407698},
    {"schoolName": "AMA Computer College", "city": "Caloocan City", "schoolID": 400947},
    {"schoolName": "Asian Institute of Computer Studies", "city": "Caloocan City", "schoolID": 400952},
    {"schoolName": "Datamex Institute of Computer Technology", "city": "Caloocan City", "schoolID": 400960},
    {"schoolName": "Informatics College", "city": "Caloocan City", "schoolID": 400962},
    {"schoolName": "Martinez Memorial Colleges", "city": "Caloocan City", "schoolID": 400972},
    {"schoolName": "STI College", "city": "Caloocan City", "schoolID": 400978},
    {"schoolName": "Anchor of Life Academy", "city": "Caloocan City", "schoolID": 406674},
    {"schoolName": "La Consolacion College", "city": "Caloocan City", "schoolID": 406678},
    {"schoolName": "Notre Dame of Greater Manila", "city": "Caloocan City", "schoolID": 406681},
    {"schoolName": "Philippine Cultural College", "city": "Caloocan City", "schoolID": 406683},
    {"schoolName": "St. Mary's Academy", "city": "Caloocan City", "schoolID": 406685},
    {"schoolName": "Systems Plus Computer College", "city": "Caloocan City", "schoolID": 406686},
    {"schoolName": "Baesa Adventist Academy", "city": "Caloocan City", "schoolID": 406688},
    {"schoolName": "Manila Central University", "city": "Caloocan City", "schoolID": 406696},
    {"schoolName": "St. Dominic Savio College", "city": "Caloocan City", "schoolID": 406698},
    {"schoolName": "Our Lady of Lourdes Catholic School", "city": "Caloocan City", "schoolID": 406715},
    {"schoolName": "St. Clare College of Caloocan", "city": "Caloocan City", "schoolID": 406715},
    {"schoolName": "Immaculada Concepcion Colleges", "city": "Caloocan City", "schoolID": 406726},
    {"schoolName": "St. Joseph College of Novaliches", "city": "Caloocan City", "schoolID": 406729},
    {"schoolName": "Holy Infant Montessori Center", "city": "Caloocan City", "schoolID": 406733},
    {"schoolName": "La Consolacion College", "city": "Caloocan City", "schoolID": 406734},
    {"schoolName": "Rosary Hills International School", "city": "Caloocan City", "schoolID": 406736},
    {"schoolName": "St. Therese of Rose School", "city": "Caloocan City", "schoolID": 406745},
    {"schoolName": "Bloomington Middle and Grade School", "city": "Caloocan City", "schoolID": 406746},
    {"schoolName": "The Immaculate Mother Academy", "city": "Caloocan City", "schoolID": 406747},
    {"schoolName": "E.M. Castro Educational Foundation", "city": "Caloocan City", "schoolID": 483512},
    {"schoolName": "St. Mary Goretti School", "city": "Caloocan City", "schoolID": 483517},
    {"schoolName": "Pledge of Love School", "city": "Caloocan City", "schoolID": 483519},
    {"schoolName": "St. Vincent de Ferrer College of Camarin", "city": "Caloocan City", "schoolID": 483521},
    {"schoolName": "Young Achievers School", "city": "Caloocan City", "schoolID": 483526},
    {"schoolName": "Golden Link College Foundation", "city": "Caloocan City", "schoolID": 483528},
    {"schoolName": "Genesis Christian Academy", "city": "Caloocan City", "schoolID": 483540},
    {"schoolName": "Holy Angel School", "city": "Caloocan City", "schoolID": 483545},
    {"schoolName": "Escuela de Sophia", "city": "Caloocan City", "schoolID": 483548},
    {"schoolName": "Our Lord's Angels School", "city": "Caloocan City", "schoolID": 483551},
    {"schoolName": "University of the East", "city": "Caloocan City", "schoolID": 483559},
    {"schoolName": "Christ Jeross Christian Academy", "city": "Caloocan City", "schoolID": 483568},
    {"schoolName": "Ridgewood School", "city": "Caloocan City", "schoolID": 483569},
    {"schoolName": "Academy of Saint Andrew", "city": "Caloocan City", "schoolID": 483570},
    {"schoolName": "Sagrada Familia School", "city": "Caloocan City", "schoolID": 483587},
    {"schoolName": "Our Lady of Grace School", "city": "Caloocan City", "schoolID": 483653},
    {"schoolName": "University of Caloocan City", "city": "Caloocan City", "schoolID": 600199},
    {"schoolName": "ABE International College of Business and Economics", "city": "Las Piñas City", "schoolID": 400981},
    {"schoolName": "AMA Computer College", "city": "Las Piñas City", "schoolID": 400986},
    {"schoolName": "Southville International School and Colleges", "city": "Las Piñas City", "schoolID": 400997},
    {"schoolName": "St. Augustine College", "city": "Las Piñas City", "schoolID": 400999},
    {"schoolName": "AMA Basic Education", "city": "Las Piñas City", "schoolID": 405614},
    {"schoolName": "Philippine Merchant Marine School", "city": "Las Piñas City", "schoolID": 407036},
    {"schoolName": "Bernardo College", "city": "Las Piñas City", "schoolID": 407079},
    {"schoolName": "Camella School", "city": "Las Piñas City", "schoolID": 407082},
    {"schoolName": "Divine Light Academy", "city": "Las Piñas City", "schoolID": 407085},
    {"schoolName": "Holy Rosary Academy", "city": "Las Piñas City", "schoolID": 407087},
    {"schoolName": "St. Michael's School", "city": "Las Piñas City", "schoolID": 407105},
    {"schoolName": "University of Perpetual Help System Dalta", "city": "Las Piñas City", "schoolID": 407107},
    {"schoolName": "Augustinian Abbey School", "city": "Las Piñas City", "schoolID": 407110},
    {"schoolName": "Bloomfield Academy", "city": "Las Piñas City", "schoolID": 407114},
    {"schoolName": "Don Carlo Cavina School", "city": "Las Piñas City", "schoolID": 407117},
    {"schoolName": "Elizabeth Seton School", "city": "Las Piñas City", "schoolID": 407119},
    {"schoolName": "Las Piñas College", "city": "Las Piñas City", "schoolID": 407124},
    {"schoolName": "Montessori de Manila", "city": "Las Piñas City", "schoolID": 407131},
    {"schoolName": "Sto. Niño De Eucharistia Academy", "city": "Las Piñas City", "schoolID": 407146},
    {"schoolName": "GCF South Metro Christian School", "city": "Las Piñas City", "schoolID": 486534},
    {"schoolName": "ABE International Business College", "city": "Makati City", "schoolID": 401015},
    {"schoolName": "AMA Computer College", "city": "Las Piñas City", "schoolID": 401016},
    {"schoolName": "AMA Computer Learning Center", "city": "Makati City", "schoolID": 401027},
    {"schoolName": "Centro Escolar University", "city": "Makati City", "schoolID": 401059},
    {"schoolName": "iACADEMY", "city": "Makati City", "schoolID": 401067},
    {"schoolName": "St. Paul College", "city": "Makati City", "schoolID": 406821},
    {"schoolName": "Assumption College", "city": "Makati City", "schoolID": 406836},
    {"schoolName": "Colegio de Sta. Rosa", "city": "Makati City", "schoolID": 406844},
    {"schoolName": "Colegio San Agustin", "city": "Makati City", "schoolID": 406851},
    {"schoolName": "Guadalupe Catholic School", "city": "Makati City", "schoolID": 406855},
    {"schoolName": "Bethany Baptist Academy", "city": "Makati City", "schoolID": 406864},
    {"schoolName": "Light of the World Christian Academy", "city": "Makati City", "schoolID": 485008},
    {"schoolName": "Bloomfield Academy", "city": "Makati City", "schoolID": 485013},
    {"schoolName": "Reach International School", "city": "Makati City", "schoolID": 485032},
    {"schoolName": "University of Makati", "city": "Makati City", "schoolID": 600305},
    {"schoolName": "City of Malabon University", "city": "Malabon City", "schoolID": 407094},
    {"schoolName": "St. James Academy", "city": "Malabon City", "schoolID": 407210},
    {"schoolName": "De La Salle Araneta University", "city": "Malabon City", "schoolID": 407220},
    {"schoolName": "Probex School", "city": "Malabon City", "schoolID": 487514},
    {"schoolName": "De La Salle University", "city": "Malate", "schoolID": 401151},
    {"schoolName": "Emilio Aguinaldo College", "city": "Malate", "schoolID": 401160},
    {"schoolName": "Lyceum of the Philippines University", "city": "Malate", "schoolID": 401188},
    {"schoolName": "Mapua Institute of Technology", "city": "Malate", "schoolID": 401193},
    {"schoolName": "St. Paul University", "city": "Malate", "schoolID": 401293},
    {"schoolName": "Adamson University", "city": "Malate", "schoolID": 406359},
    {"schoolName": "Colegio de San Juan de Letran", "city": "Malate", "schoolID": 406360},
    {"schoolName": "Jesus Reigns Christian Academy", "city": "Malate", "schoolID": 406364},
    {"schoolName": "Malate Catholic School", "city": "Malate", "schoolID": 406366},
    {"schoolName": "Philippine Christian University", "city": "Malate", "schoolID": 406367},
    {"schoolName": "St. Anthony School", "city": "Malate", "schoolID": 406370},
    {"schoolName": "Santa Isabel College", "city": "Malate", "schoolID": 406372},
    {"schoolName": "Pamantasan ng Lungsod ng Maynila", "city": "Malate", "schoolID": 600201},
    {"schoolName": "AMA Computer College", "city": "Mandaluyong City", "schoolID": 401091},
    {"schoolName": "St. Augustine School of Nursing", "city": "Mandaluyong City", "schoolID": 401132},
    {"schoolName": "Namei Polytechnic Institute", "city": "Mandaluyong City", "schoolID": 406751},
    {"schoolName": "Arellano University", "city": "Mandaluyong City", "schoolID": 406753},
    {"schoolName": "International Baptist College", "city": "Mandaluyong City", "schoolID": 406756},
    {"schoolName": "Jose Rizal University", "city": "Mandaluyong City", "schoolID": 406757},
    {"schoolName": "La Salle-Green Hills", "city": "Mandaluyong City", "schoolID": 406758},
    {"schoolName": "Lourdes School", "city": "Mandaluyong City", "schoolID": 406760},
    {"schoolName": "Key School Manila", "city": "Mandaluyong City", "schoolID": 484019},
    {"schoolName": "Rizal Technological University", "city": "Mandaluyong City", "schoolID": 600110},
    {"schoolName": "Centro Escolar University", "city": "Manila City", "schoolID": 401150},
    {"schoolName": "Don Bosco School", "city": "Manila City", "schoolID": 406351},
    {"schoolName": "De Ocampo Memorial College", "city": "Manila City", "schoolID": 407627},
    {"schoolName": "College of the Holy Spirit", "city": "Manila City", "schoolID": 482043},
    {"schoolName": "Universidad de Manila", "city": "Manila City", "schoolID": 600200},
    {"schoolName": "STI College", "city": "Marikina City", "schoolID": 401329},
    {"schoolName": "Pamantasan ng Lungsod ng Marikina", "city": "Marikina City", "schoolID": 406069},
    {"schoolName": "Jesus' Flock Academy", "city": "Marikina City", "schoolID": 406766},
    {"schoolName": "Marikina Catholic School", "city": "Marikina City", "schoolID": 406768},
    {"schoolName": "Nuestra Señora De Guia Academy", "city": "Marikina City", "schoolID": 406773},
    {"schoolName": "Roosevelt College", "city": "Marikina City", "schoolID": 406779},
    {"schoolName": "Infant Jesus Academy", "city": "Marikina City", "schoolID": 406787},
    {"schoolName": "Ingenium School", "city": "Marikina City", "schoolID": 406788},
    {"schoolName": "Marist School", "city": "Marikina City", "schoolID": 406798},
    {"schoolName": "National Christian Life College", "city": "Marikina City", "schoolID": 406807},
    {"schoolName": "Our Lady of Perpetual Succor College", "city": "Marikina City", "schoolID": 406808},
    {"schoolName": "Redeemed in Christ School", "city": "Marikina City", "schoolID": 406811},
    {"schoolName": "St. Nicholas School", "city": "Marikina City", "schoolID": 406814},
    {"schoolName": "College of Arts and Sciences of Asia & the Pacific", "city": "Marikina City", "schoolID": 407270},
    {"schoolName": "St. Scholastica's Academy", "city": "Marikina City", "schoolID": 407467},
    {"schoolName": "Irvinghall School", "city": "Marikina City", "schoolID": 484530},
    {"schoolName": "Informatics College Northgate", "city": "Muntinlupa City", "schoolID": 401332},
    {"schoolName": "Marianum College", "city": "Muntinlupa City", "schoolID": 401340},
    {"schoolName": "STI College", "city": "Muntinlupa City", "schoolID": 401360},
    {"schoolName": "Christ the King College of Science and Technology", "city": "Muntinlupa City", "schoolID": 401369},
    {"schoolName": "Westbay College", "city": "Muntinlupa City", "schoolID": 401377},
    {"schoolName": "Colegio Dela Nuestra Señora", "city": "Muntinlupa City", "schoolID": 407311},
    {"schoolName": "De La Salle Santiago Zobel School", "city": "Muntinlupa City", "schoolID": 407349},
    {"schoolName": "Maria Montessori Foundation", "city": "Muntinlupa City", "schoolID": 407355},
    {"schoolName": "PAREF Southridge School", "city": "Muntinlupa City", "schoolID": 407359},
    {"schoolName": "San Beda College", "city": "Muntinlupa City", "schoolID": 407364},
    {"schoolName": "Saint Bernadette College", "city": "Muntinlupa City", "schoolID": 407365},
    {"schoolName": "Kennedy International School of Business and Languages", "city": "Muntinlupa City", "schoolID": 488526},
    {"schoolName": "South Mansfield College", "city": "Muntinlupa City", "schoolID": 488528},
    {"schoolName": "Lyceum of Alabang", "city": "Muntinlupa City", "schoolID": 488551},
    {"schoolName": "Governor Andres Pascual College", "city": "Muntinlupa City", "schoolID": 407237},
    {"schoolName": "Paco Catholic School", "city": "Muntinlupa City", "schoolID": 406357},
    {"schoolName": "Concordia College", "city": "Muntinlupa City", "schoolID": 406377},
    {"schoolName": "AMA Computer Learning Center", "city": "Muntinlupa City", "schoolID": 406506},
    {"schoolName": "Malayan High School of Science", "city": "Muntinlupa City", "schoolID": 482073},
    {"schoolName": "AMA Computer College", "city": "Parañaque City", "schoolID": 401383},
    {"schoolName": "Immaculate Heart of Mary College", "city": "Parañaque City", "schoolID": 401390},
    {"schoolName": "STI College", "city": "Parañaque City", "schoolID": 401402},
    {"schoolName": "Universal Colleges of Parañaque", "city": "Parañaque City", "schoolID": 401405},
    {"schoolName": "College of Divine Wisdom", "city": "Parañaque City", "schoolID": 405863},
    {"schoolName": "Ann Arbor Montessori Learning Center", "city": "Parañaque City", "schoolID": 406972},
    {"schoolName": "Blessed Luisa School", "city": "Parañaque City", "schoolID": 406975},
    {"schoolName": "Marymount School", "city": "Parañaque City", "schoolID": 406983},
    {"schoolName": "LH Montessori High", "city": "Parañaque City", "schoolID": 407030},
    {"schoolName": "Olivarez College", "city": "Parañaque City", "schoolID": 407041},
    {"schoolName": "St. Andrew's School", "city": "Parañaque City", "schoolID": 407052},
    {"schoolName": "St. Paul College", "city": "Parañaque City", "schoolID": 407059},
    {"schoolName": "Veritas Parochial School", "city": "Parañaque City", "schoolID": 407072},
    {"schoolName": "Marymount Academy", "city": "Parañaque City", "schoolID": 407673},
    {"schoolName": "Philippine Christian School of Tomorrow", "city": "Parañaque City", "schoolID": 486045},
    {"schoolName": "Manila Adventist College", "city": "Pasay City", "schoolID": 401412},
    {"schoolName": "Manila Tytana Colleges", "city": "Pasay City", "schoolID": 401414},
    {"schoolName": "Metro Business College", "city": "Pasay City", "schoolID": 401421},
    {"schoolName": "San Juan de Dios Foundation", "city": "Pasay City", "schoolID": 401429},
    {"schoolName": "STI College", "city": "Pasay City", "schoolID": 401430},
    {"schoolName": "Arellano University", "city": "Pasay City", "schoolID": 406647},
    {"schoolName": "Sta. Clara Parish School", "city": "Pasay City", "schoolID": 406653},
    {"schoolName": "St. Mary's Academy", "city": "Pasay City", "schoolID": 406654},
    {"schoolName": "Blessed Elena Academy", "city": "Pasay City", "schoolID": 406663},
    {"schoolName": "Philippine Pasay Chung Hua Academy", "city": "Pasay City", "schoolID": 406669},
    {"schoolName": "Integrated School of Science", "city": "Pasay City", "schoolID": 407601},
    {"schoolName": "Air Link International Aviation College", "city": "Pasay City", "schoolID": 483030},
    {"schoolName": "AMA Computer College", "city": "Pasig City", "schoolID": 401433},
    {"schoolName": "College of Arts & Sciences of Asia & the Pacific", "city": "Pasig City", "schoolID": 401434},
    {"schoolName": "University of Asia and the Pacific", "city": "Pasig City", "schoolID": 405866},
    {"schoolName": "Asian Summit College Foundation", "city": "Pasig City", "schoolID": 406532},
    {"schoolName": "La Immaculada Concepcion School", "city": "Pasig City", "schoolID": 406873},
    {"schoolName": "Pasig Catholic College", "city": "Pasig City", "schoolID": 406889},
    {"schoolName": "GCF International Christian School", "city": "Pasig City", "schoolID": 406895},
    {"schoolName": "St. Paul College", "city": "Pasig City", "schoolID": 406905},
    {"schoolName": "Greenville College", "city": "Pasig City", "schoolID": 406916},
    {"schoolName": "Arellano University", "city": "Pasig City", "schoolID": 406938},
    {"schoolName": "La Consolacion College", "city": "Pasig City", "schoolID": 406939},
    {"schoolName": "Sacred Heart Academy", "city": "Pasig City", "schoolID": 406946},
    {"schoolName": "CCF Life Academy Foundation", "city": "Pasig City", "schoolID": 485609},
    {"schoolName": "Rizal Technological University", "city": "Pasig City", "schoolID": 600184},
    {"schoolName": "Pateros Technological College", "city": "Pateros", "schoolID": 401672},
    {"schoolName": "Pateros Catholic School", "city": "Pateros", "schoolID": 407299},
    {"schoolName": "ABE International College of Business and Accountancy", "city": "Quezon City", "schoolID": 401445},
    {"schoolName": "AMA Computer College", "city": "Quezon City", "schoolID": 401447},
    {"schoolName": "AMA Computer University", "city": "Quezon City", "schoolID": 401448},
    {"schoolName": "Bestlink College of the Philippines", "city": "Quezon City", "schoolID": 401453},
    {"schoolName": "Colegio de Sta. Teresa de Avila Foundation", "city": "Quezon City", "schoolID": 401457},
    {"schoolName": "Datamex Institute of Computer Technology", "city": "Quezon City", "schoolID": 401458},
    {"schoolName": "Informatics College", "city": "Quezon City", "schoolID": 401478},
    {"schoolName": "Informatics College-Fairview", "city": "Quezon City", "schoolID": 401485},
    {"schoolName": "National Polytechnic College of Science and Technology", "city": "Quezon City", "schoolID": 401500},
    {"schoolName": "New England College", "city": "Quezon City", "schoolID": 401505},
    {"schoolName": "Southeast Asian College", "city": "Quezon City", "schoolID": 401527},
    {"schoolName": "St. Bernadette of Lourdes College", "city": "Quezon City", "schoolID": 401541}
]

let parentDiv = document.getElementById('data');

for (let index = 0; index < data.length; index++) {
  let div = document.createElement('div');
  div.className = 'schoolcard';

  let h1 = document.createElement('h1');
  h1.className = 'schoolname';
  h1.innerHTML = data[index].schoolName;

  let addr = document.createElement('p');
  addr.className = 'schooladdr'
  addr.innerHTML = data[index].city;

  let id = document.createElement('p');
  id.className = 'schoolid'
  id.innerHTML = data[index].schoolID;

  div.appendChild(h1);
  div.appendChild(addr);
  div.appendChild(id);
  parentDiv.appendChild(div);
}