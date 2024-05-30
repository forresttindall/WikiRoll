const dice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll');

const randomDice = () => {

    const random = Math.floor(Math.random() * 10);

    if (random >= 1 && random <= 6) {
        rollDice(random);
    }
    else {
        randomDice();
    }
}

const rollDice = random => {

    dice.style.animation = 'rolling 3s';

    setTimeout(() => {

        switch (random) {
            case 1:
                dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice.style.animation = 'none';

        // List of all links in array.
        const urlList = ['https://en.wikipedia.org/wiki/Project_Condign', 'https://en.wikipedia.org/wiki/NASA_Unidentified_Anomalous_Phenomena_Independent_Study_Team', 'https://en.wikipedia.org/wiki/Interdimensional_UFO_hypothesis',
            'https://en.wikipedia.org/wiki/Extraterrestrial_UFO_hypothesis', 'https://en.wikipedia.org/wiki/Advanced_Aerospace_Threat_Identification_Program', 'https://en.wikipedia.org/wiki/Pentagon_UFO_videos', 'https://en.wikipedia.org/wiki/All-domain_Anomaly_Resolution_Office',
            'https://en.wikipedia.org/wiki/David_Grusch_UFO_whistleblower_claims', 'https://en.wikipedia.org/wiki/List_of_reported_UFO_sightings', 'https://en.wikipedia.org/wiki/Rendlesham_Forest_incident', 'https://en.wikipedia.org/wiki/UFO_sightings_in_France#1965', 'https://en.wikipedia.org/wiki/Trans-en-Provence_case', 
            'https://en.wikipedia.org/wiki/Kecksburg_UFO_incident', 'https://en.wikipedia.org/wiki/Travis_Walton_incident', 'https://en.wikipedia.org/wiki/Phoenix_Lights', 'https://en.wikipedia.org/wiki/Flying_saucer', 'https://en.wikipedia.org/wiki/Identification_studies_of_UFOs', 'https://en.wikipedia.org/wiki/Project_Sign', 
            'https://en.wikipedia.org/wiki/Project_Grudge', 'https://en.wikipedia.org/wiki/Brookings_Report', 'https://en.wikipedia.org/wiki/Mutual_UFO_Network', 'https://en.wikipedia.org/wiki/Ufology#Research',
            'https://en.wikipedia.org/wiki/Quantum_mechanics',
            'https://en.wikipedia.org/wiki/Quantum_chemistry',
            'https://en.wikipedia.org/wiki/Quantum_technology',
            'https://en.wikipedia.org/wiki/Quantum_information_science',
            'https://en.wikipedia.org/wiki/Subatomic_particle',
            'https://en.wikipedia.org/wiki/Quantization_(physics)',
            'https://en.wikipedia.org/wiki/Wave%E2%80%93particle_duality',
            'https://en.wikipedia.org/wiki/Max_Planck',
            'https://en.wikipedia.org/wiki/Uncertainty_principle',
            'https://en.wikipedia.org/wiki/Old_quantum_theory',
            'https://en.wikipedia.org/wiki/Albert_Einstein',
            'https://en.wikipedia.org/wiki/Wave_function',
            'https://en.wikipedia.org/wiki/Werner_Heisenberg',
            'https://en.wikipedia.org/wiki/Niels_Bohr',
            'https://en.wikipedia.org/wiki/Quantum_electrodynamics',
            'https://en.wikipedia.org/wiki/Electron',
            'https://en.wikipedia.org/wiki/Schr%C3%B6dinger_equation',
            'https://en.wikipedia.org/wiki/Quantum_computing',
            'https://en.wikipedia.org/wiki/Quantum_entanglement',
            'https://en.wikipedia.org/wiki/String_theory',
            'https://en.wikipedia.org/wiki/General_relativity',
            'https://en.wikipedia.org/wiki/Spacetime',
            'https://en.wikipedia.org/wiki/Three-dimensional_space',
            'https://en.wikipedia.org/wiki/Four-dimensional_space',
            'https://en.wikipedia.org/wiki/Quark',
            'https://en.wikipedia.org/wiki/Electron_neutrino',
            'https://en.wikipedia.org/wiki/Muon',
            'https://en.wikipedia.org/wiki/Tau_(particle)',
            'https://en.wikipedia.org/wiki/Gauge_boson',
            'https://en.wikipedia.org/wiki/Higgs_boson',
            'https://en.wikipedia.org/wiki/Weak_interaction',
            'https://en.wikipedia.org/wiki/Strong_interaction',
            'https://en.wikipedia.org/wiki/Gluon',
            'https://en.wikipedia.org/wiki/Black_hole',
            'https://en.wikipedia.org/wiki/Hawking_radiation',
            'https://en.wikipedia.org/wiki/Event_horizon',
            'https://en.wikipedia.org/wiki/Stephen_Hawking',
            'https://en.wikipedia.org/wiki/Big_Bang',
            'https://en.wikipedia.org/wiki/Big_Crunch',
            'https://en.wikipedia.org/wiki/Hubble_Space_Telescope',
            'https://en.wikipedia.org/wiki/NASA',
            'https://en.wikipedia.org/wiki/Spaceflight',
            'https://en.wikipedia.org/wiki/Bell_X-1',
            'https://en.wikipedia.org/wiki/Stealth_aircraft',
            'https://en.wikipedia.org/wiki/Lockheed_F-117_Nighthawk',
            'https://en.wikipedia.org/wiki/Northrop_B-2_Spirit',
            'https://en.wikipedia.org/wiki/Northrop_Grumman_B-21_Raider',
            'https://en.wikipedia.org/wiki/Lockheed_Martin_F-22_Raptor',
            'https://en.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II',
            'https://en.wikipedia.org/wiki/Chengdu_J-20',
            'https://en.wikipedia.org/wiki/Sukhoi_Su-57',
            'https://en.wikipedia.org/wiki/Manfred_von_Richthofen',
            'https://en.wikipedia.org/wiki/Lebensborn',
            'https://en.wikipedia.org/wiki/Nazi_UFOs',
            'https://en.wikipedia.org/wiki/Foo_fighter',
            'https://en.wikipedia.org/wiki/New_Swabia',
            'https://en.wikipedia.org/wiki/Ghost_rockets',
            'https://en.wikipedia.org/wiki/Perseids',
            'https://en.wikipedia.org/wiki/V-1_flying_bomb',
            'https://en.wikipedia.org/wiki/V-2_rocket',
            'https://en.wikipedia.org/wiki/Paris_Gun',
            'https://en.wikipedia.org/wiki/Psychological_warfare',
            'https://en.wikipedia.org/wiki/Propaganda',
            'https://en.wikipedia.org/wiki/Rogue_security_software',
            'https://en.wikipedia.org/wiki/Andromeda_Galaxy',
            'https://en.wikipedia.org/wiki/Dark_matter',
            'https://en.wikipedia.org/wiki/Milky_Way',
            'https://en.wikipedia.org/wiki/Kepler%27s_Supernova',
            'https://en.wikipedia.org/wiki/Dark_energy',
            'https://en.wikipedia.org/wiki/Alpha_Centauri',
            'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes',
            'https://en.wikipedia.org/wiki/List_of_micronations',
            'https://en.wikipedia.org/wiki/Gravity_hill',
            'https://en.wikipedia.org/wiki/Phantom_island',
            'https://en.wikipedia.org/wiki/Rocket_garden',
            'https://en.wikipedia.org/wiki/Spite_house',
            'https://en.wikipedia.org/wiki/Pizza_farm',
            'https://en.wikipedia.org/wiki/Valeriepieris_circle',
            'https://en.wikipedia.org/wiki/Akon_City',
            'https://en.wikipedia.org/wiki/Bir_Tawil',
            'https://en.wikipedia.org/wiki/798_Art_Zone',
            'https://en.wikipedia.org/wiki/Aoshima,_Ehime',
            'https://en.wikipedia.org/wiki/Darvaza_gas_crater',
            'https://en.wikipedia.org/wiki/Diomede_Islands',
            'https://en.wikipedia.org/wiki/Highest_unclimbed_mountain',
            'https://en.wikipedia.org/wiki/Gate_Tower_Building',
            'https://en.wikipedia.org/wiki/Haesindang_Park',
            'https://en.wikipedia.org/wiki/H%E1%BA%B1ng_Nga_Guesthouse',
            'https://en.wikipedia.org/wiki/Imsil_Cheese_Theme_Park',
            'https://en.wikipedia.org/wiki/Jackson_Hole,_China',
            'https://en.wikipedia.org/wiki/Kowloon_Walled_City',
            'https://en.wikipedia.org/wiki/North_Sentinel_Island',
            'https://en.wikipedia.org/wiki/Roopkund',
            'https://en.wikipedia.org/wiki/Barack_Obama_Plaza',
            'https://en.wikipedia.org/wiki/Cher%C3%A1n',
            'https://en.wikipedia.org/wiki/Colonia_Dignidad',
            'https://en.wikipedia.org/wiki/Watermelon_Riot',
            'https://en.wikipedia.org/wiki/Drapetomania',
            'https://en.wikipedia.org/wiki/Great_Moon_Hoax',
            'https://en.wikipedia.org/wiki/Great_Stink',
            'https://en.wikipedia.org/wiki/Kentucky_meat_shower',
            'https://en.wikipedia.org/wiki/Knights_of_the_Golden_Circle',
            'https://en.wikipedia.org/wiki/COINTELPRO',
            ''
            //add more links here
            ];

            const randomUrl = urlList[Math.floor(Math.random() * urlList.length)];  // selects random link from urlList array
            window.location.href = randomUrl;  // redirect to the selected URL
    }, 2500);
}

rollBtn.addEventListener('click', randomDice);
