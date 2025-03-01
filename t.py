#importing all types of fevers
ind_fevers = {}
ind_fevers['entric fever'] = ["abdominal pain", "arthralglaia", "bradycardia", "chills", "cough", "fever", "headache", "hepatosplenomegaly", "hysteria", "muttering delirium", "my algia", "nausea", "paranoid psychosis", "rashes", "sweating"]
ind_fevers['epidemic typhus'] = ["eye discharge rashes", "fever", "headache", "my algia"]
ind_fevers['endemic typus'] = ["anorexia", "fever", "headache", "my algia", "rashes"]
ind_fevers['rocky mountain spotted fever'] = ["anorexia", "fever", "headache", "rash myalgia"]
ind_fevers['scrub typhus'] = ["anorexia", "fever", "headache", "rash myalgia"]
ind_fevers['enrlichiosis'] = ["chills", "fever", "headache", "loss of appetite", "muscle aches", "nausea", "vomiting"]
ind_fevers['q fever'] = ["cns involvement", "endocarditis", "interstitial pneumonia", "fever", "hepatitics", "pericarditis"]
ind_fevers['trench fever'] = ["backpain", "conjunctival injection", "dizziness", "fever", "headache", "quintana", "weakness"]
ind_fevers['brucellosis'] = ["abdominal pain", "diarrhea", "fever", "headache", "hepatosplenomegaly", "lethargy with meningitis", "lymphocytic meningoencephalitis", "night sweat", "pharyngitis", "prostatitis", "rashes", "salpingitis", "weight loss"]
ind_fevers['lepto spirosis'] = ["abdominal pain", "conjunctival suffusion", "fever", "headache", "my algia", "optic neuritis", "pharyngeal erythema", "vomiting"]
ind_fevers['lyme disease'] = ["arthralglaia", "erythema", "fatigue", "fever", "malaise", "migrans", "neurological abnormalities", "secondary annular skin lesions"]
ind_fevers['dengue'] = ["fever", "headache", "hepatomegaly", "lymphadenopathy", "maculopapular rashes", "muscle and joint pain", "retro orbital pain", "thrombocytopenia"]
ind_fevers['chikun gunya'] = ["fever", "headache", "muscle and joint pain", "tenosynovitis"]
ind_fevers['kyasanur forest disease'] = ["bleeding from nasal cavity", "fever", "gastrointestinal bleeding", "gums", "headache", "malaise", "sore throat"]
ind_fevers['malaria'] = ["anemia", "chills", "cold", "fever", "headache", "nausea", "profuse", "rigor", "splenomegaly", "sweating"]
ind_fevers['shigellosis'] = ["anorexia", "diarrhea", "fever", "malaise", "vomiting"]
ind_fevers['camphylobacteriosis'] = ["abdominal pain", "diarrhea", "fever", "vomiting"]
ind_fevers['scarlet fever'] = ["bumpy tongue", "circumoral pallor", "fever", "flushing", "malaise", "nausea", "peeling", "red rashes & spots", "roughness", "skinfolds", "sore throat", "swollen tonsils"]
ind_fevers['human echinotoccosis'] = ["abdominal pain", "chest pain", "cough", "nausea", "shortness of breath", "vomiting"]
ind_fevers['visceral leishmaniasis'] = ["fever", "hepatomegaly", "lymphadenopathy", "splenomegaly", "weight loss"]
ind_fevers['amoebic liver abscess'] = ["abdominal pain", "chills", "clay coloured stools", "dark urine", "fever", "loss of appetite", "nausea", "night sweat", "vomiting","weakness", "weight loss"]


#classifying the symptoms

early_symptoms= [
        "fatigue", "weakness", "muscle and joint pain", "headache", "cold",
        "rigor", "sore throat", "cough", "malaise", "loss of appetite", "nausea"
    ]
early_symptoms.sort()
middle_symptoms= [
        "vomiting", "abdominal pain", "shortness of breath", "red rashes & spots",
        "dizziness", "backpain", "chest pain", "flushing", "sweating",
        "diarrhea","rashes","roughness"
    ]
middle_symptoms.sort()
serious_symptoms=[
        "interstitial pneumonia", "thrombocytopenia", "arthralglaia", "hepatomegaly",
        "my algia", "peeling","hysteria","secondary annular skin lesions", "migrans", "weight loss",
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
    ]
serious_symptoms.sort()
#early symptoms gathering
print("..........................................................................................................................")

print("enter the number of the symptom if any line by line:")
for x in range(len(early_symptoms)):
    print(x+1," : ",early_symptoms[x])
