const partyList = [
   
    { party_id: 1, wards_code: 'MMR013044701504', party_eng_name:'National League For Democracy', party_name: 'အမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ် ပါတီ', chair_person: 'Daw Aung San Su Kyi', abbreviation: 'NLD', history: '',founder: 'Daw Aung San Su Kyi',founded: '27 September 1988 ( 32 years ago)',political_ideology: 'လစ်ဘရယ်ဝါဒ (သို့မဟုတ်) လစ်ဘရယ်ဒီမိုကရေစီ', political_position:'အလယ်-လက်ဝဲ', created_by: 'ယဥ်', updated_by: 'တင်တင်', status: 'Active' },
    { party_id: 2, wards_code: 'MMR013044701512', party_eng_name:'Union Solidarity and Development Party', party_name: 'ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့်ဖွံ့ဖြိုးရေး ပါတီ', chair_person: 'U Than Htay', abbreviation: 'USDP', history: '', founder: 'U Thein Sein',founded: '8 June 2010 ( 10 years ago)',political_ideology: 'ကွန်ဆာဗေးတစ်ဝါဒ နှင့် အမျိုးသား​ရေးဝါဒ',political_position:'အလယ်-လက်ဝဲ', created_by: 'ယဥ်', updated_by: 'တင်တင်', status: 'Active' },
    { party_id: 3, wards_code: 'MMR013028701505', party_eng_name:'United Democratic Party', party_name: 'ညီညွတ်သောဒီမိုကရက်တစ် ပါတီ', chair_person: 'U Kyaw Myint', abbreviation: 'UDP', history: '', created_by: 'တင်တင်', founder: 'U Kyaw Myint',founded: '25 May 2010 ( 10 years ago)',political_ideology: 'ကွန်ဆာဗေးတစ်ဝါဒ',political_position:'အလယ်-လက်ယာ', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 4, wards_code: 'MMR013028701506', party_eng_name:'Union Betterment Party', party_name: 'ပြည်ထောင်စုကောင်းကျိုးဆောင် ပါတီ', chair_person: 'Thura U Shwe Man', abbreviation: 'UBP', history: '', founder: 'Thura U Shwe Man',founded: '25 April 2019 ( 1 year ago)',political_ideology: 'မရှိ',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 5, wards_code: 'MMR013043701504', party_eng_name: "People's Poiner Party", party_name: 'ပြည်သူ့ရှေ့ဆောင် ပါတီ', chair_person: 'Daw Thet Thet Khine', abbreviation: 'PPP', history: '', founder: 'Daw Thet Thet Khaing',founded: '23 October 2019 ( 1 years ago)',political_ideology: 'မရှိ',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 6, wards_code: 'MMR013037701501', party_eng_name:"People's Party", party_name: 'ပြည်သူ့ ပါတီ', chair_person: 'U Ko Ko Gyi', abbreviation: 'PP', history: '', founder: 'U Ko Ko Gyi',founded: '23 August 2018 ( 2 years ago)',political_ideology: 'မရှိ',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 7, wards_code: 'MMR013037701507', party_eng_name:'Myanmar Farmers Development Party', party_name: 'မြန်မာနိုင်ငံတောင်သူလယ်သမားများဖွံ့ဖြိုးတိုးတက်ရေး ပါတီ', chair_person: 'U Kyaw Swa Soe', abbreviation: 'MFDP', history: '', founder: 'U Kyaw Swar Soe',founded: '9 December 2014 ( 6 years ago)',political_ideology: 'Agrarianism',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 8, wards_code: 'MMR013033701501', party_eng_name:'National Unity Party', party_name: 'တိုင်းရင်းသားစည်းလုံးညီညွတ်ရေး ပါတီ', chair_person: 'U Aung Thein', abbreviation: 'NUP', history: '', founder: 'U Than Tin',founded: '29 April 2010 ( 10 years ago)',political_ideology: 'မရှိ',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 9, wards_code: 'MMR013038701514', party_eng_name:'Chin National Democractic Party', party_name: 'ချင်းအမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ် ပါတီ', chair_person: 'ဦးပူးဇိုရမ်း', abbreviation: 'CNDP', history: '', founder: 'U Pue Zo Yamm',founded: '27 May 2010 ( 10 years ago)',political_ideology: 'မရှိ',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 10, wards_code: 'MMR013035701501', party_eng_name:'Shan-ni Solidarity Party', party_name: 'ရှမ်းနီ(တိုင်းလျန်)သွေးစည်းညီညွတ်ရေး ပါတီ', chair_person: '', abbreviation: 'SSP', history: '', founder: 'U Sai Aung Khin',founded: '20 May 2015 ( 5 years ago)',political_ideology: 'မရှိ',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 11, wards_code: 'MMR013042701501', party_eng_name:'', party_name: 'တစ်သီးပုဂ္ဂလ', chair_person: '', abbreviation: 'SDN', history: '', founder: '', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 12, wards_code: 'MMR013042701505', party_eng_name:'Tai-Leng Nationalities Development Party', party_name: 'တိုင်းလိုင်(ရှမ်းနီ)အမျိုးသားများဖွံ့ဖြိုးတိုးတက်ရေး ပါတီ', chair_person: 'U Sai Htay Aung', abbreviation: 'TNDP', history: '', founder: 'U Htay Aung',founded: '10 May 2012 ( 8 years ago)',political_ideology: 'မရှိ',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
    { party_id: 13, wards_code: 'MMR013039701511', party_eng_name:'Naga National Party', party_name: 'နာဂအမျိုးသား ပါတီ', chair_person: '', abbreviation: 'NNP', history: '', founder: 'U Shou Mg',founded: '25 September 2019 ( 1 years ago)',political_ideology: 'မရှိ',political_position:'အလယ်-လက်ယာ', created_by: 'တင်တင်', updated_by: 'ယဥ်', status: 'Active' },
   
  ]
module.exports = partyList;