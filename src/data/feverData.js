export const feverData = {
    'entric fever': ["abdominal pain", "arthralglaia", "bradycardia", "chills", "cough", "fever", "headache", "hepatosplenomegaly", "hysteria", "muttering delirium", "my algia", "nausea", "paranoid psychosis", "rashes", "sweating"],
    'epidemic typhus': ["eye discharge rashes", "fever", "headache", "my algia"],
    'endemic typus': ["anorexia", "fever", "headache", "my algia", "rashes"],
    'rocky mountain spotted fever': ["anorexia", "fever", "headache", "rash myalgia"],
    'scrub typhus': ["anorexia", "fever", "headache", "rash myalgia"],
    'enrlichiosis': ["chills", "fever", "headache", "loss of appetite", "muscle aches", "nausea", "vomiting"],
    'q fever': ["cns involvement", "endocarditis", "interstitial pneumonia", "fever", "hepatitics", "pericarditis"],
    'trench fever': ["backpain", "conjunctival injection", "dizziness", "fever", "headache", "quintana", "weakness"],
    'brucellosis': ["abdominal pain", "diarrhea", "fever", "headache", "hepatosplenomegaly", "lethargy with meningitis", "lymphocytic meningoencephalitis", "night sweat", "pharyngitis", "prostatitis", "rashes", "salpingitis", "weight loss"],
    'lepto spirosis': ["abdominal pain", "conjunctival suffusion", "fever", "headache", "my algia", "optic neuritis", "pharyngeal erythema", "vomiting"],
    'dengue': ["fever", "headache", "hepatomegaly", "lymphadenopathy", "maculopapular rashes", "muscle and joint pain", "retro orbital pain", "thrombocytopenia"],
    'chikun gunya': ["fever", "headache", "muscle and joint pain", "tenosynovitis"],
    'kyasanur forest disease': ["bleeding from nasal cavity", "fever", "gastrointestinal bleeding", "gums", "headache", "malaise", "sore throat"],
    'malaria': ["anemia", "chills", "cold", "fever", "headache", "nausea", "profuse", "rigor", "splenomegaly", "sweating"],
    'shigellosis': ["anorexia", "diarrhea", "fever", "malaise", "vomiting"],
    'camphylobacteriosis': ["abdominal pain", "diarrhea", "fever", "vomiting"],
    'human echinotoccosis': ["abdominal pain", "chest pain", "cough", "nausea", "shortness of breath", "vomiting"],
    'visceral leishmaniasis': ["fever", "hepatomegaly", "lymphadenopathy", "splenomegaly", "weight loss"],
    'amoebic liver abscess': ["abdominal pain", "chills", "clay coloured stools", "dark urine", "fever", "loss of appetite", "nausea", "night sweat", "vomiting", "weakness", "weight loss"],
    'scarlet fever': ["bumpy tongue", "circumoral pallor", "fever", "flushing", "malaise", "nausea", "peeling", "red rashes & spots", "roughness", "skinfolds", "sore throat", "swollen tonsils"]
};

export const indianFevers = [
    "entric fever",
    "epidemic typhus",
    "endemic typus",
    "rocky mountain spotted fever",
    "scrub typhus",
    "enrlichiosis",
    "q fever",
    "trench fever",
    "brucellosis",
    "lepto spirosis",
    "lyme disease",
    "dengue",
    "chikun gunya",
    "kyasanur forest disease",
    "malaria",
    "shigellosis",
    "camphylobacteriosis",
    "scarlet fever",
    "human echinotoccosis",
    "visceral leishmaniasis",
    "amoebic liver abscess"
];

export const symptomCategories = {
    early: [
        "fatigue", "weakness", "muscle and joint pain", "headache", "cold",
        "rigor", "sore throat", "cough", "malaise", "loss of appetite", "nausea"
    ].sort(),
    middle: [
        "vomiting", "abdominal pain", "shortness of breath", "red rashes & spots",
        "dizziness", "backpain", "chest pain", "flushing", "sweating",
        "diarrhea", "rashes", "roughness"
    ].sort(),
    serious: [
        "interstitial pneumonia", "thrombocytopenia", "arthralglaia", "hepatomegaly",
        "my algia", "peeling", "hysteria", "secondary annular skin lesions", "migrans", "weight loss",
        "bleeding from nasal cavity", "rash myalgia", "paranoid psychosis",
        "lethargy with meningitis", "circumoral pallor", "prostatitis",
        "tenosynovitis", "night sweat", "pharyngeal erythema",
        "conjunctival injection", "cns involvement", "gastrointestinal bleeding",
        "anorexia", "clay coloured stools", "hepatitics", "bumpy tongue",
        "eye discharge rashes", "salpingitis", "lymphadenopathy", "profuse",
        "gums", "dark urine", "splenomegaly", "endocarditis",
        "muttering delirium", "lymphocytic meningoencephalitis",
        "conjunctival suffusion", "bradycardia", "chills", "anemia",
        "retro orbital pain", "swollen tonsils", "neurological abnormalities",
        "erythema", "hepatosplenomegaly", "quintana", "pharyngitis", "skinfolds",
        "muscle aches", "maculopapular rashes", "pericarditis", "optic neuritis"
    ].sort()
};

// Helper function to get intersection of arrays
export const getIntersection = (arr1, arr2) => {
    return arr1.filter(item => arr2.includes(item));
};

// Helper function to get available symptoms for next step
export const getAvailableSymptoms = (selectedFevers, symptomCategory) => {
    const allSymptomsFromFevers = new Set();
    Object.keys(selectedFevers).forEach(fever => {
        selectedFevers[fever].forEach(symptom => {
            allSymptomsFromFevers.add(symptom);
        });
    });
    
    return getIntersection(Array.from(allSymptomsFromFevers), symptomCategory);
}; 