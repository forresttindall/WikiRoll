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
            'https://en.wikipedia.org/wiki/Freemasonry',
            'https://en.wikipedia.org/wiki/Freemasonry_in_the_United_States',
            'https://en.wikipedia.org/wiki/Hunters%27_Lodges',
            'https://en.wikipedia.org/wiki/Knights_of_Liberty_(vigilante_group)',
            'https://en.wikipedia.org/wiki/Molly_Maguires',
            'https://en.wikipedia.org/wiki/Skull_and_Bones',
            'https://en.wikipedia.org/wiki/Illuminati',
            'https://en.wikipedia.org/wiki/Bilderberg_Meeting',
            'https://en.wikipedia.org/wiki/Sagittarius_Dwarf_Spheroidal_Galaxy',
            'https://en.wikipedia.org/wiki/Large_Magellanic_Cloud',
            'https://en.wikipedia.org/wiki/Bo%C3%B6tes_I',
            'https://en.wikipedia.org/wiki/Small_Magellanic_Cloud',
            'https://en.wikipedia.org/wiki/Ursa_Minor_Dwarf',
            'https://en.wikipedia.org/wiki/Draco_Dwarf',
            'https://en.wikipedia.org/wiki/NGC_6822',
            'https://en.wikipedia.org/wiki/Triangulum_Galaxy',
            'https://en.wikipedia.org/wiki/Bubble_Nebula_(NGC_6822)',
            'https://en.wikipedia.org/wiki/IC_10',
            'https://en.wikipedia.org/wiki/Cassiopeia_Dwarf',
            'https://en.wikipedia.org/wiki/Messier_32',
            'https://en.wikipedia.org/wiki/Pegasus_Dwarf_Spheroidal_Galaxy',
            'https://en.wikipedia.org/wiki/Wolf%E2%80%93Lundmark%E2%80%93Melotte',
            'https://en.wikipedia.org/wiki/Sextans_A',
            'https://en.wikipedia.org/wiki/NGC_300',
            'https://en.wikipedia.org/wiki/NGC_55',
            'https://en.wikipedia.org/wiki/NGC_2403',
            'https://en.wikipedia.org/wiki/NGC_1569',
            'https://en.wikipedia.org/wiki/IC_342',
            'https://en.wikipedia.org/wiki/Messier_82',
            'https://en.wikipedia.org/wiki/NGC_2976',
            'https://en.wikipedia.org/wiki/Messier_81',
            'https://en.wikipedia.org/wiki/Centaurus_A',
            'https://en.wikipedia.org/wiki/Nebula',
            'https://en.wikipedia.org/wiki/Pillars_of_Creation',
            'https://en.wikipedia.org/wiki/Eagle_Nebula',
            'https://en.wikipedia.org/wiki/Orion_Nebula',
            'https://en.wikipedia.org/wiki/Carina_Nebula',
            'https://en.wikipedia.org/wiki/NGC_604',
            'https://en.wikipedia.org/wiki/Omega_Nebula',
            'https://en.wikipedia.org/wiki/Horsehead_Nebula',
            'https://en.wikipedia.org/wiki/Cat%27s_Eye_Nebula',
            'https://en.wikipedia.org/wiki/Red_Rectangle_Nebula',
            'https://en.wikipedia.org/wiki/SNR_0509-67.5',
            'https://en.wikipedia.org/wiki/SN_1572',
            'https://en.wikipedia.org/wiki/NGC_3132',
            'https://en.wikipedia.org/wiki/Ring_Nebula',
            'https://en.wikipedia.org/wiki/Polaris',
            'https://en.wikipedia.org/wiki/NGC_1501',
            'https://en.wikipedia.org/wiki/Westbrook_Nebula',
            'https://en.wikipedia.org/wiki/Crab_Nebula',
            'https://en.wikipedia.org/wiki/Mz_3',
            'https://en.wikipedia.org/wiki/Boomerang_Nebula',
            'https://en.wikipedia.org/wiki/Eskimo_Nebula',
            'https://en.wikipedia.org/wiki/Fox_Fur_Nebula',
            'https://en.wikipedia.org/wiki/Helix_Nebula',
            'https://en.wikipedia.org/wiki/Engraved_Hourglass_Nebula',
            'https://en.wikipedia.org/wiki/Lagoon_Nebula',
            'https://en.wikipedia.org/wiki/Pelican_Nebula',
            'https://en.wikipedia.org/wiki/Rosette_Nebula',
            'https://en.wikipedia.org/wiki/Tarantula_Nebula',
            'https://en.wikipedia.org/wiki/Operation_Northwoods',
            'https://en.wikipedia.org/wiki/1986_Brazilian_UFO_incident',
            'https://en.wikipedia.org/wiki/Majestic_12',
            'https://en.wikipedia.org/wiki/U.S._Army_and_CIA_interrogation_manuals',
            'https://en.wikipedia.org/wiki/Seven_Days_to_the_River_Rhine',
            'https://en.wikipedia.org/wiki/Pentagon_Papers',
            'https://en.wikipedia.org/wiki/United_States_documents_leak_of_the_War_in_Afghanistan',
            'https://en.wikipedia.org/wiki/Iraq_War_documents_leak',
            'https://en.wikipedia.org/wiki/United_States_diplomatic_cables_leak',
            'https://en.wikipedia.org/wiki/Guantanamo_Bay_files_leak',
            'https://en.wikipedia.org/wiki/2005_CIA_interrogation_videotapes_destruction',
            'https://en.wikipedia.org/wiki/Vault_7',
            'https://en.wikipedia.org/wiki/2022%E2%80%932023_Pentagon_document_leaks',
            'https://en.wikipedia.org/wiki/List_of_female_SOE_agents',
            'https://en.wikipedia.org/wiki/Manhattan_Project',
            'https://en.wikipedia.org/wiki/Black_Hand_(Serbia)',
            'https://en.wikipedia.org/wiki/Area_51',
            'https://en.wikipedia.org/wiki/Lockheed_Have_Blue',
            'https://en.wikipedia.org/wiki/Mikoyan-Gurevich_MiG-21',
            'https://en.wikipedia.org/wiki/Lockheed_U-2',
            'https://en.wikipedia.org/wiki/Lockheed_SR-71_Blackbird',
            'https://en.wikipedia.org/wiki/Lockheed_A-12',
            'https://en.wikipedia.org/wiki/Lockheed_D-21',
            'https://en.wikipedia.org/wiki/Skunk_Works',
            'https://en.wikipedia.org/wiki/Bob_Lazar',
            'https://en.wikipedia.org/wiki/Los_Alamos_National_Laboratory',
            'https://en.wikipedia.org/wiki/ECHELON',
            'https://en.wikipedia.org/wiki/Boundless_Informant',
            'https://en.wikipedia.org/wiki/Bullrun_(decryption_program)',
            'https://en.wikipedia.org/wiki/Carnivore_(software)',
            'https://en.wikipedia.org/wiki/Digital_Collection_System_Network',
            'https://en.wikipedia.org/wiki/Fairview_(surveillance_program)',
            'https://en.wikipedia.org/wiki/ICREACH',
            'https://en.wikipedia.org/wiki/Magic_Lantern_(spyware)',
            'https://en.wikipedia.org/wiki/Main_Core',
            'https://en.wikipedia.org/wiki/MAINWAY',
            'https://en.wikipedia.org/wiki/DHS_media_monitoring_services',
            'https://en.wikipedia.org/wiki/MUSCULAR',
            'https://en.wikipedia.org/wiki/MYSTIC',
            'https://en.wikipedia.org/wiki/ANT_catalog',
            'https://en.wikipedia.org/wiki/PRISM',
            'https://en.wikipedia.org/wiki/Room_641A',
            'https://en.wikipedia.org/wiki/Sentry_Eagle',
            'https://en.wikipedia.org/wiki/Special_Collection_Service',
            'https://en.wikipedia.org/wiki/Stellar_Wind',
            'https://en.wikipedia.org/wiki/Tailored_Access_Operations',
            'https://en.wikipedia.org/wiki/Turbulence_(NSA)',
            'https://en.wikipedia.org/wiki/Trailblazer_Project',
            'https://en.wikipedia.org/wiki/Utah_Data_Center',
            'https://en.wikipedia.org/wiki/XKeyscore',
            'https://en.wikipedia.org/wiki/GhostNet',
            'https://en.wikipedia.org/wiki/Stuxnet',
            'https://en.wikipedia.org/wiki/SORM',
            'https://en.wikipedia.org/wiki/CAMERTON',
            'https://en.wikipedia.org/wiki/Golden_Shield_Project',
            'https://en.wikipedia.org/wiki/Social_Credit_System',
            'https://en.wikipedia.org/wiki/INDECT'
            //add more links here
            ];

            const randomUrl = urlList[Math.floor(Math.random() * urlList.length)];  // selects random link from urlList array
            window.location.href = randomUrl;  // redirect to the selected URL
    }, 2500);
}

rollBtn.addEventListener('click', randomDice);