selected_symptoms_1=set()
n=-1
while(True):
    n=int(input())
    if n<=0 or n>len(early_symptoms):
        break
    selected_symptoms_1.add(early_symptoms[n-1])
selected_symptoms_1=list(selected_symptoms_1)
print("..........................................................................................................................")

print("Selected early symptoms:")
print(selected_symptoms_1)
print("..........................................................................................................................")


if len(selected_symptoms_1)==0:
    print("there is no problem")
    exit(0)
#first layer fever classification

selected_fevers_1={}
selected_fevers_2={}
selected_fevers_3={}
for fever in ind_fevers.keys():
   l=list(set(selected_symptoms_1)&set(ind_fevers[fever]))
   if len(l)>0:
       selected_fevers_1[fever]=ind_fevers[fever]
print("No of fevers classified in layer 1:",len(selected_fevers_1.keys()))
print("Fevers classified in layer 1:")
for ch in selected_fevers_1.keys():
    print(ch)
print("..........................................................................................................................")



for key in selected_fevers_1:
  if len(list(set(selected_fevers_1[key]) & set(middle_symptoms)))==0:
    selected_fevers_2[key]=selected_fevers_1[key]




#classifying the serious symptoms from selected symptoms

a=set()
for x in selected_fevers_1.keys():
    for b in selected_fevers_1[x]:
        a.add(b)
middle_symptoms_1=list(set(a)&set(middle_symptoms))

#middle symptoms gathering
print("enter the number of the symptom if any line by line:")
for x in range(len(middle_symptoms_1)):
    print(x+1," : ",middle_symptoms_1[x])
selected_symptoms_2=set()
n=-1
while(True):
    n=int(input())
    if n<=0 or n>len(middle_symptoms_1):
        break
    selected_symptoms_2.add(middle_symptoms_1[n-1])
selected_symptoms_2=list(selected_symptoms_2)
print("..........................................................................................................................")

print("Selected middle symptoms:")
print(selected_symptoms_2)
print("..........................................................................................................................")


#second layer classification
for fever in selected_fevers_1.keys():
   l=list(set(selected_symptoms_2)&set(selected_fevers_1[fever]))
   if len(l)>0:
       selected_fevers_2[fever]=selected_fevers_1[fever]
print("No of fevers classified in layer 2:",len(selected_fevers_2.keys()))
print("Fevers classified in layer 2:")
for ch in selected_fevers_2.keys():
    print(ch)
print("..........................................................................................................................")



#classifying the serious symptoms from selected symptoms

a=set()
for x in selected_fevers_2.keys():
    for b in selected_fevers_2[x]:
        a.add(b)
serious_symptoms_1=list(set(a)&set(serious_symptoms))


#selecting serious symptoms


print("enter the number of the symptom if any line by line:")
for x in range(len(serious_symptoms_1)):
    print(x+1," : ",serious_symptoms_1[x])
selected_symptoms_3=set()
n=-1
while(True):
    n=int(input())
    if n<=0 or n>len(serious_symptoms_1):
        break
    selected_symptoms_3.add(serious_symptoms_1[n-1])
selected_symptoms_3=list(selected_symptoms_3)
print("..........................................................................................................................")

print("Selected serious symptoms:")
print(selected_symptoms_3)
print("..........................................................................................................................")

#third layer classification


for fever in selected_fevers_2.keys():
   l=list(set(selected_symptoms_3)&set(selected_fevers_2[fever]))
   if len(l)>0:
       selected_fevers_3[fever]=selected_fevers_2[fever]
print("No of fevers classified in layer 3:",len(selected_fevers_3.keys()))
print("Fevers classified in layer 3:")
for ch in selected_fevers_3.keys():
    print(ch)
print("..........................................................................................................................")
input_symptoms=selected_symptoms_1+selected_symptoms_2+selected_symptoms_3
print("symptoms_entered:",input_symptoms)
if len(selected_fevers_3.keys())==0:
    if len(selected_fevers_2.keys())==0:
      if len(selected_symptoms_1)==0:
        print("there is no problem")
      else:
        print("there is no problem but use the medication for Symptoms")
    else:
      result={}
      for key in selected_fevers_2.keys():
        count=len(list(set(input_symptoms)&set(selected_fevers_2[key])))
        result[count]=key
      print("you might effect with following fevers:")
      for x in sorted(result.keys(),reverse=True):
          print(x," : ",result[x])

else:
  result={}
  for key in selected_fevers_3.keys():
    count=len(list(set(input_symptoms)&set(selected_fevers_3[key])))
    result[count]=key

  print("you might effect with following fevers:")
  for x in sorted(result.keys(),reverse=True):
    print(x," : ",result[x])

print("for furthur classification better do blood test.")