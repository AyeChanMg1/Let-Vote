const officeList = [
    { office_id: 1, party_id: 1, office_name: 'အမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ(ခန္တီးမြို့)', address: 'ခန္တီးမြို့', pono: 'စာတိုက်နံပါတ်(၁)', phno: '၀၉၄၀၀၁၂၃၄၅၃', email: 'nldmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 2, party_id: 2, office_name: 'ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့်ဖွံ့ဖြိုးရေးပါတီ(ခန္တီးမြို့)', address: 'ခန္တီးမြို့', pono: 'စာတိုက်နံပါတ်(၂)', phno: '၀၉၄၅၂၂၃၃၄၄၁', email: 'nldshwebo@gmail.com', own_or_rental: 'အငှား', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 3, party_id: 3, office_name: 'ညီညွတ်သောဒီမိုကရက်တစ်ပါတီ(ခန္တီးမြို့)', address: 'ခန္တီးမြို့', pono: 'စာတိုက်နံပါတ်(၃)', phno: '၀၉၉၇၁၁၄၄၃၃၅', email: 'nldkanbalu@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 4, party_id: 4, office_name: 'ပြည်ထောင်စုကောင်းကျိုးဆောင်ပါတီ(ခန္တီးမြို့)', address: 'ခန္တီးမြို့', pono: 'စာတိုက်နံပါတ်(၄)', phno: '၀၉၇၉၈၈၆၆၅၅၄', email: 'nldchaungu@gmail.com', own_or_rental: 'အငှား', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 5, party_id: 6, office_name: 'ပြည်သူ့ပါတီ(ခန္တီးမြို့)', address: 'ခန္တီးမြို့', pono: 'စာတိုက်နံပါတ်(၅)', phno: '၀၉၂၅၄၄၃၃၂၂၁', email: 'usdpmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 6, party_id: 10, office_name: 'ရှမ်းနီ(တိုင်းလျန်)သွေးစည်းညီညွတ်ရေးပါတီ(ခန္တီးမြို့)', address: 'ခန္တီးမြို့', pono: 'စာတိုက်နံပါတ်(၆)', phno: '၀၉၇၈၇၆၅၆၄၅၅', email: 'usdpshwebo@gmail.com', own_or_rental: 'အငှား', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 7, party_id: 13, office_name: 'နာဂအမျိုးသားပါတီ(ခန္တီးမြို့)', address: 'ခန္တီးမြို့', pono: 'စာတိုက်နံပါတ်(၇)', phno: '၀၉၄၄၄၇၆၅၄၄၃', email: 'usdpmyinmu@gmail.com', own_or_rental: 'အငှား', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    
    { office_id: 8, party_id: 1, office_name: 'အမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ(ဟုမ္မလင်းမြို့)', address: 'ဟုမ္မလင်းမြို့', pono: 'စာတိုက်နံပါတ်(၈)', phno: '၀၉၉၇၅၅၆၇၄၃၂', email: 'nldkatha@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 9, party_id: 2, office_name: 'ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့်ဖွံ့ဖြိုးရေးပါတီ(ဟုမ္မလင်းမြို့)', address: 'ဟုမ္မလင်းမြို့', pono: 'စာတိုက်နံပါတ်(၉)', phno: '၀၉၄၀၀၇၆၅၈၇၆', email: 'nldkatha@gmail.com', own_or_rental: 'အငှား', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 10, party_id: 3, office_name: 'ညီညွတ်သောဒီမိုကရက်တစ်ပါတီ(ဟုမ္မလင်းမြို့)', address: 'ဟုမ္မလင်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၀)', phno: '၀၉၄၀၀၂၃၄၅၂၁', email: 'pppmonywa@gmail.com', own_or_rental: 'အငှား', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 11, party_id: 4, office_name: 'ပြည်ထောင်စုကောင်းကျိုးဆောင်ပါတီ(ဟုမ္မလင်းမြို့)', address: 'ဟုမ္မလင်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၁)', phno: '၀၉၄၀၀၅၆၇၃၄၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 12, party_id: 8, office_name: 'တိုင်းရင်းသားစည်းလုံးညီညွတ်ရေးပါတီ(ဟုမ္မလင်းမြို့)', address: 'ဟုမ္မလင်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၂)', phno: '၀၉၂၆၇၈၄၅၃၂၁', email: 'pppmonywa@gmail.com', own_or_rental: 'အငှား', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 13, party_id: 10, office_name: 'ရှမ်းနီ(တိုင်းလျန်)သွေးစည်းညီညွတ်ရေးပါတီ(ဟုမ္မလင်းမြို့)', address: 'ဟုမ္မလင်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၃)', phno: '၀၉၄၄၃၅၂၃၄၆၅', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 14, party_id: 12, office_name: 'တိုင်းလိုင်(ရှမ်းနီ)အမျိုးသားများဖွံ့ဖြိုးတိုးတက်ရေးပါတီ(ဟုမ္မလင်းမြို့)', address: 'ဟုမ္မလင်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    
    { office_id: 15, party_id: 1, office_name: 'အမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ(လဟယ်မြို့)', address: 'လဟယ်မြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 16, party_id: 2, office_name: 'ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့်ဖွံ့ဖြိုးရေးပါတီ(လဟယ်မြို့)', address: 'လဟယ်မြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 17, party_id: 3, office_name: 'ညီညွတ်သောဒီမိုကရက်တစ်ပါတီ(လဟယ်မြို့)', address: 'လဟယ်မြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 18, party_id: 4, office_name: 'ပြည်ထောင်စုကောင်းကျိုးဆောင်ပါတီ(လဟယ်မြို့)', address: 'လဟယ်မြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 19, party_id: 13, office_name: 'နာဂအမျိုးသား ါတီ(လဟယ်မြို့)', address: 'လဟယ်မြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    
    { office_id: 20, party_id: 1, office_name: 'အမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ(လေရှီးမြို့)', address: 'လေရှီးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 21, party_id: 2, office_name: 'ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့်ဖွံ့ဖြိုးရေးပါတီ(လေရှီးမြို့)', address: 'လေရှီးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 22, party_id: 3, office_name: 'ညီညွတ်သောဒီမိုကရက်တစ်ပါတီ(လေရှီးမြို့)', address: 'လေရှီးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 23, party_id: 4, office_name: 'ပြည်ထောင်စုကောင်းကျိုးဆောင်ပါတီ(လေရှီးမြို့)', address: 'လေရှီးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 24, party_id: 13, office_name: 'နာဂအမျိုးသားပါတီ(လေရှီးမြို့)', address: 'လေရှီးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    
    { office_id: 25, party_id: 1, office_name: 'အမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ(နန်းယွန်းမြို့)', address: 'နန်းယွန်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 26, party_id: 2, office_name: 'ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့်ဖွံ့ဖြိုးရေးပါတီ(နန်းယွန်းမြို့)', address: 'နန်းယွန်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 27, party_id: 3, office_name: 'ညီညွတ်သောဒီမိုကရက်တစ်ပါတီ(နန်းယွန်းမြို့)', address: 'နန်းယွန်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 28, party_id: 4, office_name: 'ပြည်ထောင်စုကောင်းကျိုးဆောင်ပါတီ(နန်းယွန်းမြို့)', address: 'နန်းယွန်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 29, party_id: 13, office_name: 'နာဂအမျိုးသားပါတီ(နန်းယွန်းမြို့)', address: 'နန်းယွန်းမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },

    { office_id: 30, party_id: 1, office_name: 'အမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ(တမူးမြို့)', address: 'တမူးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 31, party_id: 2, office_name: 'ပြည်ထောင်စုကြံ့ခိုင်ရေးနှင့်ဖွံ့ဖြိုးရေးပါတီ(တမူးမြို့)', address: 'တမူးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 32, party_id: 3, office_name: 'ညီညွတ်သောဒီမိုကရက်တစ်ပါတီ(တမူးမြို့)', address: 'တမူးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 33, party_id: 4, office_name: 'ပြည်ထောင်စုကောင်းကျိုးဆောင်ပါတီ(တမူးမြို့)', address: 'တမူးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 34, party_id: 8, office_name: 'တိုင်းရင်းသားစည်းလုံးညီညွတ်ရေးပါတီ(တမူးမြို့)', address: 'တမူးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },
    { office_id: 35, party_id: 9, office_name: 'ချင်းအမျိုးသားဒီမိုကရေစီအဖွဲ့ချုပ်ပါတီ(တမူးမြို့)', address: 'တမူးမြို့', pono: 'စာတိုက်နံပါတ်(၁၄)', phno: '၀၉၈၅၆၆၇၈၄၃၂', email: 'pppmonywa@gmail.com', own_or_rental: 'ကိုယ်ပိုင်', remark: 'ကက', created_by: 'မို့မို့', updated_by: '၀င်း', status: 'Active' },

  ]

  module.exports = officeList;