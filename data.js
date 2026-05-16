// 濟州島員工旅遊資料 (2026/5/21–5/25)
window.TRIP = {
  title: '山海人文．品味濟州',
  subtitle: '濟州風景・人文・美食五日遊',
  dates: '2026.05.21 – 05.25',
  org: '資通服科福委會',
  flights: {
    out:  { code: 'IT-654', from: '桃園 TPE', to: '濟州 CJU', dep: '06:40', arr: '09:45', date: '5/21 (四)', airline: '台灣虎航' },
    back: { code: 'IT-655', from: '濟州 CJU', to: '桃園 TPE', dep: '10:20', arr: '11:35', date: '5/25 (一)', airline: '台灣虎航' },
  },
  budget: { total: 20000, spent: 0 },
  rate: 0.0228,
  days: [
    {
      n: 1, date: '5/21 四', title: '抵達・市區漫遊',
      hotel: 'Hotel Shalom Jeju (四星市區)',
      meals: { lunch: '開城會館・鮑魚人蔘雞', dinner: '燒烤五花肉 + 韓式年糕 + 冬粉吃到飽' },
      stops: [
        { time: '03:00', name: '工研院中興院區驛站前', type: 'flight', desc: '集合出發 · 金龍永盛旅行社' },
        { time: '04:00', name: '桃園國際機場第一航廈', type: 'flight', desc: '集合報到 · 辦理登機手續' },
        { time: '06:40', name: '桃園機場 → 濟州', type: 'flight', desc: '虎航 IT-654' },
        {
          time: '11:30', name: '梨湖紅白馬燈塔', type: 'sight',
          desc: '海邊馬造型燈塔,可愛打卡點',
          intro: '梨湖紅白馬燈塔是濟州島最有辨識度的打卡地標,座落在濟州市西側的梨湖泰嶼海邊兩側防波堤上。兩座以濟州島原生「濟州馬」為原型設計的燈塔,於 2009 年 2 月落成,東側為純白、西側為純紅,各高 12 公尺、長 8 公尺,已被金氏世界紀錄認證為「世界最大動物造型燈塔」。馬匹自古便是濟州人耕作、運輸、軍事的夥伴,以馬為形的燈塔,既為夜航的漁船指路,也象徵著島嶼與駿馬深厚的文化羈絆。距離濟州機場開車僅約 10 分鐘,非常適合排在抵達當天的第一站,沿著海岸散步、踏踏黑沙、看夕陽把紅白馬染成金色,是體驗濟州海風最輕鬆寫意的方式。',
          address: 'Iho-dong, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Iho_Tewoo_Beach_01.jpg',
          tips: ['離濟州機場約 10 分鐘車程', '傍晚拍夕陽最美,建議黃昏前抵達', '海風強,記得加件外套'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Iho%20Tewoo%20Horse%20Lighthouses%20Jeju'
        },
        {
          time: '14:00', name: '中央地下購物街', type: 'shop',
          desc: '衣服飾品鞋子化妝品集散地',
          intro: '濟州中央地下購物街是濟州島唯一一條地下商店街,位於濟州市中心中央路一帶,橫跨中央路、西門路與東門路,擁有超過 280 間店舖,販售服飾、鞋包、配件、手錶、眼鏡、飾品與韓系美妝。設有 12 個出入口,分別連通東門市場、七星路商圈與市政廳周邊,是當地年輕人逛街、外地遊客採買伴手禮最方便的轉運站。整條街全室內、有空調,夏天躲太陽、冬天避海風都剛好,還有不少平價小吃與咖啡店穿插其中。價格普遍比觀光區便宜,可以搭配東門市場一起逛,先在地下街買服飾雜貨,再到地面市場吃宵夜,一次解決血拼與覓食。',
          address: 'Jungang-ro 60, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Jeju_Jungang_Underground_Shopping_Mall_01.JPG',
          tips: ['營業時間約 10:00–22:00', '與東門市場相鄰,可一起安排', '12 個出口請記好離開的編號'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeju%20Jungang%20Underground%20Shopping%20Center'
        },
        {
          time: '15:30', name: '東門市場', type: 'shop',
          desc: '濟州代表市場,海產生魚片便宜',
          intro: '濟州東門傳統市場是濟州島規模最大、歷史最悠久的常設傳統市場,1945 年韓國光復後不久成立,1954 年大火後遷至現址,至今仍是當地人採買日常的核心。市場沿著有頂棚的街廊延伸,攤位賣的全是濟州的味道:現撈帶魚生魚片、鮑魚、海螺、橘子、漢拏峰、黑豬肉、五味子茶,還有近年爆紅的橘子汁與濟州啤酒。傍晚 6 點起夜市開張,小吃攤一字排開,黑豬肉串、鮑魚石鍋飯、龍蝦起司燒、現烤海鮮一字排開,是體驗濟州庶民生活與在地美食最濃縮的地方。距離濟州市區飯店多半步行可達,逛累了拐個彎就能下到中央地下街,動線非常順。',
          address: '20, Gwandeok-ro 14-gil, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Jeju_dongmun_market_1.JPG',
          tips: ['白天 08:00–23:00,夜市 18:00 開始', '現金與行動支付都通', '招牌必吃黑豬肉串和橘子汁'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeju%20Dongmun%20Traditional%20Market'
        },
        {
          time: '17:00', name: '觀德庭・牧官衙韓服體驗', type: 'sight',
          desc: '穿韓服漫步古蹟 2 小時',
          intro: '觀德亭是濟州島現存最古老的木造建築,1448 年由當時的濟州牧使新潝所建,原作為士兵射箭、操練的場所,亭內樑柱上仍保留十長生、赤壁大戰、狩獵等彩繪,匾額相傳出自世宗之子安平大君之手,1963 年被指定為韓國國寶第 322 號。緊鄰觀德亭的濟州牧官衙,是朝鮮時代濟州地方最高行政機構,1392 年至 1910 年間歷任濟州牧使在此處理政務,日治時期遭拆毀,2002 年依舊圖樣完成復原,還原了弘化閣、望京樓、衙舍等建築群。園區內提供租借韓服的體驗服務,穿上傳統服飾走在朱紅木構與石牆之間,拍照特別有味道,是濟州市區最容易拍出韓劇感的歷史景點。',
          address: '25, Gwandeok-ro, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Gwandeokjeong_Pavilion_and_Jeju_Mok_Office_2.JPG',
          tips: ['開放 09:00–18:00,售票至 17:30', '牧官衙門票成人 1,500 韓元', '穿韓服入園可免門票'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeju%20Mokgwana%20Gwandeokjeong'
        },
        {
          time: '20:00', name: '漢拏樹木園夜市', type: 'shop',
          desc: '夜市美食・自由藝術市場',
          intro: '漢拏樹木園夜市(Jeju Yaha Market)是韓國第一座開設在森林裡的夜市,座落於濟州市漢拏樹木園入口的松樹林步道間。漢拏樹木園 1993 年開園,佔地 20 公頃,栽種約 1,100 種、近 10 萬株植物,白天免費開放;到了晚上 6 點,夜市攤位在松樹下亮起暖黃燈串,氣氛瞬間切換成森林系市集。攤位約六十多檔,賣的是濟州黑豬肉串、海鮮串、章魚燒、水果汁、手作飾品、皮件與印有島嶼意象的小物,中央廣場常有街頭音樂表演與簡單的體驗活動。比起市區的東門夜市,這裡多了點露營氣氛,不擁擠、能慢慢吃,很適合作為 Day 1 收尾,吹著松林涼風結束一天行程。',
          address: '62, Sumogwon-gil, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Arboretum_of_Halla1.jpg',
          tips: ['每天 18:00–22:00,週一公休檔位較少', '從濟州市區搭計程車約 15 分鐘', '現場有座位但旺季要排隊'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Halla%20Arboretum%20Night%20Market%20Jeju'
        },
      ],
    },
    {
      n: 2, date: '5/22 五', title: '瀑布・茶園・媒體藝術',
      hotel: 'Hotel Shalom Jeju (四星市區)',
      meals: { lunch: '馬鈴薯豬骨湯 + 海苔炒飯', dinner: '海鮮火鍋 + 季節小菜' },
      stops: [
        {
          time: '09:00', name: '天帝淵瀑布', type: 'sight',
          desc: '三段式瀑布・仙臨橋',
          intro: '天帝淵瀑布位於濟州西歸浦中文觀光園區,名字意為「天帝(玉皇大帝)的池塘」。傳說七位仙女會在夜裡降臨此處沐浴,每逢偶數年五月當地都會舉辦七仙女祭來紀念這段神話。瀑布由地下湧出的冷泉形成,共有三段:第一段水從岩洞天花板滲落,墜入 21 公尺深的潭中;第二段落差 22 公尺;第三段再下沖 30 公尺後一路奔向大海,氣勢層層遞進。周邊溫帶常綠林在 1993 年被指定為韓國第 378 號天然紀念物,藏著松葉蕨等珍稀蕨類,空氣清涼濕潤。橫跨溪谷的「仙臨橋」橋身雕著仙女與飛龍,是熱門打卡景點,也是欣賞瀑布全景的最佳位置,沿步道走完一圈大約 40 分鐘。',
          address: '42, Cheonjeyeon-ro, Seogwipo-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Jeju_Island_Cheonjeyeon_Waterfalls.jpg',
          tips: ['開放 09:00–18:00,售票至閉園前 1 小時', '步道有階梯,建議穿好走的鞋', '禁止下水游泳或觸碰潭水'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cheonjeyeon%20Waterfall'
        },
        {
          time: '11:00', name: '噢雪綠茶博物館', type: 'sight',
          desc: '雪綠茶品牌博物館',
          intro: '噢雪綠茶博物館(O\'sulloc Tea Museum)是韓國第一間以茶為主題的博物館,2001 年由韓國美妝集團 AMOREPACIFIC 在濟州西廣有機茶園旁打造,目的是把韓國茶文化介紹給世界。建築外觀像一只放大的綠茶杯,館內展示韓國從新羅、高麗到朝鮮王朝的茶具與飲茶歷史,並可登上頂樓觀景台俯瞰一望無際的階梯式茶田,遼闊景色幾乎是濟州的招牌畫面。最受歡迎的還有附設的茶咖啡館,點杯冰抹茶拿鐵或限定的綠茶卷蛋、抹茶霜淇淋,坐在落地窗邊看茶田就能殺掉一整個下午。隔壁就是 innisfree Jeju House 與制茶工坊,可以一次完成喝茶、買伴手禮、拍 IG 美照。每年湧入約兩百萬遊客,是濟州西部必排的行程。',
          address: '15, Sinhwayeoksa-ro, Andeok-myeon, Seogwipo-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Osulloc_Tea_Museum_%26_Fields%2C_Jeju.jpg',
          tips: ['全年無休 09:00–18:00', '離濟州機場開車約 30 分鐘', '限定抹茶冰品熱門,假日要排隊'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=O%27sulloc+Tea+Museum'
        },
        {
          time: '14:00', name: 'HAPPY TOWN 摩托車秀', type: 'show',
          desc: '一小時極限特技表演',
          intro: 'HAPPY TOWN 是濟州知名的「Circus World 藝術馬戲劇場」所在地,就在噢雪綠茶博物館往南車程 5 分鐘左右。表演團隊由 22 位 10 歲到 29 歲的中國頂級雜技演員組成,節目包含空中綢吊、頂技、單輪車、瑜伽軟功、高空鞦韆,以及全場最受歡迎的「死亡飛輪」摩托車秀——七位女騎士在直徑僅 7 公尺的鐵球籠內同時繞圈高速翻騰,引擎聲、火花和驚呼聲幾乎要掀掉屋頂,近距離看真的會讓人手心冒汗。劇場為室內表演,不受天氣影響,語言隔閡也低,親子、長輩、情侶都很適合,演出全長約 50 至 60 分鐘。對於想在濟州行程裡安排一場「靜態景點之外的腎上腺素」,這裡是最好下手的選項。',
          address: '214, Donggwang-ro, Andeok-myeon, Seogwipo-si, Jeju-do',
          image: 'https://images.unsplash.com/photo-1773502978038-c5c7fd1ecab6?w=800',
          tips: ['每日四場:10:30 / 13:30 / 15:30 / 17:30', '建議提前 15 分鐘入場找座位', 'Klook、KKday 線上購票通常較便宜'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeju+Circus+World'
        },
        {
          time: '16:00', name: 'Arte Museum Jeju', type: 'sight',
          desc: '沉浸式媒體藝術,10 個主題展區',
          intro: 'Arte Museum 濟州館由韓國頂尖數位設計公司 d\'strict 操刀,是全韓國最大、也是品牌的第一間沉浸式媒體藝術館,2020 年於濟州愛月邑開幕。場地原本是一座占地 4,628 平方公尺、挑高 10 公尺的舊喇叭工廠,改造後保留了粗獷的工業骨架,再用 360 度投影、空間音響與專屬香氛打造出十個截然不同的展區。整體主題是「ETERNAL NATURE 永恆的自然」,你會走進瀑布從天而降的洞窟、海浪打在牆上的「WAVE」展間、開滿四季花的祕密花園,還有專為濟州量身打造的「JEJU」沉浸式影像。每個房間幾乎都能站著拍出像電影海報的照片,是近年濟州 IG 打卡聲量最高的景點之一。同集團在江陵、麗水、釜山也都有姊妹館,但濟州館規模最大、氣氛也最完整。',
          address: '478, Eorimbi-ro, Aewol-eup, Jeju-si, Jeju-do',
          image: 'https://images.unsplash.com/photo-1768666608287-6176bc385776?w=800',
          tips: ['開放 10:00–20:00,最後入場 19:00', '全年無休,室內展館不受天氣影響', '建議停留 1.5–2 小時拍照取景'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arte+Museum+Jeju'
        },
        {
          time: '18:30', name: '泰迪熊野生動物王國', type: 'sight',
          desc: '贈送泰迪熊吊飾一隻 🧸',
          intro: '泰迪熊野生動物王國(Teseum, 테지움)是世界第一座以「填充玩偶」呈現整片野生動物世界的主題館,位於濟州愛月邑,從 Arte Museum 過去開車不到 10 分鐘。一樓是陸地動物區,大象、獅子、老虎、長頸鹿、北極熊都用真實比例的縫製玩偶呈現,搭配岩石、草原、雪地造景,小朋友走進去會以為自己誤闖叢林,還能近距離抱著泰迪獅子合照。二樓是海洋動物區,鯊魚、海豚、章魚、海龜、紅鶴一字排開,主打一隻 4 公尺高的巨型泰迪熊與藝術畫廊區,展出以神話與電影為主題的限定泰迪熊。戶外還有 Safari 園區、紀念品店和地下室手工披薩餐廳,適合親子或想找療癒可愛系景點的旅人,逛完全程約 1.5 小時。',
          address: '2159, Pyeonghwa-ro, Aewol-eup, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Bao-tang-gau-bong-teddy-jeju.jpg',
          tips: ['每日 08:30–19:00,閉館前 1 小時停止售票', '全年無休,免費停車', '建議搭配 Arte Museum 同日順遊'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Teseum+Jeju'
        },
      ],
    },
    {
      n: 3, date: '5/23 六', title: '世界遺產・日出峰',
      hotel: 'Regent Marine The Blue (海濱)',
      meals: { lunch: '豬肉魷魚壽喜燒 + 漢拿山炒飯', dinner: '明倫進士・烤排骨吃到飽' },
      stops: [
        {
          time: '09:00', name: '李仲燮藝術街', type: 'sight',
          desc: '紀念畫家李仲燮的咖啡藝術街',
          intro: '李仲燮藝術街位於西歸浦市中心,是為了紀念韓國近代天才畫家李仲燮(1916–1956)而設立的文化街道。韓戰期間,李仲燮曾與日籍妻子和兩個兒子在這裡度過約一年的避難歲月,雖然生活清貧,卻被他視為人生最幸福的時光,並在此完成《西歸浦的幻想》等代表作。如今這條約 360 公尺的緩坡街道兩旁,可以看到以他畫中孩童、牛、螃蟹為主題的壁畫和雕塑,街口連接李仲燮美術館與他當年居住的茅草屋故居,可以入內參觀畫家的書信與作品復刻。週末則有西歸浦藝術市集,在地藝術家擺攤販售手作小物,從街頭散步到街尾連接西歸浦每日偶來市場,是文青風格的散策路線。',
          address: '29 Ijungseop-ro, Seogwipo-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Fantasy_of_Seogwipo%281951%29.jpg',
          tips: ['美術館週一公休,門票約 1,500 韓元', '從每日偶來市場步行 3 分鐘可達', '街道是上坡,建議從上往下逛較輕鬆'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Lee%20Jung-seop%20Art%20Street%20Seogwipo'
        },
        {
          time: '11:00', name: '西歸浦傳統市場', type: 'shop',
          desc: '60 年歷史拱型長廊商店街',
          intro: '西歸浦每日偶來市場是西歸浦規模最大、歷史最悠久的傳統市場,始於 1960 年代,至今已有逾 60 年歲月。2000 年代初翻修後加蓋了拱型透明遮雨棚,即使下雨或大太陽也能舒適逛街,加上 2010 年代與濟州偶來小路第 6 號路線串聯後,人氣再度翻紅,成為遊客必訪景點。市場內超過 200 間店鋪,從濟州名物漢拏峰橘、黑豬肉串、橘子甜甜圈、鮑魚紫菜飯卷、海女現撈海鮮,到伴手禮、衣服、生活雜貨應有盡有,中央廣場還會舉辦傳統表演。對遊客來說,這裡是一站搞定濟州小吃、伴手禮和在地氛圍的好地方,建議空腹前來,慢慢從街頭吃到街尾。',
          address: '22 Jungang-ro 62beon-gil, Seogwipo-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Seogwipo_Maeil_Olle_Market_03.jpg',
          tips: ['店家多在早上 7 點到晚上 9 點營業', '現金與信用卡多數可用,部分小攤僅收現金', '建議避開週末中午尖峰時段'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Seogwipo%20Maeil%20Olle%20Market'
        },
        {
          time: '14:00', name: '城山日出峰', type: 'sight',
          desc: '世界遺產火山口,登頂約 30 分',
          intro: '城山日出峰聳立在濟州島最東端,是約 5,000 年前海底火山噴發形成的凝灰岩火山口,直徑約 600 公尺、海拔 182 公尺,造型如一頂巨大的綠色皇冠插在海面上,2007 年被聯合國教科文組織列為世界自然遺產。它是濟州十景之首,更被譽為韓國觀賞「新年第一道日出」的最佳地點。從入口沿著木棧階梯往上走,大約 25–30 分鐘就能登頂,沿途可眺望牛島、漢拏山與遼闊的太平洋,山頂可俯瞰寬廣的綠草火山口。山腳下還能欣賞海女表演,看到濟州傳統女潛水員下海捕撈海產,搭配牛島渡輪行程更是經典玩法。',
          address: '284-12 Ilchul-ro, Seongsan-eup, Seogwipo-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Jeju_-_Seongsan_Ilchulbong.jpg',
          tips: ['夏季 7:00、冬季 7:30 開放至日落前 1 小時', '門票成人 5,000 韓元', '想看日出建議天亮前 1 小時抵達'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Seongsan%20Ilchulbong'
        },
        {
          time: '17:00', name: 'Ecoland 歐洲森林樂園', type: 'sight',
          desc: '英式小火車漫遊',
          intro: 'Ecoland 主題公園位於濟州島中部,以 1950 年代英國 Baldwin 蒸汽火車為原型,在英國手工打造 7 輛林肯式復古小火車,帶旅客深入濟州獨有的「Gotjawal」原始森林。Gotjawal 是濟州島火山熔岩台地上特有的混生林,擁有超過 600 種植物,是世界上唯一寒、暖帶植物共生的森林。園內全長約 4.5 公里的鐵道串起 5 個主題車站:主站、Eco Bridge 湖畔站、薰衣草綠茶玫瑰花園站、野餐花園站等,旅客可以隨時下車漫步、踩水車、玩兒童遊樂區、走赤腳火山岩步道,或在湖邊咖啡屋發呆。一年四季景色不同,春夏的繡球花與薰衣草、秋冬的芒草和聖誕燈飾都很出片,是親子和情侶都適合的療癒系景點。',
          address: '1278-169 Beonyeong-ro, Jocheon-eup, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Forest_Train_at_Ecoland%2C_Jeju.jpg',
          tips: ['營業時間 8:30–18:20,末班車約 17:00', '成人票 14,000 韓元,可線上購買享折扣', '建議預留 2.5–3 小時遊玩'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Ecoland%20Theme%20Park%20Jeju'
        },
      ],
    },
    {
      n: 4, date: '5/24 日', title: '漢拏山・龍頭岩・汗蒸幕',
      hotel: 'Regent Marine The Blue (海濱)',
      meals: { lunch: '烤白帶魚+奶油鮑魚+海帶湯', dinner: '豪華海鮮嫩雞鮑魚鍋 (4人/鍋 ₩88,000)' },
      stops: [
        {
          time: '09:00', name: '漢拏山國家公園', type: 'sight',
          desc: '海拔 1950m,韓國三神山',
          intro: '漢拏山是韓國第一高峰,海拔 1,947 公尺,矗立在濟州島正中央,整座島嶼幾乎就是這座盾狀火山堆積出來的。山頂火口湖「白鹿潭」傳說神仙曾在此牧白鹿而得名,雨後積水如鏡,是登頂者夢寐以求的畫面。漢拏山國家公園被聯合國教科文組織列為世界自然遺產與生物圈保護區,擁有從亞熱帶到亞寒帶垂直分佈的 1,800 多種植物,四季風景截然不同——春天躑躅花海、夏天綠意翻湧、秋天楓紅遍野、冬天雪白銀裝。最熱門的兩條登頂路線是「城板岳」(9.6 公里)和「觀音寺」(8.7 公里),其餘三條只能走到中段。沿途棧道規劃完善,即便不攻頂,在御里牧入口附近也能感受亞高山林相的壯麗。',
          address: '1100-ro, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Hallasan_Above.jpg',
          tips: ['攻頂須事先線上預約,額滿就進不去', '天氣變化快,務必帶防風防雨外套', '下山時間有限制,清晨出發最保險'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hallasan%20National%20Park'
        },
        {
          time: '11:30', name: '馬放牧地', type: 'sight',
          desc: '濟州馬天然紀念物',
          intro: '濟州馬牧場位於濟州市龍崗洞,佔地約 90 萬平方公尺,相當於四個首爾汝矣島廣場那麼大,是專門放養濟州馬的國有保護區。濟州馬體型矮小結實、耐寒耐操,1986 年被指定為韓國天然紀念物第 347 號;早在 1276 年高麗時代,蒙古人就在此設立「耽羅牧場」引進 160 匹蒙古馬,讓濟州自此成為韓半島最重要的養馬基地。如今牧場放養約 130 匹純種濟州馬,每年 4 月到 11 月馬群在草原上自由奔跑、低頭吃草,景色開闊療癒,被列為「瀛洲十景」之一。沒有圍欄、沒有人工景點,就是一望無際的綠色草地搭配遠方的火山口寄生丘,是體驗濟州牧野文化最純粹的地方,適合慢慢散步拍照。',
          address: 'Yonggang-dong, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Jeju_horse.jpg',
          tips: ['4 至 11 月才看得到馬群,冬季馬匹移入舍飼', '請勿擅自靠近或餵食馬匹', '草地無遮蔽,夏天請做好防曬'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Jeju%20Horse%20Pasture'
        },
        {
          time: '14:30', name: '龍頭岩', type: 'sight',
          desc: '海邊巨龍石形',
          intro: '龍頭岩矗立在濟州市西海岸,是一塊高約 10 公尺、長約 30 公尺的玄武岩,由漢拏山火山噴發後的熔岩流入海中冷卻,再經過上百萬年海風與浪濤的雕琢,形成一條昂首怒吼、即將騰空而起的龍首形狀,因此得名。當地流傳兩個版本傳說:一說是漢拏山神射下偷取山上玉珠的惡龍,龍身沉海、龍頭瞬間化石望天;另一說是想化身飛龍升天的白馬,被將軍的箭射中後當場凝結成岩。龍頭岩是濟州機場附近最方便造訪的免費景點,沿岸鋪設了步道與觀景平台,還能看到濟州著名的海女在岩礁間採集海產,海岸線一路延伸到龍淵與梨湖海邊,是欣賞夕陽與飛機起降的絕佳位置。',
          address: '15, Yongduam-gil, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Korea-Jejudo-Coast-05.jpg',
          tips: ['全天免費開放,日落時分最美', '從濟州機場開車約 10 分鐘', '岩石濕滑,勿翻越欄杆下到岩面'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yongduam%20Rock%20Jeju'
        },
        {
          time: '15:30', name: '龍淵吊橋', type: 'sight',
          desc: '瀛洲十景之龍淵夜帆',
          intro: '龍淵位於龍頭岩東側約 200 公尺處,是漢拏山溪水流入大海前形成的最後一段峽谷潭水,海水與淡水在此交融。傳說此潭深不見底,曾有蒼龍蟄伏其中,每逢乾旱便升天降雨,因此即便濟州遇上大旱,龍淵也從不乾涸。兩岸高聳的玄武岩絕壁如八幅屏風層層疊起,潭面倒映著松林與奇岩,自古便是文人墨客泛舟賞月的勝地——「龍淵夜帆」更被列為瀛洲十景之一。橫跨峽谷的「龍淵雲橋」是一座白色行人吊橋,長約 40 公尺,走在橋上腳下就是翠綠的潭水,夜晚還會點亮 LED 燈光,是濟州市區最浪漫的散步路線之一。免費開放、24 小時可走,從龍頭岩順著海岸散步過來剛剛好。',
          address: '73 Heungun-gil, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Yongyeon_01.JPG',
          tips: ['免費開放,夜間打燈後特別美', '從龍頭岩步行約 5 分鐘可達', '吊橋有人數限制,請勿在橋上劇烈晃動'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yongyeon%20Pond%20Bridge%20Jeju'
        },
        {
          time: '17:00', name: '龍頭岩海水汗蒸幕', type: 'show',
          desc: '韓國獨特洗澡文化體驗',
          intro: '龍頭岩海水樂園就在龍頭岩旁、濟州機場走路十分鐘可達,是濟州市區最具代表性的傳統汗蒸幕,當地人和觀光客都愛來。最大特色是直接抽取地下海水加溫成湯,鹹度足、礦物質豐富,泡完皮膚滑嫩、解疲勞效果一流;館內分男女湯,有各式溫度的海水池、冷水池、露天池,以及黃土窯、鹽窯、紫水晶窯等多種主題汗蒸房,還能在大廳穿著羊頭巾喝甜米露、吃韓式蒸蛋。這裡是體驗韓國澡堂文化最入門的選擇:先沐浴 → 入池泡湯 → 進汗蒸房蒸汗 → 出來補水休息,可以反覆循環。可加價請阿珠媽搓澡,搓下來的「黑泥條」會讓你終身難忘。位置近機場,很多旅客把這裡安排在抵達當天或回程前。',
          address: '11 Yongduam-gil, Jeju-si, Jeju-do',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Yongduam_in_jeju.jpg',
          tips: ['24 小時營業,夜宿汗蒸幕也 OK', '搓澡需另外加價、用韓圜現金', '館內須全裸入浴,有刺青可能被婉拒'],
          mapUrl: 'https://www.google.com/maps/search/?api=1&query=Yongduam%20Haesu%20Spa%20Land'
        },
      ],
    },
    {
      n: 5, date: '5/25 一', title: '回家',
      hotel: '溫暖的家 ❤️',
      meals: { lunch: '機上簡餐', dinner: '—' },
      stops: [
        { time: '07:20', name: '濟州國際機場',   type: 'flight', desc: '辦理出境手續' },
        { time: '10:20', name: '濟州 → 桃園',    type: 'flight', desc: '虎航 IT-655' },
        { time: '11:35', name: '抵達桃園・賦歸', type: 'flight', desc: '結束五天旅程' },
      ],
    },
  ],
  expenses: [],
  shopping: [
    { cat: '美食伴手', items: [
      { id: 's1', name: '橘子巧克力',         est: '₩6,000–10,000', where: '中央地下街・機場免稅', done: false },
      { id: 's2', name: '漢拏峰柑(果乾)',     est: '₩15,000',       where: '東門 / 西歸浦市場',     done: false },
      { id: 's3', name: '雪綠茶禮盒',         est: '₩40,000',       where: '噢雪綠茶博物館',       done: false },
      { id: 's4', name: '濟州海苔',           est: '₩20,000',       where: '西歸浦市場',           done: false },
      { id: 's5', name: '濟州燒酒(漢拏山)',   est: '₩2,500/瓶',     where: '便利商店',             done: false },
    ]},
    { cat: '美妝保養', items: [
      { id: 's6', name: '濟州火山泥面膜',     est: '₩1,000/片',     where: '中央地下街',           done: false },
      { id: 's7', name: '馬油護手霜',         est: '₩8,000',        where: '機場 / 中央街',         done: false },
      { id: 's8', name: 'innisfree 綠茶系列', est: '₩15,000+',      where: '中央地下街',           done: false },
    ]},
    { cat: '紀念小物', items: [
      { id: 's9',  name: '海女明信片',        est: '₩3,000',        where: '日出峰 / 龍頭岩',       done: false },
      { id: 's10', name: '泰迪熊吊飾',        est: '贈送',          where: '泰迪熊王國 (含)',       done: false },
      { id: 's11', name: '濟州石頭爺爺擺飾',  est: '₩10,000',       where: '景點商店',             done: false },
    ]},
  ],
  notices: {
    pre: [
      { t: '護照效期 6 個月以上',    d: '從回國日 5/25 起算需至 11/25 仍有效' },
      { t: '韓國 K-ETA 電子簽證',    d: '出發前至少 72 小時上 k-eta.go.kr 申請' },
      { t: '行李限重',               d: '託運 20kg(不限件數)、手提 10kg(限 1 件);詳見下方行李規定' },
      { t: '電壓轉接頭',             d: '韓國 220V/圓形雙插孔,需 C 型轉接頭' },
      { t: '常備藥品',               d: '感冒藥、腸胃藥、暈車藥(漢拏山山路)' },
    ],
    pack: [
      { t: '護照 + K-ETA 紙本備份',           done: false },
      { t: '輕便外套(5月日均 15–22°C)',       done: false },
      { t: '運動鞋(日出峰、漢拏山要走)',       done: false },
      { t: '泳具(汗蒸幕內可用)',              done: false },
      { t: '小額韓元現金(市場攤販)',          done: false },
      { t: '行動電源(飛機可手提)',            done: false },
      { t: '防曬乳・墨鏡',                     done: false },
      { t: '雨具(5月偶陣雨)',                 done: false },
    ],
    rules: [
      '集合時間請務必準時,遲到全車等',
      '車上會推銷當地土特產,但不進購物站',
      '單人住宿補房差 NT$6,500',
      '確認成團繳費後一律不接受取消退費',
      '未報名者切勿隨團出遊',
    ],
    insurance: {
      contract: '旅遊契約責任險 NT$200 萬(含 20 萬醫療)',
      personal: '建議自行加保旅遊平安險',
    },
    emergency: [
      { name: '領隊 鄧文凱',           phone: '0920-080070' },
      { name: '業務 陳金隆(金龍永盛)', phone: '0919-690255' },
    ],
    weather: { range: '15 – 22°C', rain: '偶陣雨', tip: '洋蔥式穿搭,準備薄外套' },
    baggage: {
      checked: {
        weight: '每人免費 20 公斤',
        pieces: '不限件數',
        items: [
          '刀具類(刮鬍刀、指甲刀)',
          '折疊雨傘',
          '相機腳架、自拍棒',
          '運動器材(如球桿、球具)',
          '化妝品、防曬乳(液體、乳狀類)',
          '100ml 以上液體(單一物品不超 500ml,每人最多 2000ml)',
        ],
      },
      carry: {
        weight: '不得超過 10 公斤',
        pieces: '限 1 件',
        items: [
          '鋰電池、行動電源',
          '手機、平板、筆電與相機',
          '打火機(每人限一個)',
          '兒童食品',
          '處方藥品(需攜處方箋並向檢查人員申報)',
          '100ml 以內液體(20×20cm 透明夾鏈袋,總容量 1L)',
        ],
      },
      powerbank: [
        '行動電源不得託運,手機、平板等也不可託運充電',
        '每人上限 2 顆,且每顆電池容量需小於 100Wh',
        '不得使用機上電源為行動電源充電',
        '行動電源外觀必須清楚揭示電量資訊(Wh)',
        '不得放頭頂置物櫃,須置於前方座位下或置物袋',
        '鋰電池不可託運,只能隨身(電腦、手機、相機、行動電源等)',
        '航空公司可能因兩岸海關規定調整,最終須依航空公司規範',
      ],
    },
    refund: {
      threshold: '單筆消費 ₩15,000 以上可退稅',
      where:     '機場退稅機 (Global Tax Free / Global Blue)',
      docs:      ['護照', '購物退稅單', '退稅商品(未拆封)'],
    },
  },
  contacts: [
    { name: '金憶如', ext: '15690' },
    { name: '陳玫蘭', ext: '14060' },
    { name: '尹嘉琪', ext: '12328' },
  ],
};
