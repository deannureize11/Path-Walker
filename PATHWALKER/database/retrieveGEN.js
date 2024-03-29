let data = [
    {"schoolName": "Globetek Science Foundation", "city": "Makati City", "schoolID": 407698},
    {"schoolName": "Tiong Se Academy", "city": "Binondo City", "schoolID": 406335},
    {"schoolName": "AMA Computer College", "city": "Caloocan City", "schoolID": 400947},
    {"schoolName": "AMA Computer Learning Center", "city": "Caloocan City", "schoolID": 400951},
    {"schoolName": "Asian Institute of Computer Studies", "city": "Caloocan City", "schoolID": 400952},
    {"schoolName": "Colegio de San Gabriel Arcangel", "city": "Caloocan City", "schoolID": 400959},
    {"schoolName": "Datamex Institute of Computer Technology", "city": "Caloocan City", "schoolID": 400960},
    {"schoolName": "Informatics College", "city": "Caloocan City", "schoolID": 400962},
    {"schoolName": "Lady of Lourdes Hospital and Colleges", "city": "Caloocan City", "schoolID": 400967},
    {"schoolName": "Martinez Memorial Colleges", "city": "Caloocan City", "schoolID": 400972},
    {"schoolName": "STI College", "city": "Caloocan City", "schoolID": 400978},
    {"schoolName": "APEC Schools", "city": "Caloocan City", "schoolID": 405581},
    {"schoolName": "Anchor of Life Academy", "city": "Caloocan City", "schoolID": 406674},
    {"schoolName": "Divine Mercy College Foundation", "city": "Caloocan City", "schoolID": 406677},
    {"schoolName": "La Consolacion College", "city": "Caloocan City", "schoolID": 406678},
    {"schoolName": "Notre Dame of Greater Manila", "city": "Caloocan City", "schoolID": 406681},
    {"schoolName": "Philippine Cultural College", "city": "Caloocan City", "schoolID": 406683},
    {"schoolName": "St. Mary's Academy", "city": "Caloocan City", "schoolID": 406685},
    {"schoolName": "Systems Plus Computer College", "city": "Caloocan City", "schoolID": 406686},
    {"schoolName": "Baesa Adventist Academy", "city": "Caloocan City", "schoolID": 406688},
    {"schoolName": "World Citi Colleges", "city": "Caloocan City", "schoolID": 406691},
    {"schoolName": "Maranatha Christian Academy", "city": "Caloocan City", "schoolID": 406712},
    {"schoolName": "Mystical Rose School of Caloocan", "city": "Caloocan City", "schoolID": 406713},
    {"schoolName": "Holy Rosary College Foundation", "city": "Caloocan City", "schoolID": 406725},
    {"schoolName": "St. Joseph College of Novaliches", "city": "Caloocan City", "schoolID": 406729},
    {"schoolName": "Holy Infant Montessori Center", "city": "Caloocan City", "schoolID": 406733},
    {"schoolName": "La Consolacion College", "city": "Caloocan City", "schoolID": 406734},
    {"schoolName": "Rosary Hills International School", "city": "Caloocan City", "schoolID": 406736},
    {"schoolName": "St. Raphaela Mary School", "city": "Caloocan City", "schoolID": 406743},
    {"schoolName": "St. Therese of Rose School", "city": "Caloocan City", "schoolID": 406745},
    {"schoolName": "Bloomington Middle and Grade School", "city": "Caloocan City", "schoolID": 406746},
    {"schoolName": "The Immaculate Mother Academy", "city": "Caloocan City", "schoolID": 406747},
    {"schoolName": "St. Francis Technical Institute for Development, Training and Competency Assessment", "city": "Caloocan City", "schoolID": 407449},
    {"schoolName": "St. Agnes Academy", "city": "Caloocan City", "schoolID": 403505},
    {"schoolName": "Regina Coeli Education Centre Foundation", "city": "Caloocan City", "schoolID": 483507},
    {"schoolName": "St. John Academy", "city": "Caloocan City", "schoolID": 483508},
    {"schoolName": "E.M. Castro Educational Foundation", "city": "Caloocan City", "schoolID": 483512},
    {"schoolName": "St. Mary Goretti School", "city": "Caloocan City", "schoolID": 483517},
    {"schoolName": "Pledge of Love School", "city": "Caloocan City", "schoolID": 483519},
    {"schoolName": "St. Vincent de Ferrer College", "city": "Caloocan City", "schoolID": 483521},
    {"schoolName": "Young Achievers' School", "city": "Caloocan City", "schoolID": 483526},
    {"schoolName": "Golden Link College Foundation", "city": "Caloocan City", "schoolID": 483528},
    {"schoolName": "Genesis Christian Academy", "city": "Caloocan City", "schoolID": 483540},
    {"schoolName": "Mother of Divine Grace Academy", "city": "Caloocan City", "schoolID": 483541},
    {"schoolName": "Holy Angel School", "city": "Caloocan City", "schoolID": 483545},
    {"schoolName": "Escuela de Sophia", "city": "Caloocan City", "schoolID": 483548},
    {"schoolName": "Our Lord's Angels School", "city": "Caloocan City", "schoolID": 483551},
    {"schoolName": "Escuela San Gabriel De Arcangel Foundation", "city": "Caloocan City", "schoolID": 483552},
    {"schoolName": "Rhexane Academy", "city": "Caloocan City", "schoolID": 483558},
    {"schoolName": "University of the East", "city": "Caloocan City", "schoolID": 483559},
    {"schoolName": "Christ Jeross Christian Academy", "city": "Caloocan City", "schoolID": 483568},
    {"schoolName": "Ridgewood School", "city": "Caloocan City", "schoolID": 483569},
    {"schoolName": "Academy of Saint Andrew", "city": "Caloocan City", "schoolID": 483570},
    {"schoolName": "Sagrada Familia School", "city": "Caloocan City", "schoolID": 483587},
    {"schoolName": "St. Vincent Institute of Technology", "city": "Caloocan City", "schoolID": 483620},
    {"schoolName": "Our Lady of Grace School", "city": "Caloocan City", "schoolID": 483653},
    {"schoolName": "Northern Rizal Yorklin School", "city": "Caloocan City", "schoolID": 1406680},
    {"schoolName": "Sta. Elena School of Novaliches", "city": "Caloocan City", "schoolID": 406720},
    {"schoolName": "Montessori Professional College", "city": "Caloocan City", "schoolID": 407302},
    {"schoolName": "ABE International College of Business and Economics", "city": "Las Piñas City", "schoolID": 400981},
    {"schoolName": "AMA Computer College", "city": "Las Piñas City", "schoolID": 400986},
    {"schoolName": "Southville International School and Colleges", "city": "Las Piñas City", "schoolID": 400997},
    {"schoolName": "St. Augustine College", "city": "Las Piñas City", "schoolID": 400999},
    {"schoolName": "STI College", "city": "Las Piñas City", "schoolID": 400100},
    {"schoolName": "AMA Basic Education", "city": "Las Piñas City", "schoolID": 405614},
    {"schoolName": "Southville International School Affiliated with Foreign Universities", "city": "Las Piñas City", "schoolID": 405660},
    {"schoolName": "Young Achievers International School", "city": "Las Piñas City", "schoolID": 407078},
    {"schoolName": "Bernardo College", "city": "Las Piñas City", "schoolID": 407079},
    {"schoolName": "Camella School", "city": "Las Piñas City", "schoolID": 407082},
    {"schoolName": "Divine Light Academy", "city": "Las Piñas City", "schoolID": 407085},
    {"schoolName": "Holy Rosary Academy", "city": "Las Piñas City", "schoolID": 407087},
    {"schoolName": "St. Joseph's Academy", "city": "Las Piñas City", "schoolID": 407103},
    {"schoolName": "St. Michael's School", "city": "Las Piñas City", "schoolID": 407105},
    {"schoolName": "Saint Therese School", "city": "Las Piñas City", "schoolID": 407106},
    {"schoolName": "University of Perpetual Help System Dalta", "city": "Las Piñas City", "schoolID": 407107},
    {"schoolName": "Westfield Science-Oriented School", "city": "Las Piñas City", "schoolID": 407109},
    {"schoolName": "Augustinian Abbey School", "city": "Las Piñas City", "schoolID": 407110},
    {"schoolName": "Blessed Trinity School", "city": "Las Piñas City", "schoolID": 407113},
    {"schoolName": "Don Carlo Cavina School", "city": "Las Piñas City", "schoolID": 407117},
    {"schoolName": "Las Piñas College", "city": "Las Piñas City", "schoolID": 407124},
    {"schoolName": "Mary Immaculate Parish Special School", "city": "Las Piñas City", "schoolID": 407127},
    {"schoolName": "Montessori de Manila", "city": "Las Piñas City", "schoolID": 407131},
    {"schoolName": "OB Montessori Center", "city": "Las Piñas City", "schoolID": 407133},
    {"schoolName": "Saint Francis of Assisi College", "city": "Las Piñas City", "schoolID": 407142},
    {"schoolName": "APEC Schools-Naga Road", "city": "Las Piñas City", "schoolID": 407447},
    {"schoolName": "GCF South Metro Christian School", "city": "Las Piñas City", "schoolID": 486534},
    {"schoolName": "ABE International Business College", "city": " Makati City", "schoolID": 401015},
    {"schoolName": "AMA Computer College", "city": " Makati City", "schoolID": 401016},
    {"schoolName": "AMA Computer Learning Center of Guadalupe", "city": " Makati City", "schoolID": 401027},
    {"schoolName": "Asia Pacific College", "city": " Makati City", "schoolID": 401034},
    {"schoolName": "iACADEMY, Belair", "city": " Makati City", "schoolID": 401067},
    {"schoolName": "STI College", "city": " Makati City", "schoolID": 401074},
    {"schoolName": "Asian Institute of Computer Studies - Guadalupe", "city": " Makati City", "schoolID": 405667},
    {"schoolName": "International Academy of Management and Economics", "city": " Makati City", "schoolID": 406398},
    {"schoolName": "Assumption College", "city": " Makati City", "schoolID": 406836},
    {"schoolName": "Colegio San Agustin", "city": " Makati City", "schoolID": 406851},
    {"schoolName": "Our Lady of Guadalupe Minor Seminary", "city": " Makati City", "schoolID": 406852},
    {"schoolName": "Guadalupe Catholic School", "city": " Makati City", "schoolID": 406855},
    {"schoolName": "4th Watch Maranatha Christian Academy", "city": " Makati City", "schoolID": 406857},
    {"schoolName": "St. Mary of the Woods School", "city": " Makati City", "schoolID": 406863},
    {"schoolName": "Montessori Professional College", "city": " Makati City", "schoolID": 407453},
    {"schoolName": "Light of the World Christian Academy", "city": " Makati City", "schoolID": 485008},
    {"schoolName": "Reach International School", "city": " Makati City", "schoolID": 485032},
    {"schoolName": "Philippine Malabon Cultural Institute", "city": " Malabon City", "schoolID": 407209},
    {"schoolName": "St. Therese of the Child Jesus Academy", "city": " Malabon City", "schoolID": 407211},
    {"schoolName": "Immaculate Conception Parochial School", "city": " Malabon City", "schoolID": 407215},
    {"schoolName": "De La Salle Araneta University", "city": " Malabon City", "schoolID": 407220},
    {"schoolName": "Higher Ground Baptist Academy Foundation", "city": " Malabon City", "schoolID": 407229},
    {"schoolName": "Probex School", "city": " Malabon City", "schoolID": 487514},
    {"schoolName": "Seibo College Foundation", "city": " Malabon City", "schoolID": 487515},
    {"schoolName": "Arellano University, Elisa Esguerra Campus, Jose Rizal High School", "city": " Malabon City", "schoolID": 487518},
    {"schoolName": "Lyceum of the Philippines University", "city": " Malate", "schoolID": 401188},
    {"schoolName": "Mapua Institute of Technology-Intramuros Campus", "city": " Malate", "schoolID": 401193},
    {"schoolName": "Philippine College of Health Sciences", "city": " Malate", "schoolID": 401242},
    {"schoolName": "St. Paul University-Manila", "city": " Malate", "schoolID": 401293},
    {"schoolName": "STI College - Taft", "city": " Malate", "schoolID":	401303},
    {"schoolName": "Adamson University", "city": " Malate", "schoolID":	406359},
    {"schoolName": "Colegio de San Juan de Letran", "city": " Malate", "schoolID":	406360},
    {"schoolName": "Ermita Catholic School", "city": " Malate", "schoolID":	406363},
    {"schoolName": "Jesus Reigns Christian Academy", "city": " Malate", "schoolID":	406364},
    {"schoolName": "Malate Catholic School", "city": " Malate", "schoolID":	406366},
    {"schoolName": "St. Scholastica's College", "city": " Malate", "schoolID": 406371},
    {"schoolName": "Santa Isabel College", "city": " Malate", "schoolID": 406372},
    {"schoolName": "Aguinaldo International School", "city": " Malate", "schoolID": 482002},
    {"schoolName": "AMA Computer College", "city": "Mandaluyong City", "schoolID": 401091},
    {"schoolName": "St. Augustine School of Nursing", "city": "Mandaluyong City", "schoolID": 401132},
    {"schoolName": "STI College - Shaw", "city": "Mandaluyong City", "schoolID": 401134},
    {"schoolName": "Good Shepherd Christian School", "city": "Mandaluyong City", "schoolID": 406750},
    {"schoolName": "Namei Polytechnic Institute", "city": "Mandaluyong City", "schoolID": 406751},
    {"schoolName": "Arellano University-Plaridel Campus", "city": "Mandaluyong City", "schoolID": 406753},
    {"schoolName": "San Felipe Neri Parochial School", "city": "Mandaluyong City", "schoolID": 406754},
    {"schoolName": "International Baptist College", "city": "Mandaluyong City", "schoolID": 406756},
    {"schoolName": "Jose Rizal University", "city": "Mandaluyong City", "schoolID": 406757},
    {"schoolName": "Lourdes School", "city": "Mandaluyong City", "schoolID": 406760},
    {"schoolName": "La Salle Green Hills Adult Night High School", "city": "Mandaluyong City", "schoolID": 484014},
    {"schoolName": "Montessori Professional College", "city": "Manila", "schoolID": 407454},
    {"schoolName": "La Consolacion College, Mendiola", "city": "Manila City", "schoolID": 406308},
    {"schoolName": "College of the Holy Spirit", "city": "Manila City", "schoolID": 482043},
    {"schoolName": "AMA Computer Learning Center of Cainta", "city": "Marikina City", "schoolID": 401327},
    {"schoolName": "STI College", "city": "Marikina City", "schoolID": 401329},
    {"schoolName": "Berean Crosspointe International Marikina", "city": "Marikina City", "schoolID": 405685},
    {"schoolName": "Jesus' Flock Academy", "city": "Marikina City", "schoolID": 406766},
    {"schoolName": "Roosevelt College Marikina", "city": "Marikina City", "schoolID": 406779},
    {"schoolName": "Celestial Village Academy", "city": "Marikina City", "schoolID": 406783},
    {"schoolName": "Charis School", "city": "Marikina City", "schoolID": 406784},
    {"schoolName": "Infant Jesus Academy", "city": "Marikina City", "schoolID": 406787},
    {"schoolName": "Jehoshua Christian School", "city": "Marikina City", "schoolID": 406789},
    {"schoolName": "The Academy of God's Children", "city": "Marikina City", "schoolID": 406790},
    {"schoolName": "Marikina Christian Integrated School", "city": "Marikina City", "schoolID": 406797},
    {"schoolName": "Marist School", "city": "Marikina City", "schoolID": 406798},
    {"schoolName": "Mother of Divine Providence School", "city": "Marikina City", "schoolID": 406805},
    {"schoolName": "National Christian Life College", "city": "Marikina City", "schoolID": 406807},
    {"schoolName": "Our Lady of Perpetual Succor College", "city": "Marikina City", "schoolID": 406808},
    {"schoolName": "Redeemed in Christ School", "city": "Marikina City", "schoolID": 406811},
    {"schoolName": "St. Nicholas School", "city": "Marikina City", "schoolID": 406814},
    {"schoolName": "College of Arts and Sciences of Asia & the Pacific - Marikina City", "city": "Marikina City", "schoolID": 407270},
    {"schoolName": "Montessori Professional College", "city": "Marikina City", "schoolID": 407455},
    {"schoolName": "Irvinghall School", "city": "Marikina City", "schoolID": 484530},
    {"schoolName": "Informatics College Northgate", "city": "Muntinlupa City", "schoolID": 401332},
    {"schoolName": "Marianum College", "city": "Muntinlupa City", "schoolID": 401340},
    {"schoolName": "STI College - Alabang", "city": "Muntinlupa City", "schoolID": 401360},
    {"schoolName": "Christ the King College of Science and Technology", "city": "Muntinlupa City", "schoolID": 401369},
    {"schoolName": "Facilities Management College", "city": "Muntinlupa City", "schoolID": 401372},
    {"schoolName": "Westbay College", "city": "Muntinlupa City", "schoolID": 401377},
    {"schoolName": "APEC Schools", "city": "Muntinlupa City", "schoolID": 405688},
    {"schoolName": "AMA Computer Learning Center of Muntinlupa", "city": "Muntinlupa City", "schoolID": 406414},
    {"schoolName": "Colegio Dela Nuestra Señora  De Guadalupe", "city": "Muntinlupa City", "schoolID": 407311},
    {"schoolName": "Living Light Academy", "city": "Muntinlupa City", "schoolID": 407321},
    {"schoolName": "Mary, Cause of Our Joy Catholic School", "city": "Muntinlupa City", "schoolID": 407324},
    {"schoolName": "Muntinlupa Cosmopolitan School", "city": "Muntinlupa City", "schoolID": 407328},
    {"schoolName": "South Crest School", "city": "Muntinlupa City", "schoolID": 407335},
    {"schoolName": "Southernside Montessori School", "city": "Muntinlupa City", "schoolID": 407336},
    {"schoolName": "De La Salle Santiago Zobel School", "city": "Muntinlupa City", "schoolID": 407349},
    {"schoolName": "Br. Rafael Donato FSC Night High School", "city": "Muntinlupa City", "schoolID": 407350},
    {"schoolName": "Maria Montessori Foundation", "city": "Muntinlupa City", "schoolID": 407355},
    {"schoolName": "PAREF Southridge School", "city": "Muntinlupa City", "schoolID": 407359},
    {"schoolName": "PAREF Woodrose School", "city": "Muntinlupa City", "schoolID": 407360},
    {"schoolName": "San Roque Catholic School", "city": "Muntinlupa City", "schoolID": 407362},
    {"schoolName": "San Beda College Alabang", "city": "Muntinlupa City", "schoolID": 407364},
    {"schoolName": "Saint Bernadette College of Alabang", "city": "Muntinlupa City", "schoolID": 407365},
    {"schoolName": "Saint Francis of Assisi College - Alabang", "city": "Muntinlupa City", "schoolID": 407366},
    {"schoolName": "Lakewood School of Alabang", "city": "Muntinlupa City", "schoolID": 486545},
    {"schoolName": "Kennedy International School of Business and Languages", "city": "Muntinlupa City", "schoolID": 488526},
    {"schoolName": "South Mansfield College", "city": "Muntinlupa City", "schoolID": 488528},
    {"schoolName": "Lyceum of Alabang", "city": "Muntinlupa City", "schoolID": 488551},
    {"schoolName": "San Jose Academy", "city": "Navotas City", "schoolID": 407233},
    {"schoolName": "San Jose Academy", "city": "Navotas City", "schoolID": 407237},
    {"schoolName": "La Naval Academy", "city": "Navotas City", "schoolID": 407239},
    {"schoolName": "Paco Catholic School", "city": "Paco", "schoolID": 406357},
    {"schoolName": "Paco Citizen Academy Foundation", "city": "Paco", "schoolID": 406358},
    {"schoolName": "Concordia College", "city": "Paco", "schoolID": 406377},
    {"schoolName": "AMA Computer Learning Center", "city": "Paco", "schoolID": 406506},
    {"schoolName": "St. Joseph School of Pandacan", "city": "Paco", "schoolID": 406376},
    {"schoolName": "Malayan High School of Science", "city": "Paco", "schoolID": 482073},
    {"schoolName": "AMA Computer College", "city": "Parañaque City", "schoolID": 401383},
    {"schoolName": "Asian Institute of Computer Studies - Bicutan", "city": "Parañaque City", "schoolID": 401387},
    {"schoolName": "Rogationist Seminary College - Manila", "city": "Parañaque City", "schoolID": 401397},
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