const initialCountries = [
  {
    Country: "Chad",
    Slug: "chad",
    ISO2: "TD",
  },
  {
    Country: "Egypt",
    Slug: "egypt",
    ISO2: "EG",
  },
  {
    Country: "Faroe Islands",
    Slug: "faroe-islands",
    ISO2: "FO",
  },
  {
    Country: "Hong Kong, SAR China",
    Slug: "hong-kong-sar-china",
    ISO2: "HK",
  },
  {
    Country: "Mexico",
    Slug: "mexico",
    ISO2: "MX",
  },
  {
    Country: "Cyprus",
    Slug: "cyprus",
    ISO2: "CY",
  },
  {
    Country: "Pakistan",
    Slug: "pakistan",
    ISO2: "PK",
  },
  {
    Country: "Palestinian Territory",
    Slug: "palestine",
    ISO2: "PS",
  },
  {
    Country: "Austria",
    Slug: "austria",
    ISO2: "AT",
  },
  {
    Country: "Croatia",
    Slug: "croatia",
    ISO2: "HR",
  },
  {
    Country: "Madagascar",
    Slug: "madagascar",
    ISO2: "MG",
  },
  {
    Country: "Tokelau",
    Slug: "tokelau",
    ISO2: "TK",
  },
  {
    Country: "Gibraltar",
    Slug: "gibraltar",
    ISO2: "GI",
  },
  {
    Country: "Ireland",
    Slug: "ireland",
    ISO2: "IE",
  },
  {
    Country: "Senegal",
    Slug: "senegal",
    ISO2: "SN",
  },
  {
    Country: "Suriname",
    Slug: "suriname",
    ISO2: "SR",
  },
  {
    Country: "India",
    Slug: "india",
    ISO2: "IN",
  },
  {
    Country: "Netherlands Antilles",
    Slug: "netherlands-antilles",
    ISO2: "AN",
  },
  {
    Country: "Nicaragua",
    Slug: "nicaragua",
    ISO2: "NI",
  },
  {
    Country: "Saint-Barthélemy",
    Slug: "saint-barthélemy",
    ISO2: "BL",
  },
  {
    Country: "Aruba",
    Slug: "aruba",
    ISO2: "AW",
  },
  {
    Country: "Grenada",
    Slug: "grenada",
    ISO2: "GD",
  },
  {
    Country: "Monaco",
    Slug: "monaco",
    ISO2: "MC",
  },
  {
    Country: "Northern Mariana Islands",
    Slug: "northern-mariana-islands",
    ISO2: "MP",
  },
  {
    Country: "Nauru",
    Slug: "nauru",
    ISO2: "NR",
  },
  {
    Country: "Tajikistan",
    Slug: "tajikistan",
    ISO2: "TJ",
  },
  {
    Country: "Eritrea",
    Slug: "eritrea",
    ISO2: "ER",
  },
  {
    Country: "Maldives",
    Slug: "maldives",
    ISO2: "MV",
  },
  {
    Country: "Lesotho",
    Slug: "lesotho",
    ISO2: "LS",
  },
  {
    Country: "Peru",
    Slug: "peru",
    ISO2: "PE",
  },
  {
    Country: "Qatar",
    Slug: "qatar",
    ISO2: "QA",
  },
  {
    Country: "Australia",
    Slug: "australia",
    ISO2: "AU",
  },
  {
    Country: "Greece",
    Slug: "greece",
    ISO2: "GR",
  },
  {
    Country: "Djibouti",
    Slug: "djibouti",
    ISO2: "DJ",
  },
  {
    Country: "Papua New Guinea",
    Slug: "papua-new-guinea",
    ISO2: "PG",
  },
  {
    Country: "Somalia",
    Slug: "somalia",
    ISO2: "SO",
  },
  {
    Country: "Bahrain",
    Slug: "bahrain",
    ISO2: "BH",
  },
  {
    Country: "Tuvalu",
    Slug: "tuvalu",
    ISO2: "TV",
  },
  {
    Country: "Burkina Faso",
    Slug: "burkina-faso",
    ISO2: "BF",
  },
  {
    Country: "Spain",
    Slug: "spain",
    ISO2: "ES",
  },
  {
    Country: "Timor-Leste",
    Slug: "timor-leste",
    ISO2: "TL",
  },
  {
    Country: "Wallis and Futuna Islands",
    Slug: "wallis-and-futuna-islands",
    ISO2: "WF",
  },
  {
    Country: "Oman",
    Slug: "oman",
    ISO2: "OM",
  },
  {
    Country: "Comoros",
    Slug: "comoros",
    ISO2: "KM",
  },
  {
    Country: "Guinea-Bissau",
    Slug: "guinea-bissau",
    ISO2: "GW",
  },
  {
    Country: "Japan",
    Slug: "japan",
    ISO2: "JP",
  },
  {
    Country: "San Marino",
    Slug: "san-marino",
    ISO2: "SM",
  },
  {
    Country: "Singapore",
    Slug: "singapore",
    ISO2: "SG",
  },
  {
    Country: "South Georgia and the South Sandwich Islands",
    Slug: "south-georgia-and-the-south-sandwich-islands",
    ISO2: "GS",
  },
  {
    Country: "United States of America",
    Slug: "united-states",
    ISO2: "US",
  },
  {
    Country: "Dominica",
    Slug: "dominica",
    ISO2: "DM",
  },
  {
    Country: "Gabon",
    Slug: "gabon",
    ISO2: "GA",
  },
  {
    Country: "Uzbekistan",
    Slug: "uzbekistan",
    ISO2: "UZ",
  },
  {
    Country: "Italy",
    Slug: "italy",
    ISO2: "IT",
  },
  {
    Country: "Pitcairn",
    Slug: "pitcairn",
    ISO2: "PN",
  },
  {
    Country: "Dominican Republic",
    Slug: "dominican-republic",
    ISO2: "DO",
  },
  {
    Country: "Guadeloupe",
    Slug: "guadeloupe",
    ISO2: "GP",
  },
  {
    Country: "Samoa",
    Slug: "samoa",
    ISO2: "WS",
  },
  {
    Country: "Kiribati",
    Slug: "kiribati",
    ISO2: "KI",
  },
  {
    Country: "Lebanon",
    Slug: "lebanon",
    ISO2: "LB",
  },
  {
    Country: "Iran, Islamic Republic of",
    Slug: "iran",
    ISO2: "IR",
  },
  {
    Country: "Portugal",
    Slug: "portugal",
    ISO2: "PT",
  },
  {
    Country: "Vanuatu",
    Slug: "vanuatu",
    ISO2: "VU",
  },
  {
    Country: "Andorra",
    Slug: "andorra",
    ISO2: "AD",
  },
  {
    Country: "Heard and Mcdonald Islands",
    Slug: "heard-and-mcdonald-islands",
    ISO2: "HM",
  },
  {
    Country: "Honduras",
    Slug: "honduras",
    ISO2: "HN",
  },
  {
    Country: "Kyrgyzstan",
    Slug: "kyrgyzstan",
    ISO2: "KG",
  },
  {
    Country: "Norfolk Island",
    Slug: "norfolk-island",
    ISO2: "NF",
  },
  {
    Country: "Switzerland",
    Slug: "switzerland",
    ISO2: "CH",
  },
  {
    Country: "Zimbabwe",
    Slug: "zimbabwe",
    ISO2: "ZW",
  },
  {
    Country: "Belarus",
    Slug: "belarus",
    ISO2: "BY",
  },
  {
    Country: "Colombia",
    Slug: "colombia",
    ISO2: "CO",
  },
  {
    Country: "Western Sahara",
    Slug: "western-sahara",
    ISO2: "EH",
  },
  {
    Country: "Brazil",
    Slug: "brazil",
    ISO2: "BR",
  },
  {
    Country: "Saint Vincent and Grenadines",
    Slug: "saint-vincent-and-the-grenadines",
    ISO2: "VC",
  },
  {
    Country: "Hungary",
    Slug: "hungary",
    ISO2: "HU",
  },
  {
    Country: "Jamaica",
    Slug: "jamaica",
    ISO2: "JM",
  },
  {
    Country: "Jordan",
    Slug: "jordan",
    ISO2: "JO",
  },
  {
    Country: "Russian Federation",
    Slug: "russia",
    ISO2: "RU",
  },
  {
    Country: "Republic of Kosovo",
    Slug: "kosovo",
    ISO2: "XK",
  },
  {
    Country: "Falkland Islands (Malvinas)",
    Slug: "falkland-islands-malvinas",
    ISO2: "FK",
  },
  {
    Country: "Georgia",
    Slug: "georgia",
    ISO2: "GE",
  },
  {
    Country: "Sweden",
    Slug: "sweden",
    ISO2: "SE",
  },
  {
    Country: "Argentina",
    Slug: "argentina",
    ISO2: "AR",
  },
  {
    Country: "Netherlands",
    Slug: "netherlands",
    ISO2: "NL",
  },
  {
    Country: "Chile",
    Slug: "chile",
    ISO2: "CL",
  },
  {
    Country: "Turkmenistan",
    Slug: "turkmenistan",
    ISO2: "TM",
  },
  {
    Country: "United Kingdom",
    Slug: "united-kingdom",
    ISO2: "GB",
  },
  {
    Country: "Azerbaijan",
    Slug: "azerbaijan",
    ISO2: "AZ",
  },
  {
    Country: "Barbados",
    Slug: "barbados",
    ISO2: "BB",
  },
  {
    Country: "Bahamas",
    Slug: "bahamas",
    ISO2: "BS",
  },
  {
    Country: "Côte d'Ivoire",
    Slug: "cote-divoire",
    ISO2: "CI",
  },
  {
    Country: "Guernsey",
    Slug: "guernsey",
    ISO2: "GG",
  },
  {
    Country: "Israel",
    Slug: "israel",
    ISO2: "IL",
  },
  {
    Country: "New Zealand",
    Slug: "new-zealand",
    ISO2: "NZ",
  },
  {
    Country: "South Sudan",
    Slug: "south-sudan",
    ISO2: "SS",
  },
  {
    Country: "Benin",
    Slug: "benin",
    ISO2: "BJ",
  },
  {
    Country: "British Virgin Islands",
    Slug: "british-virgin-islands",
    ISO2: "VG",
  },
  {
    Country: "Afghanistan",
    Slug: "afghanistan",
    ISO2: "AF",
  },
  {
    Country: "Congo (Brazzaville)",
    Slug: "congo-brazzaville",
    ISO2: "CG",
  },
  {
    Country: "Poland",
    Slug: "poland",
    ISO2: "PL",
  },
  {
    Country: "Saint-Martin (French part)",
    Slug: "saint-martin-french-part",
    ISO2: "MF",
  },
  {
    Country: "Thailand",
    Slug: "thailand",
    ISO2: "TH",
  },
  {
    Country: "Estonia",
    Slug: "estonia",
    ISO2: "EE",
  },
  {
    Country: "French Guiana",
    Slug: "french-guiana",
    ISO2: "GF",
  },
  {
    Country: "Gambia",
    Slug: "gambia",
    ISO2: "GM",
  },
  {
    Country: "Montserrat",
    Slug: "montserrat",
    ISO2: "MS",
  },
  {
    Country: "Morocco",
    Slug: "morocco",
    ISO2: "MA",
  },
  {
    Country: "Réunion",
    Slug: "réunion",
    ISO2: "RE",
  },
  {
    Country: "Syrian Arab Republic (Syria)",
    Slug: "syria",
    ISO2: "SY",
  },
  {
    Country: "Latvia",
    Slug: "latvia",
    ISO2: "LV",
  },
  {
    Country: "Macao, SAR China",
    Slug: "macao-sar-china",
    ISO2: "MO",
  },
  {
    Country: "Anguilla",
    Slug: "anguilla",
    ISO2: "AI",
  },
  {
    Country: "Zambia",
    Slug: "zambia",
    ISO2: "ZM",
  },
  {
    Country: "Czech Republic",
    Slug: "czech-republic",
    ISO2: "CZ",
  },
  {
    Country: "British Indian Ocean Territory",
    Slug: "british-indian-ocean-territory",
    ISO2: "IO",
  },
  {
    Country: "Sri Lanka",
    Slug: "sri-lanka",
    ISO2: "LK",
  },
  {
    Country: "Cook Islands",
    Slug: "cook-islands",
    ISO2: "CK",
  },
  {
    Country: "Guyana",
    Slug: "guyana",
    ISO2: "GY",
  },
  {
    Country: "New Caledonia",
    Slug: "new-caledonia",
    ISO2: "NC",
  },
  {
    Country: "Seychelles",
    Slug: "seychelles",
    ISO2: "SC",
  },
  {
    Country: "Mongolia",
    Slug: "mongolia",
    ISO2: "MN",
  },
  {
    Country: "Kuwait",
    Slug: "kuwait",
    ISO2: "KW",
  },
  {
    Country: "Luxembourg",
    Slug: "luxembourg",
    ISO2: "LU",
  },
  {
    Country: "Slovenia",
    Slug: "slovenia",
    ISO2: "SI",
  },
  {
    Country: "ALA Aland Islands",
    Slug: "ala-aland-islands",
    ISO2: "AX",
  },
  {
    Country: "Fiji",
    Slug: "fiji",
    ISO2: "FJ",
  },
  {
    Country: "Holy See (Vatican City State)",
    Slug: "holy-see-vatican-city-state",
    ISO2: "VA",
  },
  {
    Country: "Liechtenstein",
    Slug: "liechtenstein",
    ISO2: "LI",
  },
  {
    Country: "Malawi",
    Slug: "malawi",
    ISO2: "MW",
  },
  {
    Country: "Sierra Leone",
    Slug: "sierra-leone",
    ISO2: "SL",
  },
  {
    Country: "Virgin Islands, US",
    Slug: "virgin-islands",
    ISO2: "VI",
  },
  {
    Country: "Equatorial Guinea",
    Slug: "equatorial-guinea",
    ISO2: "GQ",
  },
  {
    Country: "Guam",
    Slug: "guam",
    ISO2: "GU",
  },
  {
    Country: "French Polynesia",
    Slug: "french-polynesia",
    ISO2: "PF",
  },
  {
    Country: "Saint Pierre and Miquelon",
    Slug: "saint-pierre-and-miquelon",
    ISO2: "PM",
  },
  {
    Country: "Tunisia",
    Slug: "tunisia",
    ISO2: "TN",
  },
  {
    Country: "Christmas Island",
    Slug: "christmas-island",
    ISO2: "CX",
  },
  {
    Country: "Malta",
    Slug: "malta",
    ISO2: "MT",
  },
  {
    Country: "Trinidad and Tobago",
    Slug: "trinidad-and-tobago",
    ISO2: "TT",
  },
  {
    Country: "Bermuda",
    Slug: "bermuda",
    ISO2: "BM",
  },
  {
    Country: "Antigua and Barbuda",
    Slug: "antigua-and-barbuda",
    ISO2: "AG",
  },
  {
    Country: "Montenegro",
    Slug: "montenegro",
    ISO2: "ME",
  },
  {
    Country: "Saudi Arabia",
    Slug: "saudi-arabia",
    ISO2: "SA",
  },
  {
    Country: "Angola",
    Slug: "angola",
    ISO2: "AO",
  },
  {
    Country: "Micronesia, Federated States of",
    Slug: "micronesia",
    ISO2: "FM",
  },
  {
    Country: "Viet Nam",
    Slug: "vietnam",
    ISO2: "VN",
  },
  {
    Country: "Bangladesh",
    Slug: "bangladesh",
    ISO2: "BD",
  },
  {
    Country: "Kenya",
    Slug: "kenya",
    ISO2: "KE",
  },
  {
    Country: "Finland",
    Slug: "finland",
    ISO2: "FI",
  },
  {
    Country: "Nepal",
    Slug: "nepal",
    ISO2: "NP",
  },
  {
    Country: "Bhutan",
    Slug: "bhutan",
    ISO2: "BT",
  },
  {
    Country: "Ecuador",
    Slug: "ecuador",
    ISO2: "EC",
  },
  {
    Country: "South Africa",
    Slug: "south-africa",
    ISO2: "ZA",
  },
  {
    Country: "Turkey",
    Slug: "turkey",
    ISO2: "TR",
  },
  {
    Country: "Uruguay",
    Slug: "uruguay",
    ISO2: "UY",
  },
  {
    Country: "Mozambique",
    Slug: "mozambique",
    ISO2: "MZ",
  },
  {
    Country: "Burundi",
    Slug: "burundi",
    ISO2: "BI",
  },
  {
    Country: "Mayotte",
    Slug: "mayotte",
    ISO2: "YT",
  },
  {
    Country: "Panama",
    Slug: "panama",
    ISO2: "PA",
  },
  {
    Country: "Sudan",
    Slug: "sudan",
    ISO2: "SD",
  },
  {
    Country: "Togo",
    Slug: "togo",
    ISO2: "TG",
  },
  {
    Country: "Turks and Caicos Islands",
    Slug: "turks-and-caicos-islands",
    ISO2: "TC",
  },
  {
    Country: "Ukraine",
    Slug: "ukraine",
    ISO2: "UA",
  },
  {
    Country: "United Arab Emirates",
    Slug: "united-arab-emirates",
    ISO2: "AE",
  },
  {
    Country: "Cambodia",
    Slug: "cambodia",
    ISO2: "KH",
  },
  {
    Country: "Cape Verde",
    Slug: "cape-verde",
    ISO2: "CV",
  },
  {
    Country: "Cocos (Keeling) Islands",
    Slug: "cocos-keeling-islands",
    ISO2: "CC",
  },
  {
    Country: "Iraq",
    Slug: "iraq",
    ISO2: "IQ",
  },
  {
    Country: "Lao PDR",
    Slug: "lao-pdr",
    ISO2: "LA",
  },
  {
    Country: "Romania",
    Slug: "romania",
    ISO2: "RO",
  },
  {
    Country: "Armenia",
    Slug: "armenia",
    ISO2: "AM",
  },
  {
    Country: "Korea (North)",
    Slug: "korea-north",
    ISO2: "KP",
  },
  {
    Country: "Mauritius",
    Slug: "mauritius",
    ISO2: "MU",
  },
  {
    Country: "Central African Republic",
    Slug: "central-african-republic",
    ISO2: "CF",
  },
  {
    Country: "Ghana",
    Slug: "ghana",
    ISO2: "GH",
  },
  {
    Country: "Palau",
    Slug: "palau",
    ISO2: "PW",
  },
  {
    Country: "Yemen",
    Slug: "yemen",
    ISO2: "YE",
  },
  {
    Country: "France",
    Slug: "france",
    ISO2: "FR",
  },
  {
    Country: "Svalbard and Jan Mayen Islands",
    Slug: "svalbard-and-jan-mayen-islands",
    ISO2: "SJ",
  },
  {
    Country: "Jersey",
    Slug: "jersey",
    ISO2: "JE",
  },
  {
    Country: "Nigeria",
    Slug: "nigeria",
    ISO2: "NG",
  },
  {
    Country: "Albania",
    Slug: "albania",
    ISO2: "AL",
  },
  {
    Country: "Greenland",
    Slug: "greenland",
    ISO2: "GL",
  },
  {
    Country: "Congo (Kinshasa)",
    Slug: "congo-kinshasa",
    ISO2: "CD",
  },
  {
    Country: "Ethiopia",
    Slug: "ethiopia",
    ISO2: "ET",
  },
  {
    Country: "Moldova",
    Slug: "moldova",
    ISO2: "MD",
  },
  {
    Country: "Myanmar",
    Slug: "myanmar",
    ISO2: "MM",
  },
  {
    Country: "Namibia",
    Slug: "namibia",
    ISO2: "NA",
  },
  {
    Country: "Bulgaria",
    Slug: "bulgaria",
    ISO2: "BG",
  },
  {
    Country: "Belize",
    Slug: "belize",
    ISO2: "BZ",
  },
  {
    Country: "Canada",
    Slug: "canada",
    ISO2: "CA",
  },
  {
    Country: "China",
    Slug: "china",
    ISO2: "CN",
  },
  {
    Country: "Indonesia",
    Slug: "indonesia",
    ISO2: "ID",
  },
  {
    Country: "Cuba",
    Slug: "cuba",
    ISO2: "CU",
  },
  {
    Country: "Kazakhstan",
    Slug: "kazakhstan",
    ISO2: "KZ",
  },
  {
    Country: "Saint Lucia",
    Slug: "saint-lucia",
    ISO2: "LC",
  },
  {
    Country: "Marshall Islands",
    Slug: "marshall-islands",
    ISO2: "MH",
  },
  {
    Country: "Cameroon",
    Slug: "cameroon",
    ISO2: "CM",
  },
  {
    Country: "Korea (South)",
    Slug: "korea-south",
    ISO2: "KR",
  },
  {
    Country: "Algeria",
    Slug: "algeria",
    ISO2: "DZ",
  },
  {
    Country: "Bolivia",
    Slug: "bolivia",
    ISO2: "BO",
  },
  {
    Country: "Botswana",
    Slug: "botswana",
    ISO2: "BW",
  },
  {
    Country: "Mali",
    Slug: "mali",
    ISO2: "ML",
  },
  {
    Country: "Rwanda",
    Slug: "rwanda",
    ISO2: "RW",
  },
  {
    Country: "Isle of Man",
    Slug: "isle-of-man",
    ISO2: "IM",
  },
  {
    Country: "Cayman Islands",
    Slug: "cayman-islands",
    ISO2: "KY",
  },
  {
    Country: "Libya",
    Slug: "libya",
    ISO2: "LY",
  },
  {
    Country: "Mauritania",
    Slug: "mauritania",
    ISO2: "MR",
  },
  {
    Country: "Niger",
    Slug: "niger",
    ISO2: "NE",
  },
  {
    Country: "Niue",
    Slug: "niue",
    ISO2: "NU",
  },
  {
    Country: "Sao Tome and Principe",
    Slug: "sao-tome-and-principe",
    ISO2: "ST",
  },
  {
    Country: "Tanzania, United Republic of",
    Slug: "tanzania",
    ISO2: "TZ",
  },
  {
    Country: "Uganda",
    Slug: "uganda",
    ISO2: "UG",
  },
  {
    Country: "Lithuania",
    Slug: "lithuania",
    ISO2: "LT",
  },
  {
    Country: "Iceland",
    Slug: "iceland",
    ISO2: "IS",
  },
  {
    Country: "Macedonia, Republic of",
    Slug: "macedonia",
    ISO2: "MK",
  },
  {
    Country: "Serbia",
    Slug: "serbia",
    ISO2: "RS",
  },
  {
    Country: "Solomon Islands",
    Slug: "solomon-islands",
    ISO2: "SB",
  },
  {
    Country: "Guatemala",
    Slug: "guatemala",
    ISO2: "GT",
  },
  {
    Country: "Norway",
    Slug: "norway",
    ISO2: "NO",
  },
  {
    Country: "Puerto Rico",
    Slug: "puerto-rico",
    ISO2: "PR",
  },
  {
    Country: "Tonga",
    Slug: "tonga",
    ISO2: "TO",
  },
  {
    Country: "Venezuela (Bolivarian Republic)",
    Slug: "venezuela",
    ISO2: "VE",
  },
  {
    Country: "El Salvador",
    Slug: "el-salvador",
    ISO2: "SV",
  },
  {
    Country: "Haiti",
    Slug: "haiti",
    ISO2: "HT",
  },
  {
    Country: "Slovakia",
    Slug: "slovakia",
    ISO2: "SK",
  },
  {
    Country: "Swaziland",
    Slug: "swaziland",
    ISO2: "SZ",
  },
  {
    Country: "Guinea",
    Slug: "guinea",
    ISO2: "GN",
  },
  {
    Country: "Brunei Darussalam",
    Slug: "brunei",
    ISO2: "BN",
  },
  {
    Country: "Germany",
    Slug: "germany",
    ISO2: "DE",
  },
  {
    Country: "Saint Kitts and Nevis",
    Slug: "saint-kitts-and-nevis",
    ISO2: "KN",
  },
  {
    Country: "Bouvet Island",
    Slug: "bouvet-island",
    ISO2: "BV",
  },
  {
    Country: "Costa Rica",
    Slug: "costa-rica",
    ISO2: "CR",
  },
  {
    Country: "Malaysia",
    Slug: "malaysia",
    ISO2: "MY",
  },
  {
    Country: "Paraguay",
    Slug: "paraguay",
    ISO2: "PY",
  },
  {
    Country: "Taiwan, Republic of China",
    Slug: "taiwan",
    ISO2: "TW",
  },
  {
    Country: "US Minor Outlying Islands",
    Slug: "us-minor-outlying-islands",
    ISO2: "UM",
  },
  {
    Country: "American Samoa",
    Slug: "american-samoa",
    ISO2: "AS",
  },
  {
    Country: "Antarctica",
    Slug: "antarctica",
    ISO2: "AQ",
  },
  {
    Country: "Martinique",
    Slug: "martinique",
    ISO2: "MQ",
  },
  {
    Country: "French Southern Territories",
    Slug: "french-southern-territories",
    ISO2: "TF",
  },
  {
    Country: "Liberia",
    Slug: "liberia",
    ISO2: "LR",
  },
  {
    Country: "Philippines",
    Slug: "philippines",
    ISO2: "PH",
  },
  {
    Country: "Bosnia and Herzegovina",
    Slug: "bosnia-and-herzegovina",
    ISO2: "BA",
  },
  {
    Country: "Denmark",
    Slug: "denmark",
    ISO2: "DK",
  },
  {
    Country: "Saint Helena",
    Slug: "saint-helena",
    ISO2: "SH",
  },
  {
    Country: "Belgium",
    Slug: "belgium",
    ISO2: "BE",
  },
];
