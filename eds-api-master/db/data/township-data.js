const townshipList = [
    { township_id: 1, district_id: 1, township_code: 'MMR005012', township_name: 'မုံရွာမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 2, district_id: 1, township_code: 'MMR005014', township_name: 'အရာတော်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 3, district_id: 1, township_code: 'MMR005013', township_name: 'ဘုတလင်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 4, district_id: 1, township_code: 'MMR005015', township_name: 'ချောင်းဦးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'ဇင်ဇင်', status: 'Active' },
    { township_id: 5, district_id: 2, township_code: 'MMR005004', township_name: 'ရွှေဘိုမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: '၀င်း၀င်း', status: 'Active' },
    { township_id: 6, district_id: 2, township_code: 'MMR005005', township_name: 'ခင်ဦးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 7, district_id: 2, township_code: 'MMR005010', township_name: 'ဒီပဲယင်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 8, district_id: 2, township_code: 'MMR005011', township_name: 'တန့်ဆည်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'ဇင်ဇင်', status: 'Active' },
    { township_id: 9, district_id: 2, township_code: 'MMR005006', township_name: '၀က်လက်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 10, district_id: 2, township_code: 'MMR005009', township_name: 'ရေဦးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 11, district_id: 3, township_code: 'MMR005007', township_name: 'ကန့်ဘလူမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'ဇင်ဇင်', status: 'Active' },
    { township_id: 12, district_id: 3, township_code: 'MMR005008', township_name: 'ကျွန်းလှမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 13, district_id: 4, township_code: 'MMR005021', township_name: 'အင်းတော်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'ဇင်ဇင်', status: 'Active' },
    { township_id: 14, district_id: 4, township_code: 'MMR005023', township_name: 'ဗန်းမောက်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'ဇင်ဇင်', status: 'Active', },
    { township_id: 15, district_id: 4, township_code: 'MMR005020', township_name: 'ကသာမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 16, district_id: 4, township_code: 'MMR005024', township_name: 'ကောလင်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'ဇင်ဇင်', status: 'Active' },
    { township_id: 17, district_id: 4, township_code: 'MMR005026', township_name: 'ပင်လည်ဘူးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 18, district_id: 4, township_code: 'MMR005022', township_name: 'ထီးချိုင့်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'ဇင်ဇင်', status: 'Active' },
    { township_id: 19, district_id: 4, township_code: 'MMR005025', township_name: '၀န်းသိုမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: '၀င်း၀င်း', status: 'Active' },
    { township_id: 20, district_id: 5, township_code: 'MMR005031', township_name: 'မော်လိုက်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 21, district_id: 5, township_code: 'MMR005032', township_name: 'ဖောင်းပြင်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: '၀င်း၀င်း', status: 'Active' },
    { township_id: 22, district_id: 6, township_code: 'MMR005033', township_name: 'ခန္တီးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 23, district_id: 6, township_code: 'MMR005034', township_name: 'ဟုမ္မလင်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 24, district_id: 12, township_code: 'MMR005036', township_name: 'လဟယ်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: '၀င်း၀င်း', status: 'Active' },
    { township_id: 25, district_id: 12, township_code: 'MMR005035', township_name: 'လေရှီးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 26, district_id: 12, township_code: 'MMR005037', township_name: 'နန်းယွန်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 27, district_id: 7, township_code: 'MMR005003', township_name: 'မြောင်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: '၀င်း၀င်း', status: 'Active' },
    { township_id: 28, district_id: 7, township_code: 'MMR005002', township_name: 'မြင်းမူမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 29, district_id: 7, township_code: 'MMR005001', township_name: 'စစ်ကိုင်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 30, district_id: 8, township_code: 'MMR005027', township_name: 'ကလေးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 31, district_id: 8, township_code: 'MMR005028', township_name: 'ကလေးဝမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 32, district_id: 8, township_code: 'MMR005029', township_name: 'မင်းကင်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 33, district_id: 9, township_code: 'MMR005030', township_name: 'တမူးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 34, district_id: 10, township_code: 'MMR005017', township_name: 'ကနီမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 35, district_id: 10, township_code: 'MMR005019', township_name: 'ပုလဲမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 36, district_id: 10, township_code: 'MMR005018', township_name: 'ဆားလင်းကြီးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 37, district_id: 10, township_code: 'MMR005016', township_name: 'ယင်းမာပင်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
  
    { township_id: 38, district_id: 16, township_code: 'MMR013044', township_name: 'ဗဟန်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 39, district_id: 15, township_code: 'MMR013028', township_name: 'ကော့မှူးမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 40, district_id: 16, township_code: 'MMR013043', township_name: 'ဒဂုံမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 41, district_id: 16, township_code: 'MMR013041', township_name: 'ကမာရွတ်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 42, district_id: 16, township_code: 'MMR013040', township_name: 'လှိုင်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 43, district_id: 16, township_code: 'MMR013037', township_name: 'အလုံမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 44, district_id: 16, township_code: 'MMR013033', township_name: 'ကျောက်တံတားမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 45, district_id: 16, township_code: 'MMR013038', township_name: 'ကြည့်မြင်တိုင်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 46, district_id: 16, township_code: 'MMR013035', township_name: 'လမ်းမတော်မြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 47, district_id: 16, township_code: 'MMR013036', township_name: 'လသာမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 48, district_id: 16, township_code: 'MMR013042', township_name: 'မရမ်းကုန်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 49, district_id: 16, township_code: 'MMR013034', township_name: 'ပန်းဘဲတန်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 50, district_id: 16, township_code: 'MMR013039', township_name: 'စမ်းချောင်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
    { township_id: 51, district_id: 16, township_code: 'MMR013045', township_name: 'ဆိပ်ကမ်းမြို့နယ်', remark: 'အကြောင်းအရာ', created_by: 'ကေကေ', updated_by: 'မိုးမိုး', status: 'Active' },
  
  
  ]

  module.exports = townshipList;